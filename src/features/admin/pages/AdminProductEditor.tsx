import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductEditorStore } from '../products/store/productEditor.store';
import { mockProduct } from '../products/mock/mockProduct';
import { ProductSummaryPanel } from '../products/components/ProductSummaryPanel';
import { EditableText } from '../components/ui/EditableText';
import { EditablePrice } from '../components/ui/EditablePrice';
import { EditableBadge } from '../components/ui/EditableBadge';
import { Save, Eye, Pencil, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminProductEditor: React.FC = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(true);
    
    const { 
        draft, 
        initializeProduct, 
        updateField,
        isDirty, 
        isSaving, 
        saveChanges, 
        revertChanges,
        saveField,
        resetEditor
    } = useProductEditorStore();

    useEffect(() => {
        resetEditor(); // Clear previous state
        
        if (!productId) return;
        
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const dbProduct = data.find(p => p.id === productId);
                    if (dbProduct) {
                        // Map MongoDB schema to Editor schema
                        const mappedProduct = {
                            ...mockProduct, // Fallback for missing fields like faqs/features
                            id: dbProduct.id,
                            title: dbProduct.title,
                            slug: dbProduct.id,
                            brand: dbProduct.subtitle || 'Asian Paints',
                            category: dbProduct.category || 'Interior Emulsion',
                            shortDescription: dbProduct.details?.substring(0, 50) || '',
                            description: dbProduct.details || '',
                            images: [dbProduct.image, dbProduct.image], // Editor expects array
                            primaryImageIndex: 0,
                            basePrice: dbProduct.price || 0,
                            compareAtPrice: dbProduct.oldPrice || 0,
                            discountPercent: parseInt(dbProduct.discount) || 0,
                            variants: (dbProduct.sizes || []).map((s: any, idx: number) => ({
                                id: `var_${idx}_${s.size}`,
                                size: s.size,
                                price: s.price,
                                compareAtPrice: s.price * 1.1,
                                stock: 10,
                                sku: `${dbProduct.id}-${s.size}`,
                                isActive: true
                            })),
                            deliveryInfo: 'Delivery available across Bangalore within 24-48 hours.',
                            howToApply: dbProduct.howToApply || ''
                        };
                        initializeProduct(mappedProduct);
                    }
                }
            })
            .catch(err => console.error('Error fetching product for editor:', err));
    }, [productId, initializeProduct]);

    // Handle Unsaved Changes warning before unload
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty) {
                e.preventDefault();
                e.returnValue = '';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isDirty]);

    if (!draft) return <div className="p-8">Loading...</div>;



    return (
        <div className="flex flex-col h-full overflow-hidden bg-[#f5f5f7]">
            {/* Top Action Bar */}
            <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/admin/products')} className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                        ← Back to Products
                    </button>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button 
                            onClick={() => setEditMode(false)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${!editMode ? 'bg-white shadow text-[#111]' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            <Eye className="w-4 h-4" /> Preview
                        </button>
                        <button 
                            onClick={() => setEditMode(true)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${editMode ? 'bg-white shadow text-[#E2B659]' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            <Pencil className="w-4 h-4" /> Edit Mode
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isDirty && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-sm font-medium text-amber-600 mr-2">Unsaved changes</span>
                            <button 
                                onClick={revertChanges}
                                disabled={isSaving}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
                            >
                                Discard
                            </button>
                            <button 
                                onClick={saveChanges}
                                disabled={isSaving}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#111] hover:bg-black rounded-lg transition-colors disabled:opacity-50 shadow-md"
                            >
                                {isSaving ? 'Saving...' : (
                                    <>
                                        <Save className="w-4 h-4" /> Save All
                                    </>
                                )}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex flex-1 overflow-hidden">
                <ProductSummaryPanel />

                {/* Editor Canvas */}
                <div className="flex-1 overflow-y-auto p-8 relative bg-white">
                    <style>{`
                        .responsive-top-grid {
                            display: grid;
                            gap: 56px;
                            align-items: start;
                            grid-template-columns: minmax(350px, 1fr) minmax(350px, 1.2fr);
                        }
                        .left-img-container {
                            position: sticky;
                            top: 20px;
                        }
                        .action-box-container {
                            grid-column: 1 / -1;
                            width: 100%;
                            position: relative;
                        }
                        
                        @media (min-width: 1200px) {
                            .responsive-top-grid {
                                grid-template-columns: minmax(350px, 1.2fr) minmax(350px, 1.5fr) 350px;
                            }
                            .action-box-container {
                                grid-column: auto;
                                position: sticky;
                                top: 20px;
                            }
                        }
                    `}</style>
                    <div 
                        className="product-details-main mx-auto"
                        style={{ 
                            width: '1900px', 
                            maxWidth: 'none',
                            padding: '20px 5%',
                            boxSizing: 'border-box'
                        }}
                    >
                        
                        {/* Back Button and Breadcrumbs (Visual only for Admin) */}
                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '15px', marginBottom: '16px', background: '#f5f5f5', padding: '8px 16px', borderRadius: '8px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                            Back to Shop
                            </div>
                            <div style={{ fontSize: '13px', color: '#666', display: 'flex', gap: '6px', alignItems: 'center' }}>
                            <span>Home</span>
                            <span>›</span>
                            <span>Shop Paints</span>
                            <span>›</span>
                            <span style={{ color: '#737b2d', fontWeight: 500 }}>
                                <EditableText 
                                    value={draft.category}
                                    editMode={editMode}
                                    onSave={(val) => { updateField('category', val); saveField('category'); }}
                                />
                            </span>
                            <span>›</span>
                            <span style={{ color: '#111', fontWeight: 600 }}>{draft.title}</span>
                            </div>
                        </div>

                        {/* Top Grid */}
                        <div id="section-basic" className="responsive-top-grid">
                            
                            {/* Left - Images */}
                            <div id="section-images" className="left-img-container">
                                <div
                                    className="prod-carousel group"
                                    style={{
                                    background: '#d8cabd',
                                    borderRadius: '16px',
                                    position: 'relative',
                                    padding: '40px 20px 30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minHeight: '450px',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                    }}
                                >
                                    <div id="prodBadge" className="discount-badge-abs" style={{ position: 'absolute', top: '16px', left: '16px', background: '#e34c43', color: '#fff', fontSize: '12px', fontWeight: 600, padding: '6px 12px', borderRadius: '6px', zIndex: 5 }}>
                                    <EditableBadge 
                                        value={`${draft.discountPercent}% OFF`}
                                        type="discount"
                                        editMode={editMode}
                                        onSave={() => {}}
                                    />
                                    </div>
                                    
                                    {editMode && (
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                            <button 
                                                onClick={() => {
                                                    const newUrl = window.prompt("Enter new image URL:", draft.images[0]);
                                                    if (newUrl) {
                                                        const newImages = [...draft.images];
                                                        newImages[0] = newUrl;
                                                        updateField('images', newImages);
                                                        saveField('images');
                                                    }
                                                }}
                                                className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-[#111] hover:bg-gray-100 shadow-lg flex items-center gap-2"
                                            >
                                                <Image className="w-4 h-4" /> Manage Images
                                            </button>
                                        </div>
                                    )}

                                    <img
                                    id="prodImage"
                                    src={draft.images[draft.primaryImageIndex]}
                                    alt={draft.title}
                                    className="prod-img-main"
                                    style={{ maxWidth: '85%', height: '320px', objectFit: 'contain' }}
                                    />
                                </div>
                                {/* Thumbnail strip */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginTop: '12px' }}>
                                    {draft.images.map((img, i) => (
                                    <div key={i} style={{ border: i === draft.primaryImageIndex ? '2px solid #737b2d' : '1px solid #ddd', borderRadius: '8px', background: '#f5f5f5', padding: '6px', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyItems: 'center', cursor: 'pointer' }}>
                                        <img src={img} alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                                    </div>
                                    ))}
                                </div>
                            </div>

                            {/* Middle - Info & Pricing */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ display: 'inline-block', background: '#f4f6eb', color: '#737b2d', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, marginBottom: '12px' }}>
                                    <EditableText 
                                        value={draft.brand} 
                                        editMode={editMode} 
                                        onSave={(val) => { updateField('brand', val); saveField('brand'); }}
                                    />
                                    </div>
                                </div>

                                <h1 id="prodTitle" style={{ fontSize: '32px', fontWeight: 700, color: '#111', margin: '0 0 8px', lineHeight: 1.2 }}>
                                    <EditableText 
                                        as="span"
                                        value={draft.title} 
                                        editMode={editMode} 
                                        onSave={(val) => { updateField('title', val); saveField('title'); }}
                                    />
                                </h1>
                                <div style={{ color: '#555', fontSize: '15px', marginBottom: '16px' }}>
                                    <EditableText 
                                        as="span"
                                        multiline
                                        value={draft.shortDescription} 
                                        editMode={editMode} 
                                        onSave={(val) => { updateField('shortDescription', val); saveField('shortDescription'); }}
                                    />
                                </div>

                                {/* Rating */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div id="prodRating" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 600 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F0BC51" stroke="#F0BC51" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    4.6
                                    <span id="prodReviewsText" style={{ color: '#555', fontWeight: 400 }}>(128 reviews)</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div id="section-pricing" style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
                                    <div id="prodPrice" className="curr-price" style={{ fontSize: '32px', fontWeight: 800, color: '#111' }}>
                                        <EditablePrice 
                                            value={draft.basePrice}
                                            editMode={editMode}
                                            onSave={(val) => { updateField('basePrice', val); saveField('basePrice'); }}
                                        />
                                    </div>
                                    <div id="prodOldPrice" className="old-price" style={{ fontSize: '18px', color: '#888', textDecoration: 'line-through' }}>
                                        {draft.compareAtPrice && (
                                            <EditablePrice 
                                                value={draft.compareAtPrice}
                                                editMode={editMode}
                                                onSave={(val) => { updateField('compareAtPrice', val); saveField('compareAtPrice'); }}
                                            />
                                        )}
                                    </div>
                                    <div id="prodDiscount" className="discount-pill" style={{ background: '#ffeaea', color: '#e34c43', fontSize: '12px', fontWeight: 700, padding: '4px 8px', borderRadius: '4px' }}>
                                        <EditableBadge 
                                            value={`${draft.discountPercent}% OFF`}
                                            type="discount"
                                            editMode={editMode}
                                            onSave={() => {}}
                                        />
                                    </div>
                                </div>
                                <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>(Inclusive of all taxes)</div>

                                {/* Delivery check */}
                                <div id="section-delivery" className="delivery-check" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fafafa', padding: '16px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '32px' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                                    <div style={{ flex: 1 }}>
                                    <strong style={{ fontSize: '14px', color: '#737b2d', fontWeight: 600, display: 'block', marginBottom: '2px' }}>Delivery Information</strong>
                                    <div style={{ fontSize: '13px', color: '#555' }}>
                                        <EditableText 
                                            as="span"
                                            multiline
                                            value={draft.deliveryInfo}
                                            editMode={editMode}
                                            onSave={(val) => { updateField('deliveryInfo', val); saveField('deliveryInfo'); }}
                                        />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                                {/* Action Box (Sizes) */}
                                <div id="section-sizes" className="action-box-container" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                        <strong style={{ fontSize: '15px' }}>Manage Sizes</strong>
                                        {editMode && (
                                            <button className="text-sm text-[#E2B659] hover:text-[#c49a40] font-medium flex items-center gap-1">
                                                <Pencil className="w-3 h-3" /> Edit Variants List
                                            </button>
                                        )}
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                                        {draft.variants.map((v, idx) => (
                                            <div
                                                key={v.id}
                                                style={{ border: idx === 1 ? '2px solid #111' : '1px solid #ddd', borderRadius: '8px', padding: '12px', textAlign: 'center', cursor: 'pointer', background: '#fff' }}
                                            >
                                                <div style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>
                                                    <EditableText 
                                                        value={v.size} 
                                                        editMode={editMode}
                                                        onSave={(val) => { updateVariantField(idx, 'size', val); saveField(`variants.${idx}.size`); }} 
                                                    />
                                                </div>
                                                <div style={{ fontSize: '12px', color: '#737b2d', fontWeight: 600 }}>
                                                    <EditablePrice 
                                                        value={v.price} 
                                                        editMode={editMode}
                                                        onSave={(val) => { updateVariantField(idx, 'price', val); saveField(`variants.${idx}.price`); }} 
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductEditor;

import React from 'react';
import { useProductEditorStore } from '../store/productEditor.store';
import { Image, Info, DollarSign, Package, List, Truck, Search, Eye, AlertTriangle, CheckCircle2 } from 'lucide-react';

const sections = [
  { id: 'images', label: 'Product Images', icon: Image },
  { id: 'basic', label: 'Basic Information', icon: Info },
  { id: 'pricing', label: 'Pricing & Discount', icon: DollarSign },
  { id: 'sizes', label: 'Sizes & Variants', icon: Package },
  { id: 'features', label: 'Features', icon: List },
  { id: 'delivery', label: 'Delivery & Shipping', icon: Truck },
  { id: 'seo', label: 'SEO Information', icon: Search },
  { id: 'status', label: 'Status & Visibility', icon: Eye },
];

export const ProductSummaryPanel: React.FC = () => {
  const { draft } = useProductEditorStore();

  if (!draft) return null;

  // Simple validation checks for completeness
  const completeness = {
    images: draft.images.length >= 2,
    basic: !!draft.title && !!draft.shortDescription && !!draft.description,
    pricing: draft.basePrice > 0,
    sizes: draft.variants.length > 0,
    features: draft.features.length >= 3,
    delivery: !!draft.deliveryInfo,
    seo: !!draft.seoTitle && !!draft.seoDescription,
    status: true // Always complete
  };

  const totalComplete = Object.values(completeness).filter(Boolean).length;
  const percentage = Math.round((totalComplete / sections.length) * 100);

  const scrollToSection = (id: string) => {
      const el = document.getElementById(`section-${id}`);
      if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
  };

  return (
    <div className="w-72 bg-white border-r border-gray-200 h-full flex flex-col hidden lg:flex">
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">Editor Health</h2>
        <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">Product Completeness</span>
            <span className="text-sm font-semibold text-[#111]">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div 
            className="bg-[#00897b] h-1.5 rounded-full transition-all duration-500" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {sections.map((section) => {
            const isComplete = completeness[section.id as keyof typeof completeness];
            return (
                <button 
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-left transition-colors group"
                >
                    <section.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    <span className="flex-1 text-sm font-medium text-gray-700">{section.label}</span>
                    {isComplete ? (
                        <CheckCircle2 className="w-4 h-4 text-[#00897b]" />
                    ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                    )}
                </button>
            );
        })}
      </div>
    </div>
  );
};

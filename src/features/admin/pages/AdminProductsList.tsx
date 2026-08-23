import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';

const AdminProductsList: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setProducts(data);
                }
            })
            .catch(err => console.error('Error fetching admin products:', err));
    }, []);

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Products</h1>
                    <p className="text-sm text-gray-500">Manage your product catalog, pricing, and variants.</p>
                </div>
                <button className="bg-[#111] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Product
                </button>
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 max-w-md relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E2B659] transition-all"
                    />
                </div>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Filter
                </button>
            </div>

            {/* List */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                            <th className="p-4 pl-6">Product</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 pr-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-500">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="text-lg font-medium text-gray-900 mb-2">No products found</div>
                                        <p>The database is empty. Please ensure you have whitelisted your IP in MongoDB Atlas and run the migration script.</p>
                                        <p className="mt-2 font-mono text-sm bg-gray-100 px-3 py-1 rounded">npx tsx server/migrate.ts</p>
                                    </div>
                                </td>
                            </tr>
                        ) : products.map(product => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-4 pl-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                                            <img src={product.image} alt={product.title} className="w-10 h-10 object-contain" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">{product.title}</div>
                                            <div className="text-xs text-gray-500">{product.subtitle || 'Asian Paints'}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-600">
                                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-xs">{product.category}</span>
                                </td>
                                <td className="p-4 text-sm font-medium text-gray-900">
                                    ₹{product.price?.toLocaleString()}
                                </td>
                                <td className="p-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        Active
                                    </span>
                                </td>
                                <td className="p-4 pr-6 text-right">
                                    <Link 
                                        to={`/admin/products/${product.id}`}
                                        className="inline-flex items-center justify-center px-3 py-1.5 bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-[#E2B659] transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                    >
                                        Edit Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProductsList;

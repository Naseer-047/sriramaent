import React from 'react';
import { ShoppingBag, Users, Package, TrendingUp, Calendar, ChevronDown, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
    return (
        <div className="p-8 max-w-[1600px] mx-auto pb-24">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                        Good morning, Admin <span className="text-2xl">👋</span>
                    </h1>
                    <p className="text-[15px] text-gray-500">Here's what's happening with your store today.</p>
                </div>
                
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-2.5 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                    <Calendar className="w-[18px] h-[18px] text-gray-500" strokeWidth={2} />
                    <span className="text-[14px] font-semibold text-gray-700">21 May 2025 - 27 May 2025</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 ml-1" />
                </div>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Orders */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                            <ShoppingBag className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Total Orders</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-none mb-2">128</h3>
                            <p className="text-xs font-semibold text-green-600 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" strokeWidth={3} /> 18.6% <span className="text-gray-400 font-medium">vs last 7 days</span>
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-4 bottom-4 w-24 h-12">
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                            <path d="M 0 35 C 10 35, 20 25, 30 20 C 40 15, 50 25, 60 10 C 70 -5, 85 10, 100 0" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M 0 35 C 10 35, 20 25, 30 20 C 40 15, 50 25, 60 10 C 70 -5, 85 10, 100 0 L 100 40 L 0 40 Z" fill="url(#greenGrad)" />
                            <defs>
                                <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Revenue */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                            <span className="text-2xl font-semibold">₹</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Total Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-none mb-2">₹ 1,24,560</h3>
                            <p className="text-xs font-semibold text-green-600 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" strokeWidth={3} /> 15.3% <span className="text-gray-400 font-medium">vs last 7 days</span>
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-4 bottom-4 w-24 h-12">
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                            <path d="M 0 25 C 20 25, 30 35, 50 30 C 60 25, 75 10, 85 20 C 90 25, 95 10, 100 5" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M 0 25 C 20 25, 30 35, 50 30 C 60 25, 75 10, 85 20 C 90 25, 95 10, 100 5 L 100 40 L 0 40 Z" fill="url(#orangeGrad)" />
                            <defs>
                                <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Customers */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                            <Users className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">New Customers</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-none mb-2">96</h3>
                            <p className="text-xs font-semibold text-green-600 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" strokeWidth={3} /> 11.2% <span className="text-gray-400 font-medium">vs last 7 days</span>
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-4 bottom-4 w-24 h-12">
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                            <path d="M 0 35 C 15 35, 30 15, 45 25 C 55 35, 65 30, 80 15 C 90 5, 95 0, 100 5" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M 0 35 C 15 35, 30 15, 45 25 C 55 35, 65 30, 80 15 C 90 5, 95 0, 100 5 L 100 40 L 0 40 Z" fill="url(#purpleGrad)" />
                            <defs>
                                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Low Stock */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#fff5ea] text-[#f97316] flex items-center justify-center shrink-0">
                            <Package className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Low Stock Items</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-none mb-2">14</h3>
                            <Link to="/admin/products" className="text-xs font-semibold text-[#f97316] hover:underline">
                                View and restock soon
                            </Link>
                        </div>
                    </div>
                    <div className="absolute right-4 bottom-4 w-24 h-12">
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                            <path d="M 0 20 C 10 20, 20 35, 35 30 C 50 25, 60 5, 75 15 C 85 25, 95 10, 100 5" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M 0 20 C 10 20, 20 35, 35 30 C 50 25, 60 5, 75 15 C 85 25, 95 10, 100 5 L 100 40 L 0 40 Z" fill="url(#orange2Grad)" />
                            <defs>
                                <linearGradient id="orange2Grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Middle Row (Chart + Orders) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-2">Sales Overview</h2>
                            <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-0.5 bg-[#E2B659]"></div>
                                    <span className="font-semibold text-gray-700">This Week</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-0.5 bg-gray-400 border-t border-dashed"></div>
                                    <span className="font-semibold text-gray-500">Last Week</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 flex items-center gap-2 cursor-pointer">
                            This Week <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                    <div className="w-full h-[240px] relative">
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs font-medium text-gray-400 pb-6 pr-4">
                            <span>₹60K</span>
                            <span>₹45K</span>
                            <span>₹30K</span>
                            <span>₹15K</span>
                            <span>₹0</span>
                        </div>
                        <div className="absolute left-10 right-0 top-0 h-[216px] flex flex-col justify-between pointer-events-none">
                            <div className="border-t border-gray-100 w-full"></div>
                            <div className="border-t border-gray-100 w-full"></div>
                            <div className="border-t border-gray-100 w-full"></div>
                            <div className="border-t border-gray-100 w-full"></div>
                            <div className="border-t border-gray-100 w-full"></div>
                        </div>
                        <div className="absolute left-10 right-0 top-0 h-[216px] overflow-hidden">
                            <svg viewBox="0 0 800 216" className="w-full h-full" preserveAspectRatio="none">
                                <path d="M 0 200 L 120 180 L 240 190 L 360 160 L 480 160 L 600 130 L 720 140 L 800 180" fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="6 6" />
                                <circle cx="0" cy="200" r="4" fill="#9ca3af" />
                                <circle cx="120" cy="180" r="4" fill="#9ca3af" />
                                <circle cx="240" cy="190" r="4" fill="#9ca3af" />
                                <circle cx="360" cy="160" r="4" fill="#9ca3af" />
                                <circle cx="480" cy="160" r="4" fill="#9ca3af" />
                                <circle cx="600" cy="130" r="4" fill="#9ca3af" />
                                <circle cx="720" cy="140" r="4" fill="#9ca3af" />
                                <circle cx="800" cy="180" r="4" fill="#9ca3af" />
                                <path d="M 0 150 L 120 160 L 240 130 L 360 130 L 480 100 L 600 90 L 720 50 L 800 65" fill="none" stroke="#E2B659" strokeWidth="3" />
                                <circle cx="0" cy="150" r="4" fill="#E2B659" stroke="#fff" strokeWidth="2" />
                                <circle cx="120" cy="160" r="4" fill="#E2B659" stroke="#fff" strokeWidth="2" />
                                <circle cx="240" cy="130" r="4" fill="#E2B659" stroke="#fff" strokeWidth="2" />
                                <circle cx="360" cy="130" r="4" fill="#E2B659" stroke="#fff" strokeWidth="2" />
                                <circle cx="480" cy="100" r="4" fill="#E2B659" stroke="#fff" strokeWidth="2" />
                                <circle cx="600" cy="90" r="4" fill="#E2B659" stroke="#fff" strokeWidth="2" />
                                <circle cx="720" cy="50" r="4" fill="#E2B659" stroke="#fff" strokeWidth="2" />
                                <circle cx="800" cy="65" r="4" fill="#E2B659" stroke="#fff" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between items-end text-[11px] font-bold text-gray-400 px-4">
                            <span>21 May</span>
                            <span>22 May</span>
                            <span>23 May</span>
                            <span>24 May</span>
                            <span>25 May</span>
                            <span>26 May</span>
                            <span>27 May</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
                        <button className="text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors">
                            View all
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        {[
                            { id: '#ORD-1748', name: 'Ravi Kumar', price: '₹8,750', status: 'Completed', color: 'bg-green-100 text-green-700', iconColor: 'text-purple-600', iconBg: 'bg-purple-50', time: '10 mins ago' },
                            { id: '#ORD-1747', name: 'Sneha Patel', price: '₹5,230', status: 'Processing', color: 'bg-orange-100 text-orange-700', iconColor: 'text-orange-500', iconBg: 'bg-orange-50', time: '25 mins ago' },
                            { id: '#ORD-1746', name: 'Arjun Singh', price: '₹12,450', status: 'Shipped', color: 'bg-blue-100 text-blue-700', iconColor: 'text-blue-500', iconBg: 'bg-blue-50', time: '1 hour ago' },
                            { id: '#ORD-1745', name: 'Pooja Sharma', price: '₹3,980', status: 'Processing', color: 'bg-orange-100 text-orange-700', iconColor: 'text-green-600', iconBg: 'bg-green-50', time: '2 hours ago' },
                            { id: '#ORD-1744', name: 'Amit Verma', price: '₹7,260', status: 'Completed', color: 'bg-green-100 text-green-700', iconColor: 'text-yellow-600', iconBg: 'bg-yellow-50', time: '3 hours ago' },
                        ].map((order, i) => (
                            <div key={i} className="flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${order.iconBg} ${order.iconColor}`}>
                                        <Package className="w-5 h-5" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-bold text-gray-900 leading-tight">{order.id}</p>
                                        <p className="text-xs font-medium text-gray-500">{order.name}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[13px] font-bold text-gray-900 leading-tight">{order.price}</p>
                                    <p className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 ${order.color}`}>
                                        {order.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[16px] font-bold text-gray-900">Top Selling Products</h2>
                        <button className="text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors">View all</button>
                    </div>
                    <div className="flex flex-col gap-5">
                        {[
                            { name: 'Royale Luxury Emulsion', sold: '124 Sold', price: '₹68,720', progress: 85, img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png' },
                            { name: 'Nilaya Arc Matt', sold: '98 Sold', price: '₹52,640', progress: 65, img: 'https://static.asianpaints.com/content/dam/asianpaints/products/packshots/nilaya-arc-matt-asian-paints.png.transform/cc-width-320-height-320/image.png' },
                            { name: 'Royale Glitz Advanced', sold: '76 Sold', price: '₹41,800', progress: 50, img: 'https://static.asianpaints.com/content/dam/asianpaints/products/packshots/royale-glitz-advanced-asian-paints.png.transform/cc-width-320-height-320/image.png' },
                            { name: 'Royale Shyne Luxury', sold: '65 Sold', price: '₹35,750', progress: 40, img: 'https://static.asian_paints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-shyne-luxury-emulsion-asian-paints.png' },
                            { name: 'Royale Matt', sold: '54 Sold', price: '₹29,890', progress: 30, img: 'https://static.asian_paints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-matt-asian-paints.png' }
                        ].map((prod, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-50 rounded-lg p-1.5 shrink-0 border border-gray-100">
                                    <img src={prod.img} alt={prod.name} className="w-full h-full object-contain drop-shadow-sm" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-[13px] font-bold text-gray-900 truncate pr-2">{prod.name}</p>
                                        <p className="text-[12px] font-bold text-gray-900 shrink-0">{prod.price}</p>
                                    </div>
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-[11px] font-semibold text-gray-500 w-12">{prod.sold}</p>
                                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#E2B659] rounded-full" style={{ width: `${prod.progress}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[16px] font-bold text-gray-900">Low Stock Alert</h2>
                        <button className="text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors">View all</button>
                    </div>
                    <div className="flex flex-col gap-6">
                        {[
                            { name: 'Royale Glitz Ultra Matt', sku: '10L • SKU: RGUM-10L', units: 3, img: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-glitz-ultra-matt-asian-paints.png' },
                            { name: 'Nilaya Arc Pearlescent', sku: '4L • SKU: NAP-4L', units: 5, img: 'https://static.asianpaints.com/content/dam/asianpaints/products/packshots/nilaya-arc-pearlescent-asian-paints.png.transform/cc-width-320-height-320/image.png' },
                            { name: 'Royale Advanced', sku: '20L • SKU: RAD-20L', units: 2, img: 'https://static.asianpaints.com/content/dam/asianpaints/products/packshots/royale-advanced-asian-paints.png.transform/cc-width-320-height-320/image.png' },
                            { name: 'Royale Shine Emulsion', sku: '1L • SKU: RSE-1L', units: 4, img: 'https://static.asian_paints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-shyne-luxury-emulsion-asian-paints.png' }
                        ].map((prod, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-50 rounded-lg p-2 shrink-0 border border-gray-100">
                                        <img src={prod.img} alt={prod.name} className="w-full h-full object-contain drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-bold text-gray-900">{prod.name}</p>
                                        <p className="text-[11px] font-semibold text-gray-500">{prod.sku}</p>
                                    </div>
                                </div>
                                <div className="text-[12px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md">
                                    {prod.units} units left
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[16px] font-bold text-gray-900">Store Performance</h2>
                        <button className="text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors">View report</button>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="flex flex-col justify-center border border-gray-100 rounded-xl p-4 hover:border-[#E2B659]/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-4 h-4" strokeWidth={2.5} />
                                </div>
                                <span className="text-[11px] font-bold text-gray-500">Conversion Rate</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">2.45%</h3>
                            <p className="text-[10px] font-bold text-green-600">↑ 0.45% <span className="text-gray-400 font-medium">vs last 7 days</span></p>
                        </div>
                        <div className="flex flex-col justify-center border border-gray-100 rounded-xl p-4 hover:border-[#E2B659]/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-md bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                    <ShoppingCart className="w-4 h-4" strokeWidth={2.5} />
                                </div>
                                <span className="text-[11px] font-bold text-gray-500">Avg Order Value</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">₹1,324</h3>
                            <p className="text-[10px] font-bold text-green-600">↑ 8.2% <span className="text-gray-400 font-medium">vs last 7 days</span></p>
                        </div>
                        <div className="flex flex-col justify-center border border-gray-100 rounded-xl p-4 hover:border-[#E2B659]/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-md bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-sm">₹</span>
                                </div>
                                <span className="text-[11px] font-bold text-gray-500">Refunds</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">₹4,680</h3>
                            <p className="text-[10px] font-bold text-red-500">↓ 5.3% <span className="text-gray-400 font-medium">vs last 7 days</span></p>
                        </div>
                        <div className="flex flex-col justify-center border border-gray-100 rounded-xl p-4 hover:border-[#E2B659]/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-md bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <span className="text-[11px] font-bold text-gray-500">Customer Sat.</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">4.6/5</h3>
                            <p className="text-[10px] font-bold text-green-600">↑ 0.3 <span className="text-gray-400 font-medium">vs last 7 days</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

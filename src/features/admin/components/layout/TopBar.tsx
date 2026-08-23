import React from 'react';
import { Search, Bell, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
    return (
        <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-20 w-full shrink-0">
            {/* Search */}
            <div className="flex-1 max-w-[480px] relative">
                <Search className="w-[18px] h-[18px] text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth={2.5} />
                <input 
                    type="text" 
                    placeholder="Search anything..." 
                    className="w-full pl-11 pr-4 py-2.5 bg-[#f9fafb] border border-transparent hover:border-gray-200 focus:bg-white rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#E2B659]/30 focus:border-[#E2B659] transition-all placeholder:text-gray-400"
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <Link to="/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">View Store</span>
                </Link>
                
                <div className="flex items-center gap-5">
                    <button className="relative text-gray-500 hover:text-gray-900 transition-colors">
                        <Bell className="w-[22px] h-[22px]" strokeWidth={2} />
                        <span className="absolute -top-1 -right-1 w-[10px] h-[10px] bg-[#E2B659] rounded-full border-2 border-white"></span>
                    </button>

                    <div className="w-px h-8 bg-gray-200"></div>

                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-sm border border-gray-200 group-hover:border-gray-300 transition-colors">
                            A
                        </div>
                        <div className="hidden md:block text-left mr-1">
                            <p className="text-sm font-bold text-gray-900 leading-none mb-1">Admin User</p>
                            <p className="text-[11px] text-gray-500 font-medium leading-none">Owner</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;

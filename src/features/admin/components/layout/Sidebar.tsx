import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    LayoutDashboard, Package, Tag, ShoppingCart, Users, MessageSquare, 
    Percent, Image as ImageIcon, Bell, 
    Settings, ShieldCheck, CreditCard, Truck, LayoutTemplate, 
    LogOut, ChevronDown, Store
} from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navGroups = [
  {
    title: 'MANAGE',
    items: [
        { name: 'Products', icon: Package, path: '/admin/products' },
        { name: 'Categories', icon: Tag, path: '/admin/categories' },
        { name: 'Orders', icon: ShoppingCart, path: '/admin/orders' },
        { name: 'Customers', icon: Users, path: '/admin/customers' },
        { name: 'Enquiries', icon: MessageSquare, path: '/admin/enquiries' },
    ]
  },
  {
    title: 'MARKETING',
    items: [
        { name: 'Offers & Discounts', icon: Percent, path: '/admin/offers' },
        { name: 'Banners', icon: ImageIcon, path: '/admin/banners' },
        { name: 'Notifications', icon: Bell, path: '/admin/notifications' },
    ]
  },
  {
    title: 'SETTINGS',
    items: [
        { name: 'Store Settings', icon: Settings, path: '/admin/settings' },
        { name: 'Users & Roles', icon: ShieldCheck, path: '/admin/users' },
        { name: 'Payments', icon: CreditCard, path: '/admin/payments' },
        { name: 'Shipping', icon: Truck, path: '/admin/shipping' },
        { name: 'Appearance', icon: LayoutTemplate, path: '/admin/appearance' },
    ]
  }
];

const Sidebar: React.FC = () => {
    return (
        <aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col h-screen shrink-0">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 mb-2 mt-2">
                <div className="flex items-center gap-2 text-lg font-bold text-[#111]">
                    <div className="w-6 h-6 rounded-md bg-[#E2B659]/10 text-[#E2B659] flex items-center justify-center">
                        <Store className="w-4 h-4" />
                    </div>
                    <span className="text-[#E2B659] font-medium">Sri Ram</span> Admin
                </div>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-4 flex flex-col gap-6 scrollbar-hide pb-4">
                
                {/* Dashboard (Top level) */}
                <div>
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all",
                                isActive 
                                    ? "bg-[#fef9eb] text-[#8c6b22]" 
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )
                        }
                    >
                        <LayoutDashboard className="w-[18px] h-[18px]" strokeWidth={2.5} />
                        Dashboard
                    </NavLink>
                </div>

                {navGroups.map((group) => (
                    <div key={group.title}>
                        <div className="px-3 mb-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">{group.title}</div>
                        <div className="flex flex-col gap-0.5">
                            {group.items.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        cn(
                                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                                            isActive 
                                                ? "bg-[#fef9eb] text-[#8c6b22] font-semibold" 
                                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                        )
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <item.icon className={cn("w-[18px] h-[18px]", isActive ? "text-[#8c6b22]" : "text-gray-400 group-hover:text-gray-600")} strokeWidth={isActive ? 2.5 : 2} />
                                            {item.name}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Bottom Profile */}
            <div className="p-4 mt-auto">
                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors mb-2">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-sm border border-gray-200">
                            A
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-900 leading-tight">Admin User</p>
                            <p className="text-[11px] text-gray-500 font-medium">Owner</p>
                        </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                
                <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-semibold text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors group">
                    <LogOut className="w-[18px] h-[18px] text-gray-400 group-hover:text-red-500" strokeWidth={2.5} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

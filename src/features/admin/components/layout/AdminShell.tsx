import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const AdminShell: React.FC = () => {
    return (
        <div className="admin-layout flex h-screen bg-[#f5f5f7] overflow-hidden font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <TopBar />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminShell;

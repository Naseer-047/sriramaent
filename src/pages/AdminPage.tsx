import React, { useState } from 'react';

import '../styles/legacy/style.css'; // or appropriate styling

const AdminPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    if (!isLoggedIn) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', background: '#f5f5f7' }}>
                <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '8px', color: '#111' }}>Admin Login</h2>
                    <p style={{ textAlign: 'center', marginBottom: '24px', fontSize: '13px', color: '#888' }}>Hint: Use <strong>admin</strong> / <strong>admin</strong></p>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#111' }}>Username</label>
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                placeholder="Enter admin username"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box', color: '#111', backgroundColor: '#fff' }}
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#111' }}>Password</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Enter admin password"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box', color: '#111', backgroundColor: '#fff' }}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px', boxSizing: 'border-box', justifyContent: 'center' }}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h1 style={{ fontSize: '28px', color: '#111' }}>Admin Dashboard</h1>
                <button onClick={() => setIsLoggedIn(false)} className="btn btn-secondary">Logout</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* Stats Cards */}
                <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Total Sales</h3>
                    <p style={{ fontSize: '32px', fontWeight: 700, color: '#111' }}>₹ 1,24,500</p>
                </div>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Active Orders</h3>
                    <p style={{ fontSize: '32px', fontWeight: 700, color: '#111' }}>42</p>
                </div>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Low Stock Items</h3>
                    <p style={{ fontSize: '32px', fontWeight: 700, color: '#e34c43' }}>8</p>
                </div>
            </div>

            <div style={{ marginTop: '40px', background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Recent Orders</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #f0f0f0' }}>
                                <th style={{ padding: '12px 8px', color: '#888' }}>Order ID</th>
                                <th style={{ padding: '12px 8px', color: '#888' }}>Customer</th>
                                <th style={{ padding: '12px 8px', color: '#888' }}>Status</th>
                                <th style={{ padding: '12px 8px', color: '#888' }}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <td style={{ padding: '12px 8px' }}>#ORD-7382</td>
                                <td style={{ padding: '12px 8px' }}>Rahul Sharma</td>
                                <td style={{ padding: '12px 8px' }}><span style={{ background: '#e0f2f1', color: '#00897b', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Completed</span></td>
                                <td style={{ padding: '12px 8px' }}>₹ 4,200</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <td style={{ padding: '12px 8px' }}>#ORD-7381</td>
                                <td style={{ padding: '12px 8px' }}>Sneha Gupta</td>
                                <td style={{ padding: '12px 8px' }}><span style={{ background: '#fff3e0', color: '#fb8c00', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Processing</span></td>
                                <td style={{ padding: '12px 8px' }}>₹ 12,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

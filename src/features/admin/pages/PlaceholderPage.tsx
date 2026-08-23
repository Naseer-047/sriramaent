import React from 'react';

interface Props {
    title: string;
    description: string;
}

const PlaceholderPage: React.FC<Props> = ({ title, description }) => {
    return (
        <div className="p-8 max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center">
            <div className="bg-white p-12 rounded-2xl border border-gray-200 shadow-sm max-w-lg w-full">
                <div className="w-16 h-16 bg-[#f5ebd7] text-[#E2B659] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>
                <p className="text-gray-500 mb-8">{description}</p>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-sm font-medium text-gray-600 rounded-lg">
                    Coming Soon
                </div>
            </div>
        </div>
    );
};

export default PlaceholderPage;

export type ProductVariant = {
    id: string;
    size: string; // e.g. "1L", "4L", "10L", "20L"
    price: number;
    compareAtPrice: number | null;
    stock: number;
    sku: string;
    isActive: boolean;
};

export type Product = {
    id: string;
    title: string;
    slug: string;
    brand: string;
    category: string;
    shortDescription: string;
    description: string;
    images: string[];
    primaryImageIndex: number;
    
    // Derived from variants usually, but cached on product
    basePrice: number;
    compareAtPrice: number | null;
    discountPercent: number | null;
    
    variants: ProductVariant[];
    
    // Status
    status: 'ACTIVE' | 'DRAFT' | 'ARCHIVED';
    inStock: boolean;
    
    // Metadata
    features: string[];
    deliveryInfo: string;
    specifications: Record<string, string>;
    faqs: { question: string; answer: string }[];
    howToApply: string;
    
    // SEO
    seoTitle: string;
    seoDescription: string;
};

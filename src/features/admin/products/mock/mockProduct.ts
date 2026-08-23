import { Product } from '../types';

export const mockProduct: Product = {
    id: "prod_nilaya_arc_matt_01",
    title: "Nilaya Arc Matt",
    slug: "nilaya-arc-matt",
    brand: "Asian Paints",
    category: "Interior Emulsion",
    shortDescription: "Premium interior emulsion with a rich matte finish.",
    description: "Nilaya Arc Matt by Asian Paints offers an exceptionally smooth, flat, and luxurious matte finish. It is highly washable and offers superior stain resistance, keeping your walls looking pristine for years. Ideal for living rooms and bedrooms.",
    images: [
        "/assets/paint-box.png",
        "/assets/paint-box.png", // Duplicate for mock purpose
    ],
    primaryImageIndex: 0,
    basePrice: 3700,
    compareAtPrice: 4200,
    discountPercent: 12,
    variants: [
        {
            id: "var_01_1L",
            size: "1L",
            price: 950,
            compareAtPrice: 1050,
            stock: 30,
            sku: "NIL-ARC-MATT-1L",
            isActive: true,
        },
        {
            id: "var_01_4L",
            size: "4L",
            price: 3700,
            compareAtPrice: 4200,
            stock: 12,
            sku: "NIL-ARC-MATT-4L",
            isActive: true,
        },
        {
            id: "var_01_10L",
            size: "10L",
            price: 9200,
            compareAtPrice: 10000,
            stock: 8,
            sku: "NIL-ARC-MATT-10L",
            isActive: true,
        },
        {
            id: "var_01_20L",
            size: "20L",
            price: 18000,
            compareAtPrice: 19500,
            stock: 3,
            sku: "NIL-ARC-MATT-20L",
            isActive: true,
        }
    ],
    status: 'ACTIVE',
    inStock: true,
    features: [
        "Luxurious Matte Finish",
        "Superior Washability",
        "Stain Resistant",
        "Anti-Fungal Properties",
        "Low VOC"
    ],
    deliveryInfo: "Delivery available across Bangalore within 24-48 hours.",
    specifications: {
        "Finish": "Matte",
        "Coverage": "140 - 160 sq.ft/ltr/coat",
        "Drying Time": "30 minutes (Surface Dry)",
        "Coats Required": "2 Coats",
        "Washability": "High"
    },
    faqs: [
        {
            question: "Is this paint washable?",
            answer: "Yes, Nilaya Arc Matt offers superior washability and stain resistance."
        },
        {
            question: "Can it be used on exterior walls?",
            answer: "No, this is specifically formulated for interior walls only."
        }
    ],
    howToApply: "1. Clean the surface thoroughly. 2. Apply one coat of Asian Paints interior primer. 3. Apply putty if required. 4. Apply 2 coats of Nilaya Arc Matt with 3-4 hours interval between coats.",
    seoTitle: "Buy Nilaya Arc Matt Paint - Asian Paints",
    seoDescription: "Shop Nilaya Arc Matt premium interior emulsion by Asian Paints. Get a rich matte finish for your walls. Available in 1L, 4L, 10L, 20L."
};

const productsData = [
  {
    id: "interior-walls-royale-luxury-emulsion-asian-paints",
    title: "Royale Luxury Emulsion",
    subtitle: "Interior Paint",
    category: "interior",
    badge: "Interior",
    badgeClass: "badge-interior",
    rating: 4.8,
    reviews: 245,
    price: 2499,
    oldPrice: 2950,
    discount: "15% OFF",
    sizes: [
      { size: "1L", price: 750 },
      { size: "4L", price: 2499 },
      { size: "10L", price: 5799 },
      { size: "20L", price: 10999 }
    ],
    details: "Give your walls a luxurious, soft sheen finish with Royale Luxury Emulsion. It's the only paint in India equipped with Teflon surface protector, making it highly durable and easy to clean.",
    howToApply: "Step 1: Sand the surface with Emery Paper 180 and wipe clean.\nStep 2: Apply Asian Paints TruCare Wall Primer (Sealer) and dry for 6-8 hrs.\nStep 3: Apply TruCare Wall Putty and dry for 4-6 hrs.\nStep 4: Sand with Emery Paper 180 and wipe clean.\nStep 5: Apply Asian Paints TruCare Wall Primer (Sealer) and dry for 6-8 hrs.\nStep 6: Apply 2 coats of Royale Luxury Emulsion.",
    specifications: [
      { label: "Coverage", value: "140 - 150 sq.ft/ltr/coat" },
      { label: "Drying Time", value: "30 min (Surface dry)" },
      { label: "Sheen Level", value: "Soft Sheen" },
      { label: "Washability", value: "Best in class" }
    ],
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png"
  },
  {
    id: "royale-glitz-new-packshot",
    title: "Royale Glitz",
    subtitle: "Luxury Interior Paint",
    category: "interior",
    badge: "Luxury",
    badgeClass: "badge-interior",
    rating: 4.9,
    reviews: 512,
    price: 3100,
    oldPrice: 3500,
    discount: "11% OFF",
    sizes: [
      { size: "1L", price: 850 },
      { size: "4L", price: 3100 },
      { size: "10L", price: 7200 },
      { size: "20L", price: 13500 }
    ],
    details: "Experience ultra-sheen finish with Royale Glitz. Infused with Teflon surface protector, it gives your walls an unparalleled luxury finish that stays fresh for years.",
    howToApply: "Follow standard interior surface preparation. Apply 2-3 coats for best ultra-sheen results.",
    specifications: [
      { label: "Coverage", value: "130 - 150 sq.ft/ltr/coat" },
      { label: "Drying Time", value: "30 min" },
      { label: "Sheen Level", value: "Ultra Sheen" }
    ],
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/royale-glitz-new-packshot.png"
  },
  {
    id: "apcolite-premium-emulsion-new-packshot",
    title: "Apcolite Premium Emulsion",
    subtitle: "Interior Paint",
    category: "interior",
    badge: "Bestseller",
    badgeClass: "badge-interior",
    rating: 4.6,
    reviews: 1240,
    price: 1850,
    oldPrice: 2100,
    discount: "12% OFF",
    sizes: [
      { size: "1L", price: 550 },
      { size: "4L", price: 1850 },
      { size: "10L", price: 4200 },
      { size: "20L", price: 8100 }
    ],
    details: "Apcolite Premium Emulsion provides a rich and matte finish to the wall. It is washable and stain-resistant.",
    howToApply: "Clean surface, apply primer, apply putty, apply primer again, then finish with 2 coats of Apcolite Premium.",
    specifications: [
      { label: "Coverage", value: "140 - 160 sq.ft/ltr/coat" },
      { label: "Sheen Level", value: "Matte" }
    ],
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/apcolite-premium-emulsion-new-packshot.png"
  },
  {
    id: "interior-walls-tractor-emulsion-asian-paints",
    title: "Tractor Emulsion",
    subtitle: "Interior Paint",
    category: "interior",
    badge: "Budget",
    badgeClass: "badge-interior",
    rating: 4.4,
    reviews: 3105,
    price: 1100,
    oldPrice: 1250,
    discount: "12% OFF",
    sizes: [
      { size: "1L", price: 350 },
      { size: "4L", price: 1100 },
      { size: "10L", price: 2600 },
      { size: "20L", price: 5000 }
    ],
    details: "Tractor Emulsion offers a beautiful matte finish at an affordable price, replacing distemper perfectly.",
    howToApply: "Standard application process.",
    specifications: [
      { label: "Coverage", value: "130 - 150 sq.ft/ltr/coat" },
      { label: "Sheen Level", value: "Matte" }
    ],
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-emulsion-asian-paints.png"
  },
  {
    id: "Tractor-Sparc-Shyne",
    title: "Tractor Sparc Shyne",
    subtitle: "Exterior Paint",
    category: "exterior",
    badge: "Exterior",
    badgeClass: "badge-exterior",
    rating: 4.8,
    reviews: 395,
    price: 2250,
    oldPrice: 2500,
    discount: "10% OFF",
    sizes: [
      { size: "1L", price: 600 },
      { size: "4L", price: 2250 },
      { size: "10L", price: 5100 },
      { size: "20L", price: 9500 }
    ],
    details: "A superior exterior paint designed to protect walls from harsh weather and offer a lasting shine.",
    howToApply: "Exterior surface prep, prime, and 2 coats of paint.",
    specifications: [
      { label: "Coverage", value: "110 - 130 sq.ft/ltr/coat" },
      { label: "Weather Resistance", value: "High" }
    ],
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Tractor-Sparc-Shyne.png"
  },
  {
    id: "neobharat",
    title: "Neobharat",
    subtitle: "Waterproofing",
    category: "waterproofing",
    badge: "Waterproofing",
    badgeClass: "badge-waterproofing",
    rating: 4.7,
    reviews: 406,
    price: 2300,
    oldPrice: 2800,
    discount: "18% OFF",
    sizes: [
      { size: "1L", price: 700 },
      { size: "4L", price: 2300 },
      { size: "10L", price: 5500 },
      { size: "20L", price: 10500 }
    ],
    details: "Advanced waterproofing solution for roofs and terraces.",
    howToApply: "Clean surface, fix cracks, apply base coat, apply Neobharat top coats.",
    specifications: [
      { label: "Coverage", value: "40 - 50 sq.ft/ltr/coat" },
      { label: "Water Resistance", value: "Ultimate" }
    ],
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/neobharat.png"
  },
  {
    id: "interior-walls-apcolite-all-protek-matt-packshot-asian-paints",
    title: "Apcolite All Protek Matt",
    subtitle: "Interior Paint",
    category: "interior",
    badge: "Fire Resistant",
    badgeClass: "badge-interior",
    rating: 4.9,
    reviews: 156,
    price: 3200,
    oldPrice: 3800,
    discount: "16% OFF",
    sizes: [
      { size: "1L", price: 900 },
      { size: "4L", price: 3200 },
      { size: "10L", price: 7800 },
      { size: "20L", price: 15000 }
    ],
    details: "Offers flame spread resistance along with a beautiful matte finish.",
    howToApply: "Standard prep and apply.",
    specifications: [
      { label: "Coverage", value: "130 - 150 sq.ft/ltr/coat" },
      { label: "Safety", value: "Fire Retardant" }
    ],
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-apcolite-all-protek-matt-packshot-asian-paints.png"
  },
  {
    id: "Nilaya-Arc-Matt-new",
    title: "Nilaya Arc Matt",
    subtitle: "Luxury Paint",
    category: "interior",
    badge: "Premium",
    badgeClass: "badge-interior",
    rating: 4.7,
    reviews: 89,
    price: 4500,
    oldPrice: 5000,
    discount: "10% OFF",
    sizes: [
      { size: "1L", price: 1200 },
      { size: "4L", price: 4500 },
      { size: "10L", price: 11000 },
      { size: "20L", price: 21000 }
    ],
    details: "Exclusive Nilaya range matte finish for ultra-premium homes.",
    howToApply: "Requires professional application for best results.",
    specifications: [
      { label: "Coverage", value: "120 - 140 sq.ft/ltr/coat" }
    ],
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Nilaya-Arc-Matt-new.png"
  }
];

export default productsData;

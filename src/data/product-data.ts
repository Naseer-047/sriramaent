const productsData = [
  {
    id: 'nilaya-arc-matt',
    title: 'Nilaya Arc Matt',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Nilaya Arc Matt. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Nilaya-Arc-Matt-new.png'
  },
  {
    id: 'nilaya-arc-pearlescent',
    title: 'Nilaya Arc Pearlescent',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Nilaya Arc Pearlescent. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Nilaya-Arc-Pearlescent-new.png'
  },
  {
    id: 'royale-aspira',
    title: 'Royale Aspira',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Aspira. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-aspira-luxury-emulsion-asian-paints.png'
  },
  {
    id: 'royale-glitz',
    title: 'Royale Glitz',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Glitz. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/royale-glitz-new-packshot.png'
  },
  {
    id: 'royale-glitz-reserv',
    title: 'Royale Glitz Reserv',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Glitz Reserv. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/royale-glitz-reserv-new-packshot.png'
  },
  {
    id: 'royale-glitz-ultra-matt',
    title: 'Royale Glitz Ultra Matt',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Glitz Ultra Matt. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/royale-glitz-ultra-matt-new-packshot.png'
  },
  {
    id: 'royale-shyne-luxury-emulsion',
    title: 'Royale Shyne Luxury Emulsion',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Shyne Luxury Emulsion. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-shyne-luxury-emulsion-asian-paints.png'
  },
  {
    id: 'royale-matt',
    title: 'Royale Matt',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Matt. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-matt-asian-paints.png'
  },
  {
    id: 'royale-advanced',
    title: 'Royale Advanced',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Advanced. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-advanced-packshot-asian-paints.png'
  },
  {
    id: 'royale-shyne-advanced',
    title: 'Royale Shyne Advanced',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Shyne Advanced. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/luxury-emulsion-shyne-advanced-ps-royale.png'
  },
  {
    id: 'royale-luxury-emulsion',
    title: 'Royale Luxury Emulsion',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Luxury Emulsion. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png'
  },
  {
    id: 'royale-lustre',
    title: 'Royale Lustre',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Premium',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 3700,
    oldPrice: 4050,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 950 },
      { size: '4L', price: 3700 },
      { size: '10L', price: 9200 },
      { size: '20L', price: 18000 }
    ],
    details: 'Experience a smooth and rich finish with Royale Lustre. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Soft Sheen' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-lustre-asian-paints.png'
  },
  {
    id: 'apcolite-all-protek-shyne',
    title: 'Apcolite All Protek Shyne',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Bestseller',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 2100,
    oldPrice: 2450,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 550 },
      { size: '4L', price: 2100 },
      { size: '10L', price: 5200 },
      { size: '20L', price: 10000 }
    ],
    details: 'Experience a smooth and rich finish with Apcolite All Protek Shyne. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-apcolite-all-protek-shyne-packshot-asian-paints.png'
  },
  {
    id: 'apcolite-all-protek-matt',
    title: 'Apcolite All Protek Matt',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Bestseller',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 2100,
    oldPrice: 2450,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 550 },
      { size: '4L', price: 2100 },
      { size: '10L', price: 5200 },
      { size: '20L', price: 10000 }
    ],
    details: 'Experience a smooth and rich finish with Apcolite All Protek Matt. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-apcolite-all-protek-matt-packshot-asian-paints.png'
  },
  {
    id: 'apcolite-advanced-shyne-premium-emulsion',
    title: 'Apcolite Advanced Shyne Premium Emulsion',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Bestseller',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 2100,
    oldPrice: 2450,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 550 },
      { size: '4L', price: 2100 },
      { size: '10L', price: 5200 },
      { size: '20L', price: 10000 }
    ],
    details: 'Experience a smooth and rich finish with Apcolite Advanced Shyne Premium Emulsion. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/shyne-premium-emulsion.png'
  },
  {
    id: 'apcolite-advanced-premium-emulsion',
    title: 'Apcolite Advanced Premium Emulsion',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Bestseller',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 2100,
    oldPrice: 2450,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 550 },
      { size: '4L', price: 2100 },
      { size: '10L', price: 5200 },
      { size: '20L', price: 10000 }
    ],
    details: 'Experience a smooth and rich finish with Apcolite Advanced Premium Emulsion. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-apcolite-advanced-heavy-duty-emulsion-asian-paints.png'
  },
  {
    id: 'apcolite-premium-satin-emulsion',
    title: 'Apcolite Premium Satin Emulsion',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Bestseller',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 2100,
    oldPrice: 2450,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 550 },
      { size: '4L', price: 2100 },
      { size: '10L', price: 5200 },
      { size: '20L', price: 10000 }
    ],
    details: 'Experience a smooth and rich finish with Apcolite Premium Satin Emulsion. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-apcolite-premium-satin-emulsion-asian-paints.png'
  },
  {
    id: 'apcolite-premium-emulsion',
    title: 'Apcolite Premium Emulsion',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Bestseller',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 2100,
    oldPrice: 2450,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 550 },
      { size: '4L', price: 2100 },
      { size: '10L', price: 5200 },
      { size: '20L', price: 10000 }
    ],
    details: 'Experience a smooth and rich finish with Apcolite Premium Emulsion. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/apcolite-premium-emulsion-new-packshot.png'
  },
  {
    id: 'tractor-emulsion-shyne',
    title: 'Tractor Emulsion Shyne',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Emulsion Shyne. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-emulsion-shyne-asian-paints.png'
  },
  {
    id: 'tractor-shyne-advanced',
    title: 'Tractor Shyne Advanced',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Shyne Advanced. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Tractor-Shyne-Advanced.png'
  },
  {
    id: 'tractor-emulsion-advanced',
    title: 'Tractor Emulsion Advanced',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Emulsion Advanced. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-emulsion-advanced-asian-paints.png'
  },
  {
    id: 'tractor-emulsion',
    title: 'Tractor Emulsion',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Emulsion. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-emulsion-asian-paints.png'
  },
  {
    id: 'tractor-ultraa',
    title: 'Tractor Ultraa',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Ultraa. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Tractor-emulsion-Ultraa-packshot.png'
  },
  {
    id: 'tractor-sparc-ultra',
    title: 'Tractor Sparc Ultra',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Sparc Ultra. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-sparc-advanced-packshot-asian-paints.png'
  },
  {
    id: 'tractor-sparc',
    title: 'Tractor Sparc',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Sparc. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-sparc-asian-paints.png'
  },
  {
    id: 'tractor-sparc-shyne',
    title: 'Tractor Sparc Shyne',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Sparc Shyne. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Tractor-Sparc-Shyne.png'
  },
  {
    id: 'neobharat-latex-interior-paint',
    title: 'NeoBharat Latex Interior Paint',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Bestseller',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 2100,
    oldPrice: 2450,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 550 },
      { size: '4L', price: 2100 },
      { size: '10L', price: 5200 },
      { size: '20L', price: 10000 }
    ],
    details: 'Experience a smooth and rich finish with NeoBharat Latex Interior Paint. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/neobharat.png'
  },
  {
    id: 'tractor-aqualock',
    title: 'Tractor Aqualock',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Aqualock. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-aqualock-asian-paints.png'
  },
  {
    id: 'tractor-uno',
    title: 'Tractor Uno',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: 'Budget',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: 1300,
    oldPrice: 1650,
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: 350 },
      { size: '4L', price: 1300 },
      { size: '10L', price: 3200 },
      { size: '20L', price: 6000 }
    ],
    details: 'Experience a smooth and rich finish with Tractor Uno. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\nStep 2: Apply Primer.\nStep 3: Apply Putty.\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: 'Matte' }
    ],
    image: 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-uno-asian-paints.png'
  }
];

export default productsData;

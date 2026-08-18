import productsData from './product-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');
    let productTitle = urlParams.get('title');
    let productImg = urlParams.get('img');
    let productPriceRaw = urlParams.get('price');
    
    // Default fallback for testing if no id provided
    if (!productId && !productTitle) {
        productId = 'interior-walls-royale-luxury-emulsion-asian-paints'; 
    }

    let product = null;
    if (productId) {
        product = productsData.find(p => p.id === productId);
    }
    
    if (!product && productTitle) {
        // Find by title in DB
        product = productsData.find(p => p.title.toLowerCase() === productTitle.toLowerCase());
        
        // If STILL not found, generate a mock product on the fly
        if (!product) {
            let basePrice = productPriceRaw ? parseInt(productPriceRaw) : 1500;
            if (isNaN(basePrice)) basePrice = 1500;
            
            product = {
                id: 'mock-' + Math.random().toString(36).substr(2, 9),
                title: productTitle,
                subtitle: 'Premium Paint Collection',
                image: productImg || 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png',
                badge: 'Popular',
                badgeClass: 'badge-interior',
                rating: '4.6',
                reviews: '128',
                discount: '10% OFF',
                price: basePrice,
                sizes: [
                    { size: '1L', price: Math.round(basePrice * 0.25) },
                    { size: '4L', price: basePrice },
                    { size: '10L', price: Math.round(basePrice * 2.4) },
                    { size: '20L', price: Math.round(basePrice * 4.5) }
                ],
                details: 'This is a premium quality paint offering rich finish and durability. Perfectly formulated to give your walls a luxurious appearance.',
                howToApply: '1. Prepare the surface by cleaning it thoroughly.<br>2. Apply a coat of primer.<br>3. Apply 2 coats of this paint with a roller or brush.',
                specifications: [
                    { label: 'Finish', value: 'Rich Matt' },
                    { label: 'Coverage', value: '120-140 sq.ft/L/coat' },
                    { label: 'Drying Time', value: '30 mins (Surface dry)' }
                ]
            };
        }
    }

    if (product) {
        document.getElementById('loadingState').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('stickyBar').style.display = 'flex';

        // Populate Main Details
        document.getElementById('prodImage').src = product.image;
        document.getElementById('prodTitle').innerText = product.title;
        document.getElementById('prodSubtitle').innerText = product.subtitle;
        document.getElementById('prodRatingScore').innerText = product.rating;
        document.getElementById('prodReviewsText').innerText = `(${product.reviews} reviews)`;
        document.getElementById('prodDiscount').innerText = product.discount;
        document.getElementById('prodBadge').innerText = product.discount;
        document.getElementById('accReviewsCount').innerText = `(${product.reviews})`;
        
        // Accordions
        document.getElementById('accDetails').innerHTML = `<p>${product.details}</p>`;
        document.getElementById('accApply').innerHTML = `<p>${product.howToApply.replace(/\n/g, '<br>')}</p>`;
        document.getElementById('accSpecs').innerHTML = `<ul>${product.specifications.map(s => `<li><strong>${s.label}:</strong> ${s.value}</li>`).join('')}</ul>`;

        let currentSizeIndex = 1; // Default select 4L if available
        if (currentSizeIndex >= product.sizes.length) {
            currentSizeIndex = 0;
        }

        function updatePrice() {
            const sizeData = product.sizes[currentSizeIndex] || product.sizes[0];
            const priceStr = `₹${sizeData.price.toLocaleString('en-IN')}`;
            const qty = parseInt(document.getElementById('qtyInput').value) || 1;
            const totalPrice = `₹${(sizeData.price * qty).toLocaleString('en-IN')}`;
            
            document.getElementById('prodPrice').innerText = priceStr;
            // Fake old price calculation based on size for mockup accuracy
            const oldP = Math.round(sizeData.price * 1.18);
            document.getElementById('prodOldPrice').innerText = `₹${oldP.toLocaleString('en-IN')}`;
            
            // Update Sticky bar
            document.getElementById('stickyPrice').innerText = totalPrice;
            document.getElementById('stickyTitle').innerText = `${product.title} (${sizeData.size})`;
        }

        // Render Sizes
        const sizesGrid = document.getElementById('prodSizesGrid');
        product.sizes.forEach((s, idx) => {
            const div = document.createElement('div');
            div.className = `size-card ${idx === currentSizeIndex ? 'active' : ''}`;
            div.innerHTML = `
                <div class="size-vol">${s.size}</div>
                <div class="size-prc">₹${s.price.toLocaleString('en-IN')}</div>
            `;
            div.onclick = () => {
                document.querySelectorAll('.size-card').forEach(c => c.classList.remove('active'));
                div.classList.add('active');
                currentSizeIndex = idx;
                updatePrice();
            };
            sizesGrid.appendChild(div);
        });

        // Quantity Handlers
        const qtyInput = document.getElementById('qtyInput');
        document.getElementById('qtyMinus').onclick = () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) {
                qtyInput.value = val - 1;
                updatePrice();
            }
        };
        document.getElementById('qtyPlus').onclick = () => {
            let val = parseInt(qtyInput.value);
            qtyInput.value = val + 1;
            updatePrice();
        };

        // Initial setup
        updatePrice();
    } else {
        document.getElementById('loadingState').innerText = "Product not found.";
    }
});

import productsData from './product-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');
    
    // Default fallback for testing if no id provided
    if (!productId) {
        productId = 'interior-walls-royale-luxury-emulsion-asian-paints'; 
    }

    const product = productsData.find(p => p.id === productId);

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

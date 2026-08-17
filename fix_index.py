import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

script = """
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.pop-card').forEach(card => {
                const btn = card.querySelector('.pop-btn');
                if (btn) {
                    btn.addEventListener('click', (e) => {
                        const titleEl = card.querySelector('.pop-title');
                        const imgEl = card.querySelector('.pop-bucket-img');
                        const priceEl = card.querySelector('.pop-price');
                        
                        if (titleEl) {
                            const title = encodeURIComponent(titleEl.innerText.trim());
                            const img = imgEl ? encodeURIComponent(imgEl.src) : '';
                            
                            let price = '1500';
                            if (priceEl && priceEl.innerText.includes('₹')) {
                                const rawPrice = priceEl.innerText.replace(/[^0-9]/g, '');
                                if (rawPrice) price = rawPrice;
                            }
                            
                            window.location.href = `product-details.html?title=${title}&img=${img}&price=${price}`;
                        }
                    });
                }
            });
        });
    </script>
</body>
"""

html = html.replace('</body>', script)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

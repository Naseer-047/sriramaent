import re

html_file = 'shop-paints.html'
with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

menu_html = """
    <div class="mobile-menu-overlay" id="menuOverlay"></div>
    <nav class="mobile-menu" id="mobileMenu">
        <div class="menu-header">
            <span class="menu-title">Menu</span>
            <button class="close-btn" id="closeMenuBtn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6l12 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <ul class="menu-links">
            <li><a href="shop-paints.html">SHOP PAINTS</a></li>
            <li><a href="#">EXPLORE COLOURS</a></li>
            <li><a href="#">PAINT BY SPACE</a></li>
            <li><a href="#">INSPIRATION</a></li>
            <li><a href="#">OFFERS</a></li>
        </ul>
    </nav>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.querySelector('.menu-btn');
            const closeBtn = document.getElementById('closeMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const menuOverlay = document.getElementById('menuOverlay');

            if (menuBtn && closeBtn && mobileMenu && menuOverlay) {
                function openMenu() {
                    mobileMenu.classList.add('open');
                    menuOverlay.classList.add('open');
                    document.body.style.overflow = 'hidden'; 
                }

                function closeMenu() {
                    mobileMenu.classList.remove('open');
                    menuOverlay.classList.remove('open');
                    document.body.style.overflow = '';
                }

                menuBtn.addEventListener('click', openMenu);
                closeBtn.addEventListener('click', closeMenu);
                menuOverlay.addEventListener('click', closeMenu);
            }
        });
    </script>
</body>"""

# Check if it already has mobile-menu-overlay
if 'class="mobile-menu-overlay"' not in html:
    html = html.replace('</body>', menu_html)
    
    # bump version just in case
    html = html.replace('shop.css?v=8', 'shop.css?v=9')
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Injected mobile menu successfully.")
else:
    print("Mobile menu already exists!")


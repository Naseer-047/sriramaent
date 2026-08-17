import re

html = open('shop-paints.html', 'r', encoding='utf-8').read()

# Fix the double closing div
html = html.replace('''            </div>
        </div>

        </div>''', '''            </div>
        </div>''')

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(html)

import re

with open('shop-paints.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<li><a href="#" style="color: #111;">EXPLORE COLOURS</a></li>', '<li><a href="explore-colours.html" style="color: #111;">EXPLORE COLOURS</a></li>')
html = html.replace('<li><a href="#">EXPLORE COLOURS</a></li>', '<li><a href="explore-colours.html">EXPLORE COLOURS</a></li>')

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(html)

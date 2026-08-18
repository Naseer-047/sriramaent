import os

dirs = [
    'public/images', 'public/icons', 'public/fonts', 'public/favicon',
    'src/app',
    'src/assets/images', 'src/assets/icons', 'src/assets/fonts',
    'src/components/ui', 'src/components/layout', 'src/components/common',
    'src/features/home/components',
    'src/features/shop/components', 'src/features/shop/hooks',
    'src/features/product/components', 'src/features/product/hooks',
    'src/features/colours/components',
    'src/features/inspiration/components',
    'src/features/offers/components',
    'src/features/cart/components',
    'src/features/checkout/components',
    'src/features/orders/components', 'src/features/orders/hooks',
    'src/pages',
    'src/store',
    'src/hooks',
    'src/services',
    'src/i18n/locales',
    'src/types',
    'src/lib',
    'src/styles'
]

for d in dirs:
    os.makedirs(d, exist_ok=True)
print("Directories created.")

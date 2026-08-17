import json
import os

os.makedirs('locales', exist_ok=True)

en = {
    "nav": {
        "home": "HOME",
        "shop": "SHOP PAINTS",
        "explore": "EXPLORE COLOURS",
        "offers": "OFFERS",
        "menu": "Menu"
    },
    "hero": {
        "welcome": "WELCOME TO COLOURWORLD",
        "title": "Bring Colour To Life.",
        "subtitle": "Premium paints, finishes and solutions for beautiful spaces.",
        "btnShop": "Shop Paints",
        "btnExplore": "Explore Colours"
    },
    "shop": {
        "title": "Shop Paints",
        "subtitle": "Find the right paint and essentials for your home.",
        "searchPlaceholder": "Search paints, colours, products...",
        "filters": {
            "all": "All",
            "interior": "Interior Paints",
            "exterior": "Exterior Paints",
            "waterproofing": "Waterproofing",
            "primers": "Primers",
            "woodMetal": "Wood & Metal",
            "tools": "Tools & Accessories"
        },
        "discount": {
            "title": "Discounted<br>Products",
            "subtitle": "Limited period offers on<br>best-selling products.",
            "viewAll": "View All Offers"
        },
        "btnCart": "Add to Cart",
        "btnBuy": "Buy Now"
    },
    "explore": {
        "title1": "Find a",
        "title2": "Colour",
        "title3": "You'll Love.",
        "subtitle": "Explore beautiful shades and find the perfect colour for your space.",
        "btnShades": "Explore Shades",
        "btnVisualize": "Visualize Your Room",
        "exploreByColor": "Explore by Colour",
        "viewAll": "View All",
        "colorsSpace": "Colours for Every Space",
        "spaces": {
            "living": "Living Room",
            "livingSub": "Warm & welcoming",
            "bedroom": "Bedroom",
            "bedroomSub": "Calm & relaxing",
            "exterior": "Exterior",
            "exteriorSub": "Fresh & lasting"
        },
        "seeAlive": "See Your Colour Come Alive"
    },
    "details": {
        "home": "Home",
        "shop": "Shop Paints",
        "mrp": "MRP",
        "chooseSize": "Choose Size",
        "qty": "Qty",
        "addToCart": "Add to Cart",
        "buyNow": "Buy Now",
        "delivery": "Delivery Available",
        "deliverySub": "Check pincode for exact delivery timeline"
    },
    "localStore": {
        "title": "Your Local Paint Partner",
        "directions": "Get Directions",
        "call": "Call Store",
        "hours": "Opening Hours"
    },
    "prompt": {
        "title": "Choose your language",
        "titleKn": "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ"
    }
}

kn = {
    "nav": {
        "home": "ಮುಖಪುಟ",
        "shop": "ಪೇಂಟ್ಗಳನ್ನು ಖರೀದಿಸಿ",
        "explore": "ಬಣ್ಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "offers": "ಆಫರ್ಗಳು",
        "menu": "ಮೆನು"
    },
    "hero": {
        "welcome": "ಕಲರ್ವರ್ಲ್ಡ್‌ಗೆ ಸ್ವಾಗತ",
        "title": "ಬಣ್ಣಗಳಿಂದ ನಿಮ್ಮ ಜಗತ್ತಿಗೆ ಹೊಸ ಜೀವ ನೀಡಿ.",
        "subtitle": "ಸುಂದರವಾದ ಸ್ಥಳಗಳಿಗಾಗಿ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಪೇಂಟ್ಗಳು ಮತ್ತು ಪರಿಹಾರಗಳು.",
        "btnShop": "ಪೇಂಟ್ಗಳನ್ನು ಖರೀದಿಸಿ",
        "btnExplore": "ಬಣ್ಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ"
    },
    "shop": {
        "title": "ಪೇಂಟ್ಗಳನ್ನು ಖರೀದಿಸಿ",
        "subtitle": "ನಿಮ್ಮ ಮನೆಗೆ ಸೂಕ್ತವಾದ ಪೇಂಟ್ ಅನ್ನು ಹುಡುಕಿ.",
        "searchPlaceholder": "ಪೇಂಟ್ ಹುಡುಕಿ...",
        "filters": {
            "all": "ಎಲ್ಲಾ",
            "interior": "ಒಳಾಂಗಣ ಪೇಂಟ್ಗಳು",
            "exterior": "ಹೊರಾಂಗಣ ಪೇಂಟ್ಗಳು",
            "waterproofing": "ವಾಟರ್ ಪ್ರೂಫಿಂಗ್",
            "primers": "ಪ್ರೈಮರ್ಗಳು",
            "woodMetal": "ವುಡ್ ಮತ್ತು ಮೆಟಲ್",
            "tools": "ಉಪಕರಣಗಳು"
        },
        "discount": {
            "title": "ರಿಯಾಯಿತಿ<br>ಉತ್ಪನ್ನಗಳು",
            "subtitle": "ಹೆಚ್ಚು ಮಾರಾಟವಾಗುವ<br>ಉತ್ಪನ್ನಗಳ ಮೇಲೆ ಸೀಮಿತ ಅವಧಿಯ ಕೊಡುಗೆಗಳು.",
            "viewAll": "ಎಲ್ಲಾ ಆಫರ್ಗಳನ್ನು ವೀಕ್ಷಿಸಿ"
        },
        "btnCart": "ಕಾರ್ಟ್ಗೆ ಸೇರಿಸಿ",
        "btnBuy": "ಈಗ ಖರೀದಿಸಿ"
    },
    "explore": {
        "title1": "ನಿಮಗೆ",
        "title2": "ಇಷ್ಟವಾಗುವ",
        "title3": "ಬಣ್ಣವನ್ನು ಹುಡುಕಿ.",
        "subtitle": "ಸುಂದರವಾದ ಬಣ್ಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಸೂಕ್ತವಾದ ಬಣ್ಣವನ್ನು ಹುಡುಕಿ.",
        "btnShades": "ಬಣ್ಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "btnVisualize": "ನಿಮ್ಮ ಕೋಣೆಯನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ",
        "exploreByColor": "ಬಣ್ಣದ ಮೂಲಕ ಅನ್ವೇಷಿಸಿ",
        "viewAll": "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ",
        "colorsSpace": "ಪ್ರತಿ ಜಾಗಕ್ಕೂ ಬಣ್ಣಗಳು",
        "spaces": {
            "living": "ಲಿವಿಂಗ್ ರೂಮ್",
            "livingSub": "ಬೆಚ್ಚಗಿನ ಮತ್ತು ಸ್ವಾಗತಾರ್ಹ",
            "bedroom": "ಮಲಗುವ ಕೋಣೆ",
            "bedroomSub": "ಶಾಂತ ಮತ್ತು ವಿಶ್ರಾಂತಿ",
            "exterior": "ಮನೆಯ ಹೊರಭಾಗ",
            "exteriorSub": "ತಾಜಾ ಮತ್ತು ಶಾಶ್ವತ"
        },
        "seeAlive": "ನಿಮ್ಮ ಬಣ್ಣ ಜೀವಂತವಾಗಿರುವುದನ್ನು ನೋಡಿ"
    },
    "details": {
        "home": "ಮುಖಪುಟ",
        "shop": "ಪೇಂಟ್ಗಳನ್ನು ಖರೀದಿಸಿ",
        "mrp": "MRP",
        "chooseSize": "ಗಾತ್ರ ಆಯ್ಕೆಮಾಡಿ",
        "qty": "ಪ್ರಮಾಣ",
        "addToCart": "ಕಾರ್ಟ್ಗೆ ಸೇರಿಸಿ",
        "buyNow": "ಈಗ ಖರೀದಿಸಿ",
        "delivery": "ಡೆಲಿವರಿ ಲಭ್ಯವಿದೆ",
        "deliverySub": "ನಿಖರವಾದ ವಿತರಣಾ ಸಮಯಕ್ಕಾಗಿ ಪಿನ್ಕೋಡ್ ಪರಿಶೀಲಿಸಿ"
    },
    "localStore": {
        "title": "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಪೇಂಟ್ ಪಾಲುದಾರ",
        "directions": "ದಾರಿ ತೋರಿಸಿ",
        "call": "ಅಂಗಡಿಗೆ ಕರೆ ಮಾಡಿ",
        "hours": "ಅಂಗಡಿ ಸಮಯ"
    },
    "prompt": {
        "title": "Choose your language",
        "titleKn": "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ"
    }
}

with open('locales/en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, indent=4, ensure_ascii=False)

with open('locales/kn.json', 'w', encoding='utf-8') as f:
    json.dump(kn, f, indent=4, ensure_ascii=False)

print("JSON dictionaries created.")

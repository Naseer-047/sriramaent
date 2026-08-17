import json

with open('locales/en.json', 'r', encoding='utf-8') as f:
    en = json.load(f)

with open('locales/kn.json', 'r', encoding='utf-8') as f:
    kn = json.load(f)

en['features'] = {
    "authTitle": "AUTHENTIC<br>SRIRAMAENT",
    "authSub": "100% Genuine<br>Products",
    "trustTitle": "TRUSTED<br>EXPERTS",
    "trustSub": "Colour<br>Guidance",
    "fastTitle": "FAST & SAFE<br>DELIVERY",
    "fastSub": "On Time,<br>Every Time",
    "qualTitle": "QUALITY<br>ASSURED",
    "qualSub": "Beautiful<br>Spaces"
}

kn['features'] = {
    "authTitle": "ಅಧಿಕೃತ<br>ಶ್ರೀರಾಮ ಎಂಟರ್‌ಪ್ರೈಸಸ್",
    "authSub": "100% ಅಸಲಿ<br>ಉತ್ಪನ್ನಗಳು",
    "trustTitle": "ವಿಶ್ವಾಸಾರ್ಹ<br>ತಜ್ಞರು",
    "trustSub": "ಬಣ್ಣದ<br>ಮಾರ್ಗದರ್ಶನ",
    "fastTitle": "ವೇಗದ ಮತ್ತು ಸುರಕ್ಷಿತ<br>ವಿತರಣೆ",
    "fastSub": "ಸರಿಯಾದ ಸಮಯಕ್ಕೆ,<br>ಪ್ರತಿ ಬಾರಿಯೂ",
    "qualTitle": "ಗುಣಮಟ್ಟದ<br>ಭರವಸೆ",
    "qualSub": "ಸುಂದರವಾದ<br>ಸ್ಥಳಗಳು"
}

en['shopCategories'] = {
    "eyebrow": "SHOP WHAT YOU NEED",
    "title1": "Choose the right product for",
    "title2": "your home.",
    "sub": "Quality paints and solutions for every surface and every need.",
    "interior": "INTERIOR<br>PAINTS",
    "interiorSub": "Smooth finishes for<br>walls that feel like home.",
    "interiorDesc": "Ghar ke andar ke liye",
    "exterior": "EXTERIOR<br>PAINTS",
    "exteriorSub": "Long-lasting colour<br>made for the outside world.",
    "exteriorDesc": "Ghar ke bahar ke liye",
    "water": "WATER-<br>PROOFING",
    "waterDesk": "WATERPROOFING",
    "waterSub": "Protection where<br>your walls need it most.",
    "waterDesc": "Seelan aur paani se protection",
    "tools": "TOOLS &<br>ACCESSORIES",
    "toolsDesk": "PAINTING ESSENTIALS",
    "toolsSub": "Everything you need<br>to complete the job.",
    "toolsDesc": "Brush, roller, primer aur tools",
    "explore": "Explore Collection",
    "viewProd": "View Products",
    "viewAll": "View All Categories"
}

kn['shopCategories'] = {
    "eyebrow": "ನಿಮಗೆ ಬೇಕಾದುದನ್ನು ಖರೀದಿಸಿ",
    "title1": "ನಿಮ್ಮ ಮನೆಗೆ ಸರಿಯಾದ ಉತ್ಪನ್ನವನ್ನು",
    "title2": "ಆಯ್ಕೆಮಾಡಿ.",
    "sub": "ಪ್ರತಿ ಮೇಲ್ಮೈ ಮತ್ತು ಪ್ರತಿ ಅಗತ್ಯಕ್ಕಾಗಿ ಗುಣಮಟ್ಟದ ಪೇಂಟ್ಗಳು ಮತ್ತು ಪರಿಹಾರಗಳು.",
    "interior": "ಒಳಾಂಗಣ<br>ಪೇಂಟ್ಗಳು",
    "interiorSub": "ಮನೆಯಂತೆ ಭಾಸವಾಗುವ ಗೋಡೆಗಳಿಗೆ<br>ಮೃದುವಾದ ಫಿನಿಶ್.",
    "interiorDesc": "ಮನೆಯ ಒಳಭಾಗಕ್ಕಾಗಿ",
    "exterior": "ಹೊರಾಂಗಣ<br>ಪೇಂಟ್ಗಳು",
    "exteriorSub": "ಹೊರಗಿನ ಪ್ರಪಂಚಕ್ಕಾಗಿ ಮಾಡಿದ<br>ದೀರ್ಘಕಾಲೀನ ಬಣ್ಣ.",
    "exteriorDesc": "ಮನೆಯ ಹೊರಭಾಗಕ್ಕಾಗಿ",
    "water": "ವಾಟರ್<br>ಪ್ರೂಫಿಂಗ್",
    "waterDesk": "ವಾಟರ್ ಪ್ರೂಫಿಂಗ್",
    "waterSub": "ನಿಮ್ಮ ಗೋಡೆಗಳಿಗೆ ರಕ್ಷಣೆ ಬೇಕಾದಲ್ಲಿ<br>ರಕ್ಷಣೆ.",
    "waterDesc": "ತೇವಾಂಶ ಮತ್ತು ನೀರಿನಿಂದ ರಕ್ಷಣೆ",
    "tools": "ಉಪಕರಣಗಳು ಮತ್ತು<br>ಪರಿಕರಗಳು",
    "toolsDesk": "ಪೇಂಟಿಂಗ್ ಅಗತ್ಯಗಳು",
    "toolsSub": "ಕೆಲಸವನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಬೇಕಾದ<br>ಎಲ್ಲವೂ ಇಲ್ಲಿದೆ.",
    "toolsDesc": "ಬ್ರಷ್, ರೋಲರ್, ಪ್ರೈಮರ್ ಮತ್ತು ಪರಿಕರಗಳು",
    "explore": "ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ",
    "viewProd": "ಉತ್ಪನ್ನಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    "viewAll": "ಎಲ್ಲಾ ವರ್ಗಗಳನ್ನು ವೀಕ್ಷಿಸಿ"
}

en['popular'] = {
    "eyebrow": "POPULAR PRODUCTS",
    "title": "Find Your Perfect Paint",
    "sub": "Popular Asian Paints products, selected for every kind of home.",
    "tagInt": "INTERIOR PAINT",
    "tagExt": "EXTERIOR PAINT",
    "tagWater": "WATERPROOFING",
    "desc1": "Rich finish for beautiful interiors.",
    "desc2": "Weather protection with long lasting beauty.",
    "desc3": "Protects walls from dampness and leakage.",
    "desc4": "Smooth finish for everyday interior walls.",
    "off30": "30% OFF",
    "off20": "20% OFF",
    "view": "View Product",
    "exploreAll": "Explore All Products"
}

kn['popular'] = {
    "eyebrow": "ಜನಪ್ರಿಯ ಉತ್ಪನ್ನಗಳು",
    "title": "ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಪೇಂಟ್ ಅನ್ನು ಹುಡುಕಿ",
    "sub": "ಪ್ರತಿಯೊಂದು ಮನೆಗೂ ಆಯ್ಕೆಮಾಡಿದ ಜನಪ್ರಿಯ ಏಷ್ಯನ್ ಪೇಂಟ್ಸ್ ಉತ್ಪನ್ನಗಳು.",
    "tagInt": "ಒಳಾಂಗಣ ಪೇಂಟ್",
    "tagExt": "ಹೊರಾಂಗಣ ಪೇಂಟ್",
    "tagWater": "ವಾಟರ್ ಪ್ರೂಫಿಂಗ್",
    "desc1": "ಸುಂದರವಾದ ಒಳಾಂಗಣಕ್ಕಾಗಿ ಶ್ರೀಮಂತ ಫಿನಿಶ್.",
    "desc2": "ದೀರ್ಘಕಾಲೀನ ಸೌಂದರ್ಯದೊಂದಿಗೆ ಹವಾಮಾನ ರಕ್ಷಣೆ.",
    "desc3": "ತೇವಾಂಶ ಮತ್ತು ಸೋರಿಕೆಯಿಂದ ಗೋಡೆಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ.",
    "desc4": "ದೈನಂದಿನ ಒಳಾಂಗಣ ಗೋಡೆಗಳಿಗೆ ಮೃದುವಾದ ಫಿನಿಶ್.",
    "off30": "30% ರಿಯಾಯಿತಿ",
    "off20": "20% ರಿಯಾಯಿತಿ",
    "view": "ಉತ್ಪನ್ನವನ್ನು ವೀಕ್ಷಿಸಿ",
    "exploreAll": "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ"
}

en['vis'] = {
    "eyebrow": "VISUALIZE. CHOOSE. PAINT.",
    "title1": "See it.",
    "title2": "Love it.",
    "title3": "Paint it.",
    "sub": "Visualize colours in your space and find your perfect shade.",
    "tabLiving": "Living Room",
    "tabBed": "Bedroom",
    "tabExt": "Exterior",
    "choose": "Choose a colour",
    "colors": {
        "c1": "Warm Sand",
        "d1": "Warm, inviting and earthy.",
        "c2": "Olive Mist",
        "d2": "Soft, natural and calming.",
        "c3": "Soft Peach",
        "d3": "Gentle, soothing and cheerful.",
        "c4": "Sky Blue",
        "d4": "Airy, fresh and expansive.",
        "c5": "Stone Grey",
        "d5": "Modern, neutral and elegant.",
        "c6": "Pure White",
        "d6": "Crisp, clean and timeless."
    },
    "explore": "Explore This Colour",
    "seeMatching": "See matching paints & products",
    "compare": "Compare",
    "f1Title": "Curated Colour Palettes",
    "f1Sub": "Expert combinations for every space.",
    "f2Title": "Trusted Quality",
    "f2Sub": "Asian Paints quality you can rely on.",
    "f3Title": "Long Lasting Beauty",
    "f3Sub": "Colours that stay fresh for years.",
    "f4Title": "Beautiful Finishes",
    "f4Sub": "Matte, rich, smooth & elegant."
}

kn['vis'] = {
    "eyebrow": "ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ. ಆಯ್ಕೆಮಾಡಿ. ಪೇಂಟ್ ಮಾಡಿ.",
    "title1": "ನೋಡಿ.",
    "title2": "ಇಷ್ಟಪಡಿ.",
    "title3": "ಪೇಂಟ್ ಮಾಡಿ.",
    "sub": "ನಿಮ್ಮ ಜಾಗದಲ್ಲಿ ಬಣ್ಣಗಳನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ ಮತ್ತು ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಬಣ್ಣವನ್ನು ಹುಡುಕಿ.",
    "tabLiving": "ಲಿವಿಂಗ್ ರೂಮ್",
    "tabBed": "ಮಲಗುವ ಕೋಣೆ",
    "tabExt": "ಮನೆಯ ಹೊರಭಾಗ",
    "choose": "ಬಣ್ಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    "colors": {
        "c1": "ವಾರ್ಮ್ ಸ್ಯಾಂಡ್",
        "d1": "ಬೆಚ್ಚಗಿನ, ಆಹ್ವಾನಿಸುವ ಮತ್ತು ಮಣ್ಣಿನ.",
        "c2": "ಆಲಿವ್ ಮಿಸ್ಟ್",
        "d2": "ಮೃದು, ನೈಸರ್ಗಿಕ ಮತ್ತು ಶಾಂತಗೊಳಿಸುವ.",
        "c3": "ಸಾಫ್ಟ್ ಪೀಚ್",
        "d3": "ಸೌಮ್ಯ, ಹಿತವಾದ ಮತ್ತು ಹರ್ಷಚಿತ್ತದಿಂದ.",
        "c4": "ಸ್ಕೈ ಬ್ಲೂ",
        "d4": "ಗಾಳಿಯ, ತಾಜಾ ಮತ್ತು ವಿಸ್ತಾರವಾದ.",
        "c5": "ಸ್ಟೋನ್ ಗ್ರೇ",
        "d5": "ಆಧುನಿಕ, ತಟಸ್ಥ ಮತ್ತು ಸೊಗಸಾದ.",
        "c6": "ಪ್ಯೂರ್ ವೈಟ್",
        "d6": "ಗರಿಗರಿಯಾದ, ಸ್ವಚ್ಛ ಮತ್ತು ಸಮಯಾತೀತ."
    },
    "explore": "ಈ ಬಣ್ಣವನ್ನು ಅನ್ವೇಷಿಸಿ",
    "seeMatching": "ಹೊಂದಾಣಿಕೆಯ ಪೇಂಟ್ಗಳು ಮತ್ತು ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
    "compare": "ಹೋಲಿಕೆ",
    "f1Title": "ಕ್ಯುರೇಟೆಡ್ ಬಣ್ಣದ ಪ್ಯಾಲೆಟ್‌ಗಳು",
    "f1Sub": "ಪ್ರತಿಯೊಂದು ಜಾಗಕ್ಕೂ ಪರಿಣಿತ ಸಂಯೋಜನೆಗಳು.",
    "f2Title": "ವಿಶ್ವಾಸಾರ್ಹ ಗುಣಮಟ್ಟ",
    "f2Sub": "ನೀವು ನಂಬಬಹುದಾದ ಏಷ್ಯನ್ ಪೇಂಟ್ಸ್ ಗುಣಮಟ್ಟ.",
    "f3Title": "ದೀರ್ಘಕಾಲೀನ ಸೌಂದರ್ಯ",
    "f3Sub": "ವರ್ಷಗಳವರೆಗೆ ತಾಜಾವಾಗಿ ಉಳಿಯುವ ಬಣ್ಣಗಳು.",
    "f4Title": "ಸುಂದರವಾದ ಫಿನಿಶ್‌ಗಳು",
    "f4Sub": "ಮ್ಯಾಟ್, ಶ್ರೀಮಂತ, ಮೃದು ಮತ್ತು ಸೊಗಸಾದ."
}

en['partner'] = {
    "eyebrow": "YOUR LOCAL PAINT PARTNER",
    "title1": "Your Local",
    "title2": "Paint Partner.",
    "sub": "Quality paints, helpful guidance and easy ordering, right from your local Asian Paints store.",
    "visit": "Visit Our Store",
    "visit1": "Asian Paints Colourworld",
    "visit2": "your trusted neighbourhood store",
    "address": "Store Address",
    "address1": "[Your Shop Address Here]<br>[City, State, Pincode]",
    "hours": "Opening Hours",
    "hours1": "Mon - Sun &bull; 9:30 AM - 8:30 PM",
    "callInfo": "Call us for enquiries & orders",
    "directions": "Get Directions",
    "call": "Call Store",
    "whatsapp": "WhatsApp Us"
}

kn['partner'] = {
    "eyebrow": "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಪೇಂಟ್ ಪಾಲುದಾರ",
    "title1": "ನಿಮ್ಮ ಸ್ಥಳೀಯ",
    "title2": "ಪೇಂಟ್ ಪಾಲುದಾರ.",
    "sub": "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಏಷ್ಯನ್ ಪೇಂಟ್ಸ್ ಅಂಗಡಿಯಿಂದ ಗುಣಮಟ್ಟದ ಪೇಂಟ್ಗಳು, ಉಪಯುಕ್ತ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸುಲಭ ಆರ್ಡರ್.",
    "visit": "ನಮ್ಮ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ",
    "visit1": "ಏಷ್ಯನ್ ಪೇಂಟ್ಸ್ ಕಲರ್ವರ್ಲ್ಡ್",
    "visit2": "ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ನೆರೆಹೊರೆಯ ಅಂಗಡಿ",
    "address": "ಅಂಗಡಿ ವಿಳಾಸ",
    "address1": "[ನಿಮ್ಮ ಅಂಗಡಿಯ ವಿಳಾಸ ಇಲ್ಲಿದೆ]<br>[ನಗರ, ರಾಜ್ಯ, ಪಿನ್ಕೋಡ್]",
    "hours": "ಅಂಗಡಿ ಸಮಯ",
    "hours1": "ಸೋಮ - ಭಾನು &bull; 9:30 AM - 8:30 PM",
    "callInfo": "ವಿಚಾರಣೆ ಮತ್ತು ಆರ್ಡರ್‌ಗಳಿಗಾಗಿ ನಮಗೆ ಕರೆ ಮಾಡಿ",
    "directions": "ದಾರಿ ತೋರಿಸಿ",
    "call": "ಅಂಗಡಿಗೆ ಕರೆ ಮಾಡಿ",
    "whatsapp": "ನಮಗೆ WhatsApp ಮಾಡಿ"
}

en['footer'] = {
    "needHelp": "Need Help?",
    "support": "Support:",
    "email": "Email:",
    "explore": "Explore",
    "home": "Home",
    "shop": "Shop Paints",
    "offers": "Offers",
    "privacy": "Privacy Policy",
    "terms": "Terms & Conditions",
    "visit": "Visit Us",
    "address": "[Your Shop Address Here]<br>[City, State, Pincode]",
    "rights": "&copy; 2026 Sri Ram Enterprises. All rights reserved."
}

kn['footer'] = {
    "needHelp": "ಸಹಾಯ ಬೇಕೇ?",
    "support": "ಬೆಂಬಲ:",
    "email": "ಇಮೇಲ್:",
    "explore": "ಅನ್ವೇಷಿಸಿ",
    "home": "ಮುಖಪುಟ",
    "shop": "ಪೇಂಟ್ಗಳನ್ನು ಖರೀದಿಸಿ",
    "offers": "ಆಫರ್ಗಳು",
    "privacy": "ಗೌಪ್ಯತೆ ನೀತಿ",
    "terms": "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
    "visit": "ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ",
    "address": "[ನಿಮ್ಮ ಅಂಗಡಿಯ ವಿಳಾಸ ಇಲ್ಲಿದೆ]<br>[ನಗರ, ರಾಜ್ಯ, ಪಿನ್ಕೋಡ್]",
    "rights": "&copy; 2026 ಶ್ರೀರಾಮ ಎಂಟರ್‌ಪ್ರೈಸಸ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
}

with open('locales/en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, indent=4, ensure_ascii=False)

with open('locales/kn.json', 'w', encoding='utf-8') as f:
    json.dump(kn, f, indent=4, ensure_ascii=False)

print("Added full translations to JSON files.")

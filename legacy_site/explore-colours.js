document.addEventListener('DOMContentLoaded', () => {
    // ---- See Your Colour Come Alive Interactions ----

    const roomTabs = document.querySelectorAll('.room-tab');
    const viewerImage = document.getElementById('viewerImage');
    
    // Images for different rooms
    const roomImages = {
        'living-room': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'bedroom': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'exterior': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    };

    // Tab Switching
    roomTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            roomTabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked
            tab.classList.add('active');
            
            // Change image
            const target = tab.getAttribute('data-target');
            if(roomImages[target]) {
                viewerImage.src = roomImages[target];
            }
        });
    });

    // Swatch Selection
    const swatches = document.querySelectorAll('.viewer-swatches .sw-circle');
    const sciCircle = document.getElementById('sciCircle');
    const sciName = document.getElementById('sciName');
    const sciShade = document.getElementById('sciShade');
    const sciDesc = document.getElementById('sciDesc');

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // Remove active from all
            swatches.forEach(s => s.classList.remove('active'));
            // Add active to clicked
            swatch.classList.add('active');

            // Get data
            const color = swatch.style.backgroundColor;
            const name = swatch.getAttribute('data-color');
            const shade = swatch.getAttribute('data-shade');
            const desc = swatch.getAttribute('data-desc');

            // Update UI
            sciCircle.style.backgroundColor = color;
            sciName.innerText = name;
            sciShade.innerText = 'Shade ' + shade;
            sciDesc.innerText = desc;
        });
    });
});

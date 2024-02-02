document.addEventListener('DOMContentLoaded', function () {
    const heartButton = document.getElementById('heart');
    const imageViewer = document.getElementById('imageViewer');
    const nextButton = document.getElementById('nextButton');
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg'
        // Dodaj więcej obrazków według potrzeb
    ];

    let currentImageIndex = 0;

    heartButton.addEventListener('click', function () {
        imageViewer.style.display = 'block';
        showImage(currentImageIndex);
    });

    imageViewer.addEventListener('click', function () {
        // Przejdź do kolejnego obrazka po kliknięciu na obrazie
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    nextButton.addEventListener('click', function () {
        // Przejdź do kolejnego obrazka po kliknięciu przycisku "Next"
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    function showImage(index) {
        const image = imageViewer.querySelector('img');
        image.src = images[index];
    }
});

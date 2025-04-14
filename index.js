const hoverBoxes = document.querySelectorAll('.hoverBox');

hoverBoxes.forEach(hoverBox => {
    const hiddenImage = hoverBox.querySelector('.hidden-wave');

    // Show the image on mouseover
    hoverBox.addEventListener('mouseover', () => {
        hiddenImage.classList.remove('hidden');
    });

    // Hide the image on mouseout
    hoverBox.addEventListener('mouseout', () => {
        hiddenImage.classList.add('hidden');
    });
});

const openProjecImage = () => {
    const allProjectImagesContainers = document.querySelectorAll('.featured__img-wrapper');
    const projectImageContainer = document.querySelector('.featured__selected-img-container');
    projectImageContainer.style.display = 'none';

    allProjectImagesContainers.forEach(divContainer => {
        divContainer.addEventListener('click', (e) => {
            projectImageContainer.addEventListener('click', () => {
                projectImageContainer.style.display = 'none';
                projectImageContainer.classList.remove('opened-container');
                projectImageContainer.querySelector('img').classList.remove('opened-img');
            })

            projectImageContainer.style.display = 'block';
            const img = e.target.querySelector('img');
            const imageSrc = img.src;
            const selectedImage = projectImageContainer.querySelector('img');
            selectedImage.src = imageSrc;
            projectImageContainer.classList.add('opened-container');
            selectedImage.classList.add('opened-img');
        });
    });
}

export default openProjecImage;
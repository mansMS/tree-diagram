const closeInfo = infoBlock => {
    infoBlock.innerHTML = '';
    delete infoBlock.dataset.personId;
};

const openInfo = (person, infoBlock) => {
    closeInfo(infoBlock);

    if (person.info) {
        infoBlock.dataset.personId = person.id;

        const closeButton = document.createElement('button');
        closeButton.className = 'info-block__close-button';
        closeButton.innerHTML = '&#10007;';
        closeButton.addEventListener('click', () => closeInfo(infoBlock));
        infoBlock.appendChild(closeButton);

        const infoHead = document.createElement('p');
        infoHead.className = 'info-block__header';
        infoHead.textContent = person.name;
        infoBlock.appendChild(infoHead);
    };

    if (person.info?.text) {
        const infoText = document.createElement('p');
        infoText.className = 'info-block__text';
        infoText.textContent = person.info.text;
        infoBlock.appendChild(infoText);
    };

    if (person.info?.photos) {
        const photosBlock = document.createElement('div');
        photosBlock.className = 'info-block__photos-block';

        person.info.photos.forEach(photoObject => {
            const photoCard = document.createElement('div');
            photoCard.className = 'info-block__photos-card';

            if (photoObject.legend) {
                const legend = document.createElement('details');
                legend.textContent = photoObject.legend;
                photoCard.appendChild(legend);
            }

            const photo = document.createElement('img');
            photo.src = photoObject.src;
            photo.alt = photoObject.label;
            photo.onclick = (e) => {
                if (!photoCard.classList.contains('open')) {
                    photoCard.classList.add('open');
                    // e.stopPropagation();
                } else photoCard.classList.remove("open");
            };

            // photoCard.onclick = () => {
            //     if (photoCard.classList.contains('open')) photoCard.classList.remove("open");
            // };
            photoCard.appendChild(photo);

            const photoLabel = document.createElement('div');
            photoLabel.textContent = photoObject.label;
            photoCard.appendChild(photoLabel);

            photosBlock.appendChild(photoCard);
        });

        infoBlock.appendChild(photosBlock);
    };
};

export { closeInfo, openInfo };
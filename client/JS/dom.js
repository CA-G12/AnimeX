
const renderCards = (response) => {
    const cardSection = document.querySelector('.cards');
    cardSection.textContent = '';
    response.data.forEach((element) => {
        const card = document.createElement('div');
        const cardFlip = document.createElement('div');
        const cardFlipContainer = document.createElement('div')
        const cardTitle = document.createElement('div')
        const btnView = document.createElement('a')
        const rating = document.createElement('div')
        const heart = document.createElement('div')
        const starIcon = document.createElement('i')
        const heartIcon = document.createElement('i')
        const detailsContainer = document.createElement('div')
        const animeTitle = document.createElement('div')
        const animeShortDescription = document.createElement('div')
        const rate = document.createElement('span');

        card.classList.add('card');
        cardFlip.classList.add('card-flip');
        cardFlipContainer.classList.add('card-flip-container');
        cardTitle.classList.add('card-title');
        btnView.classList.add('btn');
        btnView.classList.add('padding-unique');
        rating.classList.add('rating');
        heart.classList.add('heart');
        starIcon.classList.add('fa-regular');
        starIcon.classList.add('fa-star');
        heartIcon.classList.add('fa-regular');
        heartIcon.classList.add('fa-heart');
        detailsContainer.classList.add('details-container');
        animeTitle.classList.add('anime-title');
        animeShortDescription.classList.add('short-description');

        cardTitle.textContent = "View GIFs about this anime through the link below.";
        btnView.textContent = "View GIFs";
        animeTitle.textContent = element.attributes.titles.en;
        animeShortDescription.textContent = element.attributes.description.slice(0, element.attributes.description.indexOf('.')+1);

        card.style.backgroundImage = `linear-gradient(to top, rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0)) , url(${element.attributes.posterImage.medium})`;

        rate.textContent = `${Math.floor(element.attributes.averageRating / 10)}`


        cardFlipContainer.appendChild(cardTitle);
        cardFlipContainer.appendChild(btnView);
        cardFlip.appendChild(cardFlipContainer);

        rating.appendChild(starIcon);
        rating.appendChild(rate);
        heart.appendChild(heartIcon);

        card.appendChild(cardFlip);
        card.appendChild(rating);
        card.appendChild(heart);

        detailsContainer.appendChild(animeTitle);
        detailsContainer.appendChild(animeShortDescription);

        card.appendChild(detailsContainer);

        cardSection.appendChild(card);
    })
}


// fetch('https://kitsu.io/api/edge/anime?filter[text]=hunter+movie')
// .then(response => response.json())
// .then(response => renderCards(response))
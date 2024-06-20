// Milestone 1 - Leggiamo per bene il nostro array di oggetti che rappresentano ciascun post, così da capire bene i dati come sono strutturati;
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// Funzione per generare il layout dei post utilizzando innerHTML
function generatePostlayout(posts) {
    //  prendiamo il riferimento dal html per richiamare il container
    const container = document.getElementById('container');
    // creazione di una variabile vuota per l'inserimento del nostro markup dei post
    let htmlMarkup = '';


    // ciclo for each per costruire il markup cell'html per ciascuno dei post , utilizzando template viene aggiunto alla stringa html del dom.
    posts.forEach(element => {

        // verifica gli oggetti post generati nel ciclo dei posts
        // console.log(post);

        htmlMarkup += `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>
                </div>
                <div class="post__text">${element.content}</div>
                <div class="post__image">
                    <img src="${element.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" href="#" data-postid="${element.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
        // utilizziamo il container con la const di riferimento creata in precedenza per stampare nell'html ed inserire tutti i post dinamici
            container.innerHTML =  htmlMarkup;

            // // verifica elementi html in console
            // console.log(html);



         // Aggiungi gestore di eventi per i bottoni "Mi Piace"
         const likeButtons = document.querySelectorAll('.js-like-button');
         likeButtons.forEach(button => {
             button.addEventListener('click', likeButtonClick);
         });
     }

     function likeButtonClick(event) {
        event.preventDefault(); 
         const button = event.currentTarget;
         const postElement = button.closest('.post');
         const likesCounter = postElement.querySelector('.js-likes-counter');
         let currentLikes = parseInt(likesCounter.innerText);

         // Simuliamo un toggle di classe per il bottone "Mi Piace"
         button.classList.toggle('like-button--liked');

         // Incrementiamo o decrementiamo il contatore dei likes
         if (button.classList.contains('like-button--liked')) {
             currentLikes++;
         } else {
             currentLikes--;
         }

         // Aggiorniamo il contatore dei likes nell'HTML
         likesCounter.innerText = currentLikes;
     }

        // Chiamata alla funzione per generare il layout dei post
        generatePostlayout(posts);
           

// Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. 








// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

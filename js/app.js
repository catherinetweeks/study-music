// create lists for each 'genre'
const soothingList = [
<<<<<<< HEAD
    'https://www.youtube.com/embed/rqRp0_O4ZaU?si=Kd613A_bkoCyy6xZ',
    'https://www.youtube.com/embed/xFvwf199hPE?si=kyr2nO3CDCV4ZnJr',
    'https://www.youtube.com/embed/6V5XXwsAb-8?si=TEL69BAg5w7Ufu_l',
];

const upbeatList = [
    'https://www.youtube.com/embed/inYhcA3ZhzQ?si=zTenfMvWPHdaUjAS',
    'https://www.youtube.com/embed/8T9rQQwfYgQ?si=7JvGajtkUxw5CdgV'
];

const classicalList = [
    'https://www.youtube.com/embed/7e7eaAD7tus?si=1DxOj7_oCbue20z0',
    'https://www.youtube.com/embed/YYeHdpdjoeg?si=h0qfw4QkZW7kAbga',
    'https://www.youtube.com/embed/CyqHICzufP8?si=bAuvzbkt_vEqcvb9',
    'https://www.youtube.com/embed/pXD2rZHzIns?si=W84-jlNqDT3wajCa'
];

const jazzList = [
    'https://www.youtube.com/embed/fFrgAHp-OwY?si=2NPGbApcMIGtt6yh',
    'https://www.youtube.com/embed/VaeUC9DhU2I?si=9ASsCSx7eFVS-pG0',
    'https://www.youtube.com/embed/mesRhn_OWA8?si=NkgvoMYnAqA47EqB',
    'https://www.youtube.com/embed/Llour2YvsiI?si=sG0GwFnQZswQmK_y',
    'https://www.youtube.com/embed/i3qIAZr-iWU?si=QAH7y6FGZYkiidMa',
    'https://www.youtube.com/embed/tE-zuROmEtA?si=MR-fq94550XTzlhH',
    'https://www.youtube.com/embed/osszvKODeTM?si=gMe75a49g89CkF3A'
];

const lofiList = [
    'https://www.youtube.com/embed/yDVuQD-CAvE?si=1XjNJLEesoghUcQd',
    'https://www.youtube.com/embed/XGTIVDt7CfU?si=wYblMhFXhWX0TH-I',
    'https://www.youtube.com/embed/H7uVs7mFmgg?si=7rLWZv42ShJXYXEv',
    'https://www.youtube.com/embed/th8sZnMm9Nw?si=MBkhNRl7u56Q7CY2',
    'https://www.youtube.com/embed/3C_KO2Fmqes?si=KiW2Ya_RAZqVrVxh',
    'https://www.youtube.com/embed/rrgOMpENU_Q?si=D5dNIueJ7wIYNzaq',
    'https://www.youtube.com/embed/pXuTAd3mTCw?si=mIYQCVq4U-yyVUEK'
];

const chillList = [
    'https://www.youtube.com/embed/XP2aVXSTPQE?si=Jn7BIuX1cvtTQfml',
    'https://www.youtube.com/embed/hsfScVJgGOw?si=Ut3GFX5WBgcn08Bf',
    'https://www.youtube.com/embed/8Q3cX7N8ahw?si=E6mfx1O6zADa9xFE'
];


// Function to play a random video from each genre
function playRandomVideo(genre) {
    if (!genre || genre.length === 0) return; // Exit if no genre or genre list is empty

    const randomVideo = genre[Math.floor(Math.random() * genre.length)];
    const videoContainer = document.createElement("div");
    videoContainer.innerHTML = `<iframe width="560" height="315" src="${randomVideo}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;

    // Remove any existing video and add the new one so user can randomize again
    const existingVideo = document.querySelector('iframe');
    if (existingVideo) existingVideo.remove();
    document.body.appendChild(videoContainer);
}

// Determine the current genre and attach event listener
document.addEventListener("DOMContentLoaded", () => {
    const selectedGenre = document.querySelector("h1").textContent.toLowerCase();
    const button = document.getElementById("randomize");

    // Mapping genres to respective lists
    let genre;
    if (selectedGenre === "soothing music") {
        genre = soothingList;
    } else if (selectedGenre === "upbeat music") {
        genre = upbeatList;
    } else if (selectedGenre === "classical music") {
        genre = classicalList;
    } else if (selectedGenre === "relaxing jazz music") {
        genre = jazzList;
    } else if (selectedGenre === "lofi music") {
        genre = lofiList;
    } else if (selectedGenre === "chill music") {
        genre = chillList;
    }

    // Button to play a random video from the selected list
    if (button && genre) {
        button.addEventListener("click", () => playRandomVideo(genre));
    }
});
=======
    'https://www.youtube.com/watch?v=rqRp0_O4ZaU',
    'https://www.youtube.com/watch?v=xFvwf199hPE&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=33&t=13055s',
    'https://www.youtube.com/watch?v=6V5XXwsAb-8&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=26&t=501s',
];

const upbeatList = [
    'https://www.youtube.com/watch?v=inYhcA3ZhzQ',
    'https://www.youtube.com/watch?v=8T9rQQwfYgQ&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=19&t=846s',
    'https://www.youtube.com/watch?v=XP2aVXSTPQE&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=12&t=1233s'
];

const classicalList = [
    'https://www.youtube.com/watch?v=7e7eaAD7tus',
    'https://www.youtube.com/watch?v=YYeHdpdjoeg',
    'https://www.youtube.com/watch?v=CyqHICzufP8&t=1s',
    'https://www.youtube.com/watch?v=pXD2rZHzIns&t=550s'
];

const jazzList = [
    'https://www.youtube.com/watch?v=fFrgAHp-OwY',
    'https://www.youtube.com/watch?v=VaeUC9DhU2I',
    'https://www.youtube.com/watch?v=mesRhn_OWA8',
    'https://www.youtube.com/watch?v=Llour2YvsiI',
    'https://www.youtube.com/watch?v=i3qIAZr-iWU',
    'https://www.youtube.com/watch?v=tE-zuROmEtA',
    'https://www.youtube.com/watch?v=osszvKODeTM&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=90&t=1016s'
];

const lofiList = [
    'https://www.youtube.com/watch?v=yDVuQD-CAvE',
    'https://www.youtube.com/watch?v=XGTIVDt7CfU&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=65&t=200s',
    'https://www.youtube.com/watch?v=H7uVs7mFmgg&t=2316s',
    'https://www.youtube.com/watch?v=th8sZnMm9Nw&t=1311s',
    'https://www.youtube.com/watch?v=3C_KO2Fmqes&t=1056s',
    'https://www.youtube.com/watch?v=rrgOMpENU_Q&t=167s',

];

const chillList = [
    'https://www.youtube.com/watch?v=XP2aVXSTPQE&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=12&t=1233s',
    'https://www.youtube.com/watch?v=hsfScVJgGOw&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=49&t=1042s',
    'https://www.youtube.com/watch?v=8Q3cX7N8ahw&list=PL1bLldq1EpZb166P2KBlucQJDL_WzgUOi&index=10&t=1302s'
]

>>>>>>> origin/main

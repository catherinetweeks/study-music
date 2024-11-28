// create lists for each 'genre'
const soothingList = [
    'https://www.youtube.com/embed/rqRp0_O4ZaU?si=Kd613A_bkoCyy6xZ',
    'https://www.youtube.com/embed/xFvwf199hPE?si=kyr2nO3CDCV4ZnJr',
    'https://www.youtube.com/embed/6V5XXwsAb-8?si=TEL69BAg5w7Ufu_l',
    'https://www.youtube.com/embed/j-2GbL1qc_Y?si=EUkEd545mbA19-LD'
];

const upbeatList = [
    'https://www.youtube.com/embed/inYhcA3ZhzQ?si=zTenfMvWPHdaUjAS',
    'https://www.youtube.com/embed/ehaHxdVMsbo?si=i_9r5vsK-leBFPVR',
    'https://www.youtube.com/embed/eoWMzCXBqBw?si=z42nP837oL_LqDkc"',
    'https://www.youtube.com/embed/fomwC_-FQ70?si=lAquw-_C8BPueYCC"'
];

const classicalList = [
    'https://www.youtube.com/embed/6fyn-OqHL70?si=CFc0a5aXXUAFTiS3',
    'https://www.youtube.com/embed/js6zXgxk0cQ?si=PFUK2sg4UPXMg_eF',
    'https://www.youtube.com/embed/xm0zT8Sim3c?si=3t0CUeCCWG21DJiN',
    'https://www.youtube.com/embed/V0Q1Ed_lO-4?si=npKT5LB4BRqfTJTC',
    'https://www.youtube.com/embed/-0JMxWcyZlk?si=VDKVv-SUKEqbWY0P'
];

const jazzList = [
    'https://www.youtube.com/embed/mesRhn_OWA8?si=NkgvoMYnAqA47EqB',
    'https://www.youtube.com/embed/Llour2YvsiI?si=sG0GwFnQZswQmK_y',
    'https://www.youtube.com/embed/tE-zuROmEtA?si=MR-fq94550XTzlhH',
    'https://www.youtube.com/embed/osszvKODeTM?si=gMe75a49g89CkF3A'
];

const lofiList = [
    'https://www.youtube.com/embed/XGTIVDt7CfU?si=wYblMhFXhWX0TH-I',
    'https://www.youtube.com/embed/H7uVs7mFmgg?si=7rLWZv42ShJXYXEv',
    'https://www.youtube.com/embed/th8sZnMm9Nw?si=MBkhNRl7u56Q7CY2',
    'https://www.youtube.com/embed/3C_KO2Fmqes?si=KiW2Ya_RAZqVrVxh',
    'https://www.youtube.com/embed/rrgOMpENU_Q?si=D5dNIueJ7wIYNzaq',
    'https://www.youtube.com/embed/pXuTAd3mTCw?si=mIYQCVq4U-yyVUEK'
];



let lastPlayedVideo = ''; // Keep track of the last played video

// Function to play a random video from each genre
function playRandomVideo(genre) {
    if (!genre || genre.length === 0) return; // Exit if no genre or genre list is empty

    let randomVideo;
    do {
        // Select a random video
        randomVideo = genre[Math.floor(Math.random() * genre.length)];
    } while (randomVideo === lastPlayedVideo); // Ensure it's not the same as the last played video

    // Update the last played video
    lastPlayedVideo = randomVideo;

    const videoContainer = document.getElementById("videoContainer");

    // Clear any previous video
    videoContainer.innerHTML = `
        <iframe 
            width="784" 
            height="441" 
            src="${randomVideo}" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
        </iframe>`;
}

// Determine the current genre and attach event listener
document.addEventListener("DOMContentLoaded", () => {
    const selectedGenre = document.querySelector("h1").textContent.toLowerCase();
    const randomButton = document.getElementById("randomize");

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
    }

    // Button to play a random video from the selected list
    if (randomButton && genre) {
        randomButton.addEventListener("click", () => playRandomVideo(genre));
    }
});

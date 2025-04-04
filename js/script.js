function welcome() {
    console.log("Pozdrawiam wszystkich! Mam nadzieję, że moja praca Wam się spodoba!");
}

welcome();

let tableContainer = document.querySelector(".js-tableContainer");

let tableToggleButton = document.querySelector(".js-tableToggleButton");

let catGallery = document.querySelector(".js-catGallery");
let removeCatGalleryButton = document.querySelector(".js-removeCatGalleryButton");

let dogGallery = document.querySelector(".js-dogGallery");
let removeDogGalleryButton = document.querySelector(".js-removeDogGalleryButton");

let corgiGallery = document.querySelector(".js-corgiGallery");
let removeCorgiGalleryButton = document.querySelector(".js-removeCorgiGalleryButton");

let duckGallery = document.querySelector(".js-duckGallery");
let removeDuckGalleryButton = document.querySelector(".js-removeDuckGalleryButton");

let capybaraGallery = document.querySelector(".js-capybaraGallery");
let removeCapybaraGalleryButton = document.querySelector(".js-removeCapybaraGalleryButton");

let removeAllMedia = document.querySelector(".js-removeAllMedia");
let removeAllMediaButton = document.querySelector(".js-removeAllMediaButton");

let refreshPage = document.querySelector(".js-refreshPageButton");

removeCatGalleryButton.addEventListener("click", () => {
    catGallery.remove();
    removeCatGalleryButton.remove();
});

removeDogGalleryButton.addEventListener("click", () => {
    dogGallery.remove();
    removeDogGalleryButton.remove();
});

removeCorgiGalleryButton.addEventListener("click", () => {
    corgiGallery.remove();
    removeCorgiGalleryButton.remove();
});

removeDuckGalleryButton.addEventListener("click", () => {
    duckGallery.remove();
    removeDuckGalleryButton.remove();
});

removeCapybaraGalleryButton.addEventListener("click", () => {
    capybaraGallery.remove();
    removeCapybaraGalleryButton.remove();
});

removeAllMediaButton.addEventListener("click", () => {
    catGallery.remove();
    dogGallery.remove();
    corgiGallery.remove();
    duckGallery.remove();
    capybaraGallery.remove();
    removeCatGalleryButton.remove();
    removeDogGalleryButton.remove();
    removeCorgiGalleryButton.remove();
    removeDuckGalleryButton.remove();
    removeCapybaraGalleryButton.remove();
    removeAllMedia.remove();
    removeAllMediaButton.remove();
});

refreshPage.addEventListener("click", () => {
    location.reload(true);
});

let showHideTable = () => {
    if (tableContainer.style.display === "none") {
        tableContainer.style.display = "block";
        tableToggleButton.innerText = "Ukryj tabele";
    } else {
        tableContainer.style.display = "none";
        tableToggleButton.innerText = "Pokaż tabele";
    }
};  

tableToggleButton.addEventListener("click", showHideTable);
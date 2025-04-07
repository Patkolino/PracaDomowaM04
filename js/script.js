{
    const welcome = () => {
        console.log("Pozdrawiam wszystkich! Mam nadzieję, że moja praca Wam się spodoba!");
    };

    const catGallery = document.querySelector(".js-catGallery");
    const removeCatGalleryButton = document.querySelector(".js-removeCatGalleryButton");

    const onRemoveCatGalleryClick = () => {
        catGallery.remove();
        removeCatGalleryButton.remove();
    };

    const dogGallery = document.querySelector(".js-dogGallery");
    const removeDogGalleryButton = document.querySelector(".js-removeDogGalleryButton");

    const onRemoveDogGalleryClick = () => {
        dogGallery.remove();
        removeDogGalleryButton.remove();
    };

    const removeCorgiGalleryButton = document.querySelector(".js-removeCorgiGalleryButton");
    const corgiGallery = document.querySelector(".js-corgiGallery");

    const onRemoveCorgiGalleryClick = () => {
        corgiGallery.remove();
        removeCorgiGalleryButton.remove();
    };

    const duckGallery = document.querySelector(".js-duckGallery");
    const removeDuckGalleryButton = document.querySelector(".js-removeDuckGalleryButton");

    const onRemoveDuckGalleryClick = () => {
        duckGallery.remove();
        removeDuckGalleryButton.remove();
    };

    const removeCapybaraGalleryButton = document.querySelector(".js-removeCapybaraGalleryButton");
    const capybaraGallery = document.querySelector(".js-capybaraGallery");

    const onRemoveCapybaraGalleryClick = () => {
        capybaraGallery.remove();
        removeCapybaraGalleryButton.remove();
    };

    const tableContainer = document.querySelector(".js-tableContainer");
    const tableState = document.querySelector(".js-tableStateToggle");
    const tableToggleButton = document.querySelector(".js-tableToggleButton");

    const tableShow = () => {
        tableContainer.style.display = "block";
        tableState.innerText = "Ukryj ";
    };

    const tableHide = () => {
        tableContainer.style.display = "none";
        tableState.innerText = "Pokaż ";
    };

    const tableToggle = () => {
        tableContainer.style.display === "none" ? tableShow() : tableHide();
    };

    const refreshPageButton = document.querySelector(".js-refreshPageButton");

    const onRefreshPageClick = () => {
        location.reload(true);
    };

    const removeAllMediaButton = document.querySelector(".js-removeAllMediaButton");
    const removeAllMedia = document.querySelector(".js-removeAllMedia");

    const onRemoveAllMediaClick = () => {
        removeAllMedia.remove();
        removeAllMediaButton.remove();
        onRemoveCatGalleryClick();
        onRemoveDogGalleryClick();
        onRemoveCorgiGalleryClick();
        onRemoveDuckGalleryClick();
        onRemoveCapybaraGalleryClick();
    };

    const init = () => {
        removeCatGalleryButton.addEventListener("click", onRemoveCatGalleryClick,);
        removeDogGalleryButton.addEventListener("click", onRemoveDogGalleryClick);
        removeCorgiGalleryButton.addEventListener("click", onRemoveCorgiGalleryClick);
        removeDuckGalleryButton.addEventListener("click", onRemoveDuckGalleryClick);
        removeCapybaraGalleryButton.addEventListener("click", onRemoveCapybaraGalleryClick);
        tableToggleButton.addEventListener("click", tableToggle);
        refreshPageButton.addEventListener("click", onRefreshPageClick);
        removeAllMediaButton.addEventListener("click", onRemoveAllMediaClick);

        welcome();
    };

    init();

}
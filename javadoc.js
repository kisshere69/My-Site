document.addEventListener("DOMContentLoaded", () => {
    const videoListContainer = document.querySelector(".video-list-container");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    const scrollAmount = 300; // Adjust the scroll amount as needed

    leftBtn.addEventListener("click", () => {
        videoListContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        videoListContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});
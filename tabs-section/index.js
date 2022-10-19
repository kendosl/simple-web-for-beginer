const tabsEl = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabsEl.addEventListener("click", (event) => {
    // console.log(event.target.dataset.id);
    const id = event.target.dataset.id;

    btns.forEach((btn) => {
        btn.classList.remove("live")
    });
    event.target.classList.add("live");

    articles.forEach((article) => {
        article.classList.remove("live");
    });

    const articleEl = document.getElementById(id);
    articleEl.classList.add("live");
});
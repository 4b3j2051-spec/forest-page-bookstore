
const bookList = document.getElementById("bookList");

document.getElementById("prev").addEventListener("click", function () {
    bookList.scrollBy({
        left: -360,
        behavior: "smooth"
    });
});

document.getElementById("next").addEventListener("click", function () {
    bookList.scrollBy({
        left: 360,
        behavior: "smooth"
    });
});


const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(function (card) {
    function flip() {
        card.classList.toggle("is-flipped");
    }

    card.addEventListener("click", function (event) {
        // 點擊背面的連結時，直接前往指定頁面
        if (event.target.closest("a")) {
            return;
        }

        flip();
    });

    // 讓鍵盤也能操作卡片
    card.addEventListener("keydown", function (event) {
        if (
            event.target === card &&
            (event.key === "Enter" || event.key === " ")
        ) {
            event.preventDefault();
            flip();
        }
    });
});

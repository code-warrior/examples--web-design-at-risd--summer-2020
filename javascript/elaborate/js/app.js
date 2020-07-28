window.onload = () => {
    let body = document.querySelector(`body`);
    let button = document.querySelector(`button`);
    let h1 = document.querySelector(`h1`);

    button.addEventListener(`click`, () => {
        body.style.backgroundColor = `yellow`;
        h1.textContent = `The BG Color Has Changed`;
    });
};

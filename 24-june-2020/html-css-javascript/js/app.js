window.onload = () => {
    let button = document.getElementsByTagName(`button`)[0];
    let span = document.getElementsByTagName(`span`)[0];

    button.addEventListener(`click`, () => {
        span.textContent = `Learn CSS before JavaScript`;
        span.style.color = `red`;
    });
};

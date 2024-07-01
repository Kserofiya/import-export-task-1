import { getRandomColor } from './utils';

function initApp() {
    console.log('Hello world!');

    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "Изменить цвет страницы";

    document.body.append(button);

    button.addEventListener('click', function () {
        document.body.style.backgroundColor = getRandomColor();
    })
}

export default initApp;
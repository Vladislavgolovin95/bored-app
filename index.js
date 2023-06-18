// Объявляем переменные 
const boredWrapper = document.getElementById('bored');
const titleNode = document.getElementById('bored__title');
const textNode = document.getElementById('bored__text');
const btnActiveNode = document.getElementById('bored__btn');

// Обработчик событий при клике на кнопку
btnActiveNode.addEventListener('click', function() {
    fetch('https://www.boredapi.com/api/activity/')
    .then(activity => activity.json())
    .then((res) => {

        const textBored = res.activity;

        textNode.innerHTML = `<p>${textBored}</p>`;
    });
    renderWrapper();
});

// Обновляем и отрисовываем блок
function renderWrapper() {
    boredWrapper.classList.add('bored-active');
    titleNode.innerText = 'Have fun!🔥';
};
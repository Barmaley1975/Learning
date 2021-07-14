let myblock; // переменная вынесена в глобальную область видимости. необходимости в этом нет, просто мне так захотелось

// нам нужно, чтобы наш код выполнялся тогда, когда наш блок уже отрисован. поэтому мы создаем слушатель события "DOMContentLoaded", который и запустит наш код после загрузки всего документа.
document.addEventListener('DOMContentLoaded', function(){
    /* здесь начало нашего кода */
    myblock = document.querySelector('.inner'); // выбираем наш блок. так делается для того, чтобы не искать его каждый раз, когда он нам понадобится. кроме того так короче писать.
    myblock.onmouseover = function(e){ // наш блок реагирует на наведение мыши
        let point = {};
        // проверяем, к какой из сторон блока курсор ближе - очевидно, оттуда он и подошел.
        let a = Math.abs(myblock.getBoundingClientRect().left - e.clientX);
        let b = Math.abs(myblock.getBoundingClientRect().right - e.clientX);
        if (a > b) {
            point.x = -1;
        } else {
            point.x = 1;
        }
        a = Math.abs(myblock.getBoundingClientRect().top - e.clientY);
        b = Math.abs(myblock.getBoundingClientRect().bottom - e.clientY);
        if (a > b) {
            point.y = -1;
        } else {
            point.y = 1;
        }
        // в зависимости от стороны, с которой подошел курсор, уводим блок от курсора
        myblock.style.left = (myblock.getBoundingClientRect().left + (10 * point.x)) + 'px';
        myblock.style.top = (myblock.getBoundingClientRect().top + (10 * point.y)) + 'px';
    }
    /* здесь конец нашего кода */
});
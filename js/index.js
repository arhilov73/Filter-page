// /**
//  * NodeList.prototype.forEach() polyfill
//  * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
//  */
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// Показ сайдбара на мобильных устройствах
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};


// Показать еще 3 карточки
const btnShowMoreCards = document.querySelector('.btn-more'); 
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
})


// Показать или скрыть контент внутри виджетов
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
    widget.addEventListener('click', function(e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})

// Proximity - кнопка Любая (1 - сбрасывает чекбоксы при выборе "Любая", 2 - сброс "Любая" при клике по другому блоку)
const checkboxAny = document.querySelector('#proximity-05');
const topProximityCheckboxes = document.querySelectorAll('[data-proximity-param]');

checkboxAny.addEventListener('change', function() {
    if (checkboxAny.checked) {
        topProximityCheckboxes.forEach(function(item) {
            item.checked = false;
        });
    }
})

topProximityCheckboxes.forEach(function(item) {
    item.addEventListener('change', function(){
        checkboxAny.checked = false;
    })
})


// Показать еще 3 опции в виджете доп.опций и скрыть кнопку "Показать еще"
const btnShowMoreOptions = document.querySelector('.show-hidden-elements');
const hiddenOptions = document.querySelectorAll('.hidden-elements');

btnShowMoreOptions.addEventListener('click', function() {
    hiddenOptions.forEach(function(addOption) {
        addOption.classList.remove('hidden-elements');
    })
    btnShowMoreOptions.classList.toggle('hidden-elements');
})

// Кнопка "Сбросить фильтры" (отменяет все "checked"; убирает 3 доп.опции; возвращает кнопку "Показать еще")
const btnReset = document.querySelector('.drop-filters');
const inputs = document.querySelectorAll('input');

btnReset.addEventListener('click', function() {
    inputs.forEach(function(checkedOff) {
        checkedOff.checked = false;
    })
    hiddenOptions.forEach(function (offOptions){
        offOptions.classList.add('hidden-elements');
    })
    btnShowMoreOptions.classList.remove('hidden-elements');
})
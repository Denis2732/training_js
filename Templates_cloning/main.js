

var elements = document.querySelectorAll('.element');
var blocks = document.querySelectorAll('.element_block');


//Добавление, удаление, клонирование дом элементов
/*elements[0].removeChild(blocks[0]);

elements[1].appendChild(blocks[0]);
elements[1].appendChild(blocks[1]);
elements[1].insertBefore(blocks[4], blocks[1]);

elements[0].appendChild(blocks[0].cloneNode());
elements[0].appendChild(blocks[0].cloneNode(true));*/


//Клонирование группы дом элементов

var template = document.querySelector('#template').content.querySelector('div');

for (var i = 0; i < 5; i++) {
	var element = template.cloneNode(true);
	element.children[0].textContent = i;
	elements[1].appendChild(element);
}


//Шаблоны
//Список элементов
var wizards = [
	{
		number: '0',
		color: 'red'
	},
	{
		number: '1',
		color: 'blue'
	},
	{
		number: '2',
		color: 'yellow'
	},
	{
		number: '3',
		color: 'violet'
	},
	{
		number: '4',
		color: 'green'
	},
];
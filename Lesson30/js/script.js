/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieList = document.querySelector('.promo__interactive-list');
const movieListItem = document.querySelectorAll('.promo__interactive-item');
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
document.querySelector('.promo__adv').remove();

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector('.promo__genre').textContent =  'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
document.querySelector('.promo__bg').style.cssText = `background: url("./img/bg.jpg") center center/cover no-repeat`;

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов

movieDB.movies.sort();
for (let i = 0; i < movieListItem.length; i++) {
    movieListItem[i].innerHTML = ('');
    movieListItem[i].append(movieDB.movies[i]);
    movieListItem[i].prepend([i + 1 + '. ']);
}


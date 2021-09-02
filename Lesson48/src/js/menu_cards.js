window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.menu__field .container');
    container.innerHTML = '';

    class MenuCard {
        constructor(src, alt, title, description, price){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
        }
        addCard(){
            const menuCardItem = document.createElement('div');
            menuCardItem.innerHTML = `
                <div class="menu__item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            container.append(menuCardItem);
        }
    }

    let fitnes = new MenuCard('img/tabs/vegy.jpg', 'vegy', 'Меню \"Фитнес\"', 'Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '229');
    let premium = new MenuCard('img/tabs/elite.jpg', 'elite', 'Меню \“Премиум\”', 'В меню \“Премиум\” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '550');
    let post = new MenuCard('img/tabs/post.jpg', 'post', 'Меню \“Постное\”', 'Меню \“Постное\” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', '430');

    // console.log(fitnes);
    // console.log(premium);
    // console.log(post);

    fitnes.addCard();
    premium.addCard();
    post.addCard();

});



// img/tabs/vegy.jpg
// vegy
// Меню "Фитнес"
// Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
// 229

// img/tabs/elite.jpg
// elite
// Меню “Премиум”
// В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!
// 550

// img/tabs/post.jpg
// post
// Меню "Постное"
// Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. 
// 430
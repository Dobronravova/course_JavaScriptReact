import {getResource} from '../services/services';

function cards() {
    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes ;
        }
        addCard(){
            const menuCardItem = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = "menu__item";
                menuCardItem.classList.add(this.classes);
            } else {
                this.classes.forEach(className => menuCardItem.classList.add(className));
            }
            menuCardItem.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            // container.append(menuCardItem);
            this.parent.append(menuCardItem);
        }
    }

    const getResource = async (url) => { //async выполнить после получения результата await
        const res = await fetch(url);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };
}

export default cards;

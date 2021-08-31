'use strict';

//https://www.udemy.com/course/javascript_full/learn/lecture/19961286#questions/15581902

const timeContainer = document.querySelectorAll('.curriculum-item-link--metadata--e17HG span');
const arr = []; 
    for (let i = 0; i < timeContainer.length; ++i) {
        let parentCheckbox = timeContainer[i].closest('.curriculum-item-link--curriculum-item--KX9MD');
        let checkboxEl = parentCheckbox.querySelector('[type="checkbox"]');
        // console.log(checkboxEl);
        // console.log(checkboxEl.checked === false);
        let item = timeContainer[i].textContent;  
        let intItem = parseInt(item);
        if ((!isNaN (intItem)) && (checkboxEl.checked === false)){
            arr.push(intItem);
        }
    }
const res = arr.reduce(((sum, current) =>  sum + current), 0);
console.log(res);









//перевести на ES6
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];


// var employersNames = [];
// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }

let employersNames = employers.filter((name) => {
    return name.length > 1;
});

employersNames = employersNames.map((name) => name.toLowerCase());


// const employersNames = employersNames.map((item) => item.toLowerCase());

// for (var i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

// function calcCash(own = 0) {
//     own = own || 0;
//     let everyCash = Array.prototype.slice.call(arguments);
//     let total = own;
//     for (var i = 0; i < everyCash[1].length; i++) {
//         total += +everyCash[1][i];
//     }
//     return total;
// }

const calcCash = (cash = 0) => cash.reduce((total, value) => total + value);

const money = calcCash(cash);

const makeBusiness = ({owner = 'Sam', director = 'Victor', cash, emp}) => {
    // director = director || 'Victor';
    const sumSponsors = sponsors.eu.concat(rus, 'unexpected sponsor'); 
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}. And we have a sponsors: ${sumSponsors}. Note. Be careful with ${eu[0]}. It's a huge risk.`);
};
makeBusiness({cash: money, emp: employersNames});
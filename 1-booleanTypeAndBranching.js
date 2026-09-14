// Задача 1
let userName;
let userBalance;

userName = 'Vova';
userBalance = "5000";

if(userName === 'admin') {
    console.log('Администратор');
} else if(!userName) {
    console.log('Гость');
} else {
    if(userBalance > 1000) {
        console.log('Постоянный покупатель');
    } else if(userBalance > 5000) {
        console.log('Вип-клиент');
    }
}

// Задача 2
let user;
let orderOwner;

user = 'netologist';
orderOwner = 'leo_tolstoy';

if(user === orderOwner) {
    console.log('Редактирование разрешено');
} else {
    console.log('Заказ нельзя редактировать')
}

// Задача 3
let bonusBalance;
let purchasesThisMonth;
let totalRate;
const standardRate = 10;
const increasedRate = 20;
const frequentBonus = 5;

totalRate = standardRate;
bonusBalance = 500;
purchasesThisMonth = 2;

if(bonusBalance > 5000) {
    totalRate = increasedRate;
}

if(purchasesThisMonth > 1) {
    totalRate += frequentBonus;
}

console.log(`Процент от покупки: ${totalRate}`);
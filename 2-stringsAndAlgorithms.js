// Задача 1
let product = 'Печенье "Юбилейное", 1 кг';
let inBasket = true;
let quantity = 5;

if(inBasket) {
    console.log(`${quantity} x ${product}`);
}

// Задача  2
let accountStatus = 'vip';;
let username = 'Vova';
let cashbackPercentage;

switch(accountStatus) {
    case 'extended':
        cashbackPercentage = 15;
        break;
    case 'premium':
        cashbackPercentage = 20;
        break;
    case 'vip':
        cashbackPercentage = 30;
        break;
    default:
        cashbackPercentage = 10;
        break;
}
console.log(`${username} | ${accountStatus} аккаунт`);
console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт`);

// Задача 3
let user = 'Killer2001';
if (user === 'admin') {
    console.log('Привет, админ!\n Проверь нет ли жалоб от пользователей!');
} else {
    console.log('Здравствуйте, ' + user + '! У нас новые поступления халвы!');
}

let newOrders = 6;
let errorOrders = 3;
// показываем сколько новых заказов, а сколько заказов с ошибкой
if (newOrders > errorOrders) {
    console.log('В магазине ' + newOrders + ' новых заказов (с ошибкой: ' + errorOrders + ')');
} else if (newOrders === errorOrders) {
    console.log('ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!');
} else {
    console.log('ВНИМАНИЕ! Ошибок (' + errorOrders + ') больше, чем новых заказов (' + newOrders + ')!');
}
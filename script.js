let budget = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let costs1 = prompt("Введите обязательную статью расходов в этом месяце.");
let price1 = prompt(" Во сколько обойдется?");
let costs2 = prompt("Введите обязательную статью расходов в этом месяце.");
let price2 = prompt(" Во сколько обойдется?");

console.log(price1);

let appData = {
    money: budget, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {
        costs1: price1,
        costs2: price2
    }, //объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: "", //объект с необязательными расходами
    income: "", //массив данных с доп. доходом
    savings: false //свойство savings
};

console.log(appData);

alert((budget-(price1+price2))/30); // Бюджет на один день
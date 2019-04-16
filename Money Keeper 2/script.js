let budget = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    money: budget, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, //объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: {}, //объект с необязательными расходами
    income: [], //массив данных с доп. доходом
    savings: false //свойство savings
};
// var j = 0;
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце."),
//         b = prompt(" Во сколько обойдется?");
//     if (j < 3) {
//         if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//             appData.expenses[a] = b;

//         } else {
//             alert("Error");
//             i = i - 1;
//             j++;
//         }
//     } else {
//         alert("Слишком много попыток, я прерываю цикл");
//         break;
//     }
// };

let i = 0;
while (i < 3) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце."),
        b = prompt(" Во сколько обойдется?");
    if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        alert("Error");
        i = i - 1;
    }

};

console.log(appData);

appData.moneyPerDay = appData.money / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Тобi пiзда")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Norm jivem")
} else {
    console.log("Error");
}

console.log(appData);
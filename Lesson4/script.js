let budget, time;

function start() { //Функция, на интерактив с пользователем
    let j = 0,
        k = 3;
    budget = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(budget) || budget == "" || budget == null) { //Цикл, на проверку ввода
        j++;
        if (j < 3) {
            budget = +prompt("Ваш бюджет на месяц? Осталось попыток " + (3 - j));
        } else {
            alert("Слишком много попыток, я прерываю цикл");
            break;
        }
    }
}




start();


let appData = {
    money: budget, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, //объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: {}, //объект с необязательными расходами
    income: [], //массив данных с доп. доходом
    savings: true,
    chooseExpenses: function () {
        let j = 0;
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце. Два раза. Количество попыток: " + (2 - i)),
                b = prompt("Сколько готовы потратить?");
            if (j < 3) {
                if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) { //Условие, на проверку ввода
                    appData.expenses[a] = b;

                } else {
                    alert("Не правильный формат данных " + (3 - j));
                    i = i - 1;
                    j++;
                }
            } else {
                alert("Слишком много попыток, я прерываю цикл");
                break;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.money / 30).toFixed();
        alert("Бюджет на день " + appData.moneyPerDay);
    },
    detectLevel: function () {
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
        if (appData.moneyPerDay < 100) {
            console.log("Тобi пiзда")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Norm jivem")
        } else {
            console.log("Error");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Введите сумму накопления?"),
                percent = +prompt("Какой процент?");

            appData.mountIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.mountIncome);
        }
    },
    chooseOptExpenses: function () {
        let j = 0,
            k = 0;
        for (let i = 0; i < 3; i++) {
            k++;
            let a = prompt("Статья необязательных расходов? Введите два раза. " + (4 - k));
            if (j < 4) {
                if ((typeof (a)) === "string" && typeof (a) != null && a != '' && a.length < 50) { //Условие, на проверку ввода
                    appData.optionalExpenses[k] = a;
                } else {
                    alert("Не правильный формат данных" + (4 - j));
                    i = i - 1;
                    j++;
                }
            } else {
                alert("Слишком много попыток, я прерываю цикл");
                break;
            }

        }
    },
    ChooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход?(Перечислить через запятую)", "");
            if ((typeof (items)) === "string" && typeof (items) != null && items != '' && items.length < 50) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что то еще?'));
                appData.income.sort();
            } else {
                alert("Ошибка ввода");
                i--;
            }

        }
        appData.income.forEach(function (item, i) {
            alert((i + 1) + ". Способы доп. заработка: " + item);
        });
    }
};

for (let key in appData) {
    alert("Наша программа включает в себя данные: " + key);
};

chooseExpenses();
chooseOptExpenses();
detectDayBudget()
checkSavings();

console.log(appData);
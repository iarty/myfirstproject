let budget, time;

function start() { //Функция, на интерактив с пользователем
    let j = 0,
        k = 3;
    budget = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(budget) || budget == "" || budget == null) { //Цикл, на проверку ввода
        j++;
        if (j < 3) {
            budget = +prompt("Ваш бюджет на месяц? Осталось попыток " + (3-j));
        } else {
            alert("Слишком много попыток, я прерываю цикл");
            break;
        }
    }
}

function chooseExpenses() { //Функция, на интерактив с пользователем
    let j = 0;
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце. Два раза. Количество попыток: " + (2-i)),
            b = prompt("Сколько готовы потратить?");
        if (j < 3) {
            if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) { //Условие, на проверку ввода
                appData.expenses[a] = b;

            } else {
                alert("Не правильный формат данных " + (3-j));
                i = i - 1;
                j++;
            }
        } else {
            alert("Слишком много попыток, я прерываю цикл");
            break;
        }
    }
}

function chooseOptExpenses() {
    let j = 0, 
        k = 0;
    for (let i = 0; i < 2; i++) {
        k++;
        let a = prompt("Статья необязательных расходов? Введите два раза. " + (3-k));
        if (j < 3) {
            if ((typeof (a)) === "string" && typeof (a) != null && a != '' && a.length < 50) { //Условие, на проверку ввода
                appData.optionalExpenses[k] = a;
            } else {
                alert("Не правильный формат данных" + (3-j));
                i = i - 1;
                j++;
            }
        } else {
            alert("Слишком много попыток, я прерываю цикл");
            break;
        }

    }
}
function checkSavings() { //Калькулятор пассивного дохода
    if (appData.savings == true) {
        let save = +prompt("Введите сумму накопления?"),
            percent = +prompt("Какой процент?");

        appData.mountIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.mountIncome);
    }
}

function detectDayBudget() { //Бюджет на один день
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    if (appData.moneyPerDay < 100) {
        console.log("Тобi пiзда")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Norm jivem")
    } else {
        console.log("Error");
    }
}

start();


let appData = {
    money: budget, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, //объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: {}, //объект с необязательными расходами
    income: [], //массив данных с доп. доходом
    savings: true //свойство savings
};


chooseExpenses();
chooseOptExpenses();

appData.moneyPerDay = (appData.money / 30).toFixed(1);
detectDayBudget()
checkSavings();

console.log(appData);
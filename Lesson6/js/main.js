let getpay = document.getElementById('start'),
	table = document.querySelectorAll('.result-table [class*="-value"]'),
	expensesItem = document.getElementsByClassName('expenses-item'),
	paymentButton = document.querySelector('.count-budget-btn'),
	expensivButton = document.querySelector('.expenses-item-btn'),
	optExpensivButton = document.querySelector('.optionalexpenses-btn'),
	optExpensivItem = document.querySelectorAll('.optionalexpenses-item'),
	income = document.querySelector('.choose-income'),
	chbox = document.querySelector('#savings'),
	summ = document.querySelector('.choose-sum'),
	percent = document.querySelector('.choose-percent'),
	year = document.querySelector('.year-value'),
	month = document.querySelector('.month-value'),
	day = document.querySelector('.day-value');
incomeMonth = document.querySelector('.monthsavings-value');
incomeYear = document.querySelector('.yearsavings-value');

let budget, time, p = false;
getpay.addEventListener('click', function () {
	let j = 0,
		k = 3;
	p = true;
	time = prompt("Введите дату в формате YYYY-MM-DD");
	budget = +prompt("Ваш бюджет на месяц?");
	while (isNaN(budget) || budget == "" || budget == null) { //Цикл, на проверку ввода
		j++;
		if (j < 3) {
			budget = +prompt("Ваш бюджет на месяц? Осталось попыток " + (3 - j));
		} else {
			alert("Слишком много попыток, я прерываю цикл");
			break;
		}
	}
	appData.money = budget;
	appData.timeData = time;
	appData.status = p;
	table[0].textContent = budget.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();
});

let appData = {
	savings: false,
	money: budget, //бюджет (передаем сюда переменную из п.2)
	timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
	expenses: {}, //объект с обязательными расходами - expenses (смотри пункт 4)
	optionalExpenses: {}, //объект с необязательными расходами
	income: [], //массив данных с доп. доходом
};

expensivButton.addEventListener('click', function () {
	if (appData.status == true) {
		let j = 0,
			sum = 0;
		for (let i = 0; i < expensesItem.length; i++) {
			let a = expensesItem[i].value,
				b = expensesItem[++i].value;
			if (j < 3) {
				if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) { //Условие, на проверку ввода
					appData.expenses[a] = b;
					sum += +b;

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
		table[3].textContent = sum.toFixed();
		appData.fix = sum;
	} else {
		alert('Нажмите кнопку Начать расчет');
	};
});

optExpensivButton.addEventListener('click', function () {
	if ((appData.status) == true) {
		for (let i = 0; i < optExpensivItem.length; i++) {
			let a = optExpensivItem[i].value;
			if ((typeof (a)) === "string" && typeof (a) != null && a != '' && a.length < 50) { //Условие, на проверку ввода
				appData.optionalExpenses[i] = a;
				table[4].textContent += appData.optionalExpenses[i] + ' ';
			} else {
				alert("Не правильный формат данных" + (4 - j));
				i = i - 1;
			}
		};
	} else {
		alert('Нажмите кнопку Начать расчет');
	};
});

paymentButton.addEventListener('click', function () {
	if ((appData.status) == true) {
		if ((appData.fix) != undefined && (appData.money) != undefined) {
			appData.moneyPerDay = ((appData.money - appData.fix) / 30).toFixed();
			table[1].textContent = appData.moneyPerDay;
			if (appData.moneyPerDay < 100) {
				table[2].textContent = "Тобi Пiзда";
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
				table[2].textContent = "Norm jivem";
			} else if (appData.moneyPerDay > 2000) {
				table[2].textContent = "Лакшери лайф";
			} else {
				table[2].textContent = "Хуй Пизда Джигурда"
			}
		} else {
			alert('Нет необходимых данных для расчета');
		};
	} else {
		alert('Нажмите кнопку Начать расчет');
	}
});

income.addEventListener('input', function () {
	if ((appData.status) == true) {
		let items = income.value;
		if ((typeof (items)) === "string" && typeof (items) != null && items != '' && items.length < 50) {
			appData.income = items.split(',');
			table[5].textContent = appData.income;
		} else {
			console.log("Ошибка ввода");
		};
	} else {
		alert('Нажмите кнопку Начать расчет');
	};
});

chbox.addEventListener('click', function () {
	if ((appData.status) == true) {
		if ((appData.savings) == false) {
			appData.savings = true;
		} else {
			appData.savings = false;
		};
	};
});

percent.addEventListener('input', function () {
	if ((appData.status) == true) {
		if (appData.savings == true) {
			let s = +summ.value,
				p = +percent.value;
			appData.mountIncome = s / 100 / 12 * p;
			appData.yearIncome = s / 100 * p;

			table[6].textContent = appData.mountIncome.toFixed(1);
			table[7].textContent = appData.yearIncome.toFixed(1);

		};
	};
});
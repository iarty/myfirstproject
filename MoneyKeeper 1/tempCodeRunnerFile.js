let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце."),
        b = prompt(" Во сколько обойдется?");
        if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;

        } else {
            // alert("Error");
            // i = i - 1;
        }
};
function squareOfSum() {
    let a = +prompt("Введите а"),
        b = +prompt("Введите b"),
        c;
    if ((typeof (a && b)) != null && (typeof (a && b)) === "number" && (a && b) != '') {
            c = Math.pow(a, 2) + (2 * a * b) + Math.pow(b, 2);
        } else {
            alert("Ошибка");
        }
        console.log(typeof(a));
        alert(c);
    };
    console.log(typeof(a));
    squareOfSum();
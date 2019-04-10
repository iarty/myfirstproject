let age = document.getElementById('age');
values=age.value;

function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.values);
}

showUser('Иванов', 'Иван');
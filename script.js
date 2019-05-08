' use strict ';

let money, time;

function start() {

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц ? ", '');
    }

    time = prompt("Введите дату в формате YYYY - MM - DD", '');
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

/* Решение задачи - способ с циклом "for"
for (let i = 0; i < 2; i++ ){

    let a = prompt("Введите обязательную статью расходов в этом месяце ?", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
          && a != '' && b != '' && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
    }     
} */

/* Решение задачи - способ с циклом "while"
let i = 2; //сколько раз нужно задать вопросы
while ( i != 0 ) {
    let a = prompt("Введите обязательную статью расходов в этом месяце ?", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
          && a != '' && b != '' && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
    }
    i--;    
} */

function chooseExpenses() {

    // Решение задачи - способ с циклом "do while"
    let i = 2;
    do {
        let a = prompt("Введите обязательную статью расходов в этом месяце ?", ''),
            b = prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
        }
        i--;
    } while (i != 0);
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ваш бюджет на день: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка !");
    }
}

detectLevel();


function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {


        let a = prompt("Статья необязательных расходов?", '');


        if ((typeof (a)) === "string" && (typeof (a)) != null && a != '' && a.length < 50) {
            console.log("done");
            appData.optionalExpenses[i + 1] = a;
        } else {
            console.log("bad result");
        }

    }
}

chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений ?"),
            percent = +prompt("Под какой процент ?");
        appData.monthIncome = save / 100 / 12 * percent;

        alert("В месяц с вашего депозита : " + appData.monthIncome);
    }
}

checkSavings();
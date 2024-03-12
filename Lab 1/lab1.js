let a = 5;
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1/0;
let answer = true;
let no = null;

console.log(parseInt(21 / 5) * (45 / 5));

i = 2;

a = ++i;
let b = i++;

console.log(a + " " + b + " " + i);
console.log(a > b);
console.log(b > a);
console.log(b == a);

console.log("Котик == котик " + ("Котик" == "котик"));
console.log("Котик == китик " + ("Котик" == "китик"));
console.log("Кот == Котик " + ("Кот" == "Котик"));
console.log("Привет == Пока " + ("Привет" == "Пока"));
console.log("73 == '53' " + (73 == "53"));
console.log("false == 0 " + (false == 0));
console.log("54 == true " + (54 == true));
console.log("123 == false " + (123 == false));
console.log("true == '3' " + (true == "3"));
console.log("3 == '5мм' " + (3 == "5мм"));
console.log("8 == '-2' " + (8 == "-2"));
console.log("34 == '34' " + (34 == "34"));
console.log("null == undefined " + (null == undefined));

if(prompt("Введите ФИО", "").toLowerCase().split(' ').includes("марина")){
    alert("Данные верны");
}else{
    alert("Данные не верны");
}

let countEx = prompt("Количество пройденных экзаменов");

if(countEx == 3){
    alert("Прошёл курс!");
}else if(countEx > 0 && countEx < 3){
    alert("Нужно пересдать предметов: " + (3 - countEx));
}else{
    alert("Отчислен!");
}

console.log("true + true = " + (true + true));
console.log("0 + '5' = " + (0 + '5'));
console.log("5 + 'мм' = " + (5 + 'мм'));
console.log("8 / Infinity = " + (8 / Infinity));
console.log("9 * '\n9' = " + (9 * '\n9'));
console.log("null - 1 = " + (null - 1));
console.log("'5' - 2 = " + ('5' - 2));
console.log("'5px' - 2 = " + ('5px' - 2));
console.log("true - 3 = " + (true - 3));
console.log("7 || 0 = " + (7 || 0));

for(i = 1; i <= 10; i++){
    console.log(i % 2 == 0 ? i + 2 : i + "мм");
}

let daysList = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

alert(daysList[prompt("Введите номер дня недели", "") - 1]);

let daysObj = {
    1 : 'пн',
    2 : 'вт',
    3 : 'ср',
    4 : 'чт',
    5 : 'пт',
    6 : 'сб',
    7 : 'вс'
}
console.log(daysObj[6]);

alert(daysObj[prompt("Введите номер дня недели", "")]);

console.log(func(undefined, 2, prompt("Введите число", "")));

function func(par1 = 1, par2, par3){
    return par1.toString() + par2 + par3;
}


function params1(a, b){
    return a == b ? a * 4 : a * b;
}

let params2 = function(a, b){
    return a == b ? a * 4 : a * b;
}

let params3 = (a, b) => {
    return a == b ? a * 4 : a * b;
}

console.log(params1(3, 3) + " " +  params2(3, 4) + " " + params3(2, 2));
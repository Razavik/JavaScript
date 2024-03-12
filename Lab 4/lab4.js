let choose;

//Работа со студентами
let students = new Set();

do{
    console.log("0 - Выход, 1 - Добавить студента, 2 - Удалить студента, 3 - Список студентов и их количество, 4 - Фильтр по группе, 5 - Сортировка по зачетке, 6 - Проверить студента");

    choose = +prompt("Выберите пункт");

    switch (choose){
        case 0:
            break;
        case 1:
            AddStudent();
            break; 
        case 2:
            DeleteStudent();
            break;
        case 3:
            ViewStudents();
            break;
        case 4:
            FilterStudents();
            break;
        case 5:
            SortStudents();
            break;
        case 6:
            console.log(CheckStudent());
            break;
        default:
            console.log("Неверный пункт!");
            break;
    }
}while(choose != 0);

function AddStudent(){
    let nameStudent = prompt("Введите ФИО студента", "");
    let groupIdStudent = +prompt("Введите номер группы", "");
    let recordBookStudent = +prompt("Введите номер зачётки", "");

    students.add(
        {
            name : nameStudent,
            groupId : groupIdStudent,
            recordBook : recordBookStudent
        }
    );
}

function DeleteStudent(){
    let index = prompt("Введите номер студента которого хотите удалить!", "");

    try{
        students.delete(Array.from(students)[index-1]);
        console.log(`Студент под номером ${index} удалён!`)
    }catch{
        console.log("Неверный номер студента!");
    }
}

function ViewStudents(){
    for(elem of students){
        console.log("ФИО: " + elem.name + ", группа: " + elem.groupId + ", номер зачетки: " + elem.recordBook);
    }
    console.log(students.size);
}

function FilterStudents(){
    let group = prompt("Введите номер группы"); 

    students.forEach(elem => {
        if(elem.groupId == group)
            console.log("ФИО: " + elem.name + ", группа: " + elem.groupId + ", номер зачетки: " + elem.recordBook);
    });
}

function SortStudents(){
    let arrayStudent = Array.from(students).sort(function(elem1, elem2) {
        return elem1.recordBook < elem2.recordBook ? -1 : 1;
    });

    students = new Set(arrayStudent);
}

function CheckStudent(){
    let recordBookStudent = prompt("Введите номер зачётки для проверки", "");

    let checkText = null;

    students.forEach(elem => {
        if(elem.recordBook == recordBookStudent)
            return checkText = "Данный студент существует!";
    });
    return checkText != null ? checkText : "Данный студент не существует!";
} 



//Работа с товарами
let products = new Map();

do{
    console.log("0 - Выход, 1 - Добавить товар, 2 - Вывести товары, 3 - Удалить товар по id, 4 - Удалить товар по названию, 5 - Изменить количество товара по id, 6 - Изменить цену товара по id, 7 - Посчитать количество позиций и общую стоимость");
    choose = +prompt("Выберите пункт", "");

    switch(choose){
        case 0:
            break;
        case 1:
            AddProduct();
            break;
        case 2:
            ViewProducts();
            break;
        case 3:
            DeleteProductById();
            break;
        case 4:
            DeleteProductByName();
            break;
        case 5:
            ChangeCountProduct();
            break;
        case 6:
            ChangePriceProduct();
            break;
        case 7:
            CalcCountPosition();
            break;
        default:
            console.log("Неверный пункт!");
            break;
    }
}while(choose != 0);

function AddProduct(){
    let id = parseInt(prompt("Введите id товара", ""));
    let name = prompt("Введите название товара", "");
    let count = parseInt(prompt("Введите количество товара", ""));
    let price = parseFloat(prompt("Введите цену товара", ""));

    products.set(id, {
        name : name,
        count : count,
        price : price,
    });
}

function ViewProducts(){
    products.forEach((value, key) => {
        console.log("Id: " + key + ", название товара: " + value.name + ", количество: " + value.count + ", цена: " + value.price)
    })
}

function DeleteProductById(){
    let id = prompt("Введите id товара для удаления", "");

    products.delete(id);
}

function DeleteProductByName(){
    let name = prompt("Введите название товара для удаления", "");

    products.forEach((value, key) => {
        if(name == value.name){
            products.delete(key);
            return;
        }
    });
}

function ChangeCountProduct(){
    let id = +prompt("Введите id товара для изменения количества");

    if(!Array.from(products.keys()).includes(id)){
        console.log("Данного товара нет!")
        return;
    }
    let count = +prompt("Введите новое количество товара");

    products.set(id, {
        name : products.get(id).name,
        count : count,
        price : products.get(id).price
    });
}

function ChangePriceProduct(){
    let id = parseInt(prompt("Введите id товара для изменения цены"));

    if(!products.has(id)){
        console.log("Данного товара нет!")
        return;
    }

    let price = parseFloat(prompt("Введите новую цену товара"));

    products.set(id, {
        name : products.get(id).name,
        count : products.get(id).count,
        price : price
    });
}

function CalcCountPosition(){
    let countPos = 0;
    let totalCost = 0;

    products.forEach(elem => {
        countPos++;
        totalCost += elem.price * elem.count;
    });

    console.log("Количество позиций: " + countPos + ", общая стоимость: " + totalCost);
}

let cache = new WeakMap();

function cacheFunction(key, a, b) {
    if (cache.has(key)) {
        console.log("Использование кэша");
        return cache.get(key);
    }

    let result = sum(a, b);
    cache.set(key, result);
    
    console.log("Вычисление и сохранение в кэше");
    return result;        
}

let sum = (a, b) => a + b;

let key1 = {};
let key2 = {};

console.log(cacheFunction(key1, 1, 2));
console.log(cacheFunction(key2, 1, 3));
console.log(cacheFunction(key1, 1, 4));
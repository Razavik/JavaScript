console.log(BasicOperation(prompt("Введите оператор", ""), prompt("Введите значение", ""), prompt("Введите значение", "")));

function BasicOperation(oper, value1, value2){
    if(oper == '+'){
        return +value1 + +value2;
    }
    else if(oper == "-"){
        return value1 - value2;
    }
    else if (oper == '*'){
        return value1 * value2;
    }
    else if (oper == '/'){
        return value1 / value2;
    }
    else{
        alert("Введён неверный оператор!");
    }
}

console.log(CubeValue(prompt("Введите число", "")));

function CubeValue(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i ** 3;
    }
    return sum;
}

console.log(ReverseStr(prompt("Введите строку", "")));

str = "hello"

str = str.replace(/l/, '1')

function ReverseStr(str){
    str = str.toString();
    
    for(let i = 0; i < str.length; i++){
        if(!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z'))){
            str = str.replace(str[i], '');
            i--;
        }
    }

    return str.split('').reverse().join('');
}

console.log(RepeatStr(prompt("Количество дублирований", ""), prompt("Введите строку", "")));

function RepeatStr(n, str){
    let new_str = '';

    for(let i = 0; i < n; i++){
        new_str += str;
    }

    return new_str;
}

console.log(createList())

function createList(){
    let list1 = [1, 2, 3, 8]
    let list2 = [5, 1, 7, 2]
    let list3 = []

    list1.forEach(element => {
        if(!list2.includes(element)){
            list3.push(element)
        }
    })

    return list3
}
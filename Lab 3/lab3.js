let list1 = [1, [1, 2, [3, 4]], [2, 4]];
let list2 = [5, [3, 4]];

console.log(CreateList(list1).concat(CreateList(list2)));

function CreateList(list){
    return list.reduce((arr, cur) => {
        if(Array.isArray(cur)){
            return arr.concat(CreateList(cur));
        }
        else{
            return arr.concat(cur);
        }
    }, [])
}

let sum = 0;

CreateList(list1).forEach(element => {
    sum += element;
});

console.log(sum)

students = [
    {
        name : "Даниил",
        age : 18,
        groupId : 2
    },
    {
        name : "Матвей",
        age : 18,
        groupId : 2
    },
    {
        name : "Никита",
        age : 16,
        groupId : 3
    },
    {
        name : "Женя",
        age : 19,
        groupId : 4
    }
];


console.log(CreateObjectStudents(students));

function CreateObjectStudents(students){
    let new_students = {};

    students.forEach(element =>{
        if(element["age"] > 17){
            if(new_students[element["groupId"]] == null){
                new_students[element["groupId"]] = [element["name"]];
            }
            else{
                new_students[element["groupId"]].push(element["name"]);
            }
        }
    })
    return new_students;
}

console.log(CreateStrAscii("ABC"))

function CreateStrAscii(asciiStr){
    let total1 = "";
    let total2 = "";

    asciiStr.split('').forEach(elem => {
        total1 += elem.charCodeAt(0).toString();
    })

    total2 = total1.replace(/7/, '1');

    console.log(total1 + " " + total2);
    
    return total1 - total2;
}

console.log(Extend({a: 1, b: 2}, {a: 3, c: 3}, {d: 3, b: 3}));

function Extend(...objects){
    let newObj = {};
    
    for(let obj of objects){
        Object.assign(newObj, ...Object.keys(obj)
                                  .filter(key => !(key in newObj))
                                  .map(key => ({[key] : obj[key]}))
        );
    }
    
    return newObj;
}

console.log(CreatePyram(prompt("Введите количество звёзд", "")));

function CreatePyram(height = 3){
    let stars = -1;
    let pyram = [];

    for(let space = height - 1; space >= 0; space--){
        pyram.push(" ".repeat(space) + "*".repeat(stars += 2) + " ".repeat(space));
    }

    return pyram;
}

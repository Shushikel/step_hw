let userInfo = ["Вася",1981,"Андрей",1994,"Ростислав",2007,];
let year = 2021;
let averAge;
let firstPerson = age(0);
let secondPerson = age(1);
let thirdPerson = age(2);

let firstPersonName = user(0);
let secondPersonName = user(1);
let thirdPersonName = user(2);

let workCheckFirst = check(0);
let workCheckSecond = check(1);
let workCheckThird = check(2);

 console.log(`Имя 1 кандидата: ${firstPersonName} Возраст 1 кандидата ${firstPerson}. Вердикт по 1 кандидату:${workCheckFirst}`);
 console.log(`Имя 2 кандидата ${secondPersonName} Возраст 2 кандидата ${secondPerson}. Вердикт по 2 кандидату:${workCheckSecond}`);
 console.log(`Имя 3 кандидата ${thirdPersonName} Возраст 3 кандидата ${thirdPerson}. Вердикт по 3 кандидату:${workCheckThird}`);
 console.log(`Средний возраст кандидатов ${averAge}`)
 


function age(i){
    y = userInfo[2*i+1];
    return year-y;
}

function user(i){
    b = userInfo[i+1*2];
    return b;
}

function check(i){
    if(18 <= firstPerson <= 40, 18 <= secondPerson <= 40, 18 <= thirdPerson <= 40){
    return i = `Подходит`;
    } 
}
/*function aver(userInfo){
    return averAge = +(firstPerson + secondPerson + thirdPerson)/3;
}*/
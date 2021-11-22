let userName=prompt(`Авторизируйтесь в системе. Введите логин`)
let balance=5000;
let choiseOption;
let withDrawal;
let wdOutсome;
let refill;
let summ;
let pinCode;
let repeat;


while(userName){
    userName=prompt(`Авторизируйтесь в системе. Введите логин`)
    if(userName===`admin`){
    alert(`Поздравляем с успешным входом в систему!`)
    choiseOption=prompt(` Выберите необходимое Вам действие:
    1. Снять деньги с карты
    2. Пополнить баланс карты
    3. Посмотреть текущий баланс карты`);



    if(choiseOption==`1`){
        withDrawal=prompt(`Введите необходимую Вам сумму`);
        if(withDrawal<= balance){
            alert(`Операция успешна. Ожидайте`);
            wdOutcome= balance-withDrawal;
            alert(`Текущий баланс Вашей карты ${wdOutcome}`);
        }else if(withDrawal > balance){
            alert(`Упс!Что-то пошло не так. Анализируем причину ошибки. Ожидаете`);
            wdOutcome= balance-withDrawal;
            alert(`Недостаточно средств на карте. Текущая разница составляет ${wdOutcome}`);
    } else{
        alert(`Ошибка доступа. Попробуйте еще раз`);
    }
        }else if(Boolean(String(withDrawal))){
            alert(`Ошибка доступа. Попробуйте еще раз`);
    } else{
        alert(`Ошибка доступа. Попробуйте еще раз`);
    }
    if(choiseOption==`2`){
        refill=prompt(`Введите предполагаемую сумму пополнения`);
        if(Boolean(Number(refill))){
        alert(`Операция успешна. Ожидайте`); 
        summ=+refill+balance;
        alert(`Денежная сумма успешно зачислена на Вашу карту.Текущий баланс ${summ}`);
        }else{
        alert(`Ошибка доступа. Попробуйте еще раз`);

        }


    }
    if(choiseOption==`3`){
        alert(`Для отображения Вашего текущего баланса введите 4-значный pin-код`); 
        pinCode=prompt(`Введите пин-код карты`);
        if(pinCode===`4587`){
            alert(`Операция успешна. Ожидайте`);
            alert(`текущий баланс Вашей карты ${balance}`); 
    } else{
        alert(`Ошибка доступа. Попробуйте еще раз`);
        continue
    }
        }else{
            alert(`Ошибка доступа. Попробуйте еще раз`);
            continue
        }
    }
    else{
        alert(`Ошибка доступа. Попробуйте еще раз`);
        continue
    }

}else{
    alert(`Ошибка доступа. Попробуйте еще раз`);
    continue
}
}
alert(`Благодарим за пользование услугами нашего онлайн-банка!`);
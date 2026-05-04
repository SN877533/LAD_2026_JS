// 1. Что выведет функция? 
// Ответ: Window
// function f() { 
// alert(this); 
// } 
// let user = { 
// g: f.bind(null), 
// }; 
// user.g(); 



// 2. Можем ли мы изменить this дополнительным связыванием? 
// Ответ: Нет, привязать контекст можно только 1 раз. Далее он будет игнорироваться.
// Но аргументы будут накапливаться
// function f() { 
// alert(this.name); 
// } 
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" }); 
// f(); 



// 3. В свойство функции записано значение. Изменится ли оно после применения bind? 
// Ответ: В исходной ф-ии  не изменится. В привязанной ф-ии этого свойства не будет, т.к.
// свойсnва не копируются при применении bind
// function sayHi() { 
// alert( this.name ); 
// } 
// sayHi.test = 5; 
// let bound = sayHi.bind({ 
// name: "Вася" 
// }); 
// alert( bound.test ); 



// 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем 
// вызвать user.loginOk/loginFail в зависимости от ответа. 
// Однако, его вызов приводит к ошибке. Почему? 
// Ответ: не передан контекст при вызове ф-ий ok и fail
// function askPassword(ok, fail) { 
// let password = prompt("Password?", ''); 
// if (password == "rockstar") ok.call(user); 
// else fail.call(user); 
// } 
// let user = { 
// name: 'Вася', 
// loginOk() { 
// alert(`${this.name} logged in`); 
// }, 
// loginFail() { 
// alert(`${this.name} failed to log in`); 
// }, 
// }; 
// askPassword(user.loginOk, user.loginFail); 



// 5. Объект user был изменён. Теперь вместо двух функций 
// loginOk/loginFail у него есть только одна – user.login(true/false). 
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла 
// вызывать функцию user.login(true) как ok и функцию user.login(false) как fail? 
// Ответ: возможно неправильно, т.к. я не только передаю в askPassword параметры, но и 
// в самой функции дописала call. А в задании только передать параметры надо было
// function askPassword(ok, fail) { 
// let password = prompt("Password?", ''); 
// if (password == "rockstar") ok.call(user, true); 
// else fail.call(user, false); 
// } 
// let user = { 
// name: 'John', 
// login(result) { 
// alert( this.name + (result ? ' logged in' : ' failed to log in') ); 
// } 
// }; 
// askPassword(user.login, user.login); 



// 6. Напишите в указанном месте конструкцию с методом bind() так, чтобы this 
// внутри функции func всегда указывал на value из переменной elem. 
// const elem = {value: 'Привет'} 
// function func(surname, name) { 
// alert(this.value + ', ' + surname + ' ' + name); 
// } 
// //Тут напишите конструкцию с bind()
// func = func.bind(elem);

// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван' 
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр' 



// 7. Есть функция которая складывает три числа.Выполните каррирование. 
//  function curry(f) {
//     return function (a){
//         return function(b) {
//             return function(c) {
//                 return f(a, b, c);
//             }
//         }
//     }
// }

// const sum = (a, b, c) => a + b + c;
// let curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(5));



// 8. Реализовать таймер-функцию используя замыкания. Функция принимает два  
// аргумента начальное значение и значение завершения. 
// Таймер движется назад.При достижении точки завершения в консоль выводится 
// значение таймера и сообщение о завершении работы таймера.
// function createTimer(start, end) {
//      let count = start;
        
//     return function () {
//         for (i = start; i >= end; i--) {
//             if (i !== end) count--;
//         }    
//         return console.log(`Работа таймера завершена ${count}`)
//     }
// }

// let timerId = createTimer(10, 3);
// timerId();

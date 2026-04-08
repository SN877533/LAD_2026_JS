// Циклы while и for 
// Решите эти задачи сначала через цикл while, а затем через цикл for. 


// 1.  Выведите столбец чисел от 1 до 100.
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}


for (let i = 1; i <= 100; i++) {
    console.log(i);
}



// 2.  Выведите столбец чисел от 11 до 33.
// let i = 11;
// while (i <= 33) {
//     console.log(i);
//     i++;
// }


// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }



// 3.  Выведите столбец четных чисел в промежутке от 0 до 100.
// let i = 0;
// while (i <= 100) {
//     if (i % 2 === 0) {
//          console.log(i);
//          i++;
//     }
//     else {
//         i++;
//         continue;
//     }
// }


// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     } else {
//         continue;
//     }
// }



// 4.  С помощью цикла найдите сумму чисел от 1 до 100.
// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     sum += i;    
//     i++;
// }
// console.log(sum)


// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i; 
// }
// console.log(sum)

// Задачи общие. 
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
// Какое число получится? Посчитайте количество итераций, необходимых для этого 
// (итерация - это проход цикла), и запишите его в переменную num.
// let n = 1000;
// let num = 0;
// while (n / 2 >= 50) {
//     n = n / 2;
//     num ++;
// }
// console.log(n);
// console.log(num);



// Функции
// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. 
// let square = num => num ** 2;
// console.log(square(3));


// 2. Сделайте функцию, которая возвращает сумму двух чисел. 
// let sum = (num1, num2) => num1 + num2;
// console.log(sum(3, 5));


// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. 
// let calculateValue = (num1, num2, num3) => (num1 - num2) / num3;
// console.log(calculateValue(5, 3, 2));


// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, 
// а возвращает день недели на русском языке. 
// let getDay = day => {
//     switch (day) {
//     case 1:
//         return "Понедельник";
//     case 2:
//         return "Вторник";
//     case 3:
//         return  "Среда";
//     case 4:
//         return  "Четверг";
//     case 5:
//         return  "Пятница";
//     case 6:
//         return  "Суббота";
//     case 7:
//         return  "Воскресенье";
//     }
// };
// console.log(getDay(6));


// 5. Сделайте функцию, которая параметрами принимает 2 числа. 
// Если эти числа равны - пусть функция вернет true, а если не равны - false. 
// let getResult = (num1, num2) => num1 === num2;
// console.log(getResult(2, 2));


// 6. Сделайте функцию, которая параметрами принимает 2 числа. 
// Если их сумма больше 10 - пусть вернет true, а если нет то - false. 
// let getResult = (num1, num2) => num1 + num2 > 10;
// console.log(getResult(2, 9));


// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
// Если отрицательное - пусть функция вернет true, а если нет - false. 
// let getResult = num => num < 0;
// console.log(getResult(-4));


// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. 
// Если это так - пусть функция возвращает true, если не так - false. 
// let isNumberInRange = num => num > 0 && num < 10;
// console.log(isNumberInRange(12));


// 9. *Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает 
// целое число и возвращает сумму его цифр.
// 1 способ, который сразу пришле в голову:

// let getDigitsSum = num => {
//     let sum = 0;
//     for (i = 0; i < String(num).length; i++) {
//         sum += +String(num)[i];        
//     }
//     return sum;
// }
// console.log(getDigitsSum(258));

// 2 способ, подсмотрела в интернете. % и Math.floor мне знакомо, сам способ нет:

// let getDigitsSum = num => {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }
// console.log(getDigitsSum(1048));


// 10. *Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи. 
// let getDigitsSum = num => {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

// for (i = 1; i <= 2020; i++){
//     if (getDigitsSum(i) === 13) console.log(i);
// }


// 11. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое 
// число и проверяет: четное оно или нет. 
// Если четное - пусть функция возвращает true, если нечетное - false. 
// let isEven = num => num % 2 === 0;
// console.log(isEven(8));


// 12. *Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
// опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). 
// Можно использовать функцию getDigitsSum из 9 задачи 
// let getDigitsSum = num => {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         };  
//         if (sum > 9) {
//             sum = getDigitsSum(sum)};     
//          return sum;
// }
// console.log(getDigitsSum(12345));


// 13. * Напишите стрелочную функцию, которая будет возвращать true если строка 
// является палиндромом и false в противном случае.
// Не стала делать с помощью reverse, но посмотрела как делать. Сделала через цикл,
// для тренировки. Но строка у меня должна быть без пробелов, потому что проблемы у меня 
// считаются за символ.
// let toReverseString = str => {
//     let newString = '';
//     for (let i = str.length-1; i >= 0; i--) {
//         newString = newString + str[i];             
//     }
//     return str === newString;
// }
// console.log(toReverseString('нннрррннн'))
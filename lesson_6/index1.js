// 1. Используя метод map() напишите код, который получает из массива строк новый массив, 
// содержащий их длины. 
// const arr = ['Первая строка', 'Вторая строка', 'Строка под номером три'];
// const newArr = arr.map(el => el.length);
// console.log(newArr);



// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. 
// Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает 
// новый массив из такого же числа элементов, в котором на каждой позиции будет находиться 
// сумма элементов массива numbers до этой позиции включительно. 
//     const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
//     let resultArr = [];

//     const currentSums = (numbers) => {numbers.forEach((element, index, numbers) => { 
//     const slicedArr = numbers.slice(0, index + 1);
//     const result = slicedArr.reduce((acc, cur) => {
//         return acc + cur
//     }, 0)
//     resultArr.push(result);
//     })

//     return resultArr;
// };
// console.log(currentSums(numbers));



// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, 
// которые в сумме должны быть равны семи: (0:7), (1:6) и т.д. 
// ???Почему если я убираю index из includes, то у меня выдаются все пары в том числе в обратном
// порядке: 0:7 7:0. Я думала, что index - это просто индекс найденного элемента, и он ни на
//  что не влияет
// const numbers = [0, 1, 2, 3, 5, 6, 7, 11, 13, 17, 19, -12, -9];
// const resultArr = [];
// numbers.forEach((element, index, numbers) => {
//     if (numbers.includes((7 - element), index)) {
//         resultArr.push('(' + element + ':' + (7 - element) + ')')
//     }    
// });
// console.log(resultArr)



// 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str. 
// const str = 'Массив состоит из первых букв слов этой строки';
// const arr = str.split(' ');
// let newArr = arr.map(el => el[0]);
// console.log(newArr);



// 5. Напишите код, создающий массив, который будет состоять из строк, состоящих из 
// предыдущего, текущего и следующего символа строки str. 
// const str = 'Создать новый массив';
// const newArr = [];
// for (i = 1; i < str.length-1; i++) {
//     newArr.push(str.slice(i - 1, i + 2))       
//     };
// console.log(newArr);



// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, 
// в массив цифр расположенных по убыванию их значений. 
// const numbers = [0, 5, 2, 19, 1, 6, 11, 7, 13, 17, 3, -12, -9];
// console.log(numbers.sort((a, b) => b - a));



// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, 
// в полученном массиве, в порядке убывания их значений через пробел.
// const numbers1 = [0, 5, 2];
// const numbers2 = [19, 1, 6];
// const numbers3 = [11, 7, 13];
// const newArr = numbers1.concat(numbers2, numbers3).sort((a, b) => b - a);
// console.log(newArr);



// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 
// const arr = [[1, 2, 3], [4, 5], [6]];
// let newArr = arr.flat();
// let sum = newArr.reduce((acc, cur) => acc + cur)
// console.log(sum)



// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в 
// обратном порядке.
// const arr = [1,2,3,4,5,6,7];
// let newArr = [];
// for (let i = arr.length-1; i >= 0; i--) {
//     console.log(newArr.push(arr[i]));
// }
//  console.log(newArr)



//10. Дан массив с числами. Узнайте сколько элементов с начала массива надо 
// сложить, чтобы в сумме получилось больше 10-ти. 
// const arr = [1,2,3,5,5,6,7];
// let sum = 0;
// let count = 0;

// arr.some((value) => {
//     sum += value;
//     count += 1;
//     if (sum > 10) {return true}
// })
// console.log(sum)
// console.log(count)



// 11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. 
// Первым параметром функция принимает значение, которым заполнять массив, а вторым - 
// сколько элементов должно быть в массиве. Пример: 
// arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. 
//  const arrayFill = (elem, num) => new Array(num).fill(elem)

//  console.log(arrayFill('x', 5))



// Из презентации: 
// 1. Написать функцию  которая будет принимать два массива, и будет сравнивать их, 
// если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает 
// true, в противном случае false. 
// const arr1 = [0,  5, 2];
// const arr2 = [0,  5, 2];

// const arrIdentic = (arr1, arr2) => {
//   return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])
// }
// console.log(arrIdentic(arr1, arr2));


//2. Написать функцию  которая будет принимать n-ое количество аргументов, в качестве 
// результата функция будет возвращать сумму всех четных элементов. Для решения 
// использовать цикл for (... of …). 
// const sumEven = (...arg) => {
//     let sum = 0;
//     for (item of arg) {
//         if (item % 2 === 0) {sum = sum + item}} 
//         return sum;     
// };

//  console.log(sumEven(1,2,3,4,5,10));



// 3. Написать функцию  которая будет принимать два массива, и в качестве результата будет
// возвращать только  те значения которые есть и в первом и во втором массиве.
// 1 способ
// const arr1 = [1, 6, 9, 15]
// const arr2 = [12, 9, 15, 1]
// const getResult = (arr1,arr2) => {
//     let newArr = [];
//     arr1.forEach(element => {
//         if (arr2.includes(element)) {newArr.push(element)}
//     }
//     );
//     return newArr;
// };
// console.log(getResult(arr1, arr2))

// 2 способ
// const arr1 = [1, 6, 9, 15]
// const arr2 = [12, 9, 15, 1]
// const getResult = (arr1,arr2) => {
//     return arr1.filter(item => arr2.some(el => el === item))
// };
// console.log(getResult(arr1, arr2))

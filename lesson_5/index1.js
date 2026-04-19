// 1. Преобразовать строку в массив слов. 
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов. 
// const stringToarray = str => str.split(" ");

// const str = 'Преобразуем строку в массив слов';
// console.log(stringToarray(str));



// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, 
// состоящую из указанного количества символов. 
// const deleteСharacters = (str, length) => str.substr(0, length) 

// console.log(deleteСharacters('Текстовая строка', 11));



// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента 
// и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр. 
// 1 способ:
// const insertDash = (str) => str.toUpperCase().split(' ').join('-')
// console.log(insertDash('Добавить тире между словами'));

// 2 способ:
// const insertDash = (str) => str.toUpperCase().replaceAll(' ', '-');
// console.log(insertDash('Добавить тире между словами'));


// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует 
// регистр первого символа строки из нижнего регистра в верхний.
//  1 способ:
// const toUpper = str => str[0].toUpperCase() + str.slice(1);
// console.log(toUpper('первый символ строки в верхний регистр'))

//  2 способ:
// const toUpper = str => str.replace(str[0], str[0].toUpperCase());
// console.log(toUpper('первый символ строки в верхний регистр'))



// 5. Напишите функцию capitalize(str), которая возвращает строку, 
// в которой каждое слово начинается с заглавной буквы.
// function capitalize(str) {
//     arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//         // arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
//     }
//     return arr.join(' ');
// } 
// console.log(capitalize('каждое слово с заглавной буквы'));



// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента 
// строку и и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ 
// оХоТнИк».
// 1 способ: 
// function changeRegister(str) {
//     newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === str[i].toUpperCase()) {            
//             newStr = newStr + str[i].toLowerCase()
//         } else {
//             newStr = newStr + str[i].toUpperCase()}
//     }
//     return newStr;
// }
// console.log(changeRegister('КаЖдЫй ОхОтНиК'))

// 2 способ: 
// function changeRegister(str) {
//     const arr =  str.split('');
//     let result = arr.map((item) => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase())
//     // более длинный способ 
//     // let result = arr.map(function(item) {
//     // if(item === item.toUpperCase()) { 
//     //     return item.toLowerCase()
//     //     } else {
//     //     return item.toUpperCase()
//     //     }
//     // });
//     return result.join('');
// }
// console.log(changeRegister('КаЖдЫй ОхОтНиК'));



// 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от 
// всех не буквенно-цифровых символов. 
// пробел тоже считаю символом
// function removeChar(str) {
//     newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         if (/^[A-Za-zА-Яа-яЁё0-9]+$/.test(str[i])) {
//             newStr = newStr + str[i]; 
//         }
//     }
//      return newStr;
// }
// console.log(removeChar('!!999В этой строке .**** тол---ько числа 8888 и буквы'));



// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины 
// числовое значение с дополнительным знаком «+» или «-» в зависимости от 
// передаваемого аргумента. 
// function zeros(num, len) {
//     let numResult;
//     numResult = +(num+'e'+len);
//     if (len < 0) {
//     return numResult.toFixed(Math.abs(len))}
//     else {return numResult}
// }
// console.log(zeros(5, 12));



// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта 
// регистра символов.
// const comparison = (str1, str2) => str1 > str2
// console.log(comparison('Первая строка', 'Вторая строка'));



// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск 
// подстроки str2 в строке str1 без учёта  регистра символов. 
// const insensitiveSearch = (str1, str2) => str1.includes(str2)

// console.log(insensitiveSearch('Здесь ищем подстроку', 'под'));



// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных 
// слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, 
// при этом каждое слово внутри строки пишется с заглавной буквы. 
// function initCap(str) {
//     let arr = str.split(' ');
//     const symb = '-';

//     for (let i = 0; i < arr.length; i++) {    
//         let elem = arr[i]; 

//         while (true) {
//             if (elem.indexOf(symb) === -1 || elem == '-') break;
                        
//             let index = elem.indexOf(symb);
//             elem = elem.replace(symb, '');
//             elem = elem[0].toUpperCase() + elem.slice(1, index) + elem[index].toUpperCase() + elem.slice(index + 1);
//         }
//         arr[i] = elem; 
//     }   
//      return arr.join(' ');
// }
// // console.log(initCap('Преобразовать в СamelСase слова светло-сине-красный, кисло-сладкий'));
// // console.log(initCap("Красно-синий дуб, ярко-жёлто-оранжевое солнце - это предложение, содержащее составные слова"));
// console.log(initCap("- Красно-синий дуб, ярко-жёлто-оранжевое солнце - это предложение, содержащее составные слова"));




// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных 
// слов строки из CamelCase в snake_case, при котором несколько слов разделяются 
// символом подчеркивания (_), причём каждое слово пишется с маленькой буквы. 
// function initSnake(str) {
//     let arr = str.split(' ');
//     let countUpper = 0;
//     let indexArr = []; 

//     for (let i = 0; i < arr.length; i++) {    
//         let elem = arr[i];
                          
//         for (let j = 0; j < elem.length; j++){        
//             if (elem[j] === elem[j].toUpperCase() && 
//                 ((elem[j].toUpperCase()>='A' && elem[j].toUpperCase()<='Я') || 
//                 (elem[j].toUpperCase()>='A' && elem[j].toUpperCase()<='Z'))) {
//                     countUpper = countUpper + 1;
//                     indexArr.push(j)
//             };            
//         }
        
//        if (countUpper > 1) {
//             for (let k = 0; k < indexArr.length; k++) {
//                 if (indexArr[k] !== 0) {     
//                     elem = elem[0].toLowerCase() + elem.slice(1, indexArr[k]) + '_' +
//                            elem[indexArr[k]].toLowerCase() + elem.slice(indexArr[k]+1);
//                     indexArr = indexArr.map((item) => item+1);
//                 }
//             } 
//             arr[i] = elem; 
//         } 
//         countUpper = 0;
//         indexArr = [];
//      }
//     return arr.join(' ');
// }

// console.log(initSnake('Преобразовать из CamelCase в snake_case слова СветлоСинеКрасный, КислоСладкий'));
// // console.log(initSnake('КрасноCиний дуб, ЯркоЖёлтоОранжевое солнце - преобразовать CamelCase в snake_case'));



// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую 
// определённое количество раз.
// function repeatStr(str, n) {
//     newStr = '';
//     for (let i = 1; i <= n; i++) {
//         newStr = newStr + str + ' ';
//     }
//     return newStr;
// }
// console.log(repeatStr('Строка для повторения', 5));

// 2 способ
// const repeatStr = (str, n) => str.repeat(n)
// console.log(repeatStr('Строка для повторения', 5));



// 14. Напишите функцию path(pathname), которая возвращает имя файла 
// (подстрока после последнего символа "\" ) из полного пути к файлу. 
// const path = pathname => pathname.slice(pathname.lastIndexOf(`\\`)+1)
// console.log(path("C:\\HTML CSS\\Методичка по верстке.pdf"));



// 15. Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием 
// исходной строки str и определяет заканчивается ли строка символами подстроки. 
// 1 способ
// const endsWith = (str1, str) => str1 === str.slice(-(str1.length))
// console.log(endsWith('Hello', 'Hello world!'));

// 2 способ
// const endsWith = (str1, str) =>str.endsWith(str1)
// console.log(endsWith('world!', 'Hello world!'));



//16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, 
// расположенную после или до указанного символа char в зависимости от параметра pos. 
//я предполагаю, что этот символ должен в единственном числе.
//а pos указывает нам в произвольном виде до или после надо обрезать. 
// В моем случае это положит или отриц число
// const getSubstr = (str, char, pos) => {
//     if (pos>=0) {   
//         return str.slice(0, str.indexOf(char))
//     } else {return str.slice(str.indexOf(char)+1)}
// }
// console.log(getSubstr('Hello world!', 'r', 1));



// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr 
// в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки. 
// const insert = (str, substr, pos = 0) => {
//     let newStr = '';
//     newStr = str.slice(0, pos) + substr + str.slice(pos);
//     return newStr;
// }
// console.log(insert('Исходная строка', 'qqq',10));



// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она 
// длиннее указанного количества символов n. 
// Усеченная строка должна заканчиваться троеточием «...» 
// (если не задан параметр symb) или заданным символом symb. 
// const limitStr = (str, n, symb) => {
//     let lastSymb = symb ? symb : '...'; 
//     return str.length > n ? str.slice(0, n)+lastSymb : str;
//     }

// console.log(limitStr('Обрезать эту строку до n символов', 20, '!!!'));



// 19. Напишите функцию count(str, stringsearch), которая возвращает количество 
// символов stringsearch в строке str.
// const сount = (str, stringsearch) => stringsearch = str.length

// let stringsearch = 0;
// stringsearch = сount('Количество символов в строке', stringsearch);
// console.log(stringsearch);



// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str. 
// function strip(str) {
//     let arr = str.split(' ');
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//             if (arr[i].length !== 0) {
//             newArr.push(arr[i]);
//         }
//     } 
// return newArr.join(' ');
// }
// console.log(strip('Удалить все лишние    пробелы  из этой    строки'));



// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, 
// оставив в ней n слов. 
//1 способ
// const cutString = (str, n) => {
//  let arr = str.split(' ');
//  arr.length = n;
//  return arr;
// }
// console.log(cutString('Оставить в этой строке только n слов', 6));

//2 способ
// const cutString = (str, n) => str.split(' ').slice(0, n)
// console.log(cutString('Оставить в этой строке только n слов', 2));

   

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в 
// строке str слова word.
// const findWord = (word, str) => {
//     let arr =  str.split(' ');
//     return arr.includes(word);   
// }

// console.log(findWord('ли', 'Есть ли слово в строке'));

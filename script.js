/*  1 - Function 1 - hello world
Описание:
Создайте простую функцию с именем приветствие , которая возвращает самое известное «привет, мир!».
Очки стиля:
Конечно, это настолько просто, насколько это возможно. Но насколько умным вы можете быть, 
чтобы создать самый творческий приветственный мир, какой вы только можете себе представить?
 Какое решение «hello world» вы хотели бы показать своим друзьям?  */
// a)
// function greet() {
//     return "hello world!";
//     }
// b)
//  function greet(){
//     var a=0
//       var abc=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//       'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//       var hello = [];
//       var world = [];
//                       a++;    a++;  a++;a++;  a++;      a++;      a++;a--;a++;                (inspiration
//   hello.push(abc[a]); a++;    a++;  a--;      a--;      a--;      a--;    a--;                now i get
//   hello.push(abc[a]); a++;a++;a++;  a++;a--;  a++;      a++;      a++;    a++;                with JS I can buid something in my mind!!!)
//   hello.push(abc[a]); a++;    a++;  a--;      a--;      a++;      a--;    a=a;
//   hello.push(abc[a]); a++;    a--;  a++;a++;  a--;a++;  a--;a++;  a++;a--;a++;
//   hello.push(abc[a]);
  
             
//                       a++;          a++;  a++;a++;a++;  a++;a--;a++;  a=a;      a++;a++;
//   world.push(abc[a]);  a--;        a--;   a--;    a--;  a--;    a--;  a--;      a--;   a=a;
//   world.push(abc[a]);   a++;      a++;    a++;    a--;  a--;a--;      a++;      a++;    a++;
//   world.push(abc[a]);    a--;a++;a--;     a--;    a--;  a--;  a++;    a--;      a--;   a--;
//   world.push(abc[a]);     a--;  a--;      a--;a--;a--;  a--;    a--;  a--;a++;  a=a;a--;
//   world.push(abc[a]);
  
//     return hello.join("") + " " + world.join("")+"!";
//   }


/*  2 - Can we divide it?
        Ваша задача состоит в том, чтобы создать функцию isDivideBy(или ), 
        проверяющую, делится is_divide_byли целое число как на целые числа, так и на.
        number a, b;
Несколько случаев:
(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true  */

// a)
//const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
// b)
// let isDivideBy = (number, a, b) => {              // проверка на четность
//     if (number % a === 0 && number % b === 0) {   // если делится на числа а и b 
//       return true                                 // то возваащяем true
//     } else {                                      // иначе false
//       return false
//     }
//   }


/* 3 - Capitalization and Mutability
       Ваш коллега должен был написать простую вспомогательную функцию, чтобы написать строку
       (содержащую одно слово) с заглавной буквы перед тем, как уйти в отпуск.
       К сожалению, они ушли, и код, который они вам дали, не работает. Исправить вспомогательную функцию,
       которую они написали, чтобы она работала как задумано (т.е. сделать первый символ в строке "слово"
        в верхнем регистре).
       Не беспокойтесь о числах, специальных символах или нестроковых типах, которые передаются функции.
       Длина строки будет от 1 до 10 символов, но она никогда не будет пустой. */
       // a)
//        function capitalizeWord(word) {                     // функция принимает Заглавную букву и строку
//         return word[0].toUpperCase() + word.slice(1);      // возвращяет строку с заглавной буквой и остальные символы. // решаем через слайс
//       }

// 4 - Find the missing element between two arrays
/*Даны два целочисленных массива, где второй массив представляет собой перетасованный
дубликат первого массива с отсутствующим одним элементом, найдите отсутствующий элемент.
Обратите внимание, что в массивах могут быть дубликаты, поэтому проверка наличия
числового значения в одном, а не в другом, не является допустимым решением.
Первый массив всегда будет иметь хотя бы один элемент. 

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8   */
//a)
const findMissing = (arr1, arr2) => {
        arr1 = arr1.sort();
        arr2 = arr2.sort();
        for(let i = 0; i < arr1.length; i++){
          if(arr1[i] != arr2[i]) return arr1[i];
        }
      }

// b)
let arr = [1, 2, 3, 1, 2,];                                      // только для провеаки правильности работы функции - 1 массив
function dedude(arr) {
        let result = [];
        arr.forEach(element => {                                 // перебираем массив
                if (!result.includes(element)) {                 // если элемент не входит в массив аезультата
                        result.push(element);                    // добавляем его в массив результата
                } else if(!result.includes(element)) {           // если элемент входит в массив результата
                        result.push(element);                    // добавляем его в массив результата
                }
                return result;
        })
        console.log(dedude(arr));
}

// c)
let unicArr = new Set(arr);                                      // преобразуем массив в множество и перебираем его
unicArr = Arr.from(unicArr);                                     // преобразуем массив в множество 
console.log(unicArr);                                            

// d)
let unicArr = [...new Set(arr)];                                 // преобразуем массив в множество и перебираем его
console.log(unicArr);                                            // 



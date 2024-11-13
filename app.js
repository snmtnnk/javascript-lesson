// 【基礎編 問題】

// Q1 変数
// 変数 nickname, age に自分の名前と年齢を代入し、文字列連結で以下のようにコンソールに出力してください。
// 私のニックネームはごっしーです。年齢は28歳です。
let nickname = 'ごっしー';
let age = 28;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2 配列
// 変数 languages に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のようにコンソールに出力してください。
// 私の好きな言語はJavaScriptです。次はPythonを勉強してみたいです。
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);

// Q3 オブジェクト
// 下記の変数 user を使用し 26 をコンソールに出力してください。
// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };

console.log(user.age);

// Q4 配列 × オブジェクト
// 下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。
// let playerList = [
//   {
//     name: 'John',
//     age: 26,
//     favorites: ['Card Game', 'Basket Ball', 'Programming'],
//   },
//   {
//     name: 'Bob',
//     age: 33,
//     favorites: ['Tinder', 'The Legend of Zelda'],
//   },
//   {
//     name: 'Michael',
//     age: 22,
//     favorites: ['Football', 'Smash Bros.'],
//   },
// ];

let bob = playerList[1];
let zelda = bob.favorites;
console.log(zelda[1]);

// Q5 四則演算
// Q4 で定義した変数 playerList を使用し、John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。
let john = playerList[0].age;
let bob = playerList[1].age;
let michael = playerList[2].age;
console.log((john + john + michael) / 3);

// Q6 関数
// Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
function sayHello() {
  alert('Hello');
}
sayHello();

// 変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。
let sayWorld = function() {
  console.log('world');
};
sayWorld();

// Q7 メソッド
// ※ いずれも Q3 で定義した変数 user を直接書き換えないこと
// Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };

user.birthday = '2000-09-27';
console.log(user);

// Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
user.sayHello = function() {
  console.log('sayHelli');
}
user.sayHello();

// Q8 引数
// 下記の空のオブジェクト calc を使用し、以下問題を解いてください。
// let calc = {};
// 2 つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
let x = 3;
let y = 4;
calc.add = function() {
  console.log(x + y)
}
calc.add();

// 2 つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
let x = 20;
let y = 10;
calc.subtract = function() {
  console.log(x - y)
}
calc.subtract();

// 2 つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。
let x = 7;
let y = 7;
calc.multiply = function() {
  console.log(x * y)
}
calc.multiply();

// 2 つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。
let x = 50;
let y = 10;
calc.divide = function() {
  console.log(x / y)
}
calc.divide();

// Q9 返り値
// 2 つの引数 x, y を受け取り、x を y で割った剰余を返り値とする関数 remainder を定義し、5 と 3 を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。
// 5 を 3 で割った余りは 2 です。
function remainder(x, y) {
  return x % y;
}
console.log('5 を 3 で割った余りは' + remainder(5, 3) + 'です。');

// Q10 スコープ
// 下記の console.log(x); においてコンソールに 1 が出力されることはなく、x is not defined（変数 x が定義されていない）というエラーが出力されます。
// その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。
// スコープ
// 参照
function foo() {
  let x = 1;
}
console.log(x);

// JavaScriptでは、関数内のみスコープが有効のため、関数の外で関数内の変数は参照できない。


// 【応用編 問題】
// Q1 標準組み込みオブジェクト
// 標準組み込みオブジェクト Math を使用し、0 ~ 9 のランダムな整数をコンソールに出力してください。
let num = Math.floor(Math.random() * 10);
console.log(num);

// Q2 コールバック関数
// 関数 setTimeout を使用し、3 秒後に以下のようにコンソールに出力してください。
// Hello World!
setTimeout(function() {
  console.log('Hello!');
}, 2000);

// Q3 if
// 変数 num に 任意の数値を代入し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。
// ・num が 0 より大きければ'num is greater than 0'
// ・num が 0 より小さければ'num is less than 0'
// ・num が 0 であれば'num is 0'
let num = 7;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4 for
// 変数 numbers に空の配列を代入した後、0 ~ 99 までの数字を変数 numbers に全て追加し、値が追加された状態の変数 numbers をコンソールに出力してください
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers[i] = i;
  console.log(numbers[i]);
}

// Q5 for × if
// 以下の変数 mixed から 要素を一つずつ取り出し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。
// let mixed = [4, '2', 5, '8', '9', 0, 1];
// ・Number であり偶数の時は 'even'
// ・Number であり奇数の時は 'odd'
// ・Number 以外の時は 'not number'
for(let i = 0; i < mixed.length; i++) {
  if (i % 2 === 0) {
    console.log('even');
  } else if (i % 2 === 1) {
    console.log('odd');
  } else {
    console.log('not number');
  }
}
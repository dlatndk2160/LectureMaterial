/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.

*/

/*
"use strict";

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = '${string1} ${string2}';
var product = {
  name: '도서',
  price: '4200원'
};
var message = "\n    \uC81C\uD488 ".concat(product.name, "\uC758 \uAC00\uACA9\uC740 ").concat(product.price, "\uC785\uB2C8\uB2E4\n");
console.log(message);

*/ /*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.

*/
'use strict';

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = '${string1} ${string2}';
console.groupCollapsed(greeting);

const product = { name: '도서', price: '4200원' };
const message = `
  제품 ${product.name}의
  가격은 ${product.price}입니다
`;
console.log(message);

const value1 = 1;
const value2 = 2;
const operator1 = `곱셈값은 ${value1 * value2}입니다.`;
const operator2 = `${value1 == value2 ? '참' : '거짓'}입니다.`;
//위처럼 백틱써서 출력하는 부분 꼭 써야하면 쓰지만 아니라면 비추천

console.log(message);

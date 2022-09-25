"use strict";

var _console;

/*

    스프레드 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
        length 프로퍼티가 있다.
        Array  메서드를 사용할 수 없다.
        arrow function에서는 arguments는 사용할 수 없다.

    ES2015 에서는
    rest 매개변수는 배열이다.
        rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
        함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

    Spread 연산자는 ... 이다. (.3개)
        이터러블(iterable) 객체를 "개별" 요소로 분리
        이터러블(iterable) 객체에는 object, Array, String     , Map, Set 등이 있다.
        iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/
debugger; // 배열을 개별 변수로 만든

var cities = ['서울', '부산', '제주'];
var x = cities[0]; //'서울'

var y = cities[1]; //'부산'

var z = cities[2]; //'제주'

console.log(cities[0], cities[1], cities[2]); //'서울', '부산', '제주'

(_console = console).log.apply(_console, cities); //서울, 부산, 제주
//spread 연산자는 기존의 값을 이용하여 새로운 값을 만들때 사용된다.
//복제된 배열, 복제된 객체


var east = ['U', 'K', 'T'];
var west = ['N', 'C', 'G']; //const countries = ['U', 'K', 'T', 'N', 'C', 'G'];

console.log(east.concat(west));
var countries = [].concat(east, west); //... : spread 연산자

console.log(countries);
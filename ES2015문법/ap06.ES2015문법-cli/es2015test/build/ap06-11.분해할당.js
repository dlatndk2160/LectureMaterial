/*
 (구조) 분해 할당에 대해서 알아본다.


*/
//f5로 실행후 f10으로 한줄씩 확인할것
//debugger;

//Es5에서 분해할당 하는 방법, 나눠서 할당
const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];
console.log(x1, y1, z1); //20, 30, 40

//Es2015에서 분해할당 하는 방법, 한줄로 할당
const [x2, y2, z2] = points;
console.log(x2, y2, z2); //20, 30, 40

//두번째 값 무시하기
const [x3, , z3] = points; //[20, 30, 40]
console.log(x2, z2); //20, 40

//두번째, 세번째 값 무시하기
const [x4, , , w4] = points; //[20, 30, 40]
console.log(x4, w4); //20 undefined

//객체 분해할당
const car = {
    type: 't',
    color: 'S',
    MODEL: 2021
};

//ES5에서의 객체 분해 할당
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);

//ES2015에서의 객체 분해할당
const { type, color, model, gear } = car;
console.log(type, color, model, gear); //t S 2015 undefined

//ES2015
const { type: type2, color: color2, model: model2, gear2 } = car;
console.log(type2, color2, model2, gear2); //t, x, 2021, undefined

debugger;
// 객체의 분해할당, 많이 쓰는 정도가 아니라 무조건 씀
//정말 중요 별표 몇개를 줄만큼 ★★★★★★
const func1 = ({ type, color }) => {
    console.log(type); //?
    console.log(color); //?
};
func1(car);

const func2 = function (car) {
    debugger;
    const { type, color } = car;
    console.log(car.type); //?
    console.log(car.color); //?
};
func2(car);

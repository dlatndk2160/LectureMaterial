debugger;
var arr = []; //배열 숫자형
arr[0] = 1;
arr[1] = 2;
console.log(arr);
console.log(arr[0]);

var arr = []; //배열 문자열
arr['0'] = 1;
arr['1'] = 2;
console.log(arr);
console.log(arr['0']);

var arr = {}; //객체
arr['0'] = 1;
arr['1'] = 2;
console.log(arr);
console.log(arr['0']);

for (const key in object) {
    // v-for="(val, i) in arr"
    // in 다음에 오는 애(변수) 중요 arr(변수)
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
}

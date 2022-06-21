/* 
Bài 1: False vì var không bị giới hạn trong block chỉ bị giới hạn trong hàm và có thể được truy xuất ở bất kì đâu
Bài 2: True nhưng const không thể được khai báo lại như let
Bài 2: True let có phạm vi hoạt động trong 1 block




Bài 4:  Giá trị sau cùng của obj trong ví dụ sau là gì?

const obj = { foo: 1 }
obj.bar = 2

Đáp án {foo: 1, bar: 2}




Bài 5: Kết quả của ví dụ sau đây là gì?

const speed = 'quick'
`The ${speed} brown fox jumps over the lazy dog.`

Đáp án : 'The quick brown fox jumps over the lazy dog.’




Bài 6: Giá trị của câu lệnh obj[123] trong ví dụ sau:
const obj = {

}

Đáp án : undefined vì không tìm thấy key tên 123



Bài 7 : Giá trị của array trong ví dụ sau:
const array = [1, 2, 3]
const extension = [4, 5, 6]

array = [...extension, ...array]

Đáp án : Error thì array khai báo bằng const nên không thể khai báo lại



Bài 8 Giá trị của a trong ví dụ sau?
function mystery(...params) {
	return params
}
let a = mystery(1, 23, 4);

Đáp án : [1, 23, 4]


Bài 9: Giá trị của biểu thức sau?
[...[..."..."]].length

Đáp án: 3 vì giá trị của arr trên sẽ trả về ['.', '.', '.']

Bài 10: Giá trị của a và b với ví dụ sau?
let a = 12, b = 3;
[a, b] = [b, a];

Đáp án : a = 3, b = 12


Bài 11: Giá trị của obj sau trong ví dụ sau?
const obj = {
	name: "MindX"
}
const sayHello = (x) => {
	let {name} = x
    name = "Code Intensive"
}
sayHellO(obj)

Đáp án: Câu này em chưa hiểu lắm đề gọi lại tên hàm bị sai và em chưa hiểu ở chỗ let {name} = x dùng để làm gì



bài 12 Giá trị của biểu arr trong ví dụ sau?
let arr = [1, 2, 3, 4, 5]
arr.map(item => {
  if (item % 2 === 0) {
		return item;
  }
	return item * 2;
})

Đáp án [2, 4, 6, 8, 10]

Bài 13 Giá trị của total trong ví dụ sau?
const arr = [1, 2, 3, 4, 5]
const total = arr.filter(item => item % 2 === 0)
				.reduce((value, item) => value + item , 10)

Đáp án 16




*/

// PProblem 01

const users = [
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
]



function B1(arr = []) {
  let res = arr.map((user) => {
    return `<div><h1>${user.name}</h1><h2>${user.age}</h2></div>`;
  });
  return res;
}

console.log(B1(users)); 



// PProblem 02
const students = [
	{ name: 'Lan', gender: 'female' },
	{ name: 'Linh', gender: 'female' },
	{ name: 'Trung', gender: 'male' },
	{ name: 'Peter', gender: 'other' }
];
console.log('Bài 2');
function B2(arr = []) {
	return arr.filter((item) => item.gender !== "female");
  }

console.log(B2(students));

// PProblem 03

Input: strs = ["eat","tea","tan","ate","nat","bat"]

const sortStr = (str) => {
	let newStr = str.split("").sort();
	let resut = "";
	for (let i = 0; i < newStr.length; i++) {
	  resut += newStr[i];
	}
	return resut;
  };
  
  function anagrams(list = []) {
	if (list.length == 1) return [[list[0]]];
	let memoization = {};
	for (let i = 0; i < list.length; i++) {
	  let temp = sortStr(list[i]);
	  if (temp in memoization) {
		memoization[temp].push(list[i]);
	  } else {
		memoization[temp] = [list[i]];
	  }
	}
	return Object.values(memoization);
  }

  console.log(anagrams(strs));



  // Problem 4


let nums4 = [2,2,1]

function b4(arr = []) {
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
	  let key = arr[i];
	  if (key in obj) {
		obj[key] = obj[key] + 1;
	  } else {
		obj[key] = 1;
	  }
	}
  
	for (let key in obj) {
	  if (obj[key] == 1) return key;
	}
}

console.log(b4(nums4));





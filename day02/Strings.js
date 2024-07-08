<<<<<<< HEAD
let schoolNmae = 'CYDEO SCHOOL';
console.log(schoolNmae.length);
console.log(schoolNmae.length-1);

console.log(schoolNmae[0]);
console.log(schoolNmae[11]);

console.log('----------------------------------------------');

schoolNmae = schoolNmae.toLocaleLowerCase(); // 'cydeo school'
console.log(schoolNmae);

schoolNmae = schoolNmae.toUpperCase(); // 'CYDEO SCHOOL'
console.log(schoolNmae);


console.log('----------------------------------------------');
=======
let schoolName = 'CYDEO SCHOOL'

console.log(schoolName.length);
console.log(schoolName.length -1); // 0 ~ 11

console.log(schoolName[0]);
console.log(schoolName[11]);

console.log('--------------------------------------');

schoolName = schoolName.toLowerCase(); // 'cydeo school'
console.log(schoolName);


schoolName = schoolName.toUpperCase(); // 'CYDEO SCHOOL'
console.log(schoolName);

console.log('--------------------------------------');
>>>>>>> 3990e10db0745f09e0cbb197a4160e135dc32311

let expectedText = 'JavaScript'

let actualText = 'javascript'

<<<<<<< HEAD
console.log(expectedText.toLowerCase() === actualText);
=======
console.log( expectedText.toLowerCase() === actualText.toLowerCase());
>>>>>>> 3990e10db0745f09e0cbb197a4160e135dc32311

console.log(expectedText);
console.log(actualText);

<<<<<<< HEAD
console.log('----------------------------------------------');


let s = 'Python Python'

//s = s.replace('Python', 'JavaScripts'); 

s = s.replace(/Python/g, 'JavaScripts'); // global flag
console.log(s);

console.log('----------------------------------------------');

let str = 'ABCDE12345EFGHI890JKLMN12345UIOYTR'

str = str.replace(/\d/g, ''); // global flag
console.log(str);

console.log('----------------------------------------------');
=======
console.log('--------------------------------------');

let s = 'Python Python'

// s = s.replace('Python', 'JavaScript');

s = s.replace(/Python/g, 'JavaScript'); // global flag

console.log(s);

console.log('--------------------------------------');

let str = 'ABCDE12345EFGHI890JKLMN12345UIOYTR';

str = str.replace(/\d/g, '');

console.log(str);

console.log('--------------------------------------');
>>>>>>> 3990e10db0745f09e0cbb197a4160e135dc32311

let w = 'JavaScript';

for (let i = 0; i < w.length; i++) {
<<<<<<< HEAD
    const element = w[i];
    
}

console.log('----------------------------------------------');

let email = 'cydeoschool@yahoo.com';

let domain = email.substring(email.indexOf('@')+1, email.lastIndexOf('.'));
console.log(domain);





=======
   console.log(w[i]);
}

console.log('--------------------------------------');

let email = 'cydeoschool@gmail.com';

let domain = email.substring(email.indexOf('@') + 1, email.lastIndexOf('.'));

console.log(domain);

console.log('--------------------------------------');

let employeeName = 'James';
let employeeAge = 35;

console.log('Employee name is: ' + employeeName);
console.log('Employee age is: ' + employeeAge);

console.log(`My name is ${employeeName}, and I am ${employeeAge} years old.`);
// backtick character need to be used instead of '' or ""
>>>>>>> 3990e10db0745f09e0cbb197a4160e135dc32311


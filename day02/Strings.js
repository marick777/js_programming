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

let expectedText = 'JavaScript'

let actualText = 'javascript'

console.log(expectedText.toLowerCase() === actualText);

console.log(expectedText);
console.log(actualText);

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

let w = 'JavaScript';

for (let i = 0; i < w.length; i++) {
    const element = w[i];
    
}

console.log('----------------------------------------------');

let email = 'cydeoschool@yahoo.com';

let domain = email.substring(email.indexOf('@')+1, email.lastIndexOf('.'));
console.log(domain);







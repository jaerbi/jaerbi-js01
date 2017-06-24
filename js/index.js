// alert('Hello World!');
// document.write('hello world');
// console.log('Hello World!');
/* var a,b,c;
 a = 'street';
 b = true;
 c = a + b;
 
 alert(c);*/
var userName = prompt('Enter your name');
 
 document.write('Hello ' + userName);
 
 var userAge = Number(prompt('Enter your age'));
 document.write('<br>');
 document.write('You age is ' + userAge);
 
 var newAge = sum(userAge, 1); //userAge + 1;
 document.write('<br>');
 document.write('Next Year you will be ' + newAge);
 var newNewAge = sumThree(userAge,1,1);
 document.write('<br>');
 document.write('The NExt of the NExt yeat you will be ' + newNewAge);
 document.write('<br>');
document.write('You are ' + checkAge(userAge));
 
 function sum(a,b) {
     var result = a + b;
     return result;
 }
 
 function sumThree(a,b,c) {
     var result = a + b + c;
     return result;
 }
 function checkAge(age) {
     if (age < 35) {
         return 'yong';
     }
     else {
         return 'not yong';
     }
 }
 
 document.write(Math.sqrt(4));
//import add from './add';
//import { add ,subtract ,mult ,divide} from './math';5
import * as math from './math';
import $ from 'jquery';
// const num1 =5;
// const num2 =10;
// console.log(`The total of ${num1} and ${num2} is ${add(num1 ,num2)}`);
const {x ,y , z} = math;
// const x = 10;
// const y = 2 ;
// const z = 0;
// export default 'apples';
console.log(math.add(x,y));
console.log(math.subtract(x,y));
console.log(math.mult(x,y));
console.log(math.divide(x,y));
console.log(math.divide(x,z));


$('#root').append('<h1>I am helping</h1>');
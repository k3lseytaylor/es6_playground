	class Greet {
		constructor(name){
			this.name = name;
		}

		sayHello(){
			return `hello ${this.name}`;
		}

		sayGoodBye(){
			return `Good Bye ${this.name}`;
		}
	}


class BetterGreeting extends Greet{
	constructor(name, lastname){
		super(name);
		this.lastName = lastname;
	}

	alertHello(){
		alert(`What up, ${this.name} ${this.lastName}`);
	}
}


const DUDE = new Greet('yo');
const JO = new Greet('JOJO');

const ASH = new BetterGreeting('Lee' ,'sin');

console.log(DUDE.sayHello());
console.log(DUDE.sayGoodBye());

console.log(JO.sayHello());
console.log(JO.sayGoodBye());

console.log(ASH.sayHello());
console.log(ASH.sayGoodBye());

ASH.alertHello();
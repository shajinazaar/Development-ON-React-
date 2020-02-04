class Person {
    constructor (name='Anonymous',age='Not found') {    
        this.name =name;
        this.age =age;

    }

    getGreeting (){
        return `Hi ${this.name} and your age is ${this.age}`;
    }

}


class Student extends Person {

    constructor(name,age,major){
        super(name,age);
        this.major =major;
    }

    hasMajor (){
        return !!this.major;
    }

    getGreeting (){

        let description = super.getGreeting();

        if(this.hasMajor()){
            description += `Thier major is ${this.major}`;
        }
    }
}


const me = new Student('Shaji Nazar',22,'Computer science');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());

console.log(me.hasMajor());

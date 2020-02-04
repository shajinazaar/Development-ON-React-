
let fullName = "Shaji Nazar";

const getName = (Name) =>{

     return Name.split(' ')[0];

}



fullName= getName(fullName);

console.log(fullName);


const letter = {
    Name : "Shaji",
    cities : ['krachi',"lahore","islamabad"],
    placesLived(){
         return this.cities.map((city)=> this.Name + " lived in " + city );

        
        }
        
    }


console.log(letter.placesLived());



//Challenge


const multiplier ={
    //numbers =array of numbers
    //multiplyBy -single number
    //multiply - method 

     numbers:[2,4,6],
     multiplyBy : 3 ,
     multiply(){
        return this.numbers.map((nums)=> this.multiplyBy*nums ); 

     } 

}

console.log(multiplier.multiply());


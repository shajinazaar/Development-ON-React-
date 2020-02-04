
class Counter extends React.Component{
     
    constructor(props){
        super(props);
        this.handleMinusOne =this.handleMinusOne.bind(this);
        this.handleAddOne =this.handleAddOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state ={
            count : 0
        }
    }

    componentDidMount(){
        const get= localStorage.getItem('count');
        const num = parseInt(get, 10);

        if(!isNaN(num)){
            this.setState(()=>({num}));

        }
    

    }

    componentDidUpdate(prevProps,prevState){

        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
        

    }

    handleAddOne(){
       
       this.setState((prevState)=>
       {
        return{
            count: prevState.count + 1 
        }

       }
       
       );
       
        //this.state.count +=1 ; 
     // console.log(this.state);

    }
    handleMinusOne(){
        
        this.setState((prevState)=>{

            return{
                count : prevState.count -1
            }


        });
    }

    handleReset(){
        this.setState(()=>{
        return{

           count: 0
        }
    }
        );

        this.setState((prevState)=>{
            return{
                count : prevState.count +1
            }

        }



        );

        /*
         this.setState(
             {
               count : 0  
             }
         )

             
         this.setState(

           {
             count: this.state.count += 1
           } 

         );
           **/ 
    }
    
    
    render(){

        return(
            <div>
            
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            
            
            </div>

        )
    }

}



ReactDOM.render(<Counter />,document.getElementById("app"));



/** 
let count =0;
const addOne =()=>{
    count++;
    console.log("add one",count);
    appCounter();
}

const mineOne =() =>{
    count--;
    console.log("Minus One",count);
    appCounter();
}

const reset=()=>{
    count =0;
    console.log("Reset",count);
    appCounter();
}


const appCounter = ()=>{
    const templateTwo =(

        <div>
            <h1>Count : {count}</h1>
        
            <button onClick={addOne} className="btn">+1</button>
            <button onClick={mineOne}>-1</button>
            <button onClick={reset}>Reset</button>
        
        </div>
        
        
        ) 

        ReactDOM.render(templateTwo,appRoot);

}
    

const appRoot=document.getElementById('app');

appCounter();

**/
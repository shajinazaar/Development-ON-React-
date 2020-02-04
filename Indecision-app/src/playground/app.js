
//Class based component
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions =this.handleDeleteOptions.bind(this);
        this.handlePick =this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.state = {
            options:props.options,
           
        }
    }

   
    componentDidMount(){
        try{
            const json =  localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
              this.setState(()=> ({options}) ) ; 
            }
        }
         catch(e){
                // Do nothing at all

         }   
        

    }

    componentDidUpdate(prevPops, prevState){

        if( prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);

        }

    }


    handleDeleteOptions(){
        this.setState(()=> ({options:[]})
        ) 
    }


    handleDeleteOption(optionToRemove){
      this.setState((prevState)=>({

        options: prevState.options.filter((option)=> optionToRemove !==option)

      }))
    }

    handlePick(){
            

        const randomNum =Math.floor(Math.random() *this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option)
    

};


    handleAddOption(option){
        if(!option){
            return 'Enter valid  value to add item';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This option is already exit';
        }

       this.setState((prevState)=>({options: prevState.options.concat([option])})

)
    }


    render(){
        
        const subtitle = "Put your life into the hand of computer";
      
       return( 
        <div>
        <Header  subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0}
        handlePick ={this.handlePick} 
        />
        <Options options={this.state.options}
         handleDeleteOptions ={this.handleDeleteOptions}
         handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions
        
        handleAddOption ={this.handleAddOption}
        />
    
        </div>

       ) 
    }

}

IndecisionApp.defaultProps ={
    options : []
}

//Stateless functional component
const Header = (props) =>{
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2> {props.subtitle} </h2> }
        
        </div>
    );

};
Header.defaultProps ={
    title: 'Indecision App'
};

const Action = (props)=>{
    return(
        <div>
        <button
        disabled = {!props.hasOptions}
        onClick={props.handlePick}
        
        > What should I do? </button>
        </div>
    );

};



// Options component here

const Options =(props) =>{
    return(
        <div>
        <button onClick={props.handleDeleteOptions}> Remove All</button>
        {props.options.length === 0 && <p>Please Add an option to get started! </p>}
        {
          props.options.map((opt)=> ( 
              <Option 
                key={opt}
                OptionText={opt}
                handleDeleteOption ={props.handleDeleteOption}
               />
               )
          )
        }
      
        </div>

      
    );


};


// Option component here

const Option =(props)=>{
    return (
        <div>
 
        <p>{props.OptionText}</p>     
        <button 
        onClick={(e)=>{
            props.handleDeleteOption(props.OptionText);

        }}
        >
        Remove
        </button>       
        </div>
     )

}



 
 //Add Option component here

 class AddOptions extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOption =this.handleAddOption.bind(this);
        this.state ={
            error :undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>({error:error}));

        if(!error){
            e.target.elements.option.value = " ";
        }
        

    }

    render(){
        return(
         <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button> Add options</button>

            </form>
            </div>
        )

 }
 }


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));





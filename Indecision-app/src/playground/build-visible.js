
class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.handleToggleVissibility = this.handleToggleVissibility.bind(this);
        this.state ={
            visibility: false
        }

    }

    handleToggleVissibility(){
      this.setState((prevState)=>{
        return{

            visibility : !prevState.visibility
        }


      });

    }



    render(){
        return(

            <div>
            <h1>VisibilityToggle</h1>
            <button onClick={this.handleToggleVissibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visibility &&
              (
                <div>
                <p>Here some information</p>

                </div>  
              )  

            }
            </div>
        );

 }

}

ReactDOM.render(<VisibilityToggle />,document.getElementById("app"));








/** 
let visibility =false;
const onDetails=()=>{
    visibility = !visibility; 
    render();
}

const render =()=>{
    const template = (
        
        <div>

        <h1>Vissibility Toggle</h1>
        
        <button onClick={onDetails}> {visibility ? 'Hide details' : 'Sh0w details '}</button>
      
        {visibility && 
        (
            <div>

            <p>snadasmdasdxa</p>
            </div>
        )
        
        }
        
       

        </div>
        
        )

        ReactDOM.render(template,appRoot);
}


const appRoot = document.getElementById("app");


render();
*/
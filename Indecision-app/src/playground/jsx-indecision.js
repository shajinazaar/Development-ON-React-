//JavaScript XML 


const app= {
    title: "This is my title",
    subtitle: "This is my subtitle",
    options: []

}
//to prevent submission in the Url
const onFormSubmit = (e)=>{
    e.preventDefault();

    const option =e.target.elements.option.value; //targetting the element (form) to get value

    if(option){
        app.options.push(option); // pushing into an array
        e.target.elements.option.value = " ";
        render();
    }
  
}

const reset = () => {
const empty = app.options =[];
render();
}


const onMakeDecision = () => {

const randomNum = Math.floor(Math.random(app.options.length));
const option = app.options[randomNum];
alert(option);



}

const render =() =>{
const template= (
    <div>
    <h1>Indecision app</h1>
    <h2>Title: {app.title }</h2>
    {app.subtitle && <h2>Subtitle: {app.subtitle}</h2> }    
    <p>{ app.options.length > 0 ? 'Here your option' : 'Yusasaas'} </p>
    <button disabled={app.options.lenght === 0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={reset}>Reset</button>
    <ol>
    {
    app.options.map((opt)=><li key={opt}>{opt}</li> )
    }
    </ol>
   

    <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button> Add options</button>
    
    </form>
    </div>
)

ReactDOM.render(template,appRoot);

}   
const appRoot =document.getElementById("app");


render();





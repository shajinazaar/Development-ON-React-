//JavaScript XML 
const template=(
    <div>
    <h1>Indecision app</h1>
    <p>This is a paragraph</p>
    <ol>
    <li>First website</li>
    </ol>
    </div>

    
    )
;


let Name = "shaji Nazar";
let Age = 23;
let Location = "karachi";


const info = {
    Name: "SHAJI NAZAR",
    Location : "Karachi",
    Age : 23

}

function getLocation(location){
    if(Location){
        return <p>Location : {Location}</p>;
    }
 
}


const templateTwo= (
    
    <div>

    <h1>{ info.Name ? info.Name : Anonymous }</h1>
    { getLocation(info.location)}
    {(info.Age && info.Age >=18 ) && <p>Age: {Age}</p> }
    </div>

)

const app= {
    title: "This is my title",
    subtitle: "This is my subtitle",
    options: ["One","Two"]

}


const templateThree = (
    <div>
    <h1>Title: {app.title }</h1>
    {app.subtitle && <h2>Subtitle: {app.subtitle}</h2> }    
    <p> app.options.length > 0 ? 'Here your option' : 'Yusasaas' </p>
    </div>
)

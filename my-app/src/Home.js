import {useState} from "react"
const Home = () => {
    const [name,SetName]=useState("lily")
    const handelClick=()=>{
        SetName("atlas")
    }
    return ( 
        <div className="Home">
            <h2>Home page</h2>
            <Example2 Name="taylor" Age="23" Job="backend dev"/>
            <br></br>
            <p>{name}</p>
            <button onClick={handelClick}>change name</button>
        </div>
     );
}
const Example2=(props)=>{
    return(
        <div>
            <h3>Name : {props.Name}</h3>
            <h3>Age : {props.Age}</h3>
            <h3>Job : {props.Job}</h3>
        </div>
    )
}


export default Home;

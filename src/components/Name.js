import { func } from "prop-types";
import React,{Component,useState} from "react";
class Name extends Component{
    state={
        name:"Sanu  Singh"
    }
    constructor(props){
        super(props);
        this.setName=this.setName.bind(this)
    }
    setName(name){
        this.setState({...this.state,name})
    }
    testhandler=()=>{
        console.log("Testhandler");
    }
    render(){
        return(
            <>
            <h1>
                The name is:{this.state.name}
            </h1>
            <button onClick={()=>{
                this.setName("Gollu Singh");
                this.testhandler();
            }}>Click Me</button>
            </>
        )
    }
}

// const Name =()=>{
//     const [state,setState]=useState({name:"Sanu Singh"});
//     let setName=(e)=>{
//         setState({...state,name:"Golu"});
//     }
//     return(
//         <>
//         <h1>The name is: {state.name}</h1>
//         <button onClick={setName}>Click Me</button>
//         </>
//     )
// }
export default Name;
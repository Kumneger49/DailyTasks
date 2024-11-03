import React, {useState} from "react";

const Authenticate=props=>{
    // const [string, setString]=useState("This is button")
    //  return(
    //     <>
    //         <p onClick={()=>string=="This is button"?setString("this is another one"):setString("This is button")}>{string}</p>
    //     </>
    // )
    const {auth}=props;
    if (auth==true){
        return (
            <>
                
            </>
        )
    }
    else{
        return(
            <>

            </>
        )
    }
}

export default Authenticate
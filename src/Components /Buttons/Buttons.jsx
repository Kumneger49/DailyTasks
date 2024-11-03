import React from "react";

const Buttons=props=>{
    const {type}=props;
    if (type==="login"){
        return (
            <>
                Login
            </>
        )
    }

    if (type==="logout"){
        return (
            <>
                Logout
            </>
        )
    }

    if (type==="profile"){
        return (
            <>
                Profile
            </>
        )
    }

    else{
        return(
            <>
                Sign up
            </>
        )
    }
}

export default Buttons
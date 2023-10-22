import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Signup() {
    return(
        <>
        <hr />
        <div className="text-center">
            <div className="bg-green">
        <h1 className="text-center">Sign Up</h1>
        <input type="enter" placeholder="name" />
      <br />
        <br />
        <input type="enter" placeholder="password"/>
       <br />
        <br />
        <button>Signup</button>
        </div>
        </div>
        </>
       
    );
};
export default Signup;
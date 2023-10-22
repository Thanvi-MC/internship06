import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Login() {
    return(
        <>
        <hr />
        <div className="text-center text-auto">
            <div className="background">
        <h1 className="text-center">Login</h1>
        <input type="enter" placeholder="name" />
        <br />
        <br />
        <input type="enter" placeholder="password"/>
        <br />
        <br />
        <button>Login</button>
        </div>
        </div>
        </>
    );
};
export default Login;
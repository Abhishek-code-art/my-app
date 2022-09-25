import React from "react";
import Header from "./Header";

function Register() {
    return (
        <div>
            <Header />
            <form classNameName="d-flex flex-column justify-content-center align-items-center">
                <div style={{padding: "6%", width: "300px", height: "400px", borderRadius: "20px", boxShadow: "-3px 4px 10px lightslategrey", color: "#6c757d"}}>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-warning w-100 text-secondary">Login with Google</button>
                    </div>
                    <hr style={{borderTop: "2px solid lightslategray"}}/>
                     <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" classNameName="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" classNameName="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" className="btn btn-secondary w-100">Submit</button>
                    <p className="mt-4">Don't have an account?<a href="/login" className="text-secondary text-decoration-none">Sign In.</a></p>
                </div>
            </form>
        </div>
    );
}

export default Register;
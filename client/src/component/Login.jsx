// import { useRadioGroup } from "@mui/material";
import React, {useState} from "react";
import Header from "./Header";

function Login() {
    const [user, setUser] = useState({email: ""});

    let name, value;
    
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {email} = user;

        const response = await fetch("/login", {
            method: "POST",
            body: JSON.stringify({
                email
            })
        });

        const data = await response.json();
        if(data.status === 200) {
            window.alert("Successfully login");
            console.log("successfully login");
        }
    }

    return (
        <div>
            <Header />
            <form method="POST" classNameName="d-flex flex-column justify-content-center align-items-center">
                <div style={{padding: "6%", width: "300px", height: "350px", borderRadius: "20px", boxShadow: "-3px 4px 10px lightslategrey", color: "#6c757d"}}>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-warning w-100 text-secondary">Login with Google</button>
                    </div>
                    <hr style={{borderTop: "2px solid lightslategray"}}/>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" classNameName="form-label">Email Address</label>
                        <input onChange={handleInputs} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" name="email" value={user.email}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" className="btn btn-secondary w-100" onClick={PostData}>Submit</button>
                    <p className="mt-4">Don't have an account?<a href="/register" className="text-secondary text-decoration-none">Sign Up.</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
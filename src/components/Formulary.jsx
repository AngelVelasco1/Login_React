import { useState } from "react";
import { Outlet } from "react-router-dom";

export const Formulary = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const handleUsername = (event) => {
        setData({
            ...data,
            username: event.target.value
        })
    }
    const handlePassword = (event) => {
        setData({
            ...data,
            password: event.target.value
        })
    }

    const getJWT = async() => {
        const response = await fetch("127.0.0.1:9080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const responseData = await getJWT();

        setData(responseData);

        if (!responseData.ok) {
            alert("Invalid username or password");
        } else {
            alert("Login successful");
        }
    
    }

    return (
        <>
            <h1>Log In</h1>
            <input type="text" name= "username" placeholder="username" onChange= {handleUsername}/>
            <input type="text" name= "password" placeholder="password" onChange= {handlePassword}/>
            <button onClick= {handleSubmit}>Send</button>

            <Outlet context = {data} />

        </>
    )
}

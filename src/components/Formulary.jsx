import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Formulary = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        password: ""
    });
    const [token, setToken] = useState("");

    const handleName = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
    };
    const handlePassword = (e) => {
        setData({
            ...data,
            password: e.target.value
        })
    };
    

    const getData = async () => {
        const response = await fetch(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/login/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        
        const responseJson = await response.json();
        return responseJson;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const responseData = await getData()
        setData(responseData)

        if (!responseData.message) {
            const jwt = responseData.token;
            setToken(jwt)
            alert("Login successful");
            navigate("/")

        } else {
            alert("Invalid name or password");
            navigate("/")
        }

    }

    return (
        <>
            <h1>Log In</h1>
            <input type="text" name="name" placeholder="name" onChange={handleName} />
            <input type="text" name="password" placeholder="password" onChange={handlePassword} />
            <button onClick={(e) => { handleSubmit(e) }}>Send</button>

            <Outlet context={[data]} />

        </>
    )
}

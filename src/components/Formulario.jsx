import React from "react";
import { useState, useEffect } from "react";
import ProtoTypes from "prop-types"

export default function Formulary({nombre}) {
    const [nom, setNombre] = useState(nombre);
    const cambiar = async () =>{
            let res = await (await fetch("http://localhost:5010/prueba")).json();
            setNombre(JSON.stringify(res));
    };

    /*  useEffect(()=>{
        let btn = document.querySelector('#info');
        console.log(btn.textContent);
    }) */

    return (
        <>
            <div>Formulary</div>
            <button onClick={cambiar}>Click</button>
            <div id="info">
                {nom}
            </div>
        </>
    )
}

Formulary.prototype={
    nombre: ProtoTypes.string.isRequired
}

Formulary.defaultProps={
    nombre: "aaaa"
}

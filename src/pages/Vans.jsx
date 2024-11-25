import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Vans(){

    useEffect(()=>{
        fetch('5173/api/vans/1')
        .then(res=>res.json())
        .then(data => console.log(data))
        
    },[])

    

    return(
        <h1>Vans are here</h1>
    )
}
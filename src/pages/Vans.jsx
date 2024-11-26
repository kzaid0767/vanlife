import { Link } from "react-router-dom";
import { useEffect,useContext, useState } from "react";

import {VansContext} from '../App'

export default function Vans(){

    const [vans, setVans] = useState([])

    const allVans = useContext(VansContext)
    /* useEffect(()=>{
        fetch('/api/vans/')
        .then(res=>res.json())
        .then(data => console.log(data))
        
    },[]) */

    useEffect(() => {
        setVans(allVans)
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vandetails/${van.id}`}
                aria-label={`View details for ${van.name}, 
                priced at $${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
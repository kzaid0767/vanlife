import { useParams, useOutletContext } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { VansContext } from '../../../src/App'


export default function HostVanInfo(){

    /* const [van, setVan] = useState({})
    const {id} = useParams()

    const selectedVan = useContext(VansContext).filter(item=> item.id===id)[0]

    useEffect(()=>{
        setVan(selectedVan)
    },[id]) */

    const van = useOutletContext()
    

    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{van.name}</span></h4>
            <h4>Category: <span>{van.type}</span></h4>
            <h4>Description: <span>{van.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}
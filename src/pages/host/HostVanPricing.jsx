import { useParams,useOutletContext } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { VansContext } from '../../../src/App'
export default function HostVanPricing(){
    
    /* const [van, setVan] = useState({})
    const {id} = useParams()

    const selectedVan = useContext(VansContext).filter(item=> item.id===id)[0]

    useEffect(()=>{
        setVan(selectedVan)
    },[id]) */

    const {price} = useOutletContext()

    return <h3 className="host-van-price">${price}<span>/day</span></h3>
}
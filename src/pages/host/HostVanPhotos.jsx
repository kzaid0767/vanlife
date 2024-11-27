import { useParams, useOutletContext, useOutlet } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { VansContext } from '../../../src/App'

export default function HostVanPhots(){

    /* const [van, setVan] = useState({})
    const {id} = useParams()

    const selectedVan = useContext(VansContext).filter(item=> item.id===id)[0]

    useEffect(()=>{
        setVan(selectedVan)
    },[id])
 */
    const {imageUrl} = useOutletContext()
    return <img src={`../../${imageUrl}`} className="host-van-detail-image" />
}
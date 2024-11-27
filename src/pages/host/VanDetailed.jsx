import { Outlet, useOutletContext, NavLink, Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { VansContext } from '../../../src/App'


export default function VanDetailed(){

    const {id} = useParams()
    const [van, setVan] = useState({})
    const selectedVan = useContext(VansContext).filter(van=> van.id === id)[0]
    useEffect(()=>{
        setVan(selectedVan)
    },[id])

    const style = {
        fontWeight: 'bold',
        textDecoration: 'underline'
    }

    return (
        <section>
            <Link
            /* going up a level relative to the path and not parent */
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={`../../${van.imageUrl}`} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink end to='.' style={({isActive})=>isActive? style: null} >Details</NavLink>
                    <NavLink to={`/host/vans/${van.id}/pricing`}
                    style={({isActive})=>isActive? style: null}
                    >Pricing</NavLink>
                    <NavLink to={`/host/vans/${van.id}/photos`} 
                    style={({isActive})=>isActive? style: null}
                    >Photos</NavLink>
                </nav>
                <Outlet context={van} />
            </div>
        </section>
    )
}
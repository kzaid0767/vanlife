import { Link, useSearchParams, useLocation } from "react-router";
import { useEffect, useContext, useState } from "react";

import { VansContext } from "../../App";

export default function Vans() {
  const allVans = useContext(VansContext)
  
  const [vans, setVans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams()
  /* filter from search bar */
  const typeFilter = searchParams.get('type')
  

  const filteredVans = allVans.filter(van=> van.type === typeFilter)



  useEffect(() => {
    setVans(allVans)
  }, [allVans])

  

  const getElements = (arr) => {
    return arr.map((van) => (
      <div key={van.id} className="van-tile">
        <Link
          to={`${van.id}`}
          state={{ search: searchParams.toString() }}
          aria-label={`View details for ${van.name}, 
                  priced at $${van.price} per day`}
        >
          <img src={van.imageUrl} alt={`Image of ${van.name}`} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    ));
  }

  const vanElements = filteredVans.length>0 ? getElements(filteredVans) : getElements(vans)

  /* updating typeFilter */

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}


  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
                <button 
                  onClick={() => handleFilterChange("type", "simple")}
                  className={typeFilter==='simple'?'selected van-type simple' :'van-type simple'}
                  >Simple</button>
                <button 
                    onClick={()=>handleFilterChange('type','luxury')}
                    className={typeFilter==='luxury'?'selected van-type luxury' :'van-type luxury'}
                    >Luxury</button>
                <button 
                    onClick={()=>handleFilterChange('type','rugged')}
                    className={typeFilter==='rugged'?'selected van-type rugged' :'van-type rugged'}
                >Rugged</button>
                {typeFilter &&<button 
                    onClick={()=>handleFilterChange('type',null)}
                    className="van-type clear-filters"
                >Clear filter</button>}
            
            </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

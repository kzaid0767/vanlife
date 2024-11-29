import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

import { VansContext } from "../../App";

export default function Vans() {
  const [vans, setVans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams()
  /* filter from search bar */
  const typeFilter = searchParams.get('type')
  

  const allVans = useContext(VansContext);

  const filteredVans = allVans.filter(van=> van.type === typeFilter)


  useEffect(() => {
    setVans(allVans);
  }, []);

  

  const getElements = (arr) => {
    return arr.map((van) => (
      <div key={van.id} className="van-tile">
        <Link
          to={`/vans/${van.id}`}
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

  const vanElements = filteredVans? getElements(filteredVans) : getElements(vans)

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

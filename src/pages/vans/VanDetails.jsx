import { VansContext } from "../../App";
import { useParams, useLocation, Link } from "react-router";
import { useContext, useState, useEffect } from "react";

export default function VanDetails() {
  const { id } = useParams();
  
  /* brings in previous location's search params */
  const location = useLocation()

  //console.log(location.state.search
  /* makes the qeury string to be returned with */

  const search = location.state?.search || ''

  const [van, setVan] = useState({});

  //get van with matching id
  const selectedVAn = useContext(VansContext).filter((van) => van.id === id)[0];

  //sets matched van to state based on id's received
  useEffect(() => {
    setVan(selectedVAn);
  }, [id]);

  return (
    <div className="van-detail-container">
      <Link
          to={`..?${search}`}
          relative="path"
          className="back-button"
          >&larr; <span>{`Back to all ${search.slice(5)} vans`}</span></Link>

      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}

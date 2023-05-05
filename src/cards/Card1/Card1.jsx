import img6 from "../../assets/img/img6.svg"
import "./index.scss"
import { NavLink } from "react-router-dom";

const Card1 = () => {
  return (
    <div className="card1">
      <NavLink to="/single-product" className="card1__flex">
        <img src={img6} alt="phone" />
        <p>Стеклянные</p>
      </NavLink>
    </div>
  );
}

export default Card1
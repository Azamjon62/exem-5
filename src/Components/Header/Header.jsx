import "./index.scss";
import img1 from "../../assets/img/img1.svg";
import img2 from "../../assets/img/img2.svg";
import img3 from "../../assets/img/img3.svg";
import img4 from "../../assets/img/img4.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="flex">

          <div className="flex__logo">
            <NavLink to="/">
              <h1>QPICK</h1>
            </NavLink>

            <div className="flex__logo__select">
              <img src={img1} alt="phone-logo" />
              <p>Выбрать модель телефона</p>
              <img src={img2} alt="vector" />
            </div>
          </div>

          <div className="flex__selected">
            <div className="heart">
              <img src={img3} alt="heart" /><sup>2</sup>
            </div>
            <NavLink to="/selected" >
              <div className="basket">
                <img src={img4} alt="vector" /><sup>1</sup>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
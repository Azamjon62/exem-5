import Card3 from "../../cards/Card3/Card3";
import "./index.scss";
import icon7 from "../../assets/img/icon7.svg";
import { NavLink } from "react-router-dom";

const SingleProduct = () => {
  return (
    <div className="singleProduct">
      <div className="container">
        <div className="singleProduct__section">
          <div className="singleProduct__section__title">
            <p>Автодержатель</p>
          </div>
          {/* ---------------------------------- */}
          <div>
            <Card3 />
          </div>
          {/* ---------------------------------- */}
          <div className="singleProduct__section__flex">
            <div className="singleProduct__section__flex__select">
              <p>Описание и характеристики</p>
            </div>
            <div className="singleProduct__section__flex__btn">
              <NavLink to="/products" >
                <button className="action1" >Купить!</button>
              </NavLink>
              <button className="action2" ><img src={icon7} alt="" />Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct
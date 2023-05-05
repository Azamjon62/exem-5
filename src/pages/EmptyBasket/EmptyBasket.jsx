import { NavLink } from "react-router-dom";
import img18 from "../../assets/img/img18.svg"
import "./index.scss";

const EmptyBasket = () => {
  return (
    <div className="emptyBasket">
      <div className="container">
        <div className="emptyBasket__section">
          <div className="emptyBasket__section__img" >
            <img src={img18} alt="" />
          </div>
          <div className="emptyBasket__section__description" >
            <h3 className="info1" >Корзина пуста</h3>
            <div className="flexes" >
                <p className="info2" >Но это никогда не поздно исправить :)</p>
                <NavLink to="/" > <button className="info-btn" >В каталог товаров</button> </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyBasket
import { NavLink } from "react-router-dom";
import img18 from "../../assets/img/img18.svg"
import icon14 from "../../assets/img/icon14.svg";
import img9 from "../../assets/img/img9.svg";
import img8 from "../../assets/img/img8.svg";

import "./index.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

const EmptyBasket = () => {
  const { addBasket } = useSelector((res) => res);
  console.log(addBasket);

  const [heart, setHeart] = useState(true);

  return (
    <div className="emptyBasket">
      <div className="container">
        <div className="emptyBasket__body">
          {addBasket.length ? (
            <div>
              <h1>In The Basket</h1>
              <div className="emptyBasket__body__card">
                {addBasket.map((item) => {
                  return (
                    <div className="card2" key={item.id}>
                      <div
                        onClick={() => {
                          heart ? setHeart(false) : setHeart(true);
                        }}
                        className="card2__wrapper__heart"
                      >
                        <img
                          style={{ display: `${heart ? "none" : "block"}` }}
                          src={icon14}
                          alt="he"
                        />
                        <img
                          style={{ display: `${heart ? "block" : "none"}` }}
                          src={img9}
                          alt="her"
                        />
                      </div>
                      <NavLink to={`/single-product/${item.id}`}>
                        <div>
                          <div className="card2__wrapper">
                            <div className="card2__wrapper__img">
                              <img src={item?.image} alt="naushniki" />
                            </div>
                            <div className="card2__wrapper__title">
                              <h3>{item?.title.slice(0, 20)}</h3>
                              <div className="card2__wrapper__title__flex">
                                <p>{item?.price} ₸</p>
                                <div>
                                  <p className="p">3527 ₸</p>
                                </div>
                              </div>
                            </div>
                            <p className="card2__wrapper__evaluation">
                              <img src={img8} alt="star" />{" "}
                              <p>{item.rating.rate}</p>
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="emptyBasket__section">
              <div className="emptyBasket__section__img">
                <img src={img18} alt="" />
              </div>
              <div className="emptyBasket__section__description">
                <h3 className="info1">Корзина пуста</h3>
                <div className="flexes">
                  <p className="info2">Но это никогда не поздно исправить :)</p>
                  <NavLink to="/">
                    <button className="info-btn">В каталог товаров</button>{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyBasket;

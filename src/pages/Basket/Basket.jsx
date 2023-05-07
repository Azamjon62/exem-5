import "./index.scss";
import icon8 from "../../assets/img/icon8.svg";
import icon9 from "../../assets/img/icon9.svg";
import icon10 from "../../assets/img/icon10.svg";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import postsApi from "../../api/posts";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Basket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { postItem, data } = useSelector((res) => res);
  const [count, setCount] = useState(1);

  useEffect(() => {
    postsApi
      .getItem(id)
      .then((res) => {
        dispatch({
          type: "ITEM",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, id]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const allCounts = postItem?.price * count;

  const basketData = {
    toPay: allCounts + 499,
    howMany: allCounts,
    number: count,
  };
  data.push(basketData);

  return (
    <div className="basket">
      <div className="container">
        <div className="basket__section">
          <div className="basket__section__title">
            <p>Устройство</p>
          </div>
          <div className="basket__section__flex">
            <div className="basket__section__flex__wrapper">
              {/* --------------------------------------------- */}
              <div className="basket__section__flex__wrapper__card1">
                <div className="basket__section__flex__wrapper__card1__flex">
                  <img className="bask-img" src={postItem?.image} alt="air" />
                  <div className="basket__section__flex__wrapper__card1__flex__text">
                    <h3 className="h3">{postItem?.title}</h3>
                    <p className="p-price">{postItem?.price} ₸</p>
                  </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="basket__section__flex__wrapper__card1__count">
                  <div className="basket__section__flex__wrapper__card1__count__flex">
                    <span onClick={decrement}>
                      <img src={icon9} alt="minus" />
                    </span>
                    <h3>{count}</h3>
                    <span onClick={increment}>
                      <img src={icon8} alt="plus" />
                    </span>
                  </div>
                  <p className="to-price"> {allCounts} ₸</p>
                </div>
              </div>
              {/* ----------------------------------------------------------------------------------------- */}
              <div className="basket__section__flex__wrapper__card2">
                <div className="basket__section__flex__wrapper__card2__title">
                  <p>Доставка</p>
                </div>
                <div className="basket__section__flex__wrapper__card2__img">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043795!2d69.20123767547184!3d41.28551820230863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1683466875874!5m2!1sru!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="basket__section__flex__wrapper__card2__ordering">
                  <div className="basket__section__flex__wrapper__card2__ordering__flex">
                    <img src={icon10} alt="car" />
                    <p>Доставка курьером</p>
                  </div>
                  <p className="or-price"> 499 ₸</p>
                </div>
              </div>
              {/* ----------------------------------------------------- */}
            </div>
            <div className="basket__section__flex__total">
              <div className="basket__section__flex__total__flex">
                <p>ИТОГО</p>
                <div>
                  <p>₸ {allCounts + 499}</p>
                </div>
              </div>
              <NavLink to={`/ordering/${id}`}>
                <button className="basket__section__flex__total-btn">
                  Перейти к оформлению
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;

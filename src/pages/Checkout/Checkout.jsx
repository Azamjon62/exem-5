import "./index.scss"
import icon5 from "../../assets/img/icon5.svg";
import icon11 from "../../assets/img/icon11.svg";
import icon12 from "../../assets/img/icon12.svg";
import icon13 from "../../assets/img/icon13.svg";
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import postsApi from "../../api/posts";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const Checkout = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { postItem, data } = useSelector((res) => res);

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

    console.log(postItem);
    console.log(data);

    // const [checking, setChecking] = useState("Uzbekistan");

    // const check = (evt) => {
    //   const value = setChecking(evt.target.value);

    //   console.log(evt);
    //   console.log(value);
    //   // if (value.length) {
    //   //   console.log("good");
    //   // } else {
    //   //   alert("bad");
    //   // }
    // }

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout__section">
          <div className="checkout__section__title">
            <p>Оформление заказа</p>
          </div>
          <div className="checkout__section__flex">
            <div className="checkout__section__flex__courierDelivery">
              <div className="checkout__section__flex__courierDelivery__text">
                <p>Доставка курьером</p>
                <span> 499 ₸</span>
              </div>
              <div className="checkout__section__flex__courierDelivery__img">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8398711163!2d69.11455597569169!3d41.2827379463749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1683467486458!5m2!1sru!2s"
                  width="600"
                  height="450"
                  style={{border:0}}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="checkout__section__flex__courierDelivery__location">
                <img src={icon5} alt="location-icon" />
                <p>Адрес доставки</p>
              </div>
              <div className="checkout__section__flex__courierDelivery__inputs">
                <form className="checkout__section__flex__courierDelivery__inputs__form">
                  <label className="label1" htmlFor="city">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Город"
                      required
                      // value={checking}
                    />
                    <img src={icon11} alt="pen" />
                  </label>

                  <label className="label1" htmlFor="road">
                    <input
                      type="text"
                      name="city"
                      id="road"
                      placeholder="Улица / Район"
                      required
                    />
                    <img src={icon11} alt="pen" />
                  </label>

                  <div className="checkout__section__flex__courierDelivery__inputs__form__flex">
                    <label className="label2" htmlFor="home">
                      <input
                        type="text"
                        name="home"
                        id="home"
                        placeholder="Дом"
                      />
                      <img src={icon11} alt="pen" />
                    </label>

                    <label className="label2" htmlFor="entrance">
                      <input
                        type="text"
                        name="entrance"
                        id="entrance"
                        placeholder="Подъезд"
                      />
                      <img src={icon11} alt="pen" />
                    </label>
                  </div>

                  <label className="label2" htmlFor="entrance">
                    <input
                      type="text"
                      name="entrance"
                      id="entrance"
                      placeholder="Квартира"
                    />
                    <img src={icon11} alt="pen" />
                  </label>
                </form>
              </div>
            </div>
            {/* ------------------------------------------------ */}
            <div className="checkout__section__flex__yourOrder">
              <div className="checkout__section__flex__yourOrder__wrapper">
                <h3 className="order-h3">Ваш заказ</h3>
                <div className="checkout__section__flex__yourOrder__wrapper__flex">
                  <div className="checkout__section__flex__yourOrder__wrapper__flex__prices">
                    <div className="checkout__section__flex__yourOrder__wrapper__flex__prices__much">
                      <span>{data[data?.length - 1]?.number}х</span>
                      <span title={postItem?.title}>
                        {postItem?.title.slice(0, 28)}
                      </span>
                    </div>
                    <span>₸ {postItem?.price}</span>
                  </div>

                  <div className="checkout__section__flex__yourOrder__wrapper__flex__prices">
                    <p>Доставка</p>
                    <span>₸ 499</span>
                  </div>
                  <div className="checkout__section__flex__yourOrder__wrapper__flex__prices">
                    <p>К оплате</p>
                    <span>₸ {data[data?.length - 1]?.toPay}</span>
                  </div>
                </div>
              </div>
              {/* ------------ */}
              <div className="checkout__section__flex__yourOrder__wrapper2">
                <h3>Способ оплаты</h3>
                <div className="baz">
                  <img src={icon12} alt="ic" />
                  <p>Счет на kaspi.kz</p>
                </div>
                <label className="bar" htmlFor="promo-code">
                  <img src={icon13} alt="ico" />
                  <input
                    type="text"
                    name="text"
                    id="promo-code"
                    placeholder="Есть промокод?"
                    required
                  />
                </label>
              </div>
              {/* -------------- */}
              <div className="checkout__section__flex__yourOrder__wrapper3">
                <h3>Номер получателя</h3>
                <label className="label3" htmlFor="phone">
                  <input
                    type="tel"
                    name="phone number"
                    id="phone"
                    placeholder="+7 ___ ___ __ __"
                    required
                  />
                  <img src={icon11} alt="pencil" />
                </label>
              </div>
              {/* -------------- */}
              <NavLink to="/ordered">
                <button
                  // onClick={check}
                  type="submit"
                  className="checkout__section__flex__yourOrder__finish"
                >
                  Закончить оформление
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

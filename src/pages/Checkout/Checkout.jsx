import "./index.scss"
import img19 from "../../assets/img/img19.svg"
import icon5 from "../../assets/img/icon5.svg";
import icon11 from "../../assets/img/icon11.svg";
import icon12 from "../../assets/img/icon12.svg";
import icon13 from "../../assets/img/icon13.svg";
import { NavLink } from "react-router-dom";


const Checkout = () => {
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
                <img src={img19} alt="map" />
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
                    />
                    <img src={icon11} alt="pen" />
                  </label>

                  <label className="label1" htmlFor="road">
                    <input
                      type="text"
                      name="city"
                      id="road"
                      placeholder="Улица / Район"
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
                      placeholder="Подъезд"
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
                      <span>1х</span>
                      <span>Наушники Apple BYZ S852I</span>
                    </div>
                    <span>₸ 2 927</span>
                  </div>

                  <div className="checkout__section__flex__yourOrder__wrapper__flex__prices">
                    <p>Доставка</p>
                    <span>₸ 2 927</span>
                  </div>
                  <div className="checkout__section__flex__yourOrder__wrapper__flex__prices">
                    <p>К оплате</p>
                    <span>₸ 2 927</span>
                  </div>
                </div>
              </div>
              {/* ------------ */}
              <div className="checkout__section__flex__yourOrder__wrapper2">
                <h3>Способ оплаты</h3>
                <div className="baz" >
                  <img src={icon12} alt="ic" />
                  <p>Счет на kaspi.kz</p>
                </div>
                <label className="bar" htmlFor="promo-code">
                  <img src={icon13} alt="ico" />
                  <input type="text" name="text" id="promo-code" placeholder="Есть промокод?" />
                </label>
              </div>
              {/* -------------- */}
              <div className="checkout__section__flex__yourOrder__wrapper3" >
                <h3>Номер получателя</h3>
                <label className="label3" htmlFor="phone">
                    <input type="tel" name="phone number" id="phone" placeholder="+7 ___ ___ __ __" />
                    <img src={icon11} alt="pencil" />
                </label>
              </div>
              {/* -------------- */}
              <NavLink to="/ordered" >
                <button className="checkout__section__flex__yourOrder__finish" >Закончить оформление</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

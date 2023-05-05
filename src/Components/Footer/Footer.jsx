import "./index.scss"
import img10 from "../../assets/img/img10.svg"
import icon1 from "../../assets/img/icon1.svg";
import icon2 from "../../assets/img/icon2.svg";
import icon3 from "../../assets/img/icon3.svg";
import icon4 from "../../assets/img/icon4.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__section">
          <NavLink className="logo" to="/">
            <h1>QPICK</h1>
          </NavLink>
          <div className="footer__section__flex" >

            <ul className="ul" >
              <li><a href="#">Избранное</a></li>
              <li><a href="#">Корзина</a></li>
              <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>

            <div className="wrapper" >

              <p>
                <NavLink to="/service-requirements">Условия сервиса</NavLink>
              </p>

              <div className="language" >
                <img src={img10} alt="world-icon" />
                <p>Каз</p>
                <p>Рус</p>
                <p>Eng</p>
              </div>

            </div>

          </div>
          <div className="footer__section__social_media" >
            <a href="https://vk.com/"> <img src={icon1} alt="VK" /> </a>
            <a href="https://www.instagram.com/"> <img src={icon2} alt="VK" /> </a>
            <a href="https://t.me/azamjon62"> <img src={icon3} alt="VK" /> </a>
            <a href="https://www.whatsapp.com/?lang=ru"> <img src={icon4} alt="VK" /> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
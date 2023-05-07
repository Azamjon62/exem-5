// import img11 from "../../assets/img/img11.svg";
import img12 from "../../assets/img/img12.svg";
import img13 from "../../assets/img/img13.svg";
import img14 from "../../assets/img/img14.svg";
import img15 from "../../assets/img/img15.svg";
import icon5 from "../../assets/img/icon5.svg";
import icon6 from "../../assets/img/icon6.svg";
import "./index.scss";

const Contacts = () => {

    
  return (
    <div className="contacts">
      <div className="container">
        <div className="contact__card">
          <div className="contact__card__flex">
            <div className="contact__card__flex__map">
              <h4 className="contact__card__flex__map-h4">Наш офис</h4>
              <div className="contact__card__flex__map__loc">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8398711163!2d69.11455597569169!3d41.2827379463749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1683466642646!5m2!1sru!2s"
                  width="600"
                  height="450"
                  style={{border:0}}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="contact__card__flex__map__address">
                <img src={icon5} alt="" />
                <div className="contact__card__flex__map__address__flex">
                  <p>Аксай-3а, 62ф, Алматы, Казахстан</p>
                  <div>
                    <p className="small-p">3 этаж 35 кабинет</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact__card__flex__wrapper">
              <a href="https://www.whatsapp.com/?lang=ru">
                <img src={img12} alt="whatsapp" />
              </a>
              <a href="https://vk.com/">
                <img src={img13} alt="whatsapp" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={img14} alt="whatsapp" />
              </a>
              <a href="https://t.me/azamjon62">
                <img src={img15} alt="whatsapp" />
              </a>
            </div>
          </div>

          <h3 className="contact__card__telNum">
            <img src={icon6} alt="phone" /> +7 777 777 77 77{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contacts
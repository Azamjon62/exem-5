import "./index.scss"
import img6 from "../../assets/img/img6.svg"
import img9 from "../../assets/img/img9.svg";

const Card3 = () => {
  return (
    <div className="card3">
      <div className="card3__section">
        <div className="card3__section__heart">
          <img src={img9} alt="" />
        </div>
        <div className="card3__section__device">
          <img src={img6} alt="phone" />
        </div>
        <div className="card3__section__title">
          <h2>BOROFONE BH32</h2>
          <div className="card3__section__title__price">
            <div className="card3__section__title__price__flex">
              <p>2 927 ₸</p>
              <span>3 527 ₸</span>
            </div>
            <p className="card3__section__title__price__discount">-20%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3
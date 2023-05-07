import "./index.scss";
import img9 from "../../assets/img/img9.svg";
import { useSelector } from "react-redux";

const Card3 = () => {
  const { postItem } = useSelector((res) => res);

  return (
    <div className="card3">
      <div className="card3__section">
        <div className="card3__section__heart">
          <img src={img9} alt="heart" />
        </div>
        <div className="card3__section__device">
          <img src={postItem?.image} alt="phone" />
        </div>
        <div className="card3__section__title">
          <h3>{postItem?.title.slice(0, 30)}</h3>
          <div className="card3__section__title__price">
            <div className="card3__section__title__price__flex">
              <p>{postItem?.price} ₸</p>
              <span>1.527 ₸</span>
            </div>
            <p className="card3__section__title__price__discount">-20%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;

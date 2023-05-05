import "./index.scss";
import img7 from "../../assets/img/img7.svg"
import img8 from "../../assets/img/img8.svg";
import img9 from "../../assets/img/img9.svg";

const Card2 = () => {
  return (
    <div className="card2">
      <div className="card2__wrapper">
        <div className="card2__wrapper__heart">
          <img src={img9} alt="" />
        </div>

        <div className="card2__wrapper__img">
          <img src={img7} alt="naushniki" />
        </div>
        <div className="card2__wrapper__title">
          <h3>Apple BYZ S852I</h3>
          <div className="card2__wrapper__title__flex">
            <p>2927 ₸</p>
            <p className="p">3527 ₸</p>
          </div>
        </div>
        <p className="card2__wrapper__evaluation">
          <img src={img8} alt="star" /> <p>4.7</p>{" "}
        </p>
      </div>
    </div>
  );
}

export default Card2
import "./index.scss";
import img8 from "../../assets/img/img8.svg";
import img9 from "../../assets/img/img9.svg";
import icon14 from "../../assets/img/icon14.svg";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../../api/posts";
import { NavLink } from "react-router-dom";

const Card2 = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((res) => res);

  useEffect(() => {
    postApi
      .getAll()
      .then((res) => {
        dispatch({
          type: "GET_ALL",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          payload: err,
        });
      });
  }, []);

  const [heart, setHeart] = useState(true);

  return post.slice(10, 16).map((item) => {
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
                <img src={item.image} alt="naushniki" />
              </div>
              <div className="card2__wrapper__title">
                <h3>{item.title.slice(0, 20)}</h3>
                <div className="card2__wrapper__title__flex">
                  <p>{item.price} ₸</p>
                  <div>
                    <p className="p">3527 ₸</p>
                  </div>
                </div>
              </div>
              <p className="card2__wrapper__evaluation">
                <img src={img8} alt="star" /> <p>{item.rating.rate}</p>
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    );
  });
};

export default Card2;

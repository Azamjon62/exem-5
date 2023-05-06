import "./index.scss";
import img8 from "../../assets/img/img8.svg";
import img9 from "../../assets/img/img9.svg";

import { useEffect } from "react";
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
        console.log(res);
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          payload: err,
        });
      });
  }, []);


  return post.slice(4, 7).map((item) => {
    return (
      <NavLink to="/single-product" key={item.id}>
        <div className="card2">
          <div className="card2__wrapper">
            <div className="card2__wrapper__heart">
              <img src={img9} alt="" />
            </div>

            <div className="card2__wrapper__img">
              <img src={item.image} alt="naushniki" />
            </div>
            <div className="card2__wrapper__title">
              <h3>{item.title.slice(0, 20)}</h3>
              <div className="card2__wrapper__title__flex">
                <p>{item.price} ₸</p>
                <p className="p">3527 ₸</p>
              </div>
            </div>
            <p className="card2__wrapper__evaluation">
              <img src={img8} alt="star" /> <p>{item.rating.rate}</p>
            </p>
          </div>
        </div>
      </NavLink>
    );
  });
};

export default Card2;

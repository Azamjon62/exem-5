import Card3 from "../../cards/Card3/Card3";
import "./index.scss";
import icon7 from "../../assets/img/icon7.svg";
import img20 from "../../assets/img/img20.svg";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import postsApi from "../../api/posts";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { postItem } = useSelector((res) => res);

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
  }, [id]);

  console.log(postItem);
  
  const [ modal, setModal ] = useState(true);
  const [ saved, setSaved ] = useState(true);


  return (
    <div className="singleProduct">
      <div className="container">
        <div className="singleProduct__section">
          <div className="singleProduct__section__title">
            <p>Автодержатель </p>
          </div>
          {/* ---------------------------------- */}
          <div>
            <Card3 />
          </div>
          {/* ---------------------------------- */}
          <div className="singleProduct__section__flex">
            <div
              className="singleProduct__section__flex__select"
              onClick={() => {
                modal ? setModal(false) : setModal(true);
              }}
            >
              <div className="singleProduct__section__flex__select__modal">
                <p>Описание и характеристики</p>
              </div>
              <p
                className="singleProduct__section__flex__select__p"
                style={{
                  display: `${modal ? "none" : "block"}`,
                }}
              >
                {postItem?.description}
              </p>
            </div>

            <div className="singleProduct__section__flex__btn">
              <a className="singleProduct__section__flex__btn__a" href="#">
                <button className="action">
                  <img src={img20} alt="" />
                </button>
              </a>
              <NavLink to={`/products/${id}`}>
                <button className="action1">Купить!</button>
              </NavLink>
              <NavLink>
                <button
                  onClick={() => {
                    saved ? setSaved(false) : setSaved(true);
                  }}
                  className="action2"
                >
                  <img src={icon7} alt="" />
                  {saved ? <p>Добавить в корзину</p> : <p>Добавлен</p>}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

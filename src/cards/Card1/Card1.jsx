import "./index.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../../api/posts";

const Card1 = () => {
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

  return post.slice(0, 3).map((item) => {
    return (
      <div className="card1" key={item.id}>
        <NavLink to={`/single-product/${item.id}`} className="card1__flex">
          <img src={item.image} alt="phone" />
          <p title={item.title}>{item.title.slice(0, 11)}</p>
        </NavLink>
      </div>
    );
  });
};

export default Card1;

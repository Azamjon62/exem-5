import "./index.scss"
// import img6 from "../../assets/img/img6.svg"
import img9 from "../../assets/img/img9.svg";

// import { useEffect } from "react";
// import postsApi from "../../api/posts";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Card3 = () => {


  const {postItem} = useSelector((res) => res)

  // const { id } = useParams();
  // const dispatch = useDispatch();
  // const { postItem } = useSelector((res) => res);

  // useEffect(() => {
  //   postsApi
  //     .getItem(id)
  //     .then((res) => {
  //       dispatch({
  //         type: "ITEM",
  //         payload: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [dispatch, id]);

  // console.log(postItem);

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
            <h2>{postItem?.title.slice(0, 30)}</h2>
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
}

export default Card3
import "./index.scss";
import img1 from "../../assets/img/img1.svg";
import img10 from "../../assets/img/img10.svg";
import icon15 from "../../assets/img/icon15.svg";
// import img2 from "../../assets/img/img2.svg";
import img3 from "../../assets/img/img3.svg";
import img4 from "../../assets/img/img4.svg";
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../../api/posts";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useState } from "react";


const Header = () => {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((res) => res);

  useEffect(() => {
    postApi
      .getAllCategories()
      .then((res) => {
        dispatch({
          type: "ALL_CATE",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          payload: err,
        });
      });
  }, [dispatch]);

  const information = {
    items: allCategories.map((category) => ({
      label: category.charAt(0).toUpperCase() + category.slice(1),
      key: category.length,
    })),
  };

  const [open, setOpen] = useState(false);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const [toggle, setToggle] = useState(true);

  console.log(toggle);
  return (
    <div className="header">
      <div className="container">
        <div className="flex">
          <div className="flex__logo">
            <NavLink to="/">
              <h1>QPICK</h1>
            </NavLink>
          </div>

          <div className="flex__selected">
            <div className="heart">
              <img src={img3} alt="heart" />
              <sup>0</sup>
            </div>
            <NavLink to="/selected">
              <div className="basket">
                <img src={img4} alt="vector" />
                <sup>0</sup>
              </div>
            </NavLink>
            <div
              className="flex__selected__toggle"
              onClick={() => (toggle ? setToggle(false) : setToggle(true))}
            >
              <img src={icon15} alt="" />
            </div>

            <div
              className="flex__logo__select"
              style={{
                display: `${toggle ? "none" : "flex"}`,
              }}
            >
              <h2 onClick={
                () => (toggle? setToggle(false) : setToggle(true))
              } 
                style={{
                  display: `${toggle ? "none" : "flex"}`,
                }}
              >
                Close
              </h2>
              <Dropdown
                className="dropdown"
                menu={information}
                onOpenChange={handleOpenChange}
                open={open}
              >
                <a className="gap" onClick={(e) => e.preventDefault()}>
                  <img src={img1} alt="p" />
                  <Space>
                    Выбрать модель телефона
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

                <div className="flex__logo__select__footer " >
                  <ul className="ul" >
                    <li><a href="#">Избранное </a></li>
                    <li><NavLink to="/service-requirements">Условия сервиса</NavLink></li>
                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                  </ul>
                  <div className="language" >
                    <img src={img10} alt="world" />
                    <a href="#">Каз</a>
                    <a href="#">Рус</a>
                    <a href="#">Eng</a>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

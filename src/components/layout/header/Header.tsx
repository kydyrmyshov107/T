/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import logo from "../../../assets/ddd.svg";
import imgDown from "../../../assets/downD.svg";
import Bell from "../../../assets/bell.svg";
import Q from "../../../assets/last.svg";
// import down from "../../../assets/callMain.png";
import { useEffect, useState } from "react";
import { getRequestT } from "../../../redux/tools/trelloSlice";

const Header = () => {
  const userItems = useAppSelector((state) => state.trellRender.data);
  const dispatch = useAppDispatch();
  const [testImage, setTestImage] = useState("");

  const isLocal = +localStorage.getItem("userData")!;

  const usersIsLocal = () => {
    const dataFind = userItems.find((item) => item.id === isLocal);
    console.log(dataFind);

    if (dataFind) {
      setTestImage(dataFind.userImage);

      console.log("error");
    }
  };

  useEffect(() => {
    dispatch(getRequestT());
  }, [dispatch]);

  useEffect(() => {
    usersIsLocal();
  }, [userItems]);

  return (
    <div style={{ background: "#1D2125" }}>
      <div>
        <StyledHeader>
          <OneHeader>
            <div className="Display">
              <img className="logo" src={logo} alt="" />
              <img
                className="Image"
                src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
                alt="image"
              />

              <p>Рабочее пространство</p>
              <img className="imgDown" src={imgDown} alt="" />
              <p>Недавние</p>
              <img className="imgDown" src={imgDown} alt="" />

              <p>В избранном</p>
              <img className="imgDown" src={imgDown} alt="" />

              <p>Шаблоны</p>

              <img className="imgDown" src={imgDown} alt="" />

              <button>Создать</button>
            </div>
          </OneHeader>

          {/* 2 */}
          <TwoHeader>
            <input type="text" placeholder="Поиск" />

            <img src={Bell} alt="" />
            <img src={Q} alt="image" />
            {isLocal ? (
              <>
                <img className="User" src={testImage} alt="image" />
              </>
            ) : null}
          </TwoHeader>
        </StyledHeader>
      </div>
    </div>
  );
};

export default Header;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  padding-block: 5px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  /* background: var(--ds-surface #161a1d); */

  /* background: #363636; */
  /* width: 100%; */
  /* background: #1d2133; */
`;

const OneHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 50px;
    height: 40px;
  }
  img.logo {
    width: 27px;
    height: 25px;
  }
  img.imgDown {
    width: 20px;
    height: 20px;
  }
  div.Display {
    display: flex;
    gap: 10px;
    align-items: center;
    p {
      color: gray;
    }

    img.Image {
      /* opacity: 0; */
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 10%;
      height: 40%;
    }
  }
  p.text {
    font-weight: 900;
    font-size: 24px;
    font-weight: 500;
    color: #9fadbc;
    cursor: pointer;
  }
  button {
    padding: 5px 19px;
    color: #ffffff;

    border-radius: 5px;
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size: 13px;
    background: #0c66e4;
    font-family: "Courier New", Courier, monospace;
    cursor: pointer;

    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
    border: none;
  }
`;

const TwoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 35px;
    height: 26px;
    /* color: gray; */
    filter: gray;
  }
  input {
    height: 32px;
    width: 100%;
    padding: 0px var(--ds-space-150, 12px) 0px 30px;
    box-sizing: border-box;
    outline: none;
    border-radius: 5px;
    font-size: 14px;
    line-height: 20px;
    border: 2px solid #a6c5e229;
    box-shadow: none;
    background-color: #22272b;
    color: var(--ds-text-subtlest, #ffffff);

    /* max-width: 190px;
    height: 2rem;
    background-color: transparent;
    border: 2px solid transparent;
    color: white;
    padding: 1rem;
    box-shadow: 2px 2px 5px black, inset 2px 2px 5px rgb(53, 51, 51),
      -1px -1px 20px rgba(59, 56, 56, 0.781);
    outline: none; */
    /* border-radius: 10px; */
    /* border: 1px solid gray;
    font-size: medium; */
  }
  img.User {
    border-radius: 30px;
    height: 35px;
    object-fit: cover;
    object-position: center;
  }
`;

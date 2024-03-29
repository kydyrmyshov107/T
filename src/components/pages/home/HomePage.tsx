/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import Header from "../../layout/header/Header";
import styled from "styled-components";
import logo from "../../../assets/oneFoto.svg";
import Two from "../../../assets/TwoFoto.svg";
import tree from "../../../assets/treeFoto.svg";
import calendar from "../../../assets/calendar.svg";
import caledarTwo from "../../../assets/calendarTwo.svg";
import z from "../../../assets/svg/zveida.svg";
import twoPerson from "../../../assets/svg/twoPerosn.svg";
import line from "../../../assets/svg/tLine.svg";
import d from "../../../assets/svg/d.svg";
import raketa from "../../../assets/svg/raketa.svg";
import c from "../../../assets/svg/column.svg";
import last from "../../../assets/svg/tochka.svg";
import userImg from "../../../assets/svg/user.svg";
import plus from "../../../assets/plus.svg";
import editImg from "../../../assets/edit.svg";
import lastImg from "../../../assets/lastImg.svg";
import back from "../../../assets/x.svg";
// import down from "../../../assets/down.png";
import { useEffect, useState } from "react";
import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  putRequest,
} from "../../../redux/tools/userSlice";

const MainDiv = styled.div`
  display: flex;
  height: "100%";
`;
//!1
const LeftDiv = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 100%;
  /* height: 684px; */
  height: 93.7vh;

  padding: 3px 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background: #282e33; */
  background: #132137;
  div.LastDiv {
    border-top: 2px solid hsla(211, 18%, 68%, 0.16);
    background: linear-gradient(
      97.78deg,
      var(--ds-background-accent-purple-bolder, #4423a3) 17.5%,
      var(--ds-background-accent-magenta-subtle, #aa63cb) 113.39%
    );
    padding: 12px 10px;
    text-align: center;
    color: #1d2125;
    border-radius: 6px;
    &:hover {
      background: linear-gradient(
        97.78deg,
        var(--ds-background-accent-purple-bolder, #6e52cc) 17.5%,
        var(--ds-background-accent-magenta-subtle, #bf84ce) 113.39%
      );
      p {
        color: #9fadbc;
      }
    }
  }
  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid hsla(211, 18%, 68%, 0.16);
    p {
      font-size: 14px;
      font-weight: 600;
      color: #9fadbc;
    }
    p.Text {
      background: linear-gradient(
        var(--ds-background-accent-blue-bolder, #0747a6),
        var(--ds-background-accent-teal-bolder, #008da6)
      );
      border-radius: 5px;
      height: 30px;
      width: 30px;
      padding: 5px 10px;
      color: #1d2125;
      font-size: 20px;

      p {
        /* width: 100%;
        height: 100%;
        font-size: 20px;
        color: var(--ds-text-inverse, #ffffff);
        font-weight: bold; */
      }
    }
  }

  div.main {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    gap: 20px;
    padding: 15px 0;
    /* img {
      width: 32px;
      height: 28px;
    } */
    div.Plus {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        color: rgb(159, 173, 188);
        font-size: 14px;
      }
      img {
        /* width: 22px;

        height: 22px; */
        width: 19px;
      }
    }
    div.Down {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 22px;

        height: 22px;
      }
      p {
        font-size: 14px;
      }
    }
    p.Text {
      color: rgb(159, 173, 188);
      font-size: 16px;
    }
    div.Two {
      display: flex;
      align-items: center;
      gap: 13px;

      p {
        color: rgb(159, 173, 188);
      }
      /* justify-content: space-around; */

      &:hover {
        border: 1px solid;
      }
    }
    div.Last {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 17px;
      }
      p {
        color: rgb(159, 173, 188);
      }
    }
  }
`;
//!2
const CenterDiv = styled.div`
  max-width: 1920px;
  width: 100%;
  div.MainB {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    border-radius: 3px;
    /* width: 1001px;
    max-width: 100%; */

    /* height: 50px;
    max-height: 8%; */
    padding: 7px 0;
    gap: 5px;
    /* width: 100%;
    max-width: 1200px; */
  }
  img {
    width: 17px;
  }

  padding: 10px;
  background: #17274a;
  /* background-color: #0000003d; */

  /* background: #0000003d; */
  div.First {
    display: flex;
    align-items: center;
    gap: 13px;
    div.Blog {
      display: flex;
      gap: 5px;
      p {
        font-family: "Courier New", Courier, monospace;
        font-weight: bold;
        color: #ffffff;
      }
    }
    p.Test {
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
      font-family: "Courier New", Courier, monospace;
    }
  }
  div.Second {
    display: flex;
    align-items: center;
    gap: 13px;
    div.UserCard {
      display: flex;
      align-items: center;
      gap: 4px;
      background: #dfe1e6;
      padding: 4px 10px;
      border-radius: 3px;
      p {
        /* font-weight: bold; */
        color: #172b4d;
      }
    }

    img.User {
      border-radius: 40px;
      width: 26px;
    }
    p {
      color: #ffffff;
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
    }
  }
`;

const HomePage = () => {
  const users = useAppSelector((state) => state.userRender.data);
  const dispatch = useAppDispatch();
  const [iscompleted, setIsCompleted] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [newValue, setNewValue] = useState("");
  const [showInput, setShowInput] = useState<null | number>(null);
  const [isEdit, setIsEdit] = useState(null);
  const [_, setEditInput] = useState("");

  const handle = () => {
    if (valueInput === "") {
      return null;
    } else {
      const newData = {
        title: valueInput,
        todos: [],
      };
      dispatch(postRequest(newData));
    }
    setIsCompleted(false);
    setValueInput("");
  };

  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);
  // !post

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  // const columnInputs = (
  //   id: number,
  //   title: string,
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   item: any
  // ) => {
  //   console.log(item);
  //   const newUserData = {
  //     title,
  //     todos: [
  //       ...item.todos,
  //       {
  //         _id: Math.random(),
  //         todoTitle: newValue,
  //       },
  //     ],
  //   };
  //   console.log(newUserData);

  //   dispatch(patchRequest({ id, newUserData }));
  //   setShowInput(null);
  // };

  // !2
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columnInputs = (_id: number, title: string, item: any) => {
    const newTodoTitle = newValue;
    if (newTodoTitle === "") {
      return null;
    } else {
      const newUserData = {
        title,
        todos: [
          ...item.todos,
          {
            _id: Math.random(),
            todoTitle: newTodoTitle,
          },
        ],
      };
      console.log(newUserData);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch<any>(
        patchRequest({
          _id,
          newUserData,
          title: "",
        })
      );
    }
    setNewValue("");
    setShowInput(null);
  };
  // !put
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const edit = (todo: any) => {
    setIsEdit(todo._id);
    setEditInput(todo.todoTitle);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const saveEdit = (_id: number, todos: any, id: number) => {
  //   const newData = todos.map((el: { id: number; }) => {
  //     if (el.id === id) {
  //       return { ...el, todoTitle: editInput };
  //     }
  //     return el;
  //   });
  //   const newValue = {
  //     todos: newData,
  //   };
  //   dispatch(putRequest({ newUserData: newValue, _id }));
  //   setIsEdit(null);
  // };

  //!2
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveEdit = (_id: number, todos: any, id: number, title: string) => {
    const newData = todos.map((el: { _id: number }) => {
      if (el._id === id) {
        return { ...el, todoTitle: newValue };
      }
      return el;
    });
    if (newValue === "") {
      return null;
    } else {
      const newValue = {
        title,
        todos: newData,
      };
      dispatch(
        putRequest({
          newUserData: newValue,
          _id,
          title: "",
        })
      );
    }
    setIsEdit(null);
  };

  const cancelEdit = () => {
    setIsEdit(null);
  };
  // !delete
  // const deleteItems = (id: number) => {
  //   dispatch(deleteRequest(id));
  // };
  return (
    <div className="TestB">
      <Header />
      <div>
        <div>
          <MainDiv>
            <LeftDiv>
              <div>
                <div className="header">
                  <p className="Text">P</p>
                  <p>
                    Рабочее пространство <br />
                    Trello
                  </p>
                  <img
                    src="https://trello.com/assets/58243262833f693f6101.svg"
                    alt=""
                  />
                </div>
                {/* 2 */}
                <div className="main">
                  <div className="Two">
                    <img src={logo} alt="" />
                    <p>Доски</p>
                  </div>
                  <div className="Plus">
                    <div className="Two">
                      <img src={Two} alt="" />
                      <p>Участники</p>
                    </div>
                    <img src={plus} alt="" />
                  </div>
                  <div className="Down">
                    <div className="Two">
                      <img src={tree} alt="" />
                      <p>Настройки рабочего пространства</p>
                    </div>
                    <img src={d} alt="" />
                  </div>
                  <p className="Text">Режимы просмотра рабочего пространства</p>
                  <div className="Two">
                    <img src={calendar} alt="" />
                    <p>Таблица</p>
                  </div>
                  <div className="Two">
                    <img src={caledarTwo} alt="" />
                    <p>Календарь</p>
                  </div>
                  <div className="Last">
                    <p>Мои доски </p> <img src={plus} alt="" />
                  </div>
                </div>
              </div>
              <div className="LastDiv">
                <p>Попробовать Premium бесплатно</p>
              </div>
            </LeftDiv>

            <div style={{ width: "100%" }}>
              {/* 2 */}
              <CenterDiv>
                <div className="MainB">
                  <div className="First">
                    <p className="Test">Text</p>
                    <img src={z} alt="" />
                    <img src={twoPerson} alt="" />
                    <div className="Blog">
                      <img src={line} alt="" />
                      <p>По доске</p>
                    </div>
                    <img src={d} alt="" />
                  </div>
                  <div className="Second">
                    <img src={raketa} alt="" />
                    <img src={twoPerson} alt="" />
                    <img src={c} alt="" />
                    <p>Фильтры</p>
                    <img
                      className="User"
                      src="https://ca.slack-edge.com/T023L1WBFLH-U05UEGBFL4C-g180a7b25fb7-512"
                      alt="image"
                    />
                    <div className="UserCard">
                      <img src={userImg} alt="" />
                      <p>Поделиться</p>
                    </div>
                    <img src={last} alt="" />
                  </div>
                </div>
              </CenterDiv>
              <div>
                {iscompleted ? (
                  <>
                    <AsideStyle>
                      <FirstInput
                        className="Firts"
                        type="text"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                      />
                      <div className="Back">
                        <button onClick={handle}>Добавить список</button>
                        <img
                          onClick={() => setIsCompleted(false)}
                          src={back}
                          alt="image"
                        />
                      </div>
                    </AsideStyle>
                  </>
                ) : (
                  <>
                    <HeaderStyelDiv>
                      <img src={plus} alt="" />
                      <p onClick={() => setIsCompleted(true)}>
                        Добавьте еще одну колонку
                      </p>
                    </HeaderStyelDiv>
                  </>
                )}
                <MainStyle>
                  {users.map((item) => (
                    <RenderStyle key={item._id}>
                      {item.todos.map((todo) => (
                        <div className="Bottom" key={todo._id}>
                          {todo._id === isEdit ? (
                            <>
                              <input
                                type="text"
                                value={newValue}
                                onChange={(e) => setNewValue(e.target.value)}
                              />
                              <button
                                onClick={() =>
                                  saveEdit(
                                    item._id,
                                    item.todos,
                                    todo._id,
                                    item.title
                                  )
                                }
                              >
                                save
                              </button>
                              <button onClick={cancelEdit}>cancel</button>
                            </>
                          ) : (
                            <>
                              <div className="Lines">
                                <p className="BottomText">{todo.todoTitle}</p>
                                <img
                                  onClick={() => edit(todo)}
                                  src={editImg}
                                  alt="image"
                                />
                              </div>
                              {/* <div className="FooterDiv">
                                <div className="TwoDiv">
                                  <img src={plus} alt="" />
                                  <p>Добавить карточку</p>
                                </div>
                                <img src={lastImg} alt="" />
                              </div> */}
                            </>
                          )}
                        </div>
                      ))}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column-reverse",
                        }}
                      >
                        <p className="Texts">{item.title}</p>
                        <div
                          onClick={() => setShowInput(item._id)}
                          className="FooterDiv"
                        >
                          <div className="TwoDiv">
                            <img src={plus} alt="" />
                            <p>Добавить карточку</p>
                          </div>
                          <img src={lastImg} alt="" />
                        </div>
                        {item._id === showInput ? (
                          <>
                            <input
                              type="text"
                              value={newValue}
                              onChange={(e) => setNewValue(e.target.value)}
                            />
                            <button
                              onClick={() =>
                                columnInputs(item._id, item.title, item)
                              }
                            >
                              new
                            </button>
                          </>
                        ) : null}
                      </div>
                    </RenderStyle>
                  ))}
                </MainStyle>
              </div>
            </div>
          </MainDiv>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const FirstInput = styled.input`
  background: #22272b;
  box-shadow: inset#85B8FF;
  color: #a4c2e1;
  border-radius: 5px;
  font-weight: 400;
  padding: 6px 19px;
  margin-top: 7px;
  margin-left: 9px;
  /* width: 100%; */
`;

const AsideStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 272px;
  margin-left: 11px;
  margin-top: 10px;
  padding: 8px;
  border-radius: 12px;
  background: #101204;
  box-shadow: var(
    --ds-shadow-raised,
    0px 1px 1px #091e4240,
    0px 0px 1px #091e424f
  );
  div.Back {
    display: flex;
    align-items: center;
    gap: 18px;
    padding-left: 11px;
    button {
      background: #579dff;
      color: #1d2125;
      border: none;
      padding: 6px 15px;
      border-radius: 4px;
    }
    img {
      width: 18px;
    }
  }
`;

const HeaderStyelDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 250px;
  padding: 12px;
  border-radius: 10px;
  background: #6da4d680;
  color: #ffffffc5;
  margin-left: 10px;
  margin-top: 5px;

  img {
    width: 20px;
    height: 17px;
  }
`;

const MainStyle = styled.div`
  display: flex;
  /* overflow: hidden; */
  flex-wrap: wrap;
  /* flex-direction: column-reverse; */
  gap: 20px;
  margin-left: 10px;
  margin-top: 10px;
`;

const RenderStyle = styled.div`
  background: #101204;
  border-radius: 12px;
  box-shadow: var(
    --ds-shadow-raised,
    0px 1px 1px #091e4240,
    0px 0px 1px #091e424f
  );
  color: var(--accent-text, var(--ds-text-subtle, #44546f));
  width: 242px;
  max-height: 100%;
  padding: 8px 12px;
  display: flex;
  flex-direction: column-reverse;
  /* flex-direction: column-reverse; */
  gap: 9px;
  div.Lines {
    display: flex;
    align-items: center;
    /* padding: 8px; */
    p {
      width: 220px;
    }
    img {
      width: 15px;
      padding-bottom: 5px;
    }
  }
  div.FooterDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.TwoDiv {
      display: flex;
      align-items: center;
      gap: 5px;
      p {
        color: var(--ds-text, #6a7a94);
      }
    }
    img {
      width: 15px;
    }
  }
  p.Texts {
    padding: 8px 10px 4px;
    border-radius: 8px;
    min-height: 24px;
    color: var(--ds-text, #6a7a94);
    text-decoration: none;
    background: #324d663f;
  }
  div.Bottom {
    display: flex;
    flex-direction: column;

    p.BottomText {
      padding: 7px 10px 4px;
      border-radius: 8px;
      min-height: 24px;
      color: var(--ds-text, #6b86b1);
      text-decoration: none;
      background: #1d386758;
    }
  }
`;

import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import chatGpt from "chatGPT";

interface ChatType {
  text: string;
  whose: string; // yours || mine
}

function App() {
  const [chatList, setChatList] = useState<Array<ChatType>>([]);

  const [answer, setAnswer] = useState<string>("");

  const submitForm = (e: any) => {
    e.preventDefault();

    const myChat = e.target["text"].value;
    e.target["text"].value = "";

    setChatList([...chatList, { text: myChat, whose: "mine" }]);

    chatGpt(myChat, setAnswer);
  };

  useEffect(() => {
    if (answer.length > 0) {
      setChatList([...chatList, { text: answer, whose: "yours" }]);

      console.log("gg")
    }
  }, [answer]);

  return (
    <Main>
      <MainBox>
        <div id="chat-content">
          {chatList.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.whose === "yours" ? (
                <ChatBox>{item.text}</ChatBox>
              ) : (
                <ChatBox className="mine">{item.text}</ChatBox>
              )}
            </React.Fragment>
          ))}
        </div>
        <EnterText onSubmit={submitForm} autoComplete="off">
          <input type="text" name="text"></input>
          <button type="submit">Enter</button>
        </EnterText>
      </MainBox>
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: rgb(241 245 249);
  width: 100%;
  height: 100vh;
`;

const MainBox = styled.div`
  background-color: #fff;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;

  #chat-content {
    flex-grow: 1;
    overflow-y: scroll;
    padding: 20px 15px;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ChatBox = styled.div`
  background-color: rgb(217 249 157);
  padding: 5px 10px;
  margin: 10px 0;
  max-width: 300px;
  border-radius: 5px;
  word-break: break-all;

  &.mine {
    background-color: rgb(220 252 231);
    margin-left: auto;
  }
`;

const EnterText = styled.form`
  background-color: rgb(220 252 231);
  width: 100%;
  flex-basis: 50px;
  display: flex;

  input {
    width: 100%;
    padding: 0 10px;
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }

  button {
    padding: 10px 30px;
    border: none;
    &:hover {
      background-color: rgb(214 211 209);
      cursor: pointer;
    }
  }
`;

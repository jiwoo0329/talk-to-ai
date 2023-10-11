import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Main>
      <MainBox>
        <div id="chat-content">
          <ChatBox>너의</ChatBox>
          <ChatBox className="mine">나의</ChatBox>
        </div>
        <EnterText>
          <input type="text"></input>
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
  }
`;

const ChatBox = styled.div`
  background-color: rgb(217 249 157);
  padding: 5px 10px;
  margin: 10px 0;
  max-width: 300px;
  border-radius: 5px;

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

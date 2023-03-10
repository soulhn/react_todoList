import { createGlobalStyle } from "styled-components"; // 전역 스타일
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import Clock from "./components/Clock";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #282c34;
    color: black
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <Clock />
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;

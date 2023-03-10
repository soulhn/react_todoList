import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="더미데이터 1번" done={true} />
      <TodoItem text="더미테이터 2번" done={true} />
      <TodoItem text="투두앱 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;

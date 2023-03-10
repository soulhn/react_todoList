import React from "react";
import styled, { css } from "styled-components";

const Remove = styled.div`
  display: flex;
  align-items: center;
  color: yellow;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCirle = styled.div`
  width: 32px;
  height: 32px;
  /* border-radius: 16px; */
  /* border: 1px solid #ced4da; */
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: black;
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <TodoItemBlock>
        <CheckCirle done={done}>{done ? <i class="fa-solid fa-square-check"></i> : "x"}</CheckCirle>
        <Text done={done}>{text}</Text>
        <Remove>❌</Remove>
      </TodoItemBlock>
    </TodoItemBlock>
  );
}

export default TodoItem;

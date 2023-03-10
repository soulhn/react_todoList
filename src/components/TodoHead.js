import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid white;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: black;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  .weather {
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2019년 7월 10일 : time</h1>
      <div className="weather">지역: 서울 날씨 : 맑음</div>
      <div className="day">수요일</div>
      <div className="tasks-left">남은 할 일 : 2</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;

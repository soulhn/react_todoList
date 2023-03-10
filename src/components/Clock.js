import React from "react";
import styled from "styled-components";

const ClockBlock = styled.div`
  color: black;
  margin: 0 auto;
  padding: 10px;
`;
function convertToZeroPad(digit) {
  return `${digit}`.padStart(2, "0");
}

function getCurrentDateTime() {
  const today = new Date();
  const currentDateTime = {
    year: today.getFullYear(),
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(today),
    date: convertToZeroPad(today.getDate()),
    day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(today),
    hours: today.getHours() % 12,
    minutes: (today.getMinutes() < 10 ? "0" : "") + today.getMinutes(),
  };
  return currentDateTime;
}

function clock() {
  const { year, month, date, day, hours, minutes } = getCurrentDateTime();
  return (
    <ClockBlock>
      <div>
        {year}년 {month} {date}일 {day}
      </div>
      <div>
        {hours}시{minutes}분{hours > 12 ? "AM" : "PM"}
      </div>
    </ClockBlock>
  );
}

export default clock;

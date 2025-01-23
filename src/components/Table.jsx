import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Table = ({ removeFunc, countryList }) => {
  const newList = [...countryList];
  return (
    <TableWrap>
       <thead>{/* 테이블의 'head'부분 :속성 */}
        <tr> {/*테이블의 각 행 모아두기 */}
          <th>국가명</th> {/* 각 열(속성)  */}
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
       <tbody> {/*테이블의 'body' : 인스턴스 */}
        {newList
          .sort((a, b) => b.gold - a.gold)
          .map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td> {/* 하나하나의 셀  */}
              <td>{item.gold}</td>
              <td>{item.silver}</td>
              <td>{item.bronze}</td>
              <td>
                <Button
                  text="삭제"
                  type="warn"
                  onClickFunc={() => removeFunc(item.name)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </TableWrap>
  );
};

const TableWrap = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export default Table;

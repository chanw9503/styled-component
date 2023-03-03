import './App.css';
import styled from 'styled-components';
import TestPage from './component/TestPage';
import GlobalStyle from './GlobalStyle';

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

//박스의 색
const boxList = ['red', 'blue', 'green', 'b'];

//색을 넣으면, 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case 'red':
      return '빨간박스';
    case 'blue':
      return '파란박스';
    case 'green':
      return '초록박스';
    default:
      return '검정박스';
  }
};

function App() {
  return (
    // <StContainer>
    //   {/* <StBox borderColor="red">빨간박스</StBox> */}
    //   {boxList.map((box) => {
    //     return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
    //   })}
    // </StContainer>
    <>
      <GlobalStyle />
      <TestPage title="제목입니다." contents="내용입니다." />
    </>
  );

  //props : 부모 컴 -> 자식 컴
}

export default App;

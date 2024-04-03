import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import  Button  from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  background-color: yellow;
  color: var(--color-grey-800);
`;



const StyleApp = styled.div`
  background-color: #f15309;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Check in baby")}>Check in</Button>
        <Button onClick={() => alert("Check in baby")}>Check in</Button>
        <Input type="number" placeholder="Number of quests" />
      </StyleApp>
    </>
  );
}

export default App;

import styled from "styled-components";

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 0.8rem 1.6rem;
`;

const StyleApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <StyleApp>
      <H1>Hello World</H1>
      <Button onClick={() => alert("Check in baby")}>Check in</Button>
      <Button onClick={() => alert("Check in baby")}>Check in</Button>
      <Input type="number" placeholder="Number of quests"y/>
    </StyleApp>
  );
}

export default App;

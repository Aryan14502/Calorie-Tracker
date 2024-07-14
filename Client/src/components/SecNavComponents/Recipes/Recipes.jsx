import React from "react";
import './recipes.css'
import styled from "styled-components";


const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Card = styled.div`
  flex: 1;
  min-width: 200px;
  height: 300px;
  padding: 24px;
  //   border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border: 1px solid black;
  border-radius: 14px;
  display: flex;
  gap: 6px;
  //   box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  box-shadow: 1px 6px 20px 0px black;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  //   color: ${({ theme }) => theme.primary};
  color: blue;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

function Recipes() {
  return (
    <Container>
      <Wrapper>
      <div class="search-bar">
          <input type="text" placeholder="Search your recipes" />
          <button class="search-button">Search</button>
        </div>



      <FlexWrap>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
      </FlexWrap>




      <FlexWrap>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
      </FlexWrap>

      <FlexWrap>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
        <Card>
          <Title> Recipe</Title>
        </Card>
      </FlexWrap>

      </Wrapper>
    </Container>
  );
}

export default Recipes;

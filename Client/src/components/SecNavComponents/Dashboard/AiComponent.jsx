import React from 'react'
import styled from 'styled-components';
const Card = styled.div`
  flex: 1;
    // display:flex;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border: 1px solid black;

  border-radius: 14px;
//   box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  box-shadow: 1px 6px 20px 0px black;

  display: flex;
  flex-direction: flex-start;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
function AiComponent() {
  return (

    <Card>
    <Title> AI Generated Recommendation Analyzing the Progress</Title>

  
  </Card>

  )
}

export default AiComponent

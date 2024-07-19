import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

const Card = styled.div`
  flex: 1;
    // display:flex;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border: 1px solid black;

  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
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

const CategoryChart = ({ what ,data}) => {
  return (
    <Card>
      {/* <Title>Carbs</Title>
      <Title>Proteins</Title>
      <Title>Fats</Title> */}
      <PieChart
        series={[
          {
            data: data?.pieChartData,
            innerRadius: 30,
            outerRadius: 120,
            paddingAngle: 3,
            cornerRadius: 3,
          },
        ]}
        height={300}
      />
    
    </Card>
  );
};

export default CategoryChart;

import React from "react";
import styled from "styled-components";
import { PieChart, Legend, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Graph from "./Graph";
// import {Legend} from "@mui/x-charts";

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
  flex-direction:row;
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
flex :1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 22px;
  overflow :hidden;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }

`;

const handleMouseOver = (event, datum) => {
  console.log(`Mouse over: ${datum.category}`);
};

const handleMouseOut = (event, datum) => {
  console.log(`Mouse out: ${datum.category}`);
};

const handleClick = (event, datum) => {
  console.log(`Clicked: ${datum.category}`);
};

const handleSelect = (datum) => {
  console.log(`Selected: ${datum.category}`);
};

const CategoryChart = ({ what, data }) => {
  return (
    <>
      {/* <Title>Carbs</Title>
      <Title>Proteins</Title>
      <Title>Fats</Title> */}
  
        {/* <FlexWrap> 
          <div style={{
            position: 'relative',
            height: '100%',
            width: '100%',
          }}> */}
            <PieChart
              series={[
                {
                  data: data.pieChartData,
                  innerRadius: 30,
                  outerRadius: 120,
                  paddingAngle: 3,
                  cornerRadius: 3,

                  hoverStyle: {
                    fill: ({ datum }) => datum.color,
                    stroke: ({ datum }) => datum.color,
                    strokeWidth: 2,
                  },
                  selectable: true,
                  onSelect: ({ datum }) => handleSelect(datum),
                  tooltip: ({ datum }) => (
                    <div>
                      <span>{datum.category}</span>
                      <span>
                        {datum.value} ({datum.percentage}%)
                      </span>
                    </div>
                  ),
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: { innerRadius: 0, additionalRadius: -30, color: "gray" },
                },
              ]}
              height={400}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 14,
                },
              }}
              animation={{
                duration: 1000,
                easing: "easeInOut",
              }}
              ariaLabel="Pie Chart Example"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
            />

            {/* <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
              zIndex: -1,
            }}>
              <Graph />
            </div>
          </div>
        </FlexWrap> */}
   
    </>
  );
};

export default CategoryChart;

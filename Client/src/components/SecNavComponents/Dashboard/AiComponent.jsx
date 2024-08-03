import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./aicomponent.css";
import { IonButton, IonLoading, useIonLoading } from "@ionic/react";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border: 1px solid black;
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const FoodFactContainer = styled.div`
  position: relative;
  width: 300px; /* adjust the width as needed */
  height: 200px; /* adjust the height as needed */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex; /* add this to center the content vertically */
  justify-content: center; /* add this to center the content horizontally */
  align-items: center; /* add this to center the content vertically */
`;


const FoodFact = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: purple;
  text-align: center;
  padding: 20px;
  opacity: 0.8;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;

`;


const Text = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Heading = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;
function AiComponent({fact}) {
 
  const [isData, setData] = useState(false);
  const [printedText,setPrintedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  let tempfact = "Hey! health Concious, Welcome To EatWell"

  const [shouldRestart, setShouldRestart] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < tempfact.length) {
        setPrintedText(printedText + tempfact[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        if (shouldRestart) {
          setCurrentIndex(0);
          setPrintedText('');
        } else {
          setShouldRestart(true);
        }
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [currentIndex, fact, printedText, shouldRestart]);


  const [informationArrived, setInformationArrived] = useState("Hello User ");

  return (
    <>
    <FoodFact>{}</FoodFact>
    <Card>
       
      <div className="chatbot">
        {/* <FoodFactContainer> */}
         
        {/* </FoodFactContainer> */}

        {/* <h1 className="title ">Ask Me ?</h1> */}
        <FoodFact>{printedText}</FoodFact>
        {informationArrived ? (
          <div></div>
        ) : (
          <div>
            <IonButton id="open-loading">Show Loading</IonButton>
            <IonLoading
              trigger="open"
              message="Loading..."
              duration={3000}
              spinner="circles"
            />
          </div>
        )}
      </div>
    </Card>
    </>
  );
}

export default AiComponent;

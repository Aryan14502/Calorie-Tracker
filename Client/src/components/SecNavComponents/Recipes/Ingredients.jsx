import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "../../../axios";
import { IonItem, IonLabel, IonSpinner } from "@ionic/react";

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
function Ingredients() {
  const location = useLocation();
  const [url, setUrl] = useState("");
  const [id, setId] = useState(location.state?.recipeid);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchIngredients = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/card`,
        {
          params: {
            apiKey: "3ffb6fa2920e40b9b74433a1c86bf79a",
          },
        }
      );
      setUrl(response.data.url);
      //   console.log(response)
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("useEffect Called")

    setLoading(true);
    setTimeout(() => {
      fetchIngredients();
    }, 3000);
  }, [id]);

  return (
    <Container>
      <Wrapper>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "100vh",
            }}
          >
            {/* <IonSpinner></IonSpinner> */}
            <IonItem>
              {/* <IonLabel>Lines Sharp</IonLabel> */}
              <IonSpinner name="lines-sharp"></IonSpinner>
            </IonItem>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            marginTop: "50px",
          }}
        >
          <img
            src={url}
            // alt="Recipe Card"
            style={{
              width: "50%", // adjust the width to your liking
              height: "",
              objectFit: "cover",
            }}
          />
        </div>
      </Wrapper>
    </Container>
  );
}

export default Ingredients;

import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { styled } from "styled-components";
import { Dna } from "react-loader-spinner";

const LoaderComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px auto;
`;

const Fallback = () => {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowFallback(false), 1200);

    return () => clearTimeout(timeout);
  }, []);

  if (showFallback) {
    return (
      <Container maxWidth="xl">
        <LoaderComponent> <Dna />  </LoaderComponent>
      </Container>
    );
  }

  return null;
};

export default Fallback;

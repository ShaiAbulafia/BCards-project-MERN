import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { value, handleGetCards, handleDeleteCard } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = (cardId) => {
    handleDeleteCard(cardId);
    handleGetCards();
  };

  return (
    <>
      <Container>
        <PageHeader
          title="Cards Page"
          subtitle="On this page you can find all business cards from all categories"
        />
        <CardsFeedback
          isLoading={value.isLoading}
          cards={value.filteredCards}
          error={value.error}
          onDelete={onDeleteCard}
        />
      </Container>
    </>
  );
};

export default CardsPage;

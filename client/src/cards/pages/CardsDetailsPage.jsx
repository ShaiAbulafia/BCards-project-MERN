import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import PaperFeedback from "../components/PaperFeedback";

const CardsDetailsPage = () => {
  const { cardId } = useParams();
  const { value, ...rest } = useCards();

  useEffect(() => {
    rest.handleGetCard(cardId);
  }, []);

  const onChangeBizNum = useCallback(
    (bizNum, cardId) => {
      rest.handleChangeBizNumber(bizNum, cardId);
      rest.handleGetCard(cardId);
    },
    [rest]
  );
  return (
    <Container>
      <PageHeader
        title="Business details page"
        subtitle="here you can see details of the business"
      />
      <PaperFeedback
        card={value.card}
        isLoading={value.isLoading}
        error={value.error}
        onChangeBizNum={onChangeBizNum}
      />
    </Container>
  );
};

export default CardsDetailsPage;

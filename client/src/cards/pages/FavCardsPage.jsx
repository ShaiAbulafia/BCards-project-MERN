import { useCallback, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";

const FavCardsPage = () => {
  const { user } = useUser();
  const { value, ...rest } = useCards();

  useEffect(() => {
    rest.handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await rest.handleDeleteCard(cardId);
      await rest.handleGetFavCards();
    },
    [rest]
  );

  const changeLikeStatus = useCallback(async () => {
    await rest.handleGetFavCards();
  }, [rest]);

  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;
  // return <div>hi</div>;
  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite busniess cards"
      />
      <CardsFeedback
        isLoading={value.isLoading}
        cards={value.filteredCards}
        error={value.error}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default FavCardsPage;

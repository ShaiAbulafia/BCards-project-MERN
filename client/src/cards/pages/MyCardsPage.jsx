import { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import PageHeader from "../../components/PageHeader";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const MyCardsPage = () => {
  const { user } = useUser();
  const { value, handleGetMyCards, handleDeleteCard } = useCards();
  const { isLoading, error, filteredCards } = value;
  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyCards();
  }, []);

  const onDeleteCard = (cardId) => {
    handleDeleteCard(cardId);
    handleGetMyCards();
  };

  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;
  if (!user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can find your business cards"
      />

      {filteredCards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default MyCardsPage;

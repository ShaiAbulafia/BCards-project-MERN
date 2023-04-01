import { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-schemas/cardSchema";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import mapCardToModel from "../helpers/normalization/mapCardToModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import CardForm from "../components/CardForm";
import { useTheme } from "../../providers/ThemeProvider";

const CardEditPage = () => {
  const { isDark } = useTheme();
  const { handleUpdateCard, handleGetCard, card } = useCards();
  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const { value, ...rest } = useForm(initialCardForm, cardSchema, () =>
    handleUpdateCard(card._id, {
      ...normalizeCard({ ...value.data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
    })
  );
  useEffect(() => {
    handleGetCard(id).then((data) => {
      if (!data) navigate(ROUTES.CARDS);
      if (user._id !== data.user_id) navigate(ROUTES.CARDS);
      const modeledCard = mapCardToModel(data);
      rest.setData(modeledCard);
    });
  }, []);

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 3, backgroundColor: isDark ? "#333333" : "#1976d2" }}
      >
        <Typography variant="h3" component="h1" color="#fff" align="center">
          Edit card
        </Typography>
        <CardForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={value.data}
        />
      </Paper>
    </Container>
  );
};

export default CardEditPage;

import { useState, useCallback, useMemo, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeCard from "../helpers/normalization/normalizeCard";
import {
  getCards,
  getCard,
  getMyCards,
  createCard,
  editCard,
  deleteCard,
  changeLikeStatus,
} from "../services/cardApiService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useSearchParams } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import normalizeCardBiz from "../helpers/normalization/normalizeCardBiz";

const useCards = () => {
  const { user } = useUser();
  const [cards, setCards] = useState();
  const [card, setCard] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredCards, setFilter] = useState(null);
  const [searchParamas] = useSearchParams();

  useAxios();
  const snack = useSnack();
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(searchParamas.get("q") ?? "");
  }, [searchParamas]);

  useEffect(() => {
    if (cards) {
      setFilter(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = useCallback(
    (loading, errorMessages, cards, card = null) => {
      setLoading(loading);
      setError(errorMessages);
      setCards(cards);
      setCard(card);
    },
    []
  );

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [requestStatus]);

  const handleGetCard = useCallback(
    async (cardId) => {
      try {
        setLoading(true);
        const card = await getCard(cardId);
        requestStatus(false, null, null, card);
        return card;
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error, null, null);
      }
    },
    [requestStatus, snack]
  );

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [requestStatus]);

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter(
        (card) => !!card.likes.find((id) => id === user._id)
      );
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [requestStatus]);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      try {
        setLoading(true);
        const normalizezCard = normalizeCard(cardFromClient);
        const card = await createCard(normalizezCard);
        snack("success", "Created card successfully");
        navigate(ROUTES.MY_CARDS);
        requestStatus(false, null, null, card);
      } catch (error) {
        snack("error", error);
        requestStatus(false, error, null, null);
      }
    },
    [navigate, requestStatus, snack]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      try {
        setLoading(true);
        const card = await editCard(cardId, cardFromClient);
        requestStatus(false, null, null, card);
        snack("success", "Updated card successfully");
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error, null);
      }
    },
    [navigate, requestStatus, snack]
  );

  const handleDeleteCard = useCallback(
    async (cardId) => {
      try {
        setLoading(true);
        await deleteCard(cardId);
        snack("success", "Deleted card successfully");
        requestStatus(false, null, null);
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error, null);
      }
    },
    [requestStatus, snack]
  );

  const handleLikeCard = useCallback(
    async (cardId) => {
      try {
        setLoading(true);
        const card = await changeLikeStatus(cardId);
        const cards = await getCards();
        requestStatus(false, null, cards, card);
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error, null);
      }
    },
    [requestStatus, snack]
  );

  const handleChangeBizNumber = useCallback(
    async (bizNum, cardId) => {
      try {
        let isFree = true;
        const cards = await getCards();
        for (const index in cards) {
          if (cards[index].bizNumber === Number(bizNum)) {
            isFree = false;
          }
        }
        if (isFree) {
          const card = await getCard(cardId);
          const newCard = {
            ...normalizeCardBiz({ ...card }),
            bizNumber: Number(bizNum),
            user_id: card.user_id,
          };
          const retCard = await editCard(cardId, newCard);
          requestStatus(false, null, cards, retCard);
          return snack("success", "Biz number changed");
        }
        snack("error", "Biz number already taken");
      } catch (error) {
        snack("error", error);
      }
    },
    [requestStatus, snack]
  );

  const value = useMemo(() => {
    return {
      isLoading,
      error,
      cards,
      card,
      filteredCards,
    };
  }, [isLoading, error, cards, card, filteredCards]);

  return {
    value,
    card,
    handleCreateCard,
    handleDeleteCard,
    handleGetCard,
    handleGetCards,
    handleGetMyCards,
    handleLikeCard,
    handleUpdateCard,
    handleGetFavCards,
    handleChangeBizNumber,
  };
};

export default useCards;

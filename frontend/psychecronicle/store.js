import { configureStore } from "@reduxjs/toolkit";
import psychologistReducer, {
  setPsychologists,
} from "./src/reducers/psychologistReducer";
import quoteReducer from "./src/reducers/quoteReducer";
import psychologistService from "./src/services/psychologists";

const store = configureStore({
  reducer: {
    psychologists: psychologistReducer,
    quotes: quoteReducer,
  },
});

psychologistService.getAll().then((psychologists) => {
  store.dispatch(setPsychologists(psychologists));
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import psychologistReducer, {
  setPsychologists,
} from "./src/reducers/psychologistReducer";
import psychologistService from "./src/services/psychologists";

const store = configureStore({
  reducer: {
    psychologists: psychologistReducer,
  },
});

psychologistService.getAll().then((psychologists) => {
  store.dispatch(setPsychologists(psychologists));
});

export default store;

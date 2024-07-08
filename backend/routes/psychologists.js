const psychologistRouter = require("express").Router();
const HistoricalPsychologist = require("../models/historicalPsychologist");

psychologistRouter.get("/", async (request, response) => {
  const psychologists = await HistoricalPsychologist.find({});
  response.json(psychologists);
});

module.exports = psychologistRouter;

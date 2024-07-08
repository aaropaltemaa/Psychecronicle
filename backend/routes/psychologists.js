const psychologistRouter = require("express").Router();
const HistoricalPsychologist = require("../models/historicalPsychologist");

psychologistRouter.get("/", async (request, response) => {
  const psychologists = await HistoricalPsychologist.find({});
  response.json(psychologists);
});

psychologistRouter.get("/quotes", async (request, response) => {
  const psychologists = await HistoricalPsychologist.find(
    {},
    "name quotes -_id"
  );
  const quotes = psychologists.map((psychologist) => ({
    name: psychologist.name,
    quotes: psychologist.quotes,
  }));
  response.json(quotes);
});

psychologistRouter.get("/:id", async (request, response) => {
  const psychologist = await HistoricalPsychologist.findById(request.params.id);
  if (psychologist) {
    response.json(psychologist);
  } else {
    response.status(404).end();
  }
});

psychologistRouter.post("/", async (request, response) => {
  const body = request.body;

  const psychologist = new HistoricalPsychologist({
    name: body.name,
    biography: body.biography,
    nationality: body.nationality,
    birthDate: body.birthDate,
    deathDate: body.deathDate,
    field: body.field,
    contribution: body.contribution,
    quotes: body.quotes,
    image: body.image,
    wikipediaUrl: body.wikipediaUrl,
  });

  try {
    const savedPsychologist = await psychologist.save();
    response.status(201).json(savedPsychologist);
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
});

module.exports = psychologistRouter;

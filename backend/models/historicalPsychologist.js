const mongoose = require("mongoose");

const historicalPsychologistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
    required: true,
  },
  life: [
    {
      event1: String,
      event2: String,
      event3: String,
      event4: String,
      event5: String,
      event6: String,
      event7: String,
      event8: String,
      event9: String,
      event10: String,
      event11: String,
    },
  ],
  nationality: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  deathDate: {
    type: Date,
  },
  field: {
    type: String,
    required: true,
  },
  contribution: {
    type: String,
    required: true,
  },
  quotes: {
    type: [String], // Array of quotes by the psychologist
  },
  wikipediaUrl: {
    type: String, // Link to Wikipedia page or other relevant source
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

historicalPsychologistSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model(
  "HistoricalPsychologist",
  historicalPsychologistSchema
);

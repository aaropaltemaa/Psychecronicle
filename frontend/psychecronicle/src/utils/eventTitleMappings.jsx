const getEventTitleMapping = (psychologistId) => {
    const mappings = {
        '668c2d51b169a298a9977465': {
            event1: "Early Life and Education",
            event2: "Academic Journey and Intellectual Influences",
            event3: "Career and Major Contributions",
            event4: "The Stages of Cognitive Development",
            event5: "Constructivism",
            event6: "Later Life and Legacy",
            event7: "Impact on Education and Psychology",
            event8: "Conclusion"

        },
        '668c771bf8cce054610eda34': {
            event1: "Early Life and Education",
            event2: "Early Career and Influences",
            event3: "The Journey to Psychoanalysis",
            event4: "The Unconscious Mind",
            event5: "The Structure of Personality",
            event6: "Psychosexual Development",
            event7: "Dream Analysis",
            event8: "Later Life and Legacy",

        },
        '668d478c946d5f8d4e28d289': {
            event1: "Birth and Family Background",
            event2: "Education and Early Interests",
            event3: "Early Career and Academic Positions",
            event4: "Development of Operant Conditioning",
            event5: "The Skinner Box",
            event6: "Schedules of Reinforcement",
            event7: "Radical Behaviorism",
            event8: "Behavior Modification and Applied Behavior Analysis",
            event9: "Death and Posthumous Influence",
            event10: "Impact on Psychology and Society",
        },
        '668d48de946d5f8d4e28d290': {
            event1: "Birth and Family Background",
            event2: "Education and Early Interests",
            event3: "Burghölzli Psychiatric Hospital",
            event4: "Meeting with Freud",
            event5: "Break with Freud",
            event6: "The Structure of the Psyche",
            event7: "Archetypes and the Collective Unconscious",
            event8: "Individuation Process",
            event9: "Founding the C.G. Jung Institute",
            event10: "Recognition and Influence",
            event11: "Death and Posthumous Impact"
        },
    };

    return mappings[psychologistId] || {
        event1: "Default Custom Title 1",
        event2: "Default Custom Title 2",
    };
};

export default getEventTitleMapping;
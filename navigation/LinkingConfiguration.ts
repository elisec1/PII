import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Connexion: {
            screens: {
              PageConnexion: "one",
            },
          },
          Accueil: {
            screens: {
              PageAccueil: "two",
            },
          },
          ToDo: {
            screens: {
              PageToDo: "three",
            },
          },
          Recherche: {
            screens: {
              PageRecherche: "four",
            },
            chambres: {},
          },
          Laverie: {
            screens: {
              PageLaverie: "five",
            },
          },
          Compte: {
            screens: {
              PageCompte: "six",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};

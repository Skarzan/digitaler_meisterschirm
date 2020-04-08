import { heroes } from "./heroManager";

const session = {
  id: "",
  name: "Aventurische Streuner",
  players: [
    {
      socketId: "",
      name: "",
    },
  ],
  party: [],
  battle: {
    fighters: [],
  },
};

export default session;

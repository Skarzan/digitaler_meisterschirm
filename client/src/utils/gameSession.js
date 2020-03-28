import { heroes } from "./heroManager";

const session = {
  id: "",
  name: "Aventurische Streuner",
  players: [
    {
      socketId: "",
      name: ""
    }
  ],
  party: heroes,
  battle: {
    fighters: []
  }
};

export default session;

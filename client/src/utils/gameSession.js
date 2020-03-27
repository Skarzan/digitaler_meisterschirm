import { heroes } from "./heroManager";

const session = {
  id: "",
  name: "Aventurische Streuner",
  players: [],
  party: heroes,
  battle: {
    fighters: []
  }
};

export default session;

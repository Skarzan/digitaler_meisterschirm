import { heroes } from "./heroManager";

const session = {
  id: "",
  players: [],
  party: heroes,
  battle: {
    fighters: []
  }
};

export default session;

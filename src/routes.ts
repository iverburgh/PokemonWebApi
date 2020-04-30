import { PokemonController } from "./controller/PokemonController";

export const Routes = [
  {
    method: "get",
    route: "/pokemon",
    controller: PokemonController,
    action: "all",
  },
  {
    method: "get",
    route: "/pokemon/:id",
    controller: PokemonController,
    action: "one",
  },
  {
    method: "post",
    route: "/pokemon",
    controller: PokemonController,
    action: "save",
  },
  {
    method: "delete",
    route: "/pokemon/:id",
    controller: PokemonController,
    action: "remove",
  },
];

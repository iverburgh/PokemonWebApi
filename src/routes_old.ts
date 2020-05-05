import { PokemonController } from "./controller/PokemonController";
import { TrainerController } from "./controller/TrainerController";

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
  {
    method: "get",
    route: "/trainer",
    controller: TrainerController,
    action: "all",
  },
  {
    method: "get",
    route: "/trainer/:id",
    controller: TrainerController,
    action: "one",
  },
  {
    method: "post",
    route: "/trainer",
    controller: TrainerController,
    action: "save",
  },
  {
    method: "put",
    route: "/trainer/:id",
    controller: TrainerController,
    action: "update",
  },
  {
    method: "delete",
    route: "/trainer/:id",
    controller: TrainerController,
    action: "remove",
  },
];

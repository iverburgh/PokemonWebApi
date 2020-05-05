import { getRepository, Equal } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Pokemon } from "../entity/Pokemon";

export class PokemonController {
  private PokemonRepository = getRepository(Pokemon);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.PokemonRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.PokemonRepository.findOne({
      where: { number: request.params.id },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.PokemonRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let PokemonToRemove = await this.PokemonRepository.findOne(
      request.params.id
    );
    await this.PokemonRepository.remove(PokemonToRemove);
  }
}

export default PokemonController;

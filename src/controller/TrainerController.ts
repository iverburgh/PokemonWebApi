import { getMongoRepository, Equal, getMongoManager } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Trainer } from "../entity/Trainer";

export class TrainerController {
  private TrainerRepository = getMongoRepository(Trainer);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.TrainerRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.TrainerRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.TrainerRepository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    await this.TrainerRepository.update(request.params.id, request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let TrainerToRemove = await this.TrainerRepository.findOne(
      request.params.id
    );
    await this.TrainerRepository.remove(TrainerToRemove);
  }
}

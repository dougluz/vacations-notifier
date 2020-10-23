import { Vacation } from '@src/models/vacationModel';
import mongoose from 'mongoose';
import {Controller, Get} from "@overnightjs/core";
import {Request, Response} from "express";

@Controller('vacations')
export class VacationController {
  @Get('')
  public async index(req: Request, res: Response): Promise<void> {
    try {
      const vacations = Vacation.find()
      res.status(200).send(vacations)
    } catch (error) {
      res.status(500).send({ message: error.message})
    }
  }
}

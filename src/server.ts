import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import * as database from './database/database';
import { Application } from 'express';
import {saveVacations} from "@src/client/vacationClent";
import {VacationController} from "@src/controllers/vacationController";
import {CronServices} from "@src/services/cronServices";

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await this.databaseSetup();
    await saveVacations()
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    this.addControllers([VacationController]);
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  private async cronJonbs(): Promise<void> {
    const cronServices = new CronServices()
    await cronServices.registerJobs()
  }

  public async close(): Promise<void> {
    await database.close();
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info('Server listening on port:', this.port);
    });
  }
}

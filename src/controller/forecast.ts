import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Beach } from '@src/models/beach';
import { Forecast } from '@src/services/forecast';

const forecast = new Forecast();
@Controller('forecast')
export class ForecastController {
  @Get('')
  public async getForecastForLoggedUser(
    _: Request,
    res: Response
  ): Promise<void> {
    try {
      const beaches = await Beach.find({});
      const forecasteData = await forecast.processForecastForBeaches(beaches);
      res.status(200).send(forecasteData);
    } catch (error) {
      res.status(500).send({ error: 'Something went wrong' });
    }
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ILead } from './lead.model';
import { leads } from './leads';

@Controller('/leads')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getLeads(@Query('user') user?: string): ILead[] {
    return this.appService.findLeadsByUser(user);
  }
}

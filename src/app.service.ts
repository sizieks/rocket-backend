import { Injectable } from '@nestjs/common';
import { ILead } from './lead.model';
import { leads } from './leads';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public leads: ILead[] = leads;

  findLeadsByUser(user: string): ILead[] {
    return user
      ? leads.filter((lead) => {
          return lead.user.toLowerCase().includes(user.toLowerCase());
        })
      : leads;
  }
}

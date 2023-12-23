import { Injectable } from '@nestjs/common';
import { ILead } from './lead.model';
import { leads } from './leads';

@Injectable()
export class AppService {
  public leads: ILead[] = leads;

  findLeadsByUser(user: string): ILead[] {
    return user
      ? leads.filter((lead) => {
          return lead.user.toLowerCase().includes(user.toLowerCase());
        })
      : leads;
  }
}

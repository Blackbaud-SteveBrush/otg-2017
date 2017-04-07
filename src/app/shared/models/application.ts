import { Organization } from './organization';
import { Rating } from './rating';

export class Application {
  public id: number;
  public name: string;
  public description: string;
  public logo_url: string;
  public organization: Organization;
  public rating_total: Rating;
  public ratings: Rating[];
}

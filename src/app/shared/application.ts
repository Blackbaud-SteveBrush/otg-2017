import { Organization } from './organization';
import { Rating } from './rating';

export class Application {
  id: number;
  name: string;
  description: string;
  logo_url: string;
  organization: Organization;
  rating: Rating;
}
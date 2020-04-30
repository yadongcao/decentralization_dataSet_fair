import { Model } from 'radiks';
export default class Problem extends Model {
  static className = 'Problem';

  static schema = {
    Title: String,
    Description: String,
    logoUrl: String,
    createdBy: String,
    createdAt: String,
    
  }
  static defaults = {
  }

}

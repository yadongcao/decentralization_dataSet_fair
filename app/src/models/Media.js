import { Model } from 'radiks';

export default class Media extends Model {
  static className = 'Media';

  static schema = {
    Data: String,
  }
  static defaults = {
  }

}

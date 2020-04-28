import { Model } from 'radiks';
export default class DataSet extends Model {
  static className = 'DataSet';

  static schema = {
    Title: String,
    Description: String,
    problemAreaId:String,
    fileUrl: String,
    createdBy: String,
    createdAt: Number
  }
  static defaults = {
  }

}

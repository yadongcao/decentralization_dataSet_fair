import { Model } from "radiks";
export default class Comment extends Model {
  static className = "Comment";

  static schema = {
    from: String,
    content: String,
    datasetId: String,
  };
  static defaults = {};
}

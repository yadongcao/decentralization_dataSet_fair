import { Model } from 'radiks'

export default class Pool extends Model {
  static className = 'Pool'

  static schema = {
    from: String,
    content: String,
    flag: {
      type: Boolean,
      decrypted: true,
    },
  }

  static defaults = {
    content: 'welcome to message board',
  }
}

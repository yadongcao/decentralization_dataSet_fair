import { UserGroup } from "radiks";
import Dataset from './Dataset';
// as UserGroup
export default class Pool extends UserGroup {
  static className = "Pool";
  static schema = {
    isPublic: {
      type: Boolean,
      decrypted: true,
    },
    name: {
      type: String,
      decrypted: true, // all users will know
    },
    description: {
      type: String,
      decrypted: true, // all users will know
    },
    logoUrl: {
      type: String,
      decrypted: true, // all users will know
    },
    basics: {
      likes: {
        type: Number,
        decrypted: true,
      },
      size: {
        type: String,
        decrypted: true,
      },
      downloads: {
        type: Number,
        decrypted: true,
      },
      comments: {
        type: Number,
        decrypted: true,
      },
    },
    createdBy: String,
  };
  static defaults = {
    basics:{
      likes:0,
      size:'0MB',
      downloads:0,
      comments:0
    }
  };

  async afterFetch() {
    this.datasets = await Dataset.fetchList({
      poolId: this.id,
    })
  }
}

import { Model } from 'radiks';

export default class Message extends Model {
  static className = 'Message';

  static schema = {
    from: String,
    content: String,
    groupName: String,
    userGroupId: {
      type: String,
      decrypted: true,
    }
  }

  static defaults = {
    userGroupId:"4b24a0d0fcdf-40a2-a735-a3e0cbd4a002"
  }
  saveFile(_) {
    console.log("not saving to Gia")
    /*
    const userSession = requireUserSession();
    return userSession.putFile(
      this.blockstackPath(),
      JSON.stringify(encrypted),
      {
        encrypt: false,
      },
    );*/
    return new Promise()
  }
}

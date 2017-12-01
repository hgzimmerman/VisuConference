

var uuid = require("uuid-js");

export interface IncomingUserMessage {
  text: string;
  user: number;
}

export class AppUserMessage {
  public text: string;
  public user: number;
  public username: string;
  public flagged: boolean;
  public uuid: string;
  public editedBy: Array<number>;


  public static fromIncomingUserMessage(message: IncomingUserMessage): AppUserMessage {
    let username = "";
    if (message.user === 1) {
      username = "Unhelpful Collaborator";
    } else if (message.user === 2) {
      username = "Helpful Collaborator";
    }

    return {
      text: message.text,
      user: message.user,
      username: username,
      flagged: false,
      uuid: uuid.create().toString(),
      editedBy: []
    };
  }

  public static fromUserGeneratedText(text: string): AppUserMessage {
    return {
      text: text,
      user: 0,
      username: "Yourself",
      flagged: false,
      uuid: uuid.create().toString(),
      editedBy: []
    };
  }

  public constructor() {
      this.text = "";
      this.user = -1;
      this.flagged = false;
      this.uuid = uuid.create().toString();
      this.editedBy = [];
  }



}


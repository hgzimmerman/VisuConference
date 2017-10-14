

import { AppUserMessage, IncomingUserMessage} from "../datatypes/message";

export namespace Networking {

  export async function fetchTrumpText(): Promise<AppUserMessage> {
    const response = await fetch("http://localhost:8000/trump/4");
    const incomingMessage: IncomingUserMessage = await response.json();
    return await AppUserMessage.fromIncomingUserMessage(incomingMessage);
  }

}
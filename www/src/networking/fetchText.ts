

import { AppUserMessage, IncomingUserMessage} from "../datatypes/message";

export namespace Networking {

  export async function fetchTrumpText(): Promise<AppUserMessage> {
    let requestUrl = `http://${process.env.REACT_APP_ENDPOINT_URL}:8000/trump/4`;
    console.log(requestUrl);

    const response = await fetch(requestUrl);
    const incomingMessage: IncomingUserMessage = await response.json();
    return await AppUserMessage.fromIncomingUserMessage(incomingMessage);
  }

}
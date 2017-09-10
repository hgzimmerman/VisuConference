import { createStore } from "redux";

let message_store = createStore(
  (state, action) => {
    switch (action.type) {
      case 'INCR':
        return { counter: state.counter + action.by };
      default:
        return state;
    }
  },
  { counter: 0 });

export enum VCMessageAction {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
}
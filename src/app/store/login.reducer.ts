import { Action } from "@ngrx/store";
import { LoginAccounts } from "./login.action";

const initialState = [{ userid: "abc@media.com", password: "abc123", username: "tom" }, { userid: "def@media.com", password: "def123", username: "dick" }]

export function loginReducer(state = initialState, action: LoginAccounts) {
  switch (action.type) {
    case 'LOGIN_ACCOUNTS':
      return action.payload;
    default:
      return state;
  }
}

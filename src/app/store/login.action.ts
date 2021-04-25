import { Action } from "@ngrx/store";

export const LOGIN_ACCOUNTS = 'LOGIN_ACCOUNTS'

export class LoginAccounts implements Action {
  readonly type = 'LOGIN_ACCOUNTS';
  constructor(public payload: any) {

  }
}

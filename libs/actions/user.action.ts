import {User} from "../models/user";

export class LoginComponent {
  static readonly desc = 'getting user login info';
  static readonly type = '[User] LoginComponent';
  constructor(public payload: number) {}
}

export class CreateUser {
  static readonly  desc = '';
  static readonly  type = '[User] CreateUser';
  constructor(public payload: User.CreateRequest) {}
}
export class GetUserInfo {
  static readonly  desc = '';
  static readonly  type = '[User] CreateUser';
  constructor() {}
}

export class InquireUser {
  static readonly  desc = '';
  static readonly  type = '[User] InquireUser';
  constructor(public payload: User.InquireUserRequest) {}
}

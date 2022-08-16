import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";

import {USER_DEFAULTS as defaults} from "../defaults/user.defaults";
import { User} from "../models/user";
import {UserService} from "../services/user.service";
import {GetUserInfo, InquireUser, LoginComponent} from "../actions/user.action";
import {map, tap} from "rxjs/operators";
import InquireUserResponse = User.InquireUserResponse;


@State<User.State>(User.OPTIONS)
@Injectable()

export class  UserState{
  constructor(private userService: UserService) {}

  @Selector()
  static user({ inquireUserData }: User.State): User.InquireUserResponse  {
    //selector ile componentlerde statedeki değişkenimizi kullanabiliriz
    return inquireUserData;
  }


  @Action(InquireUser)
  inquireUser(
    { patchState }: StateContext<User.State>,
    payload: User.InquireUserRequest) {
    //payload apiyi çağırırken (new InquireUser) gönderdiğin request
    //patchState ile response'umuzu state'e atıyoruz. Daha sonra kullanabilmek için
    return this.userService.inquireUser('inquireUser',payload).pipe(
      tap(response => {
          patchState({
            inquireUserData: response,
          })
        }
      ),
    );
  }
}

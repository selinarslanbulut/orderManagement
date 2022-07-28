import {Injectable} from "@angular/core";
import {State} from "@ngxs/store";
import {User} from "../../models/user";
import {USER_DEFAULTS as defaults} from "../defaults/user.defaults";


@State<User.State>({
  name: 'UserState',
  defaults,
})
@Injectable()

export class  UserState{

}

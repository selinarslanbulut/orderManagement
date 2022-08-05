import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class  UserService {
  constructor(private  http: HttpClient) {
  }
  configUrl1 = 'https://jsonplaceholder.typicode.com/posts';
  configUrl = 'https://jsonplaceholder.typicode.com/';


  getAnimalService(){
     return this.http.get(this.configUrl1);
   }

  inquireUser(params:string, payload: User.InquireUserRequest): Observable<User.InquireUserResponse> {
    const data$ = of({
        userTypeList: {
          userId: 12345,
          name: "Selin",
          description: "denme",
          shortCode: "",
          isActive: "ACTV",
          entityCodeName: "admin"
        },
        returnCode: "Success",
        returnMessage: "success"
      });

    return data$;
    /* return this.http.post<any>(this.configUrl+params, payload).pipe(
       map(data => {
         console.log(9);

         this.bla = {
           userTypeList: {
             userId: 12345,
             name: "Selin",
             description: "denme",
             shortCode: "",
             isActive: "ACTV",
             entityCodeName: "admin"
           },
           returnCode: "Success",
           returnMessage: "success"
         }

         return mockData;
       })
     );*/
  }

  // @Request('/auth/inquireUser', 'GET', { skipError: true })
  // @App(['CSR', 'WSC'])
  // getInfo(@Desc desc: string): Observable<User.Result> {
  //   return null;
  //}
}

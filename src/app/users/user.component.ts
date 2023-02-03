import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User, UserInformation } from '../InterFace/IUser';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class UserComponent implements OnInit, OnChanges {
  userInfo: UserInformation;
  users:any ;
  displayImage: boolean = true;
  p: number = 1;
  total: number = 0;
  constructor(private userService: UserService) {
    this.userInfo = {} as UserInformation;
  }

  toggleImage(): void {
    this.displayImage = !this.displayImage;
  }

  ngOnChanges(changes: SimpleChanges): void {}
//  ngOnInit():void {
//       this.getUsers();
//     }
getUsers(){
  this.userService.getUsers(this.p)
    .subscribe((response: any) => {
      this.users = response.data;
      this.total = response.total;
    });
} 
pageChangeEvent(event: number){
this.p = event;
this.getUsers( );
}
  ngOnInit(): void {
    this.getUsers();
    //  this.userService
    //   .getUsers(this.p)
    //   .subscribe((response: UserInformation) => {
    //     console.log(response);
    //     this.userInfo.page = response?.page;
    //     this.userInfo.per_page = response?.per_page;
    //     this.userInfo.total = response?.total;
    //     this.userInfo.total_pages = response?.total_pages;
    //     this.userInfo.data = response?.data?.map((item) => {
    //       var user = {} as User;
    //       user.avatar = item?.avatar;
    //       user.email = item?.email;
    //       user.first_name = item?.first_name;
    //       user.last_name = item?.last_name;
    //       user.id = item?.id;
    //       return user;
    //     });
    //   });
  }

 callfirstpage(first: number): void {
  //   this.p = first;
  //   this.userService
  //     .getUsers(this.p)
  //     .subscribe((response: UserInformation) => {
  //       console.log(response);
  //     });
  }
  callsecoundpage(secound: number): void {
  //   this.p = secound;
  //   this.userService
  //     .getUsers(this.p)
  //     .subscribe((response: UserInformation) => {
  //       console.log(response);
  //     });
  }

}

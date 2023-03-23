import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../InterFace/IUser';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'user-detailes',
  templateUrl: './user-deatiles.component.html',
  styleUrls:["user_deatiles.component.css"]
})
export class UserDetileComponent implements OnInit {
  title = 'User Detaile:';
  user!: User;

  userID!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}
  // getUsers() {
  //   this.userService.getUsers(this.p).subscribe((response: any) => {
  //     this.users = response.data;
  //     this.total = response.total;
  //   });
  //   console.log(this.users);
  // }
  ngOnInit(): void {
    this.userID = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(this.userID).subscribe(((response: any) => {
      this.user = response.data,
      console.log(this.user)
    }))
  }
  onBack(): void {
    this.router.navigate(['/users']);
  }
}

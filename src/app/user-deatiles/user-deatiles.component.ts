import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../InterFace/IUser';

@Component({
    selector: 'user-detailes',
    templateUrl: './user-deatiles.component.html'
})

export class UserDetileComponent implements OnInit {
    title = 'User Detaile:';
    user = {} as User
    constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit(): void {
      this.title += this.route.snapshot.paramMap.get('id');
    }
    onBack(): void {
      this.router.navigate(['/users']);
    }
}
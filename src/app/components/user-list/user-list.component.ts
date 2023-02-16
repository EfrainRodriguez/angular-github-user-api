import { Component } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: User[] = [];
  perPage: number | string = 12;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  onPageSizeChange(perPage: number | string) {
    this.perPage = perPage;
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers(this.perPage).subscribe((users) => {
      this.users = users;
    });
  }

}

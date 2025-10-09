import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.componet';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId)!;
  }


  onSelectUser(id: string) {
    // const selectedUser = DUMMY_USERS.find((u) => u.id === id);
    // this.selectedUser.set(selectedUser);
    // console.log('Selected user with id' + id);
    this.selectedUserId = id;
  }
}

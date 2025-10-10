import {
  Component,
  computed,
  Input,
  Output,
  input,
  signal,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//// Defining a User type for better type safety
// type User = {
// id: string;
// name: string;
// avatar: string
// };

//// Defining a User interface for better type safety
interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //// Using a single Input property to accept a User object
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUSer() {
    this.select.emit(this.user.id);
  }
}

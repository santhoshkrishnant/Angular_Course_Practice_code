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

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  //// Using a single Input property to accept a User object
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUSer() {
    this.select.emit(this.user.id);
  }
}

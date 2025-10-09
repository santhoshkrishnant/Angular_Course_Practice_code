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

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //// Randomaly select a user from the dummy users:

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return './assets/users/' + this.selectedUser().avatar;
  //   ;
  // }

  ////Decorator to mark a property as an input property and supply configuration metadata.
  //// The property is bound to a value passed in from the component's parent.
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  ////Decorator to mark a property as an output property:
  //// The property is bound to a value passed in from the component's parent
  @Output() select = new EventEmitter<string>();

  // //Using a getter to construct the image path dynamically:
  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  //// Using signal and input to make the component more reactive:
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  //// Using signal and output to make the component more reactive:
  // select = output<string>();

  // //// Using computed to dynamically construct the image path:
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  //// Method to handle user selection:
  onSelectUSer() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.id);
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  ////Adding function need required, [ viewChild.required<>() ]
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('forms');

  // @Output() add = new EventEmitter<{title:string, text:string}>();
  add= output<{title:string, text:string}>();

  enterTitle="";
  enterText="";

  ngOnInit() {
    console.log('OnInit');
    console.log(this.form);
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form);
  }

  onSubmit() {
   
    this.add.emit({title:this.enterTitle, text:this.enterText});
    // // this.form?.nativeElement.reset();
    // this.form?.nativeElement.reset();

    this.enterTitle='';
    this.enterText='';
  }
}

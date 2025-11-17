import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsInvisible = signal(false);

  onToggleDetails(){
    // this.detailsInvisible.set(!this.detailsInvisible());
    this.detailsInvisible.update((wasVisible) =>!wasVisible);
  }

  onMarkAsCompleted(){
    this.close.emit();
  }
}

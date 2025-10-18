import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  // @Input() results?:<{
  //   year: number,
  //   valueEndOfYear: number,
  //   interest: number,
  //   totalInterest: number,
  //   totalAmountInvested: number}[]>;

  @Input() results?:{
    year: number,
    valueEndOfYear: number,
    interest: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];
}

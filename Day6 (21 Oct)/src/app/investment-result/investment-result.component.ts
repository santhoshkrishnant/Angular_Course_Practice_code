import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  //// computed property to get the latest results from the service
  // results = computed(() => this.investmentService.resultData());

  results = this.investmentService.resultData.asReadonly();

  //  results= input<{
  //   year: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   interest: number,
  //   totalInterest: number,
  //   totalAmountInvested: number}[]>();

  // @Input() results?: {
  //   year: number;
  //   valueEndOfYear: number;
  //   interest: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
}

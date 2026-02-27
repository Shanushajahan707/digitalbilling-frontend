import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  getYearsInBusiness(): number {
    const startDate = new Date('2025-04-01');
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();

    // Adjust if we haven't reached April yet this year
    if (months < 0 || (months === 0 && currentDate.getDate() < 1)) {
      return years - 1;
    }

    return years;
  }

  getDailyCustomers(): string {
    const startDate = new Date('2025-04-01');
    const currentDate = new Date();
    const daysInBusiness = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    // Calculate average customers per day (15 customers average)
    const avgDailyCustomers = 10;
    const totalCustomers = Math.floor(daysInBusiness * avgDailyCustomers);

    // Return with + symbol if over 2000
    if (totalCustomers > 2000) {
      return `${totalCustomers}+`;
    }

    return totalCustomers.toString();
  }
}

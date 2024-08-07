import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartData, ChartOptions} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-indicateur',
  standalone: true,
  imports: [CommonModule,FormsModule,BaseChartDirective],
  templateUrl: './indicateur.component.html',
  styleUrl: './indicateur.component.css'
})
export class IndicateurComponent implements OnInit {

  // Define initial indicator data
  indicators = [
    { name: 'Performance', value: 75, status: 'Good' },
    { name: 'Availability', value: 90, status: 'Excellent' },
    { name: 'Error Rate', value: 2, status: 'Moderate' }
  ];

  newIndicator = { name: '', value: 0, status: '' };

  // Define chart data and options
  data: ChartData<'bar'> = {
    labels: this.getLabels(),
    datasets: [{
      label: 'Indicator Values',
      data: this.getValues(),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}`;
          }
        }
      }
    }
  };
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
    // Initialize chart data on component initialization
    this.updateChartData();
  }

  getLabels(): string[] {
    return this.indicators.map(indicator => indicator.name);
  }

  getValues(): number[] {
    return this.indicators.map(indicator => indicator.value);
  }

  updateChartData(): void {
    this.data.labels = this.getLabels();
    this.data.datasets[0].data = this.getValues();

    if (this.chart) {
      this.chart.update();
    }
    
  }

  addIndicator(): void {
    if (this.newIndicator.name && this.newIndicator.value >= 0 && this.newIndicator.status) {
      this.indicators.push({ ...this.newIndicator });
      this.newIndicator = { name: '', value: 0, status: '' }; // Reset form
      this.updateChartData(); // Update chart data when a new indicator is added
    }
  }

  deleteIndicator(index: number): void {
    this.indicators.splice(index, 1);
    this.updateChartData(); // Update chart data when an indicator is deleted
  }
}
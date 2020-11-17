import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  chart;
  @ViewChild('pieChart') private pieChart;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getEnrollementMeterics().subscribe((result) => {
      console.log(result);
      this.generatePieChart();
    })
  }

  generatePieChart(){

    let data = {

      labels: ["Succeeding enrollments", "At risk enrollments", "Failing enrollments"],
      datasets: [{
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [1, 2, 3]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      
  };
  this.chart = new Chart(this.pieChart.nativeElement, {
    type: 'pie',
    data: {
      labels: ["Succeeding enrollments", "At risk enrollments", "Failing enrollments"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["green", "#fed201","red"],
        data: [3, 2, 1]
      }]
    },
    options: {
      legend: {
        display: true,
        position: 'right',
        align: 'start'
    }
    }
  });
  }
}

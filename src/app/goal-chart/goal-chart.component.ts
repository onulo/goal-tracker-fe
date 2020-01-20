import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';
import {Goal} from '../goal-form/goal';
import {Chart} from 'highcharts';

@Component({
  selector: 'app-goal-chart',
  templateUrl: './goal-chart.component.html',
  styleUrls: ['./goal-chart.component.css']
})
export class GoalChartComponent implements OnInit, OnChanges {
  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   series: [{
  //     data: [1, 2, 3],
  //     type: 'line'
  //   }]
  // };
  // updateFlag: true;


  chart: Chart;

  @Input()
  goal: Goal;

  public options: any = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Goal chart'
    },
    subtitle: {
      text: 'plot chart from your record data'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { // don't display the dummy year
        month: '%e. %b',
        year: '%b'
      },
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      title: {
        text: 'Goal value'
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },

    plotOptions: {
      series: {
        marker: {
          enabled: true
        }
      }
    },

    colors: ['#6CF', '#036'],

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [
      {
        name: 'Your Target',
        data: []
      }, {
        name: 'Your goal records',
        data: []
      }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          plotOptions: {
            series: {
              marker: {
                radius: 2.5
              }
            }
          }
        }
      }]
    }
  };


  constructor() {
  }

  ngOnInit() {
    this.options.series[0].data = [
      [Date.UTC(2020, 0, 1), this.goal.initialValue],
      [new Date(this.goal.goalDate).getTime(), this.goal.goalValue]];

    this.goal.records.forEach((record) => {
      const tempRow = [
        new Date(record.recordDate).getTime(),
        record.value
      ];
      this.options.series[1].data.push(tempRow);
    });
    this.chart = Highcharts.chart('chart', this.options);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');

  }
}

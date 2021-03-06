import { Component, ChangeDetectorRef, Inject } from "@angular/core";
import e from "../event-bus";

@Component({
  selector: "AngularApp",
  template: `
    <div style="margin-top: 100px;">
      <h1>This was written in Angular</h1>
      <p>{{ message }}</p>
      <button (click)="sendDataToReact()">Send line chart data to React App</button>
      <button (click)="sendPieChartDataToReact()">Send pie chart data to React App</button>
    </div>
  `,
})
export default class AngularApp {
  message: string = "Message from React should appear here 😱";
  options = {
    title: {
      text: "Solar Employment Growth by Sector, 2010-2016",
    },

    subtitle: {
      text: "Source: thesolarfoundation.com",
    },

    yAxis: {
      title: {
        text: "Number of Employees",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2017",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: "Manufacturing",
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        name: "Sales & Distribution",
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
      {
        name: "Project Development",
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      },
      {
        name: "Other",
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  pieChartOptions =  {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Sogou Explorer',
        y: 1.64
      }, {
        name: 'Opera',
        y: 1.6
      }, {
        name: 'QQ',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }]
  }
  constructor(
    @Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef,
  ) {}

  ngAfterContentInit() {
    e.on("message", (message) => {
      this.message = message.text;
      this.changeDetector.detectChanges();
      this.returnMessageToReactWhenReceived();
    });
  }

  sendDataToReact() {
    console.log("options", this.options);
    e.emit("data", this.options);
  }

  sendPieChartDataToReact() {
    console.log("sendPieChartDataToReact options", this.options);
    e.emit("pieData", this.pieChartOptions);
  }

  returnMessageToReactWhenReceived() {
    e.emit("received", { text: "Woohoo! Hello from Angular! 🎉" });
  }
}

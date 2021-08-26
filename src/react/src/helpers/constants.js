export const initialOptions = {
  title: {
    text: "",
  },

  subtitle: {
    text: "",
  },

  yAxis: {
    title: {
      text: "",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "",
    },
  },

  legend: {
    layout: "",
    align: "",
    verticalAlign: "",
  },

  plotOptions: {
    series: {
      label: {
      },
    },
  },

  series: [
    {
      name: "",
      data: [],
    },
    {
      name: "",
      data: [],
    },
    {
      name: "",
      data: [],
    },
    {
      name: "",
      data: [],
    },
    {
      name: "",
      data: [],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 400,
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

export const pieChartInitialOptions =  {
    chart: {
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

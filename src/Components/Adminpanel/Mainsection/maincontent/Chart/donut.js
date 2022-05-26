import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./donut.css";

class Donuts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        legend: {
          position: "bottom",
          // marginTop: "10em",
        },
        plotOptions: {
          pie: {
            size: 30,
            donut: {
              size: "68%",
              background: "transparent",
            },
          },
        },

        series: [44, 55, 13, 33, 10],
        labels: ["Apple", "Mango", "Orange", "Watermelon", "water"],
      },
      series: [44, 55, 41, 17, 10],
      chartOptions: {
        labels: ["Apple", "Mango", "Orange", "Watermelon", "water"],
      },
    };
  }

  render() {
    return (
      <div className="card-chart">
        <div className="h2-text">List</div>

        <div style={{ paddingTop: "4em" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="350"
          />
        </div>
      </div>
    );
  }
}

export default Donuts;

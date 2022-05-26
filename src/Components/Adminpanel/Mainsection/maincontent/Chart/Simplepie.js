import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./donut.css";
class Simplepie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        legend: {
          position: "bottom",
          // marginTop: "10em",
        },
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="card-chart-simplepie">
        <div className="h2-text">List</div>

        <div style={{ paddingTop: "2em" }}>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width={380}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Simplepie;

<template>
  <div class="chart-area">
    <TimeSeriesChart :chart-data="chartData" :resetChart="resetChart" :styles="chartStyles" />
    <div class="button-area">
      <button @click="resetPosition()">Reset</button>
      <button @click="stop()">Stop</button>
      <button @click="start()">Start</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TimeSeriesChart from "./components/TimeSeriesChart.vue";
import { ChartOptions } from "chart.js";
import Chart from "chart.js";
import "chartjs-plugin-colorschemes";

/**
 * Data (Label with values)
 */
export interface Data {
  label: string;
  data: Value[];
}

/**
 * Value
 */
export interface Value {
  x: Date;
  y: number;
}

/**
 * Sample component
 */
@Component({
  components: {
    TimeSeriesChart
  }
})
export default class App extends Vue {
  /**
   * All data
   */
  private allData: Data[] = [];

  /**
   * Data for chart
   */
  private chartData: Chart.ChartData = {};

  /**
   * chart style
   */
  private chartStyles = {
    height: "100%",
    width: "100%",
    margin: "auto"
  };

  private resetChart = false;

  private resetPosition() {
    this.resetChart = true;
    setInterval(() => {
      this.resetChart = false;
    }, 1000);
  }

  private startInterval!: any;

  private start() {
    if (!this.startInterval) {
      this.startInterval = setInterval(() => {
        this.updateDatasets();
      }, 1000);
    }
  }

  private stop() {
    clearInterval(this.startInterval);
    this.startInterval = undefined;
  }

  /**
   * mounted
   */
  mounted() {
    // Initialize 30 data
    for (let i = 1; i <= 10; i++) {
      this.allData.push({ label: "Data" + i, data: [] });
    }


    this.start();
  }

  /**
   * Update datasets
   */
  private updateDatasets() {
    this.allData.forEach(data => {
      data.data.push({
        x: new Date(),
        y: Math.random() * 1000
      });
      if (data.data.length > 30) {
        data.data.splice(0, 1);
      }
    });

    const dataset = (labelData: Data) => ({
      label: labelData.label,
      data: labelData.data,
      radius: 5
    });

    this.chartData = {
      datasets: this.allData.map(label => dataset(label))
    };
  }
}
</script>

<style lang="scss">
.chart-area {
  height: 80vh;
  width: 90vw;
  margin: auto;
}
.button-area {
  width: fit-content;
  flex-direction: row;
  margin: auto;
  button {
    margin-top: 10px;
    margin-left: 10px;
  }
}
</style>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
  Mixins,
  Emit
} from "vue-property-decorator";
import Chart from "chart.js";
import VueChart from "vue-chartjs";
import "chartjs-plugin-colorschemes";
import "chartjs-plugin-zoom";

/**
 * Time serese chart
 */
@Component
export default class TimeSeriesChart extends Mixins(
  VueChart.Line,
  VueChart.mixins.reactiveProp
) {
  /**
   * Chart data
   */
  @Prop({ required: true, default: {} })
  public chartData!: Chart.ChartData;

  /**
   * Reset chart
   */
  @Prop({ default: false })
  public resetChart!: boolean;

  /**
   * Chart options(If override default options)
   */
  @Prop()
  public chartOptions!: Chart.ChartOptions;

  /**
   * Chart options
   */
  private options: Chart.ChartOptions = {};

  /**
   * Chart instance
   */
  private chart!: Chart;

  /**
   * Chart instance for handling zoom actions
   */
  private zoomChartInstance!: Chart;

  /**
   * initialize
   */
  mounted() {
    if (!this.chartOptions) {
      this.applyDefaultOptions();
    }
    // Draw chart
    this.renderChart(this.chartData, this.options);
    this.chart = this.$data._chart;
  }

  /**
   * Default Options
   */
  private applyDefaultOptions() {
    this.options.onClick = this.onClick;
    this.options.maintainAspectRatio = false;
    this.options.scales = {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "second"
          }
        }
      ],
      yAxes: []
    };
    this.options.plugins = {
      colorschemes: {
        scheme: "brewer.Paired12"
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "xy",
          speed: 20,
          threshold: 10,
          onPan: (event: any) => {
            this.zoomChartInstance = event.chart;
          },
          onPanComplete: (event: any) => {
            this.zoomChartInstance = event.chart;
          }
        },

        zoom: {
          enabled: true,
          drag: false,
          mode: (event: any) => {
            return "xy";
          },
          speed: 0.1,
          sensitivity: 3,
          onZoom: (event: any) => {
            console.log(event);
            this.zoomChartInstance = event.chart;
          },
          onZoomComplete: (event: any) => {
            this.zoomChartInstance = event.chart;
          }
        }
      }
    };
    this.options.elements = {
      line: {
        tension: 0
      }
    };
  }

  /**
   * onClick
   */
  private onClick(
    event?: MouseEvent | undefined,
    activeElements?: {}[] | undefined
  ): any {
    const element = this.chart.getElementAtEvent(event);
    if (element && element.length > 0) {
      this.clickChartElement(element);
    }
  }

  /**
   * Reset chart position
   */
  @Watch("resetChart")
  private resetChartPosition() {
    console.log(this.chart);
    if (this.resetChart && this.zoomChartInstance) {
      const chart: any = this.zoomChartInstance;
      chart.resetZoom();
    }
  }

  /**
   * click a chart element
   */
  @Emit("click-chart-element")
  public clickChartElement(element: any) {
    return element;
  }
}
</script>

<style scoped lang="scss">
</style>

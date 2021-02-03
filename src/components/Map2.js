import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Map2 extends Component {

    state = {
        case: []
    }

    async onTermSubmit() {
        await fetch('https://disease.sh/v3/covid-19/countries')
            .then(res => res.json())
            .then((data) => {
                this.setState({ case: data })

            })
            .catch(console.log);
    }

    async componentDidMount() {

        am4core.useTheme(am4themes_animated);

        await this.onTermSubmit();

        let chart = am4core.create("chartdiv2", am4charts.PieChart);

        chart.paddingRight = this.props.paddingRight;

        let mapCountry;
        let mapData = [];
        const data = this.state.case;

        data.map((country) => {
            mapCountry = {
                id: country.countryInfo.iso2,
                name: country.country,
                recovered: country.recovered,
                cases: country.cases,
                deaths: country.deaths
            }
            return mapData.push(mapCountry);
        });

        let top5 = mapData.sort((a, b) => b.cases - a.cases).slice(0, 5);
        console.log(top5);

        chart.responsive.enabled = true;

        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = JSON.parse(JSON.stringify(top5));
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(50);
        chart.startAngle = 180;
        chart.endAngle = 360;

        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "cases";
        series.dataFields.category = "name";
        // series.tooltipText = "Zaraženih: [bold]{cases}[/]";
        series.tooltip.autoTextColor = false;
        series.tooltip.label.fill = am4core.color("#ffff");
        series.labels.template.fill = am4core.color("#fff");
        series.ticks.template.disabled = true;

        series.labels.template.text = "{name}: {cases}";
        series.slices.template.tooltipText = "{name}: {cases}";
        


        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;

        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;

        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.fill = am4core.color("#fff");
        chart.legend.valueLabels.template.fill = am4core.color("#fff");
        chart.legend.valueLabels.template.text = "{cases}";

        this.chart = chart;

        }

    componentDidUpdate(oldProps) {
        if (oldProps.paddingRight !== this.props.paddingRight) {
            this.chart.paddingRight = this.props.paddingRight;
        }
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
        )
    }
}

export default Map2;
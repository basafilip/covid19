import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Map extends Component {

    state = {
        case: []
    }

    onTermSubmit = async () => {
        await fetch('https://disease.sh/v3/covid-19/countries')
            .then(res => res.json())
            .then((data) => {
                this.setState({ case: data })
            })
            .catch(console.log);
    }


    async componentDidMount() {

        await this.onTermSubmit();

        const data = this.state.case;
        console.log(data);
        let mapCountry;
        let mapData = [];

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
        console.log('novi podaci', mapData);

        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.NaturalEarth1();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        polygonSeries.tooltip.getFillFromObject = false;
        polygonSeries.tooltip.background.fill = am4core.color("#173753");

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}:\n [#32d296]Oporavljenih: {recovered}[/] \n [#faa05a]Zarazenih: {cases}[/] \n [#f0506e]Umrlih: {deaths}[/]";
        polygonTemplate.fill = am4core.color("#009ee0");
        // polygonTemplate.propertyFields.fill = "fill";

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#173753");

        // Remove Antarctica
        polygonSeries.exclude = ["AQ"];

        // Add some data
        polygonSeries.data = JSON.parse(JSON.stringify(mapData));

        this.chart = chart;
    }


    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>

        )
    }
}

export default Map;
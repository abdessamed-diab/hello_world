
createMapInstance = function () {
    // High detail map
    var chart = am4core.create("dzCountryDiv", am4maps.MapChart);
    chart.rtl = true;
    chart.geodata = am4geodata_algeriaHigh;
    chart.projection = new am4maps.projections.Miller();

    // Series for United States map
    var usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    usaSeries.geodata = am4geodata_algeriaHigh
    var polygonTemplate = usaSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#333333");
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#FFFFFFFF");

    chart.geodataNames = am4geodata_lang_AR;
}


/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */


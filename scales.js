//Width and height
var w = 500;
var h = 300;

var padding = 20;

var dataset = [];
var numDataPoints = 50;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.round(Math.random() * xRange);
    var newNumber2 = Math.round(Math.random() * yRange);
    dataset.push([newNumber1, newNumber2]);
}

//Create scale functions
var xScale = d3.scaleLinear()
					 .domain([0, d3.max(dataset, function(d) { return d[0]; })])
					 .range([padding, w-padding*2]);

var yScale = d3.scaleLinear()
					 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
					 .range([h - padding, padding]);

var rScale = d3.scaleLinear()
         .domain([0, d3.max(dataset, function(d) { return d[1]; })])
         .range([2, 5]);

//Create SVG element
var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", function(d) {
   		return xScale(d[0]);
   })
   .attr("cy", function(d) {
   		return yScale(d[1]);
   })
   .attr("r", function(d) {
   		return rScale(d[1]);
   });

var xAxis = d3.axisBottom(xScale).ticks(5);

var yAxis = d3.axisLeft(yScale).ticks(5);

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

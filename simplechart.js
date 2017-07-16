//Width and height
var w = 500;
var h = 300;
var barPadding = 3;

var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var dataset = [ { label: 'first', value: 5}, {label:'sdfdf', value: 10} ];
svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function(d, i) { return i * (w / dataset.length); })
  .attr("y", function(d) { return h - d.value *4; } )
  .attr("width", w / dataset.length - barPadding)
  .attr("height", function(d) { return d.value *4; })
  .attr("fill", function(d) {
    return "rgb(0, 0, " + (d.value * 10) + ")";
  });

  svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) { return d.label; })
   .attr("x", function(d, i) {
     return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
  })
   .attr("y", function(d) { return h - (d.value * 4) + 14; } )
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white")
   .attr("text-anchor", "middle");

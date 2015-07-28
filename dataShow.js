//function to display data
function plot2d(width, height, g_handle, dataset1,ytext,xtext){
	var graphwidth=width;
	var graphheight=height;
	var padding=100;
	var rt_padding=20;
	var ex_cov=0.02;
	x_min=d3.min(dataset1, function(d) {return +d[0]; });
	x_max=d3.max(dataset1, function(d) { return +d[0]; });
	y_min=d3.min(dataset1, function(d) { return Number(d[1]); });
	y_max=d3.max(dataset1, function(d) { return Number(d[1]); });
	var xScale = d3.scale.linear()
		.domain([x_min-ex_cov*(x_max-x_min),x_max+ex_cov*(x_max-x_min)])
		.range([padding, graphwidth-rt_padding]);
	var yScale = d3.scale.linear()
		.domain([y_min-ex_cov*(y_max-y_min), y_max+ex_cov*(y_max-y_min)])
		.range([graphheight-padding,rt_padding]);
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom")
		.ticks(5)
		.tickPadding(10);  //Set rough # of ticks
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left")
		.ticks(5)
		.tickPadding(10);  //Set rough # of ticks
	g_handle.attr("width",graphwidth)
		.attr("height",graphheight);
	g_handle.append("rect")
		.attr("class", "background")
		.attr("width", graphwidth-padding-rt_padding)
		.attr("height", graphheight-padding-rt_padding)
		.attr("x", padding)
		.attr("y", rt_padding);
	var line = d3.svg.line()
		.x(function(d) { return xScale(d[0]); })
		.y(function(d) { return yScale(d[1]); });
	g_handle.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0,"+ (graphheight-padding) +")")
		.call(xAxis);
	g_handle.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + padding + ",0)")
		.call(yAxis);
	g_handle.append("text")
		.attr("class", "xlabel")
		.attr("text-anchor", "end")
		.attr("x", graphwidth/2+padding+rt_padding/2)
		.attr("y", graphheight - 46)
		.attr("font-size","20")
		.attr("font-family","sans-serif")
		.text(xtext);
	g_handle.append("text")
		.attr("class", "ylabel")
		.attr("text-anchor", "end")
		.attr("x",-graphheight/2+padding/2-rt_padding/2)
		.attr("y", 26)
		.attr("dy","0.75em")
		.attr("font-size","20")
		.attr("font-family","sans-serif")
		.attr("transform", "rotate(-90)")
		.text(ytext);		
    /*
      first_time(make_data());
      function run_disp(){
	int_handle = setInterval(function () {display_data1(make_data(),make_data())}, 1000);
      }
      function first_time(dataset1){
	//var circles = svg.selectAll("circle")
	circles
	  .data(dataset1)
	  .enter().append("circle").transition()
	  .duration(750)//enter().append("circle")
	  .attr("cx",function(d){
	      return xScale(d[0]);
	  })
	  .attr("cy", function(d){
	      return yScale(d[1]);
	  })
	  .attr("r",function(d){
	      return radius;
	  })
	  .attr("fill", "black")
	  .attr("opacity","1.0");
      }*/
	g_handle
		.append("path")
		.attr("class","line")
		.attr("d", line(dataset1))
		.attr("fill","red")
		.attr("opacity","1.0");					
}
	  
function plot2d_update(width, height, g_handle, dataset1,ytext,xtext){
	var graphwidth=width;
	var graphheight=height;
	var padding=100;
	var rt_padding=20;
	var ex_cov=0.02;
	x_min=d3.min(dataset1, function(d) {return +d[0]; });
	x_max=d3.max(dataset1, function(d) { return +d[0]; });
	y_min=d3.min(dataset1, function(d) { return Number(d[1]); });
	y_max=d3.max(dataset1, function(d) { return Number(d[1]); });
	var xScale = d3.scale.linear()
		.domain([x_min-ex_cov*(x_max-x_min),x_max+ex_cov*(x_max-x_min)])
		.range([padding, graphwidth-rt_padding]);
	var yScale = d3.scale.linear()
		.domain([y_min-ex_cov*(y_max-y_min), y_max+ex_cov*(y_max-y_min)])
		.range([graphheight-padding,rt_padding]);
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom")
		.ticks(5)
		.tickPadding(10);  //Set rough # of ticks
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left")
		.ticks(5)
		.tickPadding(10);  //Set rough # of ticks
    var line = d3.svg.line()
		.x(function(d) { return xScale(d[0]); })
		.y(function(d) { return yScale(d[1]); });  
     
	var lsvg= g_handle.transition().duration(100);

	lsvg.select(".line")
		.attr("d", line(dataset1));		
	lsvg.select(".x.axis") // change the x axis
		.call(xAxis);
	lsvg.select(".y.axis") // change the y axis
		.call(yAxis);
}
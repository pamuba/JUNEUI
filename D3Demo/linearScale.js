const MARGIN = { LEFT: 100, RIGHT:10, TOP:10, BOTTOM:130 }
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

const svg = d3.select('#chart-area').append("svg")
                .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
                .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)


//Create the group
const g = svg.append("g")
             .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)


// x label
g.append("text")
    .attr("class", "x axis-label")
    .attr("x", WIDTH/2)
    .attr("y", HEIGHT + 110)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("The Wold's Tallest Buildings")


// y label
g.append("text")
    .attr("class", "y axis-label")
    .attr("x",  -(HEIGHT/2))
    .attr("y", -60)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Height(Feet)")

d3.json("data/buildings.json").then(data => {
    console.log(data)
    data.forEach(d => {
        d.height = Number(d.height)
    })
   

    d3.interval(()=>{
        update(data)
    }, 1000)
    update(data)
    }).catch(err=>{
    console.log(err.message)
})


    function update(data){


        //Band Scale
        const x = d3.scaleBand()
        .domain(data.map(d=>d.name))
        .range([0, WIDTH])
        .paddingInner(.2)
        .paddingOuter(.5)

        // console.log(x("Burj Khalifa"))

        //Scale Linear
        const y = d3.scaleLinear()
            .domain([0,d3.max(data, d => d.height)])
            .range([HEIGHT, 0])


        //Color Linear
        var color = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.height)])
            .range(["red", "blue"])

        //x axis
        const xAxisCall = d3.axisBottom(x)
        g.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(xAxisCall)
        .selectAll("text")
            .attr("y", "10")
            .attr("x", "-5")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-40)")

        //y axis
        const yAxisCall = d3.axisLeft(y)
            .ticks(3)
            .tickFormat(d=>d+' Ft')
        g.append("g")
        .attr("class", "y axis")
        .call(yAxisCall)


        const circles = g.selectAll('rect')
        .data(data)

        circles.enter().append("rect")
        .attr("y", d => y(d.height))
        .attr("x", (d) => x(d.name))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.height))
        .attr("fill", (d)=>{ return color(d.height)})

    
    }


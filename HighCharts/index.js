document.addEventListener('DOMContentLoaded', ()=>{
    Highcharts.chart('container', {
        chart:{
            // type:'column'
            // type:'bar'
            // type: 'scatter'
            // type: 'area'
            type: 'areaspline',
            zoomType: 'xy'
        },
        colors:['blue', 'orange', 'yellow', 'red'],
        tooltip:{
            // formatter(){
            //     return `<b>X value</b> - ${this.x} <b>Y value</b> ${this.y}`
            // },
            // animation:false
            formatter(){
                let s = `<b>X is:</b> - ${this.x}`;
                this.points.forEach(function(point){
                    s += `<br><b>Y is:</b>${point.y}`
                })
                return s;
            },
            shared:true,
            backgroundColor : '#333333',
            borderColor:'#f01f11',
            borderRadius:20,
            followPointer: true,
            style:{
                color:'#ffffff'
            }
        },
        credits:{
            // enabled:false
            text:'My Custom Credits',
            href:"https://google.com",
            position: {
                align:'left',
                x:10
            },
            style:{
                fontSize:'15px',
                color:'red'
            }
        },
        title:{
            text:'Our First Chart'
        },
        yAxis:{
            title:{
                text: 'Fruits Eaten'
            }
        },
        xAxis: {
            categories: ['Apple', 'Grapes', 'Oranges']
        },
        series: [
            {
                name:'John',
                data:[1,100, 3, 2,2,3,1,2,3]
            },

            {
                name:'Jill',
                data:[2,4,8,4,15,80,50,10,5,1]
            },
            {
                name:'Jane',
                data:[111,4,8,15,80,50,80,5,1]
            },
            {
                name:'James',
                data:[2,4,130,15,80,50,10,5,1]
            }
        ]
    });
});
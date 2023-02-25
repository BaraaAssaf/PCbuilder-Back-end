import React from 'react';
import CanvasJSReact from './canvasjs.react';
import { useChartDataQuery } from '../store';
import Loading from './Loading';
function Chart() {
    const { data , error , isFetching } = useChartDataQuery();
    let content;

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    if (isFetching) {
     content = <Loading/>
      } else if (error) {
      content = <div>Error loading </div>;
      } else {
        let dataPoint = [
            { label: "Jan", y: 0 },
            { label: "Feb", y: 0 },
            { label: "Mar", y:0 },
            { label: "Apr", y: 0},
            { label: "May", y: 0 },
            { label: "Jun", y: 0 },
            { label: "July", y: 1000},
            { label: "Aug", y: 0 },
            { label: "Sep", y: 0 },
            { label: "Oct", y: 0 },
            { label: "Nov", y: 0 },
            { label: "Dec", y: 0 },
        ];
        
        
      data.forEach(element => {   
        dataPoint[element.month-1].y = element.totalprice
        });

    
        const options = ( {
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "Monthly Sales of ACME"
			},
			axisY: {
				valueFormatString: "$#,##0,.K",
				includeZero: true
			},
			data: [{
				type: "waterfall",
				yValueFormatString: "$#,##0,.00K",
				indexLabelOrientation: "vertical",
				dataPoints: dataPoint
			}]

		}
        )
          content = <CanvasJSChart options = {options} />

      }
   

	

		return (
      <div className="card mb-3">
      <div className="card-header">
        <i className="fa fa-area-chart"></i>Chart</div>
      <div className="card-body">
      {content}
      </div>
    </div>

		);
	
}
export default Chart;                 
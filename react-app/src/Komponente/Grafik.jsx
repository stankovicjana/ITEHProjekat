import '../GrafikCss.css'
import {
 XYPlot,
 LineSeries,
 XAxis,
 YAxis,
 VerticalGridLines,
 HorizontalGridLines,
} from "react-vis";

const Grafik = ({proizvodi} ) => {
  const data = [


  ];


   for(var i=0;i<proizvodi.length;i++){


     data.push({x:proizvodi[i].id,y:proizvodi[i].cena})
      console.log(data)
   }





 return (
   <div style={{ margin: "15px" }}>
     <XYPlot height={300} width={600}>
       <VerticalGridLines />
       <HorizontalGridLines />
       <XAxis />
       <YAxis /> 
       <LineSeries data={data} color="yellow" />
     </XYPlot>
   </div>
 );
};

export default Grafik;
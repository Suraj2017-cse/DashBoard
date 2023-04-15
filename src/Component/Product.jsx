import React from 'react';
import { PieChart, Pie, Cell } from "recharts";



const data = [
  { name: "Group A", value: 730 },
  { name: "Group B", value: 410 },
  { name: "Group C", value: 190 },
    // { name: "Group D", value: 200 }
  ];
  
  const COLORS = ["#EE8484", "#98D89E", "#F6DC7D"];
//   #EE8484", "#F6DC7D", "#98D89E"
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * .5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  



const Product = () => {  
    
    
return (
<div className='shadow rounded-xl p-4 w-full mt-4'>
    <div className='flex justify-between capitalize mb-4'>
        <h3 className='font-black'>top products</h3>
        <select id=""
            className='text-sm text-gray-500 bg-transparent border-0 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'>
            <option>May-June 2021</option>
            <option>June-July 2021</option>
            <option>July-Aug 2021</option>
        </select>
    </div>
    <div className='flex justify-between product'>
        {/* <div className="piechart"></div> */}
        <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        startAngle={360}
        endAngle={-90}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart> 
        
        
        
        <ul>
            <li>
                <h3 className='font-bold capitalize user  before:relative before:p-1 before:mr-2'>Basic tees</h3>
                <span className='text-slate-400 ml-3'>55%</span>
            </li>
            <li>
                <h3 className='font-bold capitalize pants  before:relative before:p-1 before:mr-2'>custom short pants
                </h3>
                <span className='text-slate-400 ml-3'>31%</span>
            </li>
            <li>
                <h3 className='font-bold capitalize guest before:relative before:p-1 before:mr-2'>suber hoodies</h3>
                <span className='text-slate-400 ml-3'>14%</span>
            </li>
        </ul>
    </div>
</div>
)
}

export default Product;
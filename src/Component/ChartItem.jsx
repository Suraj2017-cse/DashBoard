import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const pdata = [
  {
    name: 'Week 1',
    student: 300,
    user: 200
  },
  {
    name: 'Week 2',
    student: 390,
    user: 200
  },
  {
    name: 'Week 3',
    student: 200,
    user: 100
  },
  {
    name: 'week 4',
    student: 300,
    user: 200
  },
  {
    name: '',
    student: 300,
    user: 250
  },
  {
    name: '',
    student: 200,
    user: 100
  },
];


const ChartItem = () => {

// const chartData = data.map((point) => ({
// argument: point.WeekName,
// value: point.value,
// }));

// const valueScale = scalePoint();


return (
  <div className='shadow rounded-xl p-4 w-full mt-4 relative'>
        <div className='flex justify-between capitalize mb-4'>
          <div>
            <h3 className='font-black'>Activities</h3>
            <select id=""
              className='text-sm text-gray-500 bg-transparent border-0 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'>
              <option>May-June 2021</option>
              <option>June-July 2021</option>
              <option>July-Aug 2021</option>
            </select>
          </div>
          <ul className='flex'>
            <li className='me-8 guest before:relative before:p-1 before:mr-2'>Guest</li>
            <li className='me-8 user before:relative before:p-1 before:mr-2'>
             {/* <Line type="monotone" dataKey="User" stroke="green" activeDot={{ r: 8 }} /> */}
              User
              </li>
          </ul>
        </div>


        {/* CHART */}

        {/* <Chart data={chartData}>
          <ValueScale name="valueScale" />

          <ArgumentAxis />
          <ValueAxis scaleName="valueScale" domain={[0, 500]} tickInterval={50} />

          <LineSeries name="Value" valueField="value" argumentField="argument" scaleName="valueScale" />

          <Legend />
          <Tooltip />

          <Animation />
        </Chart> */}

<ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'}  />
          <YAxis   />
          {/* <Legend /> */}
          {/* <div className='absolute top-0'> */}
          <Line type="monotone" dataKey="user" stroke="#9BDD7C"  />
          <Line type="monotone" dataKey="student" stroke="#E9A0A0" activeDot={{ r: 8 }} />
          {/* </div> */}
        </LineChart>
      </ResponsiveContainer>


  </div>
)
}

export default ChartItem
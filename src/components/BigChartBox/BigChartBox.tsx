import './bigChartBox.scss'
import {ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

const data = [
    {
      name: 'Sun',
      books: 4000,
      clothes: 2400,
      eletronic: 2400,
    },
    {
      name: 'Moon',
      books: 3000,
      clothes: 1398,
      eletronic: 2210,
    },
    {
      name: 'Tue',
      books: 2000,
      clothes: 9800,
      eletronic: 2290,
    },
    {
      name: 'Wed',
      books: 2780,
      clothes: 3908,
      eletronic: 2000,
    },
    {
      name: 'Thues',
      books: 1890,
      clothes: 4800,
      eletronic: 2181,
    },
    {
      name: 'Fri',
      books: 2390,
      clothes: 3800,
      eletronic: 2500,
    },
    {
      name: 'Sat',
      books: 3490,
      clothes: 4300,
      eletronic: 2100,
    },
  ];

export const BigChartBox = () => {
    return (
        <div className="bigChartBox">
            <ResponsiveContainer width="99%" height="100%">
                <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                
                
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="eletronic" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    )
}
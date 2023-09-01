import './singleFile.scss';
import {ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line, Legend } from 'recharts';


type Props ={
    id:number;
    img:string;
    title: string;
    info:object;
    chart: {
        dataKeys:{name:string; color: string}[];
        data: object[];
    };
    activities?: {time: string; text: string}[];
};


export const SingleFile = (props:Props) => {


    return (
        <div className="singleFile">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {props.img && <img src={props.img} alt="" /> }
                        
                        <h1>{props.title}</h1>
                        <button>update</button>
                    </div>
                    <div className="details">
                        {Object.entries(props.info).map( (item) =>
                            (
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]}</span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                            )

                        )}
                    </div>
                </div>
                <hr />
                <div className="chart">
                {props.chart && <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={props.chart.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <XAxis  />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {props.chart.dataKeys.map(dataKey => (
                        <Line
                         type="monotone"
                         dataKey={dataKey.name} 
                         stroke={dataKey.color} 
                        />

                    ))}
                    </LineChart>
                </ResponsiveContainer>}
                </div>
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                {props.activities && 
                <ul>
                    {props.activities.map(activity =>
                        (
                            <li key={activity.text}>
                                <div>
                                    <p>J{activity.text}</p>
                                    <time> {activity.time}</time>
                                </div>
                            </li>
                            )
                        )}
                </ul>
                }
            </div> 
        </div>
    )
}
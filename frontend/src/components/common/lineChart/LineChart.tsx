import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  } from 'recharts';
import { TrafficData } from '../../../types/trafficData';
  
  interface LineChartProps {
    data: TrafficData[];
    dataKey: string;
    color: string;
    title: string;
    label?: string;
  }
  
  const LineChartBase = ({ data, dataKey, color, title, label }: LineChartProps) => (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            name={label || dataKey}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  
  export default LineChartBase;
  
import { useEffect, useMemo, useState } from "react";
import socket from "../services/socket";
import { Card, Guage, LineChart } from "../components/common";
import { TrafficData } from "../types/trafficData";
import { getFormatTimestamp } from "../utils/date";

const Dashboard = () => {
  const [data, setData] = useState<TrafficData[]>([]);

  useEffect(() => {
    socket.onmessage = (event) => {
      const newData: TrafficData = JSON.parse(event.data);
      newData.timestamp = getFormatTimestamp(newData.timestamp);
      setData((prev) => [...prev.slice(-19), newData]); // Keep last 20 entries
    };
  }, []);

  const averageSessionDuration = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.avg_session_duration, 0) / data.length;
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <LineChart
        data={data}
        dataKey="page_views"
        color="#FFA726"
        title="Page Views"
        label="Page Views"
      />
      <Card count={data[data.length - 1]?.active_users || 0} title="Active Users" />
      <Guage value={averageSessionDuration} title="Average Session Duration" />
    </div>
  );
};

export default Dashboard;

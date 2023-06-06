import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { ResponsiveContainer } from "recharts";
import ActivitiesCard from "./ActivitiesCard";
import { useEffect, useState } from "react";
import { fetchData } from "../../pages/api/fetchData";

function Chart() {
  const [chartData, setChartData] = useState(null);

  const transform = (rawData) => {
    const temp = Object.keys(rawData, []);
    const transformedData = temp.map((element) => {
      return rawData[element];
    });

    return transformedData;
  };

  useEffect(() => {
    (async function () {
      const rawData = await fetchData();
      const transformedData = transform(rawData);
      setChartData(transformedData);
    })();
  }, []);

  return (
    <div className="root">
      <ActivitiesCard />
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          <Line type="monotone" dataKey="pv" stroke="#E9A0A0" />
          <Line type="monotone" dataKey="uv" stroke="#9BDD7C" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

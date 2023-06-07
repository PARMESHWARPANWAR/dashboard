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
    <div className="pt-[1.875rem] pr-[1.5rem] pb-[1.625rem]  md:pt-[1.875rem] md:pr-[2.5rem] md:pb-[1.625rem] md:pl-[2.5rem] flex flex-col  justify-center items-center w-full bg-[#ffffff]  rounded-[1.25rem]">
      <ActivitiesCard />
      <div className="w-full h-40 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="pv" />
            <Line type="monotone" dataKey="pv" stroke="#E9A0A0" />
            <Line type="monotone" dataKey="uv" stroke="#9BDD7C" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;

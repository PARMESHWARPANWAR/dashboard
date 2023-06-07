import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const PieChartComponent = () => {
  // Sample data for the pie chart
  const data = [
    { name: "Basic Tees", value: 55 },
    { name: "Custom Short Pants", value: 31 },
    { name: "Super Hoodies", value: 14 },
  ];

  // Colors for each slice of the pie chart
  const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

  return (
    <PieChart width={150} height={150}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={70}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;

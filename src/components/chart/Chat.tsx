import React from "react";
import "./chart.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DataPoint {
  name: string;   // Candidate name
  votes: number;  // Total votes received by each candidate
}

interface ChartProps {
  title: string;
  aspect: number;
}

// Sample data representing the election details for each candidate
const data: DataPoint[] = [
  { name: "Anura Dissana", votes: 2500 },
  { name: "Ranil wikra", votes: 1800 },
  { name: "Sajith Premada", votes: 2200 },
  { name: "Namal Rajapa", votes: 1300 },
  { name: "Dilith jayawe", votes: 900 },
];

const ElectionBarChart: React.FC<ChartProps> = ({ title, aspect }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" stroke="gray" /> {/* Candidate names on the X-axis */}
          <YAxis /> {/* Votes on the Y-axis */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip /> {/* Tooltip to show votes when hovering */}
          <Bar dataKey="votes" fill="#8884d8" /> {/* Bar to show votes per candidate */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ElectionBarChart;

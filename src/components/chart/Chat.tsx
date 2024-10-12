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
  { name: "Anura Dissanayake", votes: 6.474 },
  { name: "Sajith Premadasa", votes: 3.279 },
  { name: "Ranil Wickremesinghe", votes: 3.499 },
  { name: "Namal Rajapakse", votes: 1.239 }
];

const ElectionBarChart: React.FC<ChartProps> = ({ title, aspect }) => {
  // Custom formatter to display votes in millions
  const formatVotes = (votes: number) => `${votes}M`;

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
          <YAxis tickFormatter={formatVotes} /> {/* Votes on the Y-axis in millions */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip formatter={(value: number) => `${value} million votes`} /> {/* Tooltip to show votes in millions */}
          <Bar dataKey="votes" fill="#8884d8" /> {/* Bar to show votes per candidate */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ElectionBarChart;

import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Sample data representing the votes for each candidate
const data = [
  { name: "Anura Dissanayake", votes: 6474923, color: "#8884d8" },
  { name: "Sajith Premadasa", votes: 3279627, color: "#82ca9d" },
  { name: "Ranil Wickremesinghe", votes: 3499314, color: "#ffc658" },
  { name: "Namal Rajapakse", votes: 1238899, color: "#FF8042" }
];

// Calculate total votes
const totalVotes = data.reduce((acc, candidate) => acc + candidate.votes, 0);

const Featured: React.FC = () => {
  return (
    <div className="featured2">
      <div className="top">
        <h1 className="title">Election Votes Distribution Prediction</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="votes"
                // nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({ name, votes }) => {
                  const percentage = ((votes / totalVotes) * 100).toFixed(2); // Calculate percentage
                  return `${percentage}%`;
                }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any) => {
                  // Ensure value is of type number before arithmetic
                  const numValue = Number(value);
                  if (!isNaN(numValue)) {
                    const percentage = ((numValue / totalVotes) * 100).toFixed(2);
                    return `${percentage}% (${numValue} votes)`;
                  }
                  return value; // If not a number, return as is
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="title"></p>
        <p className="amount">{totalVotes.toLocaleString()} votes</p> 
        <p className="desc">This chart shows the distribution of votes among candidates.</p>
      </div>
    </div>
  );
};

export default Featured;

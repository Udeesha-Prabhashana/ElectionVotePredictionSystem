import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

// Sample data representing the votes for each candidate
const data = [
  { name: "Candidate A", votes: 400, color: "#8884d8" },
  { name: "Candidate B", votes: 300, color: "#82ca9d" },
  { name: "Candidate C", votes: 300, color: "#ffc658" },
  { name: "Candidate D", votes: 200, color: "#FF8042" }
];

const Featured: React.FC = () => {
  return (
    <div className="featured2">
      <div className="top">
        <h1 className="title">Election Votes Distribution</h1>  {/* give header to featured box */}
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="votes"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip /> {/* Tooltip to display candidate name and votes on hover */}
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="title"></p>
        <p className="amount">247,93,400 votes</p> {/* Total number of votes */}
        <p className="desc">This chart shows the distribution of votes among candidates.</p>
      </div>
    </div>
  );
};

export default Featured;

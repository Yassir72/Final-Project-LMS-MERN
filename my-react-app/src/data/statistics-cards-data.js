
import { UsersIcon, ChartBarIcon, BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios"; // or any other library for making HTTP requests

export const StatisticsCards = () => {
  const [statisticsData, setStatisticsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/collections/count"); // Endpoint to fetch collection count
      const collectionCount = response.data.count;

      const data = [
        {
          color: "gray",
          icon: BookOpenIcon,
          title: "Today's courses",
          value: collectionCount, // Use the collection count here
          footer: {
            color: "text-green-500",
            value: "+5%",
            label: "than last week",
          },
        },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Today's Students",
    value: "60",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: AcademicCapIcon,
    title: "Today's instructors",
    value: "5",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  
      ];

      setStatisticsData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {statisticsData.map((card, index) => (
        <div key={index} className="statistic-card">
          <card.icon className="icon" />
          <div className="title">{card.title}</div>
          <div className="value">{card.value}</div>
          <div className="footer">
            <span className={card.footer.color}>{card.footer.value}</span> {card.footer.label}
          </div>
        </div>
      ))}
    </>
  );
};

export default StatisticsCards;


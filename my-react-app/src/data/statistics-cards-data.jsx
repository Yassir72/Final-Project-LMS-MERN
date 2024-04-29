import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  UsersIcon,
  BookOpenIcon,
  UserIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import StatisticsCard from '@/widgets/cards/statistics-card';
import { Typography } from '@material-tailwind/react';

const initialStatisticsData = [
  {
    color: "gray",
    icon: BookOpenIcon,
    title: "Today's Courses",
    value: 0,
  },
  {
    color: "gray",
    icon: AcademicCapIcon,
    title: "Today's Students",
    value: 0,
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Today's Instructors",
    value: 0,
  },
  {
    color: "gray",
    icon: UserIcon,
    title: "Today's Admins",
    value: 0,
  },
];

const StatisticsCards = () => {
  const [statisticsData, setStatisticsData] = useState(initialStatisticsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await axios.get("http://localhost:3000/getStudents");
        const adminres = await axios.get("http://localhost:3000/admin/getAdmins");
        const instructorRes = await axios.get("http://localhost:3000/instructor/getInstructors");
        const courseRes = await axios.get("http://localhost:3000/course/getCourses");

        const studentsCount = studentsResponse.data.allStudents.length;
        const adminsCount = adminres.data.length;
        const insCount = instructorRes.data.length;
        const courseCount = courseRes.data.length;

        setStatisticsData([
          {
            color: "gray",
            icon: BookOpenIcon,
            title: "Today's Courses",
            value: courseCount,
          },
          {
            color: "gray",
            icon: AcademicCapIcon,
            title: "Today's Students",
            value: studentsCount,
          },
          {
            color: "gray",
            icon: UsersIcon,
            title: "Today's Instructors",
            value: insCount,
          },
          {
            color: "gray",
            icon: UserIcon,
            title: "Today's Admins",
            value: adminsCount,
          },
        ]);
        setLoading(false); // Data fetched, set loading to false

        console.log('Statistics data updated successfully!');
      } catch (error) {
        console.error('Error updating statistics data:', error);
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message
  }

  return (
    <>
      {statisticsData.map((card, index) => (
        <StatisticsCard
          key={index}
          color={card.color}
          icon={React.createElement(card.icon, {
            className: "w-6 h-6 text-white",
          })}
          title={card.title}
          value={card.value}
        />
      ))}
    </>
  );
};

export default StatisticsCards

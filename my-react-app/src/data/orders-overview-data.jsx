import {
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { React, useState, useEffect } from "react";
import axios from 'axios';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

export const ordersOverviewData = [
  {
    icon: PlusCircleIcon,
    color: "text-blue-gray-300",
    title: "$2400, Design changes",
    description: "22 DEC 7:20 PM",
  },
  {
    icon: PlusCircleIcon,
    color: "text-blue-gray-300",
    title: "New order #1832412",
    description: "21 DEC 11 PM",
  },
  {
    icon: PlusCircleIcon,
    color: "text-blue-gray-300",
    title: "Server payments for April",
    description: "21 DEC 9:34 PM",
  },
  {
    icon: PlusCircleIcon,
    color: "text-blue-gray-300",
    title: "New card added for order #1234",
    description: "20 DEC 2:20 AM",
  },
  {
    icon: PlusCircleIcon,
    color: "text-blue-gray-300",
    title: "Unlock packages for development",
    description: "18 DEC 4:54 AM",
  },
  {
    icon: PlusCircleIcon,
    color: "text-blue-gray-300",
    title: "New order #123",
    description: "17 DEC",
  },
];

const Orderstable = () => {
  const [ordersData, setOrdersData] = useState(ordersOverviewData);
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderRes = await axios.get("http://localhost:3000/order/getOrders");
        const fetchedOrders = orderRes.data;

        const updatedOrders = ordersOverviewData.map((order, index) => {
          const fetchedOrder = fetchedOrders[index];
          if (fetchedOrder) {
            return {
              ...order,
              title: fetchedOrder.orderReference +" "+ fetchedOrder.status ,
              description: "$"+fetchedOrder.totalAmount+" "+ new Date(fetchedOrder.createdAt).toDateString(),
            };
          } else {
            return order; // Keep the original order if fetchedOrder is undefined
          }
        });
        setOrdersData(updatedOrders)
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Set some state or display an error message to the user
      }
    }
    fetchOrderData();
  }, []);

  return (
    <Card className="border border-blue-gray-100 shadow-sm">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 p-6"
      >
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Orders Overview
        </Typography>
      </CardHeader>
      <CardBody className="pt-0">
        {ordersData.map(({ icon: Icon, color, title, description }, key) => (
          <div key={key} className="flex items-start gap-4 py-3">
            <div
              className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                key === ordersData.length - 1
                  ? "after:h-0"
                  : "after:h-4/6"
              }`}
            >
              <Icon className={`!w-5 !h-5 ${color}`} />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium"
              >
                {title}
              </Typography>
              <Typography
                as="span"
                variant="small"
                className="text-xs font-medium text-blue-gray-500"
              >
                {description}
              </Typography>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

export default Orderstable;

"use Clients";
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface Dataset {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
}

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}
const BarChart = () => {
  // const [chartData, setChartData] = useState({
  //   datasets: [],
  // });

  // const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState<{
        labels: string[];
        datasets: Dataset[]; // Specify the type as Dataset[]
    }>({
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [],
    });
    const [chartOptions, setChartOptions] = useState<any>({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Daily Revenue',
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    });
    useEffect(() => {
        // Set chart data
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [1812, 22201, 19490, 17938, 24182, 17842, 22475],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)',
                },
            ],
        });

        // Set chart options
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue',
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);


  // useEffect(() => {
  //   setChartData({
  //       labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  //       datasets: [
  //           {
  //               label:  'Sales $',
  //               data: [1812, 22201, 19490, 17938, 24182, 17842, 22475],
  //               borderColor: 'rgb(53, 162, 235)',
  //               backgroundColor: 'rgb(53, 162, 235, 0.4',
  //             }, 
  //       ]
  //   })
  //   setChartOptions({
  //       plugins: {
  //           legend: {
  //               position: 'top',
  //           },
  //           title: {
  //               display: true,
  //               text: 'Daily Revenue'
  //           }
  //       },
  //       maintainAspectRatio: false,
  //       responsive: true
  //   })
  // }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
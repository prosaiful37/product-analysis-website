import React from 'react';
import { LineChart } from 'recharts';
import {Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';

const DashLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
       
        <LineChart
            width={600}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey={'month'} stroke="#D0634E" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="investment" stroke="#282C34" strokeDasharray="3 4 5 2" />
            <Line type="monotone" dataKey="sell" stroke="#2BE973" strokeDasharray="3 4 7 3" />
            <Line type="monotone" dataKey="revenue" stroke="#F23CBE" strokeDasharray="5 4 2 3" />
        </LineChart>
       
    );
};

export default DashLineChart;
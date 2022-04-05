import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const MyPieChart = () => {
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
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey={'month'} data={data} fill="#8884d8" label/>
                    <Pie dataKey={'investment'} data={data} fill="#F23CBE" label/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};


export default MyPieChart;


import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';
  

const LineBarChart = () => {
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
        },
    ];
    return (
        <ResponsiveContainer width="100%" height='100%'>
            <ComposedChart 
                width={600}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
            >
                <CartesianGrid stroke='#f5f5f5' />
                <XAxis dataKey='month' scale='band' />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Area type={'monotone'} dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                <Scatter dataKey="sell" fill="red" /> 
            </ComposedChart>

        </ResponsiveContainer>

    );
};

export default LineBarChart;
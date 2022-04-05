import React from 'react';
import DashLineChart from '../DashdLineChart/DashLineChart';
import LineBarChart from '../LineBarChart/LineBarChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const Dashboard = () => {
    return (
        <div>
            <section className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-10'>
                        <div className='chart my-5'>
                            <DashLineChart></DashLineChart>
                        </div>
                        
                    </div>
                    <div className='col-lg-6 col-10'>
                        <div className='mypiechart my-5'>
                            <MyPieChart></MyPieChart>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-10'>
                        <div className='chart my-5'>
                             <LineBarChart></LineBarChart>
                        </div>
                        
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Dashboard;
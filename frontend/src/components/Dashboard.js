import React from 'react';
import WeatherWidget from './WeatherWidget';
import ControlPanel from './ControlPanel';

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl">EnviroCorp Weather Dashboard</h1>
            </header>
            <div className="flex flex-1">
                <aside className="w-1/4 bg-gray-200 p-4">
                    <h2 className="text-xl">Sidebar</h2>
                    {/* Add sidebar links or navigation here */}
                </aside>
                <main className="flex-1 p-4">
                    <WeatherWidget />
                    <ControlPanel />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
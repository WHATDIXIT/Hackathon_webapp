import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('/api/weather');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    const handleOrderWeather = async (weatherType) => {
        try {
            const response = await fetch('/api/weather/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type: weatherType }),
            });
            if (!response.ok) {
                throw new Error('Failed to order weather');
            }
            const data = await response.json();
            alert(`Weather ordered: ${data.message}`);
        } catch (error) {
            alert(error.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Weather Widget</h2>
            <div className="mt-4">
                <h3 className="text-lg">Current Weather:</h3>
                <p>{weatherData.current}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg">Order Weather:</h3>
                <button onClick={() => handleOrderWeather('sunny')} className="bg-blue-500 text-white px-4 py-2 rounded">Order Sunny</button>
                <button onClick={() => handleOrderWeather('rainy')} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Order Rainy</button>
            </div>
        </div>
    );
};

export default WeatherWidget;
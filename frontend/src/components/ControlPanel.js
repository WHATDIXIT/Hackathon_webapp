import React, { useState } from 'react';

const ControlPanel = () => {
    const [gpsCoordinates, setGpsCoordinates] = useState('');
    const [landVerified, setLandVerified] = useState(false);
    const [subscriptionType, setSubscriptionType] = useState('basic');

    const handleGpsChange = (e) => {
        setGpsCoordinates(e.target.value);
    };

    const handleLandVerification = () => {
        // Logic for verifying land goes here
        setLandVerified(true);
    };

    const handleSubscriptionChange = (e) => {
        setSubscriptionType(e.target.value);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Control Panel</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">GPS Coordinates:</label>
                <input
                    type="text"
                    value={gpsCoordinates}
                    onChange={handleGpsChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter GPS coordinates"
                />
            </div>
            <button
                onClick={handleLandVerification}
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
                Verify Land
            </button>
            {landVerified && <p className="mt-2 text-green-500">Land verified successfully!</p>}
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Subscription Type:</label>
                <select
                    value={subscriptionType}
                    onChange={handleSubscriptionChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="enterprise">Enterprise</option>
                </select>
            </div>
        </div>
    );
};

export default ControlPanel;
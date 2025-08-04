import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/dashboard.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Dashboard</h2>
      {data ? (
        <div className="card">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Referral Code:</strong> {data.referralCode}</p>
          <p><strong>Total Donations Raised:</strong> ₹{data.donations}</p>

          <div className="rewards">
            <h3 className="subtitle">Rewards/Unlockables</h3>
            <ul>
              <li>🎁 Free T-shirt - Unlocked at ₹10,000</li>
              <li>🎖️ Certificate - Unlocked at ₹5,000</li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
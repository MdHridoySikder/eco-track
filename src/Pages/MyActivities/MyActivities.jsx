import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import ChallengeCards from "../ChallengeCards";

const MyActivities = () => {
  const { user } = useContext(AuthContext);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-activities?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div>Loading...........</div>;
  }

  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-green-100 py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((challenge) => (
          <ChallengeCards key={challenge._id} challenges={challenge} />
        ))}
      </div>
    </div>
  );
};

export default MyActivities;

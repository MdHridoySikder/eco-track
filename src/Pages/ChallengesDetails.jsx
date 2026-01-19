import { useLoaderData } from "react-router";

const ChallengesDetails = () => {
  const challenges = useLoaderData();

  if (!challenges) {
    return <div>Loading or Challenge not found...</div>;
  }

  const { title, category, description, impactMetric, participants } =
    challenges;

  return (
    <div>
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{description}</p>
      <p>{impactMetric}</p>
      <p>{participants} participants</p>
    </div>
  );
};

export default ChallengesDetails;

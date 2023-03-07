import React from "react";

const UrbanAreasList = ({ topUrbanAreas }) => {

  //note that the regex expression on line 15 removes html tags from the string

  return (
    <div>
      <h3>Top Urban Areas</h3>
      <ul>
        {topUrbanAreas.map((urbanArea) => (
          <li key={urbanArea.name}>
            <h4>
              {urbanArea.name.charAt(0).toUpperCase() + urbanArea.name.slice(1)}
            </h4>
            <p>Score: {urbanArea.teleport_city_score.toFixed(1)}</p>
            <p>{urbanArea.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrbanAreasList;

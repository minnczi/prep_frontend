import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RenderList({ restaurant }) {
  console.log(restaurant);
  return (
    <div>
      <div>{restaurant.restaurantId}</div>
    </div>
  );
}

const MzListDetail = () => {
  const { listId } = useParams();

  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    async function fetchListDetail() {
      const response = await fetch(`http://localhost:8080/mzlist/${listId}`, {
        headers: {
          Accept: "application/json",
        },
        method: "GET",
      }).then((response) => {
        return response.json();
      });
      setRestaurantList(response.restaurantList);
      // setRestaurantList(Object.values(response.restaurantList));
      // console.log(Object.values(response.restaurantList));
    }
    fetchListDetail();
  }, [listId]);

  return (
    <div className="MzListDetail">
      <h1>Hello</h1>
      <h2>This is MzList</h2>
      {restaurantList.map((restaurant) => (
        <RenderList key={restaurant.restaurantId} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default MzListDetail;

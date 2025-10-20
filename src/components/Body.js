import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState(resobj);
  console.log(listOfResturants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestrurants = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfResturants(filteredRestrurants);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestrurantsList, setFilterRestruantsList] = useState([]);

  const RestaurantCardDiscounted = withDiscountLabel(RestaurantCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestruantsList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus === false) {
    return (
      <div className="offline-container">
        <h1>
          {" "}
          Looks like you are ofline!! Please check your internet Connection.
        </h1>
      </div>
    );
  }

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterReslist = listOfResturants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilterRestruantsList(filterReslist);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-green-100  rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <label> User </label>
          <input
            className=" border border-solid border-black px-2 "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestrurantsList.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            {resturant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardDiscounted resData={resturant} />
            ) : (
              <RestaurantCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

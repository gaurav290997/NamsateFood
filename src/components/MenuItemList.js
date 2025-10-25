import { CDN_URL } from "../utils/constants";

const MenuItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12 ">
            <div className="py-2 ">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">₹ {item.card.info.price / 100}</span>
            </div>
            <p className="">
              ⭐ {item.card.info.ratings.aggregatedRating.rating}(
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </p>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12  ">
            <button className="p-3  mx-12 my-21 rounded-lg text-xs font-bold bg-white shadow-lg absolute text-emerald-600 ">
              ADD
            </button>
            <img
              className="w-full "
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;

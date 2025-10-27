import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load resturant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("ZAZA Mughal Biryani");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtn[0]);

  // expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
});

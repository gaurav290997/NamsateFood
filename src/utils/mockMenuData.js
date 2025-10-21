const mockMenuData = [
  // 20251021134316
  // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9121181&lng=77.6445548&restaurantId=391001&catalog_qa=undefined&submitAction=ENTER

  {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
              text: "ZAZA Mughal Biryani",
              headerStyling: {
                textColor: "text_Highest_Emphasis",
                textVariant: "header_H3_Black",
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
              tabs: [
                {
                  id: "Order Online",
                  title: "Order Online",
                },
              ],
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "391001",
                name: "ZAZA Mughal Biryani",
                city: "Bangalore",
                slugs: {
                  restaurant: "zaza-21-spice-biryani-hsr-layout-hsr",
                  city: "bangalore",
                },
                uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/29dac2af-5e30-46ff-b909-b1309ec30cd9_391001.jpg",
                locality: "2nd Sector",
                areaName: "HSR Layout",
                costForTwo: "25000",
                costForTwoMessage: "₹250 for two",
                cuisines: ["Biryani", "North Indian"],
                avgRating: 4.4,
                feeDetails: {
                  restaurantId: "391001",
                  fees: [{}],
                },
                parentId: "22473",
                avgRatingString: "4.4",
                totalRatingsString: "655 ratings",
                sla: {
                  restaurantId: "391001",
                  deliveryTime: 25,
                  minDeliveryTime: 20,
                  maxDeliveryTime: 30,
                  lastMileTravel: 1.2,
                  serviceability: "SERVICEABLE",
                  rainMode: "RAIN_MODE_LIGHT",
                  longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                  zoneId: 3,
                  slaString: "20-30 MINS",
                  lastMileTravelString: "1.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2025-10-22 02:00:00",
                  visibility: true,
                  opened: true,
                  restaurantClosedMeta: {},
                },
                aggregatedDiscountInfo: {
                  header: "Get items under 99",
                  shortDescriptionList: [
                    {
                      discountType: "BXGY",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      discountType: "BXGY",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                  ],
                  visible: true,
                },
                badges: {},
                slugString: "zaza-21-spice-biryani-hsr-layout-hsr",
                isOpen: true,
                labels: [
                  {
                    title: "Timings",
                    message: "null",
                  },
                  {
                    title: "Address",
                    message:
                      "No.1,Haralukunte,2nd Sector,BDA Layout,HSR Layout,Bengaluru,Karnataka-560102 L47",
                  },
                  {
                    title: "Cuisines",
                    message: "Biryani,North Indian",
                  },
                ],
                totalRatings: 655,
                aggregatedDiscountInfoV2: {
                  header: "Get items under 99",
                  shortDescriptionList: [
                    {
                      discountType: "BXGY",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      discountType: "BXGY",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                  ],
                  couponDetailsCta: "View coupon details",
                },
                type: "F",
                nudgeBanners: [
                  {
                    priority: 8,
                    discountInfo: {
                      discountType: "FinalPrice",
                      value: 330,
                    },
                    unlockedMessage: "Deal of the Day unlocked!",
                    minItemCount: 1,
                    maxItemCount: 1,
                    type: "SILD",
                    nudgeTagInfo: {
                      title: "Deal of the Day",
                      fontName: "FONT_NAME_CONDENSED_BOLD",
                    },
                    logoCtx: {},
                  },
                ],
                headerBanner: {
                  url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/391001",
                },
                ratingSlab: "RATING_SLAB_5",
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                  commsStyling: {},
                },
                hasBestsellerItems: true,
                cartOrderabilityNudgeBanner: {
                  parameters: {},
                  presentation: {},
                },
                latLong: "12.905335,77.648962",
                backgroundImageOverlayInfo: {},
                menuHeaderLottie: {
                  menuHeaderLottie:
                    "https://media-assets.swiggy.com/bolt/bolt%2015%20black.json?updatedAt=1733379625251",
                  frequencyCapping: {},
                },
                featuredSectionInfo: {},
                requestContexts: ["enable_ecosaver", "99store"],
                hasBoltItems: true,
                dishStyle: {
                  socialMarkerStyle: [
                    {
                      socialMarkerType: "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                      title: "Protein Rich",
                      textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                      textColor: "highlight",
                    },
                    {
                      socialMarkerType: "SOCIAL_MARKER_TYPE_BESTSELLER",
                      title: "Bestseller",
                      textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                      textColor: "color_swiggy_one",
                    },
                  ],
                },
              },
              analytics: {},
            },
            relevance: {
              type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
              sectionId: "POP_UP_CROUTON_MENU",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              layout: {
                rows: 1,
                columns: 5,
                horizontalScrollEnabled: true,
                itemSpacing: 12,
                lineSpacing: 10,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 10,
                    right: 10,
                    bottom: 16,
                  },
                },
              },
              id: "offerCollectionWidget_UX4",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  offers: [
                    {
                      info: {
                        header: "BUY 1 GET 1 FREE",
                        offerTagColor: "#E46D47",
                        offerIds: ["e3275c7f-434a-469b-b5a3-92121df5a479"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE BUY1GET1",
                        description: "ON SELECT ITEMS",
                        offerType: "offers",
                        restId: "391001",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE BUY1GET1",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "ITEMS AT ₹99",
                        offerTag: "DEAL OF DAY",
                        offerTagColor: "#E46D47",
                        offerIds: ["66656e6e-ba85-4850-ac50-29c0c897eb91"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        description: "ON SELECT ITEMS |",
                        offerType: "offers",
                        restId: "391001",
                        offerLogo: "offers/deal-of-day",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "30% OFF UPTO ₹75",
                        offerTagColor: "#E46D47",
                        offerIds: ["4f83678c-7410-4220-9c42-7cd36cdf49fa"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE TRYNEW",
                        description: "ON SELECT ITEMS",
                        offerType: "offers",
                        restId: "391001",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE TRYNEW",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT ₹100 OFF",
                        offerTag: "FLAT DEAL",
                        offerTagColor: "#E46D47",
                        offerIds: ["1bba8da0-75cd-4f04-b90f-4eb94f23c329"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE FLAT100",
                        description: "ABOVE ₹299",
                        offerType: "offers",
                        restId: "391001",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE FLAT100",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT ₹151 OFF",
                        offerTag: "FLAT DEAL",
                        offerTagColor: "#E46D47",
                        offerIds: ["b48bcd9c-3698-41bd-8db7-494c03338dbe"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE DEEEPAVALI",
                        description: "ABOVE ₹449",
                        offerType: "offers",
                        restId: "391001",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE DEEEPAVALI",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                  ],
                  habitMilestoneInfo: {
                    callout: {},
                  },
                  loyaltyDiscoverPresentationInfo: {
                    logoCtx: {},
                  },
                },
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                        badges: {},
                        vegOnlyDetails: {
                          imageId: "AutoVegOnly_qkjowj",
                          title: "Showing only vegetarian options.",
                          description:
                            "Tap on the VEG ONLY button to turn off the setting",
                        },
                        offersFilter: {
                          attributes: {
                            displayText: "Offer",
                          },
                        },
                        topRatedFilter: {
                          attributes: {
                            displayText: "Ratings 4.0+",
                          },
                        },
                        kidsCategoryFilter: {
                          attributes: {
                            displayText: "Kids Favourites",
                            tooltip: {
                              enabled: true,
                              displayText:
                                "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                            },
                          },
                        },
                        vegFilter: {
                          attributes: {
                            displayText: "VEG",
                          },
                        },
                        nonvegFilter: {
                          attributes: {
                            displayText: "NONVEG",
                          },
                        },
                        bolt: {
                          attributes: {
                            displayText: "Food in 10-15 mins",
                            displayImage: "bolt/bolt%2011.png",
                            unselectedDisplayImage: "bolt/bolt%2011.png",
                          },
                        },
                      },
                      relevance: {
                        type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                        sectionId: "MENU_FILTER_TOGGLE",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Recommended",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159802",
                                name: "Veg Handi Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Veg Handi Biryani + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/427c5c44-f5a4-42c7-ab58-2ae49597225f_cb5aae8c-297a-4479-81c6-015f3da234d1.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662885",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623039",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159804",
                                name: "Egg Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Egg Biryani + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/2424aeed-5a58-49cc-8160-c4314de90f95_88a5ee43-9e7a-41dc-b5ac-250a0919c660.jpg",
                                inStock: 1,
                                price: 24900,
                                finalPrice: 15900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662887",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "b6f358d7-33c0-4f6a-bef3-8ebe269b6e07",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623036",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159803",
                                name: "Tangdi Chicken Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Tangdi Chicken Biryani [1 Leg Pc with bone] + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/310d7ca2-8bb0-4187-8b38-7fa2c9d70508_80cfee7b-e7b8-476f-b3bf-3aa578c2c51d.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662886",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623038",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "169486339",
                                name: "Chicken Tandoori Biryani+ Dessert+ 2 Mini Samos...",
                                category: "Biryani Feast Thali",
                                description:
                                  "[1 Leg Pc with bone] Tandoori Chicken Biryani + 2 Mini Samosas + Gulab Jamun + Raita + Imli Chutney + Hari Chutney + Onions.\n\nCombo contains 1 Biryani Feast Thali & Thums Up.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/6/2099fa94-f172-425e-b090-d91e72b2456c_c959b7e9-74fd-4da0-adc7-f1fe78c06195.jpg",
                                inStock: 1,
                                price: 39900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "102253447",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726464",
                                name: "Chef's Special Chicken Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Marinated juicy chicken, special masala gravy with rice. Indulge in the Mughal magic!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/2df8252e-4197-4fea-ac26-810dead3ca3b_9b492d90-3d31-4964-86f2-eb31008f6a19.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120967",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "85 ratings",
                                    ratingCountV2: "85",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941136",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726414",
                                name: "Chicken Tikka Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Chicken tikka in an aromatic blend of spices, slow-cooked with long grain rice. A regal delicacy!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/4ad7dede-febf-4356-8c41-a8c71a8d9914_490d2ff3-9294-48f2-90fa-4f3f1dcd5f38.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120944",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "136 ratings",
                                    ratingCountV2: "136",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941140",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726354",
                                name: "Butter Chicken Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Smoked chicken in a creamy gravy, layered with basmati rice. Rich & splendid like the Mughal times!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/10/17/fa3ec270-e17e-474c-adbf-cfb0ab853346_ee4dece1-4f9f-47b4-a183-86491e9e5734.jpg",
                                inStock: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120919",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "62 ratings",
                                    ratingCountV2: "62",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941135",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164929492",
                                name: "Signature Chicken Biryani + Gulab Jamun + Lemon...",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1]  Mughal style biryani with juicy chicken & rustic masalas.\n\nCombo contains Biryani, Gulab Jamun, Lemonade & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/15/e6e778e4-9567-4c3e-9ed0-21c9538842bf_aaef13cf-e2b9-4d99-a3af-1cd80d7a8bcd.jpg",
                                inStock: 1,
                                price: 47900,
                                finalPrice: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "46f69a0f-47d4-4cbd-b895-8e992ca95efc",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "99601090",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726371",
                                name: "Dhaba Chicken Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Marinated chicken layered & slow-cooked with fragrant basmati rice. Authenticity in every bite!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/28850e77-fcbb-4488-9a38-6a98cf94ab84_da992ec8-d5f0-451b-aa12-81b035bacf96.jpg",
                                inStock: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120955",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "45 ratings",
                                    ratingCountV2: "45",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941142",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "128412252",
                                name: "Double Chicken Tangdi Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[With Bone, Half KG, Serves 1, Comes with Raita] Loaded with two chicken leg pieces, spice marinade & long grain basmati rice. Epic & classic!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/fc1d7153-39b3-4794-846a-c6b3397fc8f0_620424db-5695-4741-b2a8-c2309be78395.jpg",
                                inStock: 1,
                                price: 32900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143250909",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "74462525",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726389",
                                name: "Chicken Overload Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Loaded with 50% more chicken pieces, an earthy gravy & basmati rice. This Mughal biryani is a must-try!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/24/f1c7c21f-a629-4e48-8543-e750e0e28850_62026cd8-8622-4b2c-b7c8-31b80568d34c.jpg",
                                inStock: 1,
                                price: 34900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120906",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941138",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164938264",
                                name: "Tandoori Chicken Mughal Biryani + Lemonade + Raita",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1] Chicken tikka, layered on an aromatic blend of spices & rice.\n \nCombo contains Biryani, Lemonade & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/6/94c223a2-bb42-4ce1-bdba-972ea93399b1_d414d7b6-7b6a-4bfc-bb89-ed7ca46eac9e.jpg",
                                inStock: 1,
                                price: 39900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "99265516",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164938263",
                                name: "Bhuna Chicken Biryani + 3 Mini Samosas + Lemona...",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1] Slow-cooked Biryani with bhuna marinated chicken & basmati rice.\n\nCombo contains Biryani, 3 Mini Samosas, Lemonade & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/15/b072e6ad-a2d4-4097-b873-0611598fdb01_b023ee67-60c3-4a69-9f1a-3abb5b170837.jpg",
                                inStock: 1,
                                price: 43900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "Buy 1 Get 1",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "B1G1",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "B1G1",
                                itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "e3275c7f-434a-469b-b5a3-92121df5a479",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "99601088",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "128412253",
                                name: "Aloo & Veg Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] Marinated potatoes, vegetables in a blend of exotic spices & basmati rice. Relish the timeless flavours!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/dd5f42c5-68bb-4fd9-9807-e79e0610830e_f1d551b0-ea69-42d8-97e9-dfdd9b1658a3.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120914",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.3",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "74462524",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726589",
                                name: "Veg Handi Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] Freshly diced vegetables cooked with bhuna masalas & aromatic rice. A kingly feast!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/10/17/2447f477-ce7c-4d28-a463-384b2b00225d_b46c0af6-2430-4cf5-a4dd-b8ef495625f8.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120935",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "18 ratings",
                                    ratingCountV2: "18",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941150",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726548",
                                name: "Paneer & Veg Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] Tender paneer & vegetables tossed in a rich marinade with aromatic basmati rice. Relish the Mughal magnificence!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/f5899a43-5ffa-427d-8d7f-1632caa8f23f_f4050fec-ba71-4b4a-ad42-c25c8122a949.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120910",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941147",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164932091",
                                name: "Paneer Subz Mughal Biryani + Thums Up + Raita",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1] Flavourful authentic Mughal Biryani with paneer & vegetables.\n\nCombo contains Biryani, Thums Up & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/6/381a38a0-0b2b-4c7f-81c5-74c1b27a7983_0a7f95d1-1b3b-45c6-8b08-16e5d50d6eba.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 34900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "Buy 1 Get 1",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "B1G1",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "B1G1",
                                itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "e3275c7f-434a-469b-b5a3-92121df5a479",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "110170436",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726350",
                                name: "Peri Peri Chicken Wings",
                                category: "Chicken Starters",
                                description:
                                  "Juicy pieces of chicken wings in peri peri mix. Wings that will make your tastebuds fly!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/554fc93b-7541-4969-894f-b8af9044ecf1_afc12817-97e9-430f-a970-e5a9c32b8d1e.jpg",
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "20 ratings",
                                    ratingCountV2: "20",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941148",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726559",
                                name: "Smoky BBQ Chicken Wings [6 Pcs]",
                                category: "Chicken Starters",
                                description:
                                  "Crispy and juicy chicken wings tossed in BBQ sauce. Full of smoky flavours!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/7eb4af45-0f8a-4fe7-9a98-f3b61adc1c2f_f0291289-231f-4a4a-8aa9-f9e99fd4e58d.jpg",
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "19826381",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726560",
                                name: "Chicken Tikka",
                                category: "Chicken Starters",
                                description:
                                  "Tender chicken chunks marinated & grilled on a tandoor for the perfect smoky taste!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/900fc285-9753-4233-b43a-db9acf9c2eac_db9a0113-8f33-48ca-8958-20a1702b925e.jpg",
                                inStock: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941139",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        type: "CATEGORY_TYPE_RECOMMENDED",
                        subtitleSuffix: {},
                        categoryId: "-1",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "2 Value Biryanis @ 99 each",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "146314302",
                                name: "2 Value Biryanis @ 99 each",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[2 X Half Kg, Serves 2, Raita not included] Get any 2 value biryanis of your choice.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/1/1a3a482b-d7ec-41e2-af20-664e46f9e56f_48d342cf-1bc0-40af-a705-191678bbbfc5.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "45574711",
                                      name: "First Biryani (Raita not included)",
                                      variations: [
                                        {
                                          name: "Dum Aloo Value Biryani Bowl",
                                          default: 1,
                                          id: "144570071",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Egg Value Biryani Bowl",
                                          price: 1000,
                                          id: "144570072",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Tangdi Chicken Value Biryani Bowl",
                                          price: 2000,
                                          id: "144570073",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                    {
                                      groupId: "45574712",
                                      name: "Second Biryani (Raita not included)",
                                      variations: [
                                        {
                                          name: "Dum Aloo Value Biryani Bowl",
                                          default: 1,
                                          id: "144570074",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Egg Value Biryani Bowl",
                                          price: 1000,
                                          id: "144570075",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Tangdi Chicken Value Biryani Bowl",
                                          price: 2000,
                                          id: "144570076",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "166085847",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "121117468",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117479",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121115499",
                                        name: "2 Raitas",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117467",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117477",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117464",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117463",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117474",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117473",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117461",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117471",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121115502",
                                        name: "3 Raitas",
                                        price: 10500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121115500",
                                        name: "Raita",
                                        price: 3500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121115501",
                                        name: "4 Raitas",
                                        price: 14000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117478",
                                        name: "Chocolava + Coke Zero [500 ml]",
                                        price: 9900,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117466",
                                        name: "Chocolava + Coke [250 ml]",
                                        price: 9900,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121117465",
                                        name: "Nachos + Coke [250 ml]",
                                        price: 6900,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "121122844",
                                        name: "Nachos + Coke Zero [500 ml]",
                                        price: 6900,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "107335910",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "128412251",
                                name: "Dum Aloo Value Biryani Bowl",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[Half KG, Serves 1, Raita not included] Mughal style biryani with flavour-packed aloo & long grain rice. Feast at an unbelievable price!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/fbea6c2e-16a1-453f-8c51-7a8bfef084c6_4a06efba-26c5-4e00-8e07-e9480d7d4d97.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "123404827",
                                    groupName: "Add Extras",
                                    choices: [
                                      {
                                        id: "100075261",
                                        name: "Raita",
                                        price: 2500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "143120951",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "10 ratings",
                                    ratingCountV2: "10",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "74462526",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "119745832",
                                name: "Tangdi Chicken Value Biryani Bowl",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[1 Leg Pc with Bone, Half KG, Serves 1, Raita not included] Juicy marinated chicken slow-cooked with aromatic rice. This deal-icious Mughal biryani is such a steal!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/b75e7757-1aa0-4e41-9c0e-706dbeccecc1_787f377a-1668-4e09-86cc-851fb8fdeda1.jpg",
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "111036555",
                                    groupName: "Add Extras",
                                    choices: [
                                      {
                                        id: "100075261",
                                        name: "Raita",
                                        price: 2500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "143120960",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "78 ratings",
                                    ratingCountV2: "78",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "68595873",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "119745833",
                                name: "Egg Value Biryani Bowl",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[Half KG, Serves 1, Raita not included] 2 Boiled eggs sautéed in rustic spices & cooked with basmati rice. Royal Mughal biryani at an irresistible price!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/c26a0f78-8086-4ada-b068-14c18d1cc619_dac4551a-ff0e-4d16-a7fc-655f4e46e7ed.jpg",
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "111036527",
                                    groupName: "Add Extras",
                                    choices: [
                                      {
                                        id: "100075261",
                                        name: "Raita",
                                        price: 2500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "143120926",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "10 ratings",
                                    ratingCountV2: "10",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "68595872",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "169486340",
                                name: "2 Chicken Tandoori Biryani Bowls",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[2 Biryani Bowls | 1 Leg Pc with Bone in each | No Raita] Juicy marinated chicken slow-cooked with aromatic basmati rice & rustic spices.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/4/19/7ae4339d-b285-462e-bd77-7a2b7a8d5453_e0353b29-10bd-4b7c-9bc3-58043fa66e46.jpg",
                                inStock: 1,
                                price: 49900,
                                finalPrice: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "703dcefe-829c-4ed0-8232-2c476f430364",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "102253446",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "177463079",
                                name: "Dum Aloo Biryani Bowl",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[Half KG, Serves 1, Raita not included] Mughal style biryani with flavour-packed aloo & long grain rice. Feast at an unbelievable price!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/22/69771ba5-728d-4311-a920-7bc538875c38_670a03ce-f549-4609-842e-ab9ef48226aa.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                finalPrice: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "66656e6e-ba85-4850-ac50-29c0c897eb91",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "107335911",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "177463078",
                                name: "Egg Biryani Bowl",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[Half KG, Serves 1, Raita not included] 2 Boiled eggs sautéed in rustic spices & cooked with basmati rice. Royal Mughal biryani at an irresistible price!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/22/b1b938fe-3012-443f-b820-c63689c90a90_ac903cb0-8dcc-4caf-9e09-daf2cdfd1914.jpg",
                                inStock: 1,
                                price: 19900,
                                finalPrice: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "66656e6e-ba85-4850-ac50-29c0c897eb91",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "107335912",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "177463077",
                                name: "Tangdi Chicken Biryani Bowl",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[1 Leg Pc with Bone, Half KG, Serves 1, Raita not included] Juicy marinated chicken slow-cooked with aromatic rice. This deal-icious Mughal biryani is such a steal!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/22/71d67d03-6c5b-4028-b419-41f783ae7b56_c508bd4d-60d3-46cd-a417-91d48c5d3d93.jpg",
                                inStock: 1,
                                price: 19900,
                                finalPrice: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "66656e6e-ba85-4850-ac50-29c0c897eb91",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "107335913",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "183229433",
                                name: "Chicken Tandoori Biryani Bowl + Lemonade",
                                category: "2 Value Biryanis @ 99 each",
                                description:
                                  "[1 Leg Pc with Bone, Half KG, Serves 1, Raita not included] Juicy marinated chicken slow-cooked with aromatic rice.\n\nCombo contains 1 Biryani Bowl & Lemonade.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/26/23f7d27e-2d99-406e-af9b-90a76f0707f2_dda684bc-4042-4506-b7e5-d5b381a63d2b.jpg",
                                inStock: 1,
                                price: 29900,
                                finalPrice: 14900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "f4cb5713-570b-4b84-bc9d-28d1b7a21299",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "111284549",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/9/1/1a3a482b-d7ec-41e2-af20-664e46f9e56f_48d342cf-1bc0-40af-a705-191678bbbfc5.jpg",
                        categoryId: "40042239",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "1 + 1 BOGO @ 179 each [Coupons Applicable]",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "150868289",
                                name: "2 Half KG Biryanis @ 179 each",
                                category:
                                  "1 + 1 BOGO @ 179 each [Coupons Applicable]",
                                description:
                                  "[Serves 2] Get any 2 Half KG Biryanis at just ₹179 each.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/11/12/cd56aad2-55ad-4670-8f7e-859b632bad25_65107919-3682-498e-b8ca-976b670e75ed.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 35800,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "48078677",
                                      name: "First Biryani (comes with Raita)",
                                      variations: [
                                        {
                                          name: "Aloo & Veg Mughal Biryani",
                                          id: "151934475",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Veg Handi Mughal Biryani",
                                          id: "151934476",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chole Mughal Biryani",
                                          id: "151934477",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Paneer & Veg Mughal Biryani",
                                          price: 3900,
                                          id: "151934478",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chef's Special Paneer Mughal Biryani",
                                          price: 3900,
                                          id: "151934479",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Paneer Makhni Mughal Biryani",
                                          price: 3900,
                                          id: "151934480",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chef's Special Chicken Mughal Biryani",
                                          price: 4900,
                                          default: 1,
                                          id: "151934481",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chicken Tikka Mughal Biryani",
                                          price: 4900,
                                          id: "151934482",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Butter Chicken Mughal Biryani",
                                          price: 4900,
                                          id: "151934483",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Dhaba Chicken Mughal Biryani",
                                          price: 4900,
                                          id: "151934484",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Double Chicken Tangdi Mughal Biryani",
                                          price: 7900,
                                          id: "151934485",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chicken Overload Mughal Biryani",
                                          price: 8900,
                                          id: "151934486",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Mutton Special Mughal Biryani",
                                          price: 12900,
                                          id: "151934487",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                    {
                                      groupId: "48078678",
                                      name: "Second Biryani (comes with Raita)",
                                      variations: [
                                        {
                                          name: "Aloo & Veg Mughal Biryani",
                                          id: "151934488",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Veg Handi Mughal Biryani",
                                          id: "151934489",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chole Mughal Biryani",
                                          id: "151934490",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Paneer & Veg Mughal Biryani",
                                          price: 3900,
                                          id: "151934491",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chef's Special Paneer Mughal Biryani",
                                          price: 3900,
                                          id: "151934492",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Paneer Makhni Mughal Biryani",
                                          price: 3900,
                                          id: "151934493",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chef's Special Chicken Mughal Biryani",
                                          price: 4900,
                                          default: 1,
                                          id: "151934494",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chicken Tikka Mughal Biryani",
                                          price: 4900,
                                          id: "151934495",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Butter Chicken Mughal Biryani",
                                          price: 4900,
                                          id: "151934496",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Dhaba Chicken Mughal Biryani",
                                          price: 4900,
                                          id: "151934497",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Double Chicken Tangdi Mughal Biryani",
                                          price: 7900,
                                          id: "151934498",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chicken Overload Mughal Biryani",
                                          price: 8900,
                                          id: "151934499",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Mutton Special Mughal Biryani",
                                          price: 12900,
                                          id: "151934500",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "2 ratings",
                                    ratingCountV2: "2",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "89548072",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/11/12/cd56aad2-55ad-4670-8f7e-859b632bad25_65107919-3682-498e-b8ca-976b670e75ed.jpg",
                        categoryId: "53064325",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Biryani Feast Thali",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159805",
                                name: "Dum Aloo Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Dum Aloo Biryani + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/04d3c34b-ef39-4aa0-906f-a7de78161caf_c3800d42-432a-4274-b896-0edd374b319e.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 24900,
                                finalPrice: 15900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662888",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "2 ratings",
                                    ratingCountV2: "2",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "b6f358d7-33c0-4f6a-bef3-8ebe269b6e07",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623035",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159802",
                                name: "Veg Handi Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Veg Handi Biryani + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/427c5c44-f5a4-42c7-ab58-2ae49597225f_cb5aae8c-297a-4479-81c6-015f3da234d1.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662885",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623039",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159807",
                                name: "Chef's Special Paneer Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Chef's Special Paneer Biryani + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/255e8e63-e3df-4757-85b8-5862ae1bc150_c99b0215-0842-4d16-b2aa-60c0108e4566.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 31900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662890",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623033",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159804",
                                name: "Egg Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Egg Biryani + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/2424aeed-5a58-49cc-8160-c4314de90f95_88a5ee43-9e7a-41dc-b5ac-250a0919c660.jpg",
                                inStock: 1,
                                price: 24900,
                                finalPrice: 15900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662887",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "b6f358d7-33c0-4f6a-bef3-8ebe269b6e07",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623036",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159803",
                                name: "Tangdi Chicken Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Tangdi Chicken Biryani [1 Leg Pc with bone] + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/310d7ca2-8bb0-4187-8b38-7fa2c9d70508_80cfee7b-e7b8-476f-b3bf-3aa578c2c51d.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662886",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623038",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159808",
                                name: "Chef's Special Chicken Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Chef's Special Chicken Biryani + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/762c82ca-670a-4354-90e5-3a6ceac2cbc4_96c043f2-941a-49d8-bef0-c76cfad7906e.jpg",
                                inStock: 1,
                                price: 34900,
                                finalPrice: 23900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662891",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "46f69a0f-47d4-4cbd-b895-8e992ca95efc",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623032",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138159806",
                                name: "Chicken Tikka Biryani Thali",
                                category: "Biryani Feast Thali",
                                description:
                                  "Chicken Tikka Biryani + Raita + 2 Mini Samosas + Imli Chutney + Hari Chutney + Onions + Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/f192da6c-6898-4cad-a9ae-bfdd5b92ce1c_cbaf1a9b-6933-47cf-8928-ebe96110a0b3.jpg",
                                inStock: 1,
                                price: 34900,
                                finalPrice: 23900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146662889",
                                    groupName: "Make it a GRAND FEAST?",
                                    choices: [
                                      {
                                        id: "116424867",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424869",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384906",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384909",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384910",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116429797",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384903",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424863",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384904",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384912",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 9,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "46f69a0f-47d4-4cbd-b895-8e992ca95efc",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623034",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "169486339",
                                name: "Chicken Tandoori Biryani+ Dessert+ 2 Mini Samos...",
                                category: "Biryani Feast Thali",
                                description:
                                  "[1 Leg Pc with bone] Tandoori Chicken Biryani + 2 Mini Samosas + Gulab Jamun + Raita + Imli Chutney + Hari Chutney + Onions.\n\nCombo contains 1 Biryani Feast Thali & Thums Up.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/6/2099fa94-f172-425e-b090-d91e72b2456c_c959b7e9-74fd-4da0-adc7-f1fe78c06195.jpg",
                                inStock: 1,
                                price: 39900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "102253447",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "181761552",
                                name: "Veg Dum Biryani + Dessert + 2 Mini Samosas + Chaas",
                                category: "Biryani Feast Thali",
                                description:
                                  "Veg Handi Biryani + 2 Mini Samosas + Gulab Jamun + Raita + Imli Chutney + Hari Chutney + Onions.\n\nCombo contains 1 Biryani Feast Thali & Chaas",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/10/149ff52a-19bc-4078-a5a1-1225c352889a_0339ad73-9550-459b-9602-cc03e4de450c.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 39900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "110303012",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/9/21/04d3c34b-ef39-4aa0-906f-a7de78161caf_c3800d42-432a-4274-b896-0edd374b319e.jpg",
                        categoryId: "47331438",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Non-Veg Mughal Biryani",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726464",
                                name: "Chef's Special Chicken Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Marinated juicy chicken, special masala gravy with rice. Indulge in the Mughal magic!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/2df8252e-4197-4fea-ac26-810dead3ca3b_9b492d90-3d31-4964-86f2-eb31008f6a19.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120967",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "85 ratings",
                                    ratingCountV2: "85",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941136",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726414",
                                name: "Chicken Tikka Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Chicken tikka in an aromatic blend of spices, slow-cooked with long grain rice. A regal delicacy!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/4ad7dede-febf-4356-8c41-a8c71a8d9914_490d2ff3-9294-48f2-90fa-4f3f1dcd5f38.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120944",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "136 ratings",
                                    ratingCountV2: "136",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941140",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726354",
                                name: "Butter Chicken Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Smoked chicken in a creamy gravy, layered with basmati rice. Rich & splendid like the Mughal times!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/10/17/fa3ec270-e17e-474c-adbf-cfb0ab853346_ee4dece1-4f9f-47b4-a183-86491e9e5734.jpg",
                                inStock: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120919",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "62 ratings",
                                    ratingCountV2: "62",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941135",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164929492",
                                name: "Signature Chicken Biryani + Gulab Jamun + Lemon...",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1]  Mughal style biryani with juicy chicken & rustic masalas.\n\nCombo contains Biryani, Gulab Jamun, Lemonade & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/15/e6e778e4-9567-4c3e-9ed0-21c9538842bf_aaef13cf-e2b9-4d99-a3af-1cd80d7a8bcd.jpg",
                                inStock: 1,
                                price: 47900,
                                finalPrice: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "46f69a0f-47d4-4cbd-b895-8e992ca95efc",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "99601090",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726371",
                                name: "Dhaba Chicken Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Marinated chicken layered & slow-cooked with fragrant basmati rice. Authenticity in every bite!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/28850e77-fcbb-4488-9a38-6a98cf94ab84_da992ec8-d5f0-451b-aa12-81b035bacf96.jpg",
                                inStock: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120955",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "45 ratings",
                                    ratingCountV2: "45",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941142",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "128412252",
                                name: "Double Chicken Tangdi Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[With Bone, Half KG, Serves 1, Comes with Raita] Loaded with two chicken leg pieces, spice marinade & long grain basmati rice. Epic & classic!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/fc1d7153-39b3-4794-846a-c6b3397fc8f0_620424db-5695-4741-b2a8-c2309be78395.jpg",
                                inStock: 1,
                                price: 32900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143250909",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "74462525",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726389",
                                name: "Chicken Overload Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Loaded with 50% more chicken pieces, an earthy gravy & basmati rice. This Mughal biryani is a must-try!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/24/f1c7c21f-a629-4e48-8543-e750e0e28850_62026cd8-8622-4b2c-b7c8-31b80568d34c.jpg",
                                inStock: 1,
                                price: 34900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120906",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941138",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726523",
                                name: "Mutton Special Mughal Biryani",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1, Comes with Raita] Tender pieces of mutton are marinated & cooked with basmati rice. Epic age-old flavours!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/24/206a129f-c3e0-4d9f-bc59-e6a83679fd54_cf4352f7-21cb-4a08-b1d5-0bdfe13572c9.jpg",
                                inStock: 1,
                                price: 39900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120905",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "14 ratings",
                                    ratingCountV2: "14",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941145",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "184706275",
                                name: "Any 2 Half KG Chicken Biryanis @ 165 each",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Serves 2] Get any 2 Half KG Biryanis @ just Rs.165 each.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/10/15/69faf130-c73e-46b9-bc76-e0b015e54afa_79dfd62b-17c5-4582-96b2-5af74a9382ba.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 66000,
                                finalPrice: 33000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "67458492",
                                      name: "First Biryani (comes with Raita)",
                                      variations: [
                                        {
                                          name: "Chef's Special Chicken Mughal Biryani",
                                          default: 1,
                                          id: "203097250",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chicken Tikka Mughal Biryani",
                                          id: "203097251",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Butter Chicken Mughal Biryani",
                                          id: "203097252",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Dhaba Chicken Mughal Biryani",
                                          id: "203097253",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                    {
                                      groupId: "67458493",
                                      name: "Second Biryani (comes with Raita)",
                                      variations: [
                                        {
                                          name: "Chef's Special Chicken Mughal Biryani",
                                          id: "203097254",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Chicken Tikka Mughal Biryani",
                                          id: "203097255",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Butter Chicken Mughal Biryani",
                                          default: 1,
                                          id: "203097256",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Dhaba Chicken Mughal Biryani",
                                          id: "203097257",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "6780952a-db61-413d-964e-018083cfb4f2",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "112175708",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164938264",
                                name: "Tandoori Chicken Mughal Biryani + Lemonade + Raita",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1] Chicken tikka, layered on an aromatic blend of spices & rice.\n \nCombo contains Biryani, Lemonade & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/6/94c223a2-bb42-4ce1-bdba-972ea93399b1_d414d7b6-7b6a-4bfc-bb89-ed7ca46eac9e.jpg",
                                inStock: 1,
                                price: 39900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "99265516",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164938263",
                                name: "Bhuna Chicken Biryani + 3 Mini Samosas + Lemona...",
                                category: "Non-Veg Mughal Biryani",
                                description:
                                  "[Boneless, Half KG, Serves 1] Slow-cooked Biryani with bhuna marinated chicken & basmati rice.\n\nCombo contains Biryani, 3 Mini Samosas, Lemonade & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/15/b072e6ad-a2d4-4097-b873-0611598fdb01_b023ee67-60c3-4a69-9f1a-3abb5b170837.jpg",
                                inStock: 1,
                                price: 43900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "Buy 1 Get 1",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "B1G1",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "B1G1",
                                itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "e3275c7f-434a-469b-b5a3-92121df5a479",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "99601088",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/9/21/2df8252e-4197-4fea-ac26-810dead3ca3b_9b492d90-3d31-4964-86f2-eb31008f6a19.jpg",
                        categoryId: "40042242",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Veg Mughal Biryani",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "128412253",
                                name: "Aloo & Veg Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] Marinated potatoes, vegetables in a blend of exotic spices & basmati rice. Relish the timeless flavours!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/dd5f42c5-68bb-4fd9-9807-e79e0610830e_f1d551b0-ea69-42d8-97e9-dfdd9b1658a3.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120914",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.3",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "74462524",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726589",
                                name: "Veg Handi Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] Freshly diced vegetables cooked with bhuna masalas & aromatic rice. A kingly feast!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/10/17/2447f477-ce7c-4d28-a463-384b2b00225d_b46c0af6-2430-4cf5-a4dd-b8ef495625f8.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120935",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "18 ratings",
                                    ratingCountV2: "18",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941150",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726441",
                                name: "Chole Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] We fused together 2 traditional favourites in this biryani. Chole, rustic spices & long grain basmati rice.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/725344ec-597b-42df-a353-cb56ad0fbbb2_3c43d01f-19ff-4660-b27d-02915aa16c2b.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 23900,
                                finalPrice: 15900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120941",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.7",
                                    ratingCount: "12 ratings",
                                    ratingCountV2: "12",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "b6f358d7-33c0-4f6a-bef3-8ebe269b6e07",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941141",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726548",
                                name: "Paneer & Veg Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] Tender paneer & vegetables tossed in a rich marinade with aromatic basmati rice. Relish the Mughal magnificence!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/f5899a43-5ffa-427d-8d7f-1632caa8f23f_f4050fec-ba71-4b4a-ad42-c25c8122a949.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120910",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941147",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726482",
                                name: "Chef's Special Paneer Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] Marinated paneer in a blend of spices, layered with basmati rice. Travel back to the Mughal era!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/10/17/ec2c2601-2cab-4d4c-b0df-bf576b72e591_bd8fe714-276c-4cdb-bd4f-5d520bf2734c.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120908",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "19 ratings",
                                    ratingCountV2: "19",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941137",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726535",
                                name: "Paneer Makhni Mughal Biryani",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1, Comes with Raita] Paneer cubes, rich cashew, tomato gravy & long basmati rice. Savour the authentic flavours!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/67d03ffb-6903-4697-bf57-7dc1bdc532a9_dcbfe953-97c9-425b-b133-14ebe63a07ae.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "143120912",
                                    groupName: "Make it a FEAST?",
                                    choices: [
                                      {
                                        id: "119384907",
                                        name: "Chocolava + Coke Zero [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424868",
                                        name: "Kesar Dry Fruit Lassi [200 ml]",
                                        price: 7000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384905",
                                        name: "Chocolava + Sprite [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "117267834",
                                        name: "Mini Aloo Samosa [Pack of 3]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384911",
                                        name: "Chocolava + Thums Up [250 ml]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384914",
                                        name: "Nachos + Sprite [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384915",
                                        name: "Nachos + Coke Zero [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424864",
                                        name: "Zingy Lemonade [200 ml]",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "116424865",
                                        name: "Masala Chaas [200 ml]",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "119384913",
                                        name: "Nachos + Thums Up [250 ml]",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 5,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.7",
                                    ratingCount: "13 ratings",
                                    ratingCountV2: "13",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941146",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164938265",
                                name: "Paneer Handi Mughal Biryani + Gulab Jamun + Lem...",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1] Deeply marinated paneer, blend of spices & basmati rice.\n\nCombo contains Biryani, Gulab Jamun, Lemonade & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/15/ebb8f081-8062-4cb0-bfd7-13121dff277d_80003947-6bfb-4645-8722-a572abdd6318.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 39900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "99601089",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "164932091",
                                name: "Paneer Subz Mughal Biryani + Thums Up + Raita",
                                category: "Veg Mughal Biryani",
                                description:
                                  "[Half KG, Serves 1] Flavourful authentic Mughal Biryani with paneer & vegetables.\n\nCombo contains Biryani, Thums Up & Raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/6/381a38a0-0b2b-4c7f-81c5-74c1b27a7983_0a7f95d1-1b3b-45c6-8b08-16e5d50d6eba.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 34900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "Buy 1 Get 1",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "B1G1",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "B1G1",
                                itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "e3275c7f-434a-469b-b5a3-92121df5a479",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "110170436",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/9/21/dd5f42c5-68bb-4fd9-9807-e79e0610830e_f1d551b0-ea69-42d8-97e9-dfdd9b1658a3.jpg",
                        categoryId: "40042243",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Chicken Starters",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726564",
                                name: "Tandoori Chicken Wings [6 Pcs]",
                                category: "Chicken Starters",
                                description:
                                  "Tender and juicy chicken wings marinated in a hot spice mix and grilled in a desi tandoor.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/28907ad2-b0ac-4f06-b34a-3e3ace6c2015_18533369-9001-4921-bbf2-fdf79c2d509b.jpg",
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.1",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "19826384",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726350",
                                name: "Peri Peri Chicken Wings",
                                category: "Chicken Starters",
                                description:
                                  "Juicy pieces of chicken wings in peri peri mix. Wings that will make your tastebuds fly!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/554fc93b-7541-4969-894f-b8af9044ecf1_afc12817-97e9-430f-a970-e5a9c32b8d1e.jpg",
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "20 ratings",
                                    ratingCountV2: "20",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941148",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726509",
                                name: "Garlic Pepper Chicken Wings [6 Pcs]",
                                category: "Chicken Starters",
                                description:
                                  "Chicken wings seasoned in a herb-garlic glaze and baked to a perfect crispy. Kickoff your party with this starter!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/6a160a37-9968-4c11-a11e-e24b74516f77_9182f213-6df5-434d-b749-83b1ef4aeb3b.jpg",
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "14 ratings",
                                    ratingCountV2: "14",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "53630279",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726559",
                                name: "Smoky BBQ Chicken Wings [6 Pcs]",
                                category: "Chicken Starters",
                                description:
                                  "Crispy and juicy chicken wings tossed in BBQ sauce. Full of smoky flavours!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/7eb4af45-0f8a-4fe7-9a98-f3b61adc1c2f_f0291289-231f-4a4a-8aa9-f9e99fd4e58d.jpg",
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "19826381",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726560",
                                name: "Chicken Tikka",
                                category: "Chicken Starters",
                                description:
                                  "Tender chicken chunks marinated & grilled on a tandoor for the perfect smoky taste!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/900fc285-9753-4233-b43a-db9acf9c2eac_db9a0113-8f33-48ca-8958-20a1702b925e.jpg",
                                inStock: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941139",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726405",
                                name: "Chicken Peri Peri Tikka",
                                category: "Chicken Starters",
                                description:
                                  "Boneless chicken chunks with peri-peri sauce, skewered on tandoor to attain the perfect tikka flavours! A feast for the meat lovers.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/4ef8faac-69fc-4519-b238-0b0dceb883e1_339ee313-5647-4fba-bab2-da1f1ccdd5f4.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.2",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "39665609",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "100010922",
                                name: "Grilled Chicken Kalimiri",
                                category: "Chicken Starters",
                                description:
                                  "Tender Chicken pieces smothered in a creamy marinade, freshly ground pepper & herbs. Perfect smoky flavours!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/23e2b2db-1c44-468f-8eaf-29a4696ccbc1_64935f67-f6ac-4990-8ddb-6bab86471b00.jpg",
                                inStock: 1,
                                price: 29900,
                                finalPrice: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "0af6da82-ee89-4347-9091-97ac75effda1",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "53809239",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726352",
                                name: "Firangi BBQ Chicken",
                                category: "Chicken Starters",
                                description:
                                  "Tender boneless chicken is marinated and grilled in a sweet & tangy BBQ sauce. Quite a crowd puller!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/e52ca844-4e40-4a46-b490-f4ffbdffad16_e8e908df-8c4d-4481-8dac-a187f8c4f3a4.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.6",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId:
                                      "merch_bau/High%20Protein%201_1.png",
                                  },
                                ],
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "51152684",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/9/21/28907ad2-b0ac-4f06-b34a-3e3ace6c2015_18533369-9001-4921-bbf2-fdf79c2d509b.jpg",
                        categoryId: "40042244",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Veg Starters",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "139627614",
                                name: "Mini Aloo Samosa [Pack of 3]",
                                category: "Veg Starters",
                                description:
                                  "Comes with Hari Chutney & Imli Chutney. Pack of 3 mini samosas with aloo stuffing, spicy goodness & a dash of magic! Everyone's favourite for a reason.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/7a901de7-610b-4ba1-a883-b17806bf04f9_233487c6-0aff-4454-8fed-b6c606901952.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 6900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "82158626",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "138158598",
                                name: "Mini Aloo Samosa [Pack of 6]",
                                category: "Veg Starters",
                                description:
                                  "Comes with Hari Chutney & Imli Chutney. Pack of 6 mini samosas with aloo stuffing, spicy goodness & a dash of magic! Everyone's favourite for a reason.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/16b7a031-5a98-4783-8b48-b40105bc171f_9cbee5ac-10cc-4caf-b7fa-bd404b380dd6.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 11900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "79623037",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "100010926",
                                name: "Original Tandoori Aloo [10 Pcs]",
                                category: "Veg Starters",
                                description:
                                  "Baby potatoes in a flavourful marinade, grilled in a tandoor. Ready for an irresistible treat?",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/8dc139b3-fd75-4cf2-9454-4aadeb3e376e_b307e91e-b368-4c81-b16f-91357513ea6d.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "53809240",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "100010927",
                                name: "Peri Peri Aloo Tikka [10 Pcs]",
                                category: "Veg Starters",
                                description:
                                  "Baby potatoes marinated in peri peri sauce & grilled to perfection. Peri fiery & yummy!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/45bc3b1f-de50-4cc1-a96a-ef150c28101c_120bc451-30ae-4960-b698-cb9c9c61a532.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "53809241",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726497",
                                name: "Classic Paneer Tikka [10 Pcs]",
                                category: "Veg Starters",
                                description:
                                  "Cubes of paneer wrapped in an aromatic spice mix and baked in tandoor for a smoky flavour.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/f18bdd82-bff4-41b7-b627-36ff960ad2b9_6efcdf54-6d91-4d25-914e-f59f869b074b.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "39665610",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726563",
                                name: "Angara Paneer Tikka [10 Pcs]",
                                category: "Veg Starters",
                                description:
                                  "Soft pieces of paneer in a peri-peri marinade, grilled to perfection! Your go-to pick when you crave for something spicy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/21/ec82fd8d-f7a9-402b-b708-a228ea31885e_22bc0825-a1a3-44db-8cca-d927a438b013.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                isGuiltfree: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "53630278",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/9/21/7a901de7-610b-4ba1-a883-b17806bf04f9_233487c6-0aff-4454-8fed-b6c606901952.jpg",
                        categoryId: "40042245",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Drinks & Desserts",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "143367827",
                                name: "Choco Lava Cake + Coke Combo @ Rs.79",
                                category: "Drinks & Desserts",
                                description:
                                  "[Save Rs.41] Choco Lava Cake + Coke. Make every order a complete feast!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/10/26/19b52d09-2735-46e3-ab25-fa26b0f243d9_1c7a24b8-3459-49ed-9dea-f7b6eca9c48a.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 7900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "44025382",
                                      name: "Choose a Drink",
                                      variations: [
                                        {
                                          name: "Thums up [250 ml]",
                                          default: 1,
                                          id: "139853305",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Coke Zero [250 ml]",
                                          id: "139853304",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Sprite [250 ml]",
                                          id: "139853306",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Zingy Lemonade [200 ml]",
                                          id: "139853310",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Masala Chaas [200 ml]",
                                          id: "139853311",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "84539339",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "143410306",
                                name: "Nachos + Coke Combo @ Rs.49",
                                category: "Drinks & Desserts",
                                description:
                                  "[Save Rs.31] Nachos + Coke. Perfect sides to complete your order!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/4/28/03020ff9-40fa-4edc-abac-71cc0cd02ed9_c8f282a9-fd7d-4bc9-bb28-83d14a7b685c.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 4900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "44044654",
                                      name: "Choose a Drink",
                                      variations: [
                                        {
                                          name: "Thums up [250 ml]",
                                          default: 1,
                                          id: "139895947",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Coke Zero [250 ml]",
                                          id: "139895946",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Sprite [250 ml]",
                                          id: "139895948",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Zingy Lemonade [200 ml]",
                                          id: "139895952",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Masala Chaas [200 ml]",
                                          id: "139895953",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                parentId: "84539342",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726518",
                                name: "Ghee Moong Dal Halwa 100 gm",
                                category: "Drinks & Desserts",
                                description:
                                  "Cooked in pure ghee and topped with rich dry fruits, our moong dal ka halwa is a perfect sweet indulgence!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/a8a53ba9-7275-4a40-8004-b969e1b4eb59_f3c5f20d-b342-47a0-9833-5eb96fefcdd3.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.8",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "51152685",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726507",
                                name: "Mini Gulab Jamun Box 100 gm",
                                category: "Drinks & Desserts",
                                description:
                                  "Prepared with fresh mawa and dunked in a sweet sugary syrup, these gulab jamuns are a melt-in-the-mouth treat.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/c21a9f8c-a7fb-49fa-9cf1-2b7f3ed1133b_51e4c295-596d-4959-8e9d-6c792f9a83b2.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "2 ratings",
                                    ratingCountV2: "2",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "92134637",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726438",
                                name: "Choco Lava Cake",
                                category: "Drinks & Desserts",
                                description:
                                  "Freshly baked, soft cake with a molten chocolate filling in the centre. You'll lava it!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/65991db5-1484-4c42-b2d7-f874b9ff4660_9cd22392-6fc3-464a-96a1-64f9cc0f2068.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "19826363",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726505",
                                name: "Double Chocolate Brownie",
                                category: "Drinks & Desserts",
                                description:
                                  "Loaded with chocolate and gooey goodness, this fudgy brownie is pure indulgence!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/67f59696-9436-46bf-8086-c1485529e4e3_fc43c833-8611-4087-917e-a2d82253fd58.jpg",
                                inStock: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "2 ratings",
                                    ratingCountV2: "2",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "19826368",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726439",
                                name: "Rich Chocolate Mousse Cake",
                                category: "Drinks & Desserts",
                                description:
                                  "Molten dark chocolate between layers of creamy mousse, sprinkled with chocolate chips. Droolworthy!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/0774eea9-c1df-4d76-9993-3c672745bfce_b74df84a-ad45-49e1-bb76-4bf749b53a62.jpg",
                                inStock: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "51152687",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "100010921",
                                name: "Ghee Moong Dal Halwa [500 gm]",
                                category: "Drinks & Desserts",
                                description:
                                  "A decadent delight! This dessert is prepared with moong dal, pure ghee & rich dry fruits",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/2fc18ca7-f080-47dd-9b2a-7a50eb69a49e_b58a8282-d0be-488a-a51f-44b6afe1a950.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 34500,
                                finalPrice: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "46f69a0f-47d4-4cbd-b895-8e992ca95efc",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "52833764",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "100010925",
                                name: "Mini Gulab Jamun Box [500 gm]",
                                category: "Drinks & Desserts",
                                description:
                                  "Soft, spongy & delicious gulab jamuns made with fresh mawa. Treat your tastebuds to something sweet!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/1300c963-c71d-4317-ba36-b34f2f87dffb_eaf81687-2f33-4872-84fb-545263c455f6.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 34900,
                                finalPrice: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "46f69a0f-47d4-4cbd-b895-8e992ca95efc",
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "92134638",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726597",
                                name: "Zingy Lemonade (200 ml)",
                                category: "Drinks & Desserts",
                                description:
                                  "A refreshing drink made of freshly squeezed lemon juice and a zing of Indian spices.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/10978919-f2e5-45be-b92d-38f68e5a8870_db65c1e5-df49-442b-8949-025f6b1e0fce.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 2900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "12 ratings",
                                    ratingCountV2: "12",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "76842052",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "134558653",
                                name: "Masala Chaas [200 ml]",
                                category: "Drinks & Desserts",
                                description:
                                  "Chaas, a pinch of bhuna jeera & black salt. Cool & refreshing!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/5e0e322b-07f2-4abf-b50b-53b77e9dd0d1_970fd69b-8e5b-441c-b1d8-56406483e1fc.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 3900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "78722255",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "134558654",
                                name: "Kesar Dry Fruit Lassi [200 ml]",
                                category: "Drinks & Desserts",
                                description:
                                  "Classic punjabi lassi with dry fruits, kesar, elaichi. Authentic taste. Zero added flavours/preservatives.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/95507de9-5e00-4d27-ac42-74089794294f_0c5b6b92-eeda-4497-be7c-16f09b491d89.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 7900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "1 rating",
                                    ratingCountV2: "1",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "78722254",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "143367826",
                                name: "Coke [475 ml]",
                                category: "Drinks & Desserts",
                                description:
                                  "Need a beverage to side your biryani? It can't get cooler than this!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/7/d9528c3d-4349-4032-9128-5c9dd3617e63_40615fbe-e626-47cf-86cb-6ffa2eba5442.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 7000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "2 ratings",
                                    ratingCountV2: "2",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "84539340",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "128849039",
                                name: "Bailley One - Mineral Water [500 ml]",
                                category: "Drinks & Desserts",
                                description: "500 ML Water Bottle.",
                                imageId: "d3441a02cc00cd7dbb4570eca507fbdc",
                                inStock: 1,
                                isVeg: 1,
                                price: 2000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "74798970",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "73726516",
                                name: "Masala Raita",
                                category: "Drinks & Desserts",
                                description:
                                  "Curd raita with a dash of mint! Perfect companion for your biryani.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/7/2952ec7e-68ed-4d6a-9190-ada00fd746d8_4fda3947-458f-4273-bf51-6d695da6b12d.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 3500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    title: "30% OFF",
                                    subTitle: "USE TRYNEW",
                                    textColor: "#DB6742",
                                    backgroundColor: "#FAE8E3",
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "4f83678c-7410-4220-9c42-7cd36cdf49fa",
                                ],
                                parentId: "64941144",
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/10/26/19b52d09-2735-46e3-ab25-fa26b0f243d9_1c7a24b8-3459-49ed-9dea-f7b6eca9c48a.jpg",
                        categoryId: "40042246",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                        type: "FSSAI",
                        imageId: "fssai_final_edss9i",
                        text: ["License No. 11222334001050"],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                        name: "ZAZA Mughal Biryani",
                        area: "HSR Layout",
                        completeAddress:
                          "No.1,Haralukunte,2nd Sector,BDA Layout,HSR Layout,Bengaluru,Karnataka-560102 L47",
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      isQCLink: false,
    },
    tid: "21125d02-a0dc-46d4-924d-3b863f83652a",
    sid: "njpb2a18-22c7-4be4-9dde-4cfc63b8efd6",
    deviceId: "9954044c-3b3c-db00-cb2d-3162eb43f78e",
    csrfToken: "Cvy1fOt15gmL-O6EsDOrWR5j3cbsLF3Ua-pF8XR8",
  },
];

export default mockMenuData;

const initialUsersState = {
  selectedId: null,
  users: [
    {
      id: 0,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      isOwner: true,
      isActive: true,
      clicksReviewed: "3,450",
      monthlyClicks: "9800",
    },
    {
      id: 1,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "1,450",
      monthlyClicks: "1000",
    },
    {
      id: 2,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "6,450",
      monthlyClicks: "5400",
    },
    {
      id: 3,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "6,450",
      monthlyClicks: "2300",
    },
    {
      id: 4,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "3,450",
      monthlyClicks: "3000",
    },
    {
      id: 5,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "2,450",
      monthlyClicks: "4000",
    },
    {
      id: 6,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "2,450",
      monthlyClicks: "4000",
    },
    {
      id: 7,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "2,450",
      monthlyClicks: "4000",
    },
    {
      id: 8,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "6,450",
      monthlyClicks: "4308",
    },
    {
      id: 9,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "3,333",
      monthlyClicks: "1000",
    },
  ],
};

const hoverHandlerReducer = (state = initialUsersState, action) => {
  if (action.type === "onMouseOver") {
    return {
      ...state,
      selectedId: action.payload,
    };
  }
  if (action.type === "removeUser") {
    let filterUsers = [...state.users];
    let newId = state.selectedId;

    if (newId) {
      if (newId === action.payload) {
        newId = null;
      }
    }
    filterUsers = filterUsers.filter((data) => {
      return data.id !== action.payload;
    });

    return {
      ...state,
      users: filterUsers,
      selectedId: newId,
    };
  } else return state;
};
export default hoverHandlerReducer;

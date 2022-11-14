const initialState = {
  videogames: [],
  allVideogames: [],
  createdInDb: [],
  genres: [],
  platforms: [],
  detail: [],
  currentPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };

    case "GET_NAME_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };

    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };

    case "CLEAR_DETAIL":
      return {
        ...state,
        detail: [],
      };
  }
}

export default rootReducer;

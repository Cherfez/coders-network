const initialState = { count: 0, rows: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_DEVELOPERS_SUCCESS":
      return {
        ...state,
        count: action.payload.count,
        rows: [...state.rows, ...action.payload.rows]
      };

    default:
      return state;
  }
}

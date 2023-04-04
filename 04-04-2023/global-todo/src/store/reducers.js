export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "CREATE_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
      case "SET_MODAL_ON":
      return {
        ...state,
        // tasksListData: action.payload,
        isModalVisibile: true,
      };
      case "SET_MODAL_OFF":
        return {
          ...state,
          // tasksListData: action.payload,
          isModalVisibile: false,
        };
        case "MODAL_TOGGLE":
        return {
          ...state,
          isModalVisibile: !state.isModalVisibile,
        };
  }
};


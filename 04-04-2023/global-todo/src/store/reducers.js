export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "ADD_NEW_TASK":
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
        case "SET_TEMP_TODO_USERNAME":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          username: action.payload,
        },
      };
    case "SET_TEMP_TODO_TODO":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          todo: action.payload,
        },
      };
    case "SET_TEMP_TODO_ID":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          id: state.tasksListData.length + 1,
        },
      };
  }
};


export const reducer = (state = {items: []}, action) => {  
  switch (action.type) {
    case 'ADD_ITEM':
    return {
      ...state,
      items: [{ label: action.payload, completed: false }, ...state.items],
    };
    case 'REMOVE_ITEM': 
    return {
        ...state,
        items: state.items.filter((item, i) => i !== action.payload),
      };
    case 'ITEM_COMPLETED': 
    return {
        ...state,
        items: state.items.map((item, i) => {
          if (i === action.payload) {
            return {label: item.label, completed: !item.completed}
          }
          return item
        }),
      }
    case 'REMOVE_COMPLETED': 
    return {
        ...state,
        items: state.items.filter((item) => !item.completed)
    }
    case 'GET_DATA': 
      return {
        ...state,
        items: action.array,
      };
    case 'UPDATE_STORAGE': 
    return {
      ...state,
      items: action.array,
    };
    default: 
    return state;
  }
}
const initialState = {
    list: [],
    activeId: null
}

const todoReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('add todo');
            return state;

        default:
            return state;
    }
}

export default todoReducer;

const initialState = {
    menu:[],
    loadingMenu: true,
    errorMenu: false,
    order: {
        status:false,
        orderItems: [],
    }
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: payload,
                loadingMenu: false,
                errorMenu: false,
            }

        case 'MENU_REQESTED':
            return {
                ...state,
                loadingMenu: true,
            }

        case 'MENU_ERROR':
            
            return {
                ...state,
                loadingMenu: false,
                errorMenu: true,
            }

        case 'ORDER_ADD':
        
            return {
                ...state,
                order:{
                    status: true,
                    orderItems: payload,
                }
            }
                
        default: 
            return state;
    }
}

export default reducer;





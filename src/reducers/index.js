const initialState = {
    menu:[],
    loadingMenu: true,
    errorMenu: false,
    
    status:false,
    orderItems: [],
    
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
                
                status: true,
                orderItems: payload,
                
            }
        case 'ORDER_ADD_QUANTITY':
            const id = payload.id,
                  quantity = payload.quantity,
                  activeDough = payload.activeDough,
                  activeDiameter = payload.activeDiameter,
                  priceOfPizza = payload.priceOfPizza;
            const item = state.orderItems.find(item => item.id === id);
            const newItem = {
                ...item,
                quantity,
                activeDough,
                activeDiameter,
                priceOfPizza
            };

            const newArry = state.orderItems.map(item => {
                if (item.id === id) {
                    return newItem;
                }
                return item;
            });

            return {
                ...state,
                orderItems: newArry
                
            }
                
        default: 
            return state;
    }
}

export default reducer;





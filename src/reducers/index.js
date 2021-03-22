const initialState = {
    menu:[],
    loadingMenu: true,
    errorMenu: false,
    
    status:false,
    orderItems: [],

    totalQuantity: 0,
    totalPrice: 0,

    filter: 'all',
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
            const newTotalPrice = state.totalPrice + payload.priceOfPizza;
            const newTotalQuantity = state.totalQuantity + payload.quantity;
            
            
            return {
                ...state,
                status: true,
                orderItems: [
                    ...state.orderItems,
                    payload,
                ],
                totalPrice: newTotalPrice,
                totalQuantity :newTotalQuantity,
            }

        case 'ORDER_ADD_QUANTITY':
            const {id, activeDough, activeDiameter} = payload;
            const item = state.orderItems.find(item => (item.id === id) && (item.activeDough === activeDough) && (item.activeDiameter === activeDiameter));
            console.log(item);
            const quantity = item.quantity + 1;
            const priceOfItem = item.priceOfPizza * quantity;
            const newItem = {
                ...item,
                quantity,
                priceOfItem
            };

            const newArry = state.orderItems.map(item => {
                if ((item.id === id) && (item.activeDough === activeDough) && (item.activeDiameter === activeDiameter)) {
                    return newItem;
                }
                return item;
            });
            
            console.log(newArry);
            const newTotalPrice2 = state.totalPrice + item.priceOfPizza;
            const newTotalQuantity2 = state.totalQuantity + 1;

            return {
                ...state,
                orderItems: newArry,
                totalPrice: newTotalPrice2,
                totalQuantity: newTotalQuantity2,
            }

        case 'DEL_ORDER':
            const newItemOrder = [];
            return {
                ...state,
                status: false,
                orderItems: newItemOrder,
                totalQuantity: 0,
                totalPrice: 0,
            }

        case 'DEL_ITEM_ORDER':
            const {idDelItem, activeDoughDelItem, activeDiameterDelItem} = payload;
            const itemIndex = state.orderItems.findIndex(item => (item.id === idDelItem) && (item.activeDough === activeDoughDelItem) && (item.activeDiameter === activeDiameterDelItem));
            const totalPriceDelItem = state.totalPrice - state.orderItems[itemIndex]['priceOfItem'];
            const totalQuantityDelItem = state.totalQuantity - state.orderItems[itemIndex]['quantity'];
            
            return {
                ...state,
                orderItems: [
                    ...state.orderItems.slice(0, itemIndex),
                    ...state.orderItems.slice(itemIndex + 1)
                ],
                totalPrice: totalPriceDelItem,
                totalQuantity: totalQuantityDelItem,
            }
        case 'OFF_STATUS':
            return {
                ...state,
                status: false,
            }

        case 'SELECT_FILTER':
            return {
                ...state,
                filter: payload,
            }
                
        default: 
            return state;
    }
}

export default reducer;





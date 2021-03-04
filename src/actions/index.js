const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuREqested = () => {
    return {
        type: 'MENU_REQESTED'
    }
}
const menuError = () => {
    return {
        type : 'MENU_ERROR',
    }
}
const orderAdd = (newItemOrder) => {
    return {
        type : 'ORDER_ADD',
        payload: newItemOrder,
    }
}

export {
    menuLoaded,
    menuREqested,
    menuError,
    orderAdd,
};
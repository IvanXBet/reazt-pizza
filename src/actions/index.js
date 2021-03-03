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

export {
    menuLoaded,
    menuREqested,
    menuError,
};
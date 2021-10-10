export const get = (items) => {
    return {
        type: 'PRODUCT_GET',
        items
    }
}

export const remove = (i) => {
    return {
        type: 'PRODUCT_REMOVE',
        i
    };
}

export const select = (i) => {
    return {
        type: 'PRODUCT_SELECT',
        i
    };
}

export const addMode = () => {
    return {
        type: 'PRODUCT_ADD_MODE'
    };
}

export const cancel = () => {
    return {
        type: 'PRODUCT_CANCEL'
    };
}

export const cancelCreate = () => {
    return {
        type: 'PRODUCT_CANCEL_CREATE'
    };
}

export const create = (i) => {
    return {
        type: 'PRODUCT_CREATE',
        i
    };
}

export const update = () => {
    return {
        type: 'PRODUCT_UPDATE'
    };
}

export const change = (e) => {
    return {
        type: 'PRODUCT_CHANGE',
        e
    };
}

export const changeCreate = (e) => {
    return {
        type: 'PRODUCT_CHANGE_CREATE',
        e
    };
}
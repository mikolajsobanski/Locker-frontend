import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_LIST_USER_REQUEST,
    PRODUCT_LIST_USER_SUCCESS,
    PRODUCT_LIST_USER_FAIL,

    FAVORITE_LIST_USER_REQUEST,
    FAVORITE_LIST_USER_SUCCESS,
    FAVORITE_LIST_USER_FAIL,

    FAVORITE_DELETE_REQUEST,
    FAVORITE_DELETE_SUCCESS,
    FAVORITE_DELETE_FAIL,

    FAVORITE_CREATE_REQUEST,
    FAVORITE_CREATE_SUCCESS,
    FAVORITE_CREATE_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,

    PRODUCT_EXPENSIVE_REQUEST,
    PRODUCT_EXPENSIVE_SUCCESS,
    PRODUCT_EXPENSIVE_FAIL

} from '../constans/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                page:action.payload.page,
                pages:action.payload.pages
            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
//
export const productUserListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_USER_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_USER_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                page:action.payload.page,
                pages:action.payload.pages
            }

        case PRODUCT_LIST_USER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
//
export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productPriceReducer = (state = { products: {} }, action) => {
    switch (action.type) {
        case PRODUCT_EXPENSIVE_REQUEST:
            return { loading: true, products: []}

        case PRODUCT_EXPENSIVE_SUCCESS:
            return {
                loading: false,
                products: action.payload.products
            }

        case PRODUCT_EXPENSIVE_FAIL:
            return { loading: false, error: action.payload, }

        default:
            return state
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const productDeleteReducer = (state = { }, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true, ...state }

        case PRODUCT_DELETE_SUCCESS:
            return {
                loading: false,
                success:true
            }

        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }

        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_UPDATE_RESET:
            return { product: {} }

        default:
            return state
    }
}


export const favoritetUserListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case FAVORITE_LIST_USER_REQUEST:
            return { loading: true, products: [] }

        case FAVORITE_LIST_USER_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                page:action.payload.page,
                pages:action.payload.pages
            }

        case FAVORITE_LIST_USER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const favoriteDeleteReducer = (state = { }, action) => {
    switch (action.type) {
        case FAVORITE_DELETE_REQUEST:
            return { loading: true, ...state }

        case FAVORITE_DELETE_SUCCESS:
            return {
                loading: false,
                success:true
            }

        case FAVORITE_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const favoriteCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case FAVORITE_CREATE_REQUEST:
            return { loading: true }

        case FAVORITE_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case FAVORITE_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
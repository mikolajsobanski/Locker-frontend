import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_LIST_USER_REQUEST,
    PRODUCT_LIST_USER_SUCCESS,
    PRODUCT_LIST_USER_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,

    PRODUCT_EXPENSIVE_REQUEST,
    PRODUCT_EXPENSIVE_SUCCESS,
    PRODUCT_EXPENSIVE_FAIL,

} from '../constans/productConstants'
import axios from 'axios'

export const listProducts = (keyword='') => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const { data } = await axios.get(`http://127.0.0.1:8000/api/products${keyword}`)
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const listUserProducts = () => async(dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_LIST_USER_REQUEST})

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/products/user`,
            config
            )

        dispatch({
            type: PRODUCT_LIST_USER_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: PRODUCT_LIST_USER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}


export const listPriceProducts = (params) => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_EXPENSIVE_REQUEST})
        const { data } = await axios.get(`http://127.0.0.1:8000/api/products/price/?min_price=${params.minPrice}&max_price=${params.maxPrice}`)
        dispatch({
            type:PRODUCT_EXPENSIVE_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:PRODUCT_EXPENSIVE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
} 


export const listProductsDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
} 

export const createProduct = (name,price,Brand,Condition,location,phone,Category,selectedImage1,selectedImage2,selectedImage3,selectedImage4,textarea) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('Brand',Brand)
        formData.append('Condition',Condition)
        formData.append('location',location)
        formData.append('phone',phone)
        formData.append('Category',Category)
        formData.append('selectedImage1',selectedImage1)
        formData.append('selectedImage2',selectedImage2)
        formData.append('selectedImage3',selectedImage3)
        formData.append('selectedImage4',selectedImage4)
        formData.append('textarea',textarea)


        const { data } = await axios.post(
            `/api/products/create/`,
            formData,
            config
            
        )
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/products/delete/${id}/`,
            config
        )

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/products/update/${product._id}/`,
            product,
            config
        )
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

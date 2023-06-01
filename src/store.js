import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer, productPriceReducer, productCreateReducer,
     productUserListReducer, productDeleteReducer, productUpdateReducer,
      favoritetUserListReducer, favoriteCreateReducer, favoriteDeleteReducer } from './reducers/productReducers'
import { legacy_createStore as createStore} from 'redux'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productUserList: productUserListReducer,
    productDetails: productDetailsReducer,
    productPrice: productPriceReducer,
    productCreate: productCreateReducer,
    productDelete: productDeleteReducer,
    productUpdate: productUpdateReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,

    favoriteList: favoritetUserListReducer,
    favoriteCreate: favoriteCreateReducer,
    favoriteDelete: favoriteDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin:{userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store
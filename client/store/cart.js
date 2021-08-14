//*****CART ACTION TYPES *****/

const ADD_TO_CART = "ADD_TO_CART";
const ADJUST_QTY = "ADJUST_QTY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

//******CART ACTIONS *******/

export const addToCart = (itemID) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};

export const adjustQty = (itemID, qty) => {
    return {
        type: ADJUST_QTY,
        payload: {
            id: itemID,
            qty,
        },
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: item,
    };
};

//*******CART REDUCER ********/

// import fetchWines from './wines';

const INITIAL_STATE = {
    cart: [
        {"id":1,"title":"Goldschmidt Vineyard Alexander Valley Chelsea Merlot",
            "description":"Beautiful red raspberry, black cherry, and spice aromas. Full and round with plum, red currant, blackberry, and bay leaf flavors. The soft tannins give this wine a velvety smoothness and the chocolatey finish just goes on and on.",
            "price":"$19.99","imageUrl":"https://spoonacular.com/productImages/503936-312x231.jpg",
            "averageRating":"0.96","ratingCount":"10","score":"0.927741935483871",
            "link":"https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fgoldschmidt-vineyard-alexander-valley-chelsea-merlot-2018%2F737409",
            "createdAt":"2021-08-12T01:22:13.180Z","updatedAt":"2021-08-12T01:22:13.180Z"},{"id":2,"title":"Maddalena Merlot","description":"Maddalena Merlot offers aromas of ripe fruit and oak spice with hints of vanilla and anise. Ripe fruit flavors include bright plum and raspberry. Fruit flavors greet the palate and soft tannins frame the fresh texture that coats the mouth.","price":"$18.99","imageUrl":"https://spoonacular.com/productImages/491394-312x231.jpg","averageRating":"0.96","ratingCount":"8","score":"0.9199999999999999","link":"https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fmaddalena-merlot-2016%2F604022","createdAt":"2021-08-12T01:22:13.181Z","updatedAt":"2021-08-12T01:22:13.181Z"},{"id":3,"title":"Peju Province Merlot","description":"Deep ruby in color, the 2016 Merlot offers fragrant, layered aromas of juicy pomegranate, baking spice, and a hint of cedar. Lush fruits of cherry and blackberry envelop the palate. Soft hints of toasted almond and vanilla culminate with an elegant finish. Delicious now, this Merlot will continue to mature for the next 6-8 years.Blend: 95% Merlot, 4% Cabernet Sauvignon, 1% Petit Sirah","price":"$37.99","imageUrl":"https://spoonacular.com/productImages/447335-312x231.jpg","averageRating":"0.9","ratingCount":"5","score":"0.8375","link":"https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fpeju-province-merlot-2010%2F133456","createdAt":"2021-08-12T01:22:13.182Z","updatedAt":"2021-08-12T01:22:13.182Z"},
    ],
    currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Get Item data from wines array
            const item = state.wines.find(
                wine => wine.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
const initialState = {
    data: [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            description: 'This is product 1',
            stock: 10,
            image: 'https://picsum.photos/200/300',
            category: 'category 1'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            description: 'This is product 2',
            stock: 20,
            image: 'https://picsum.photos/200/300',
            category: 'category 2'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is product 3',
            stock: 30,
            image: 'https://picsum.photos/200/300',
            category: 'category 1'
        }
    ]
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@data/add_product':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case '@data/remove_product':
            return {
                ...state,
                data: state.data.filter(product => product.id !== action.payload)
            }
        default:
            return state
    }
}

export const addProduct = (product) => {
    return {
        type: '@data/add_product',
        payload: product
    }
}

export default dataReducer;
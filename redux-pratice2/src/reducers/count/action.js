export const ADD_QTY = "ADD_QTY"
export const MINUS_QTY = "MINUS_QTY"
export const MULTIPLE_QTY = "MULTIPLE_QTY"
export const DIVISION_QTY = "DIVISION_QTY"

// action.type 더해줘
export const addQty = () => {
    return{
        type: ADD_QTY
    }
}
// action.type 빼줘
export const minusQty = () => {
    return{
        type: MINUS_QTY
    }
}

// action.type 곱해줘 
export const multipleQty = () => {
    return{
        type : MULTIPLE_QTY
    }
}
// action.type 나눠줘!
export const divisionQty = () => {
    return{
        type : DIVISION_QTY
    }
}
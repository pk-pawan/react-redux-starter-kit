let initialState ={
    data:[]
}

export default function TableData(state=initialState,action){
    let data= [
        {'id':1,'name':'Pawan','age':24,'address':'Bengaluru'},
        {'id':2,'name':'name2','age':22,'address':'address2'},
        {'id':3,'name':'name3','age':20,'address':'address3'}
    ]
    if(action.type === "TABLE_DATA"){
        return {
            ...state, data:data
        }
    }
    return state;
}
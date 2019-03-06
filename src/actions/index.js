import { AsyncStorage } from 'react-native';

export const addNote = (item)=>{
    return {
        type: 'ADD_ITEM', 
        payload: item
    }
};

export const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM', 
        payload: index
    }
};

export const itemCompleted = (index) => {
    return {
        type: 'ITEM_COMPLETED', 
        payload: index
    }
};

export const removeCompleted = (item) => {
    return {
        type: 'REMOVE_COMPLETED', 
        payload: item
    }
};

export const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    }
};

export const updateAsyncStorage = (array) =>{
    let items = {items: array}
    return async (dispatch) => {
        try{
        await AsyncStorage.setItem('notes', JSON.stringify(items));
        dispatch({
            type: 'UPDATE_STORAGE',
            array
            })
        } catch (error){
            console.log(error);
        }
    }
}

export const getDataFromStorage = () =>{
    return async (dispatch) => {
        try{
            let storageObject = {};
            await AsyncStorage.getItem('notes').then((value)=> {
                storageObject = JSON.parse(value);
            });
            dispatch({
                type: 'GET_DATA',
                array: storageObject.items
                })
        } catch (error){
            console.log(error.message);
        }
    }
}
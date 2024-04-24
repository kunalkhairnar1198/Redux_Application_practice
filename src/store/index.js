import { createStore } from 'redux';

//make a cardReducer function to use counting application

export const INCREMENT = 'Increment'  //they will solve the potential issue in the react application
// that will handle unexpected identifier this type of problems in bigger apps where is used multiple same identifier for updateing state
// that type of problem solve new INCREMENT constant variable were is store identifiers.

const initialState = {counter:0, showCounter:true}

const counterReducer = (state = initialState, action)=>{
        if(action.type === INCREMENT){
            // state.counter++;
            // //     console.log(state.counter)
            // // return state;
            console.log('previous state',state)            
            return {
                counter : state.counter + 2,
                showCounter: state.showCounter
            }
        } 

        if(action.type === 'Increase'){
            console.log('INCREASE HANDLER',state)
            return{
                counter : state.counter + action.amount,
                showCounter: state.showCounter
            }
        }
        
        if(action.type === 'DecrementBy2'){
            return {
                counter : state.counter - 2,
                showCounter: state.showCounter
            }
        }

        if(action.type === 'toggle'){
            return{
                showCounter: !state.showCounter,
                counter: state.counter
            }
        }

        return state;
};

const store = createStore(counterReducer);

export default store;
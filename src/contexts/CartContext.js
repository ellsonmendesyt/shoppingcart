import React, {useReducer,useContext,createContext} from 'react';
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            // se tentar por um telefone e ainda nao tiver algum item dessa categoria adiciona, caso contrario retorna o estado anterior, sem mudança
            if(action.item.categoria === 'telefone' ){
                if(!state.some((item)=>item.categoria===action.item.categoria)){
                    return [...state,action.item];
                }{
                    return state;
                }
            }else if(action.item.categoria==='tv' || action.item.categoria==='internet'){ //se tentar adicionar tv ou internet
                // se nao ja tiver um fixo, nao deixa
                if(!state.some((item)=>item.categoria==='telefone')){
                    return state;
                }else{

                    // se ja tiver um item com msma categoria substitua 
                    if(state.some((item)=>item.categoria===action.item.categoria)){
                        //remove o item repetido
                        const arrayWithoutItem = state.filter(i => i.categoria !== action.item.categoria);
                        // poe esse novo
                        return [...arrayWithoutItem, action.item]
                    }else{
                        return [...state,action.item]
                    }
                
                }
            }
        case "EMPTY":
            return []

        case "REMOVE":
        // os planos de internet e tv sao dependentes do plano fixo, se remover o fixo sai os planos de net e tv
        if(action.item.categoria === 'telefone'){
           return []
        }else{
            const newState = state.filter((item)=> item.id!==action.item.id)
            return newState;
        }


        default:
            throw new Error(`unkonw action: ${action.type}`)
    }
}

export const CartProvider =({children})=>{
const [state,dispatch]= useReducer(reducer,[]);

 return(
     <CartDispatchContext.Provider value={dispatch}>
         <CartStateContext.Provider value={state}>
            {children}
         </CartStateContext.Provider>
     </CartDispatchContext.Provider>
 )
}

export const useCart = ()=> useContext(CartStateContext)
export const useDispatchCart = ()=> useContext(CartDispatchContext)
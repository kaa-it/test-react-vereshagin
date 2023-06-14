import styles from "./app.module.css";
import { useEffect, useState, useReducer } from 'react';
import AppHeader from "../app-header/app-header"
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { OrderContext } from "../../services/OrderContext";
import { useDispatch } from "react-redux";
import { SET_APIDATA } from "../../services/ingredientsSlice";


const domain = 'https://norma.nomoreparties.space/api/';


const App = () => {

  const dispatch = useDispatch()

                //useEffect//

  useEffect(() => {
    fetch(`${domain}ingredients`)
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
        })
      .then(res => dispatch(SET_APIDATA(res.data)))
      .catch(err => console.log(`Что-то пошло не так :( Ошибка: ${err}`))
  },[])

                //ContextData//
  
  const [order, setOrder] = useState(null)

  const subOrder = (burgerList) =>{
    fetch(`${domain}orders`, {
      method: 'POST',
      body: JSON.stringify({
        ingredients: burgerList.map(el =>  el._id)
      }), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
      })
    .then(res => res.success ? setOrder(res.order.number) : null)
    .catch(err => console.log(`Что-то пошло не так :( Ошибка: ${err}`))
}

  return (
    <div className={styles.app}>

        <AppHeader />

        <main className={styles.content}>
          {

            (
                      <OrderContext.Provider value={{order, setOrder}}>

                        <BurgerIngredients/>
                        <BurgerConstructor subClick={subOrder}/>

                      </OrderContext.Provider>
            )
          }
        </main>

    </div>
  );
}

export default App;

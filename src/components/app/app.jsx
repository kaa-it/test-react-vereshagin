import styles from "./app.module.css";
import { useEffect, useState, useReducer } from 'react';
import AppHeader from "../app-header/app-header"
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { BurgerContext } from "../../services/BurgerContext";
import { BunContext } from "../../services/BunContext";
import { PriceContext } from "../../services/PriceContext";
import { OrderContext } from "../../services/OrderContext";


const domen = 'https://norma.nomoreparties.space/api/';

const defailtBun = {
  "_id":"60666c42cc7b410027a1a9b1",
  "name":"Краторная булка N-200i",
  "type":"bun",
  "proteins":80,
  "fat":24,
  "carbohydrates":53,
  "calories":420,
  "price":1255,
  "image":"https://code.s3.yandex.net/react/code/bun-02.png",
  "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
  "__v":0
}

function reducer(price, action) {
  switch (action.type) {
    case "SET_BUN":
      return price + action.arr.price * 2 - action.bun.price * 2
    case "SET_INGREDIRNT":
      return price + action.arr.price
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

const App = () => {

                //States//

  const [apidata, setData] = useState(null)

                //useEffect//

  useEffect(() => {
    fetch(`${domen}ingredients`)
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
        })
      .then(res => setData({...res}))
      .catch(err => console.log(`Что-то пошло не так :( Ошибка: ${err}`))
  },[])

                //ContextData//
  
  const data = {apidata}
  const [bun, setBun] = useState(defailtBun)
  const [price, setPrice] = useReducer(reducer, bun.price * 2);
  const [order, setOrder] = useState(null)

  const subOrder = (burgerList) =>{
    fetch(`${domen}orders`, {
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
          {apidata && data && 

            (
              <BurgerContext.Provider value={data}>
                  <BunContext.Provider value={{bun, setBun}}>
                    <PriceContext.Provider value={{price, setPrice}}>
                      <OrderContext.Provider value={{order, setOrder}}>

                        <BurgerIngredients/>
                        <BurgerConstructor subClick={subOrder}/>

                      </OrderContext.Provider>
                    </PriceContext.Provider>
                  </BunContext.Provider>
              </BurgerContext.Provider>
            )
          }
        </main>

    </div>
  );
}

export default App;

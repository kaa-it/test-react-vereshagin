import styles from "./app.module.css";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useEffect, useState } from 'react';
import AppHeader from "../app-header/app-header"
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";


const domen = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
  const [apidata, setData] = useState(null)
  useEffect(() => {
    fetch(`${domen}`)
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
        })
      .then(res => setData({...res}))
      .catch(err => console.log(`Что-то пошло не так :( Ошибка: ${err}`))
  },[])
  return (
    <div className={styles.app}>
        <AppHeader />
        <main className={styles.content}>
          {apidata 
          && 
          (
          <>
            <BurgerIngredients arr={apidata.data}/>
            <BurgerConstructor arr={apidata.data}/>
          </>
          )}
        </main>
    </div>
  );
}

export default App;

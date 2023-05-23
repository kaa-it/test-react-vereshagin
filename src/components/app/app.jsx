import styles from "./app.module.css";
import { data } from "../../utils/data";
import { useEffect, useState } from 'react';
import AppHeader from "../app-header/app-header"
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";


const domen = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
  const [apidata, setData] = useState(null)
  useEffect(() => {
    fetch(`${domen}`)
      .then(res => res.json())
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
            <BurgerConstructor/>
          </>
          )}
        </main>
    </div>
  );
}

export default App;

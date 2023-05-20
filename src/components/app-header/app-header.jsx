import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import NavigationItem from '../navigation-item/navigation-item'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import appHeader from './app-header.module.css'; 

import { useRef, useState } from 'react';

const AppHeader = () => {
    return (
        <header className={appHeader.header}>
            <nav className={appHeader.container}>
                <NavigationItem class={`text text_type_main-default ${appHeader.color}`} text='Конструктор'>
                    <BurgerIcon type="primary"/>
                </NavigationItem>
                <NavigationItem class='text text_type_main-default text_color_inactive' text='Лента заказов'>
                    <ListIcon type="secondary"/>
                </NavigationItem>
            </nav>
            <Logo />
            <NavigationItem class='text text_type_main-default text_color_inactive' text='Личный кабинет'>
                <ProfileIcon type="secondary"/>
            </NavigationItem>
        </header>
    )
}

export default AppHeader
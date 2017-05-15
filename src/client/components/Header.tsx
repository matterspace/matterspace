import * as React from 'react';
import { ComponentProps } from '../types/ComponentTypes';
import { LoggedUser } from '../types/LoggedUser';
import { Link } from 'react-router-dom';
import { LoggedUserDropdown } from './LoggedUserDropdown';

export interface HeaderProps extends ComponentProps {
    loggedUser: LoggedUser

    x: React.ReactChildren
}

export const Header = (props: HeaderProps) => {
    const rightComponent = props.loggedUser.id
        ? <LoggedUserDropdown loggedUser={props.loggedUser} />
        : <Link to="/login" className="button vibrant" >Entrar</Link>;

    return (<header className="header">
        <Link to="/" className="logo">
            INDIE JOBS
            </Link>
        <ul>
            <li>
                <a href="#">Quanto custa?</a>
            </li>
            <li>
                <a href="#">Como funciona?</a>
            </li>
            <li>
                <a href="#">Perguntas frequentes</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contato</a>
            </li>
            <li>
                {rightComponent}
            </li>
        </ul>
    </header>);
};

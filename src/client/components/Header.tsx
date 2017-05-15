import * as React from 'react';
import { Link } from 'react-router-dom';
import { ILoggedUser } from '../types/LoggedUser';
import { LoggedUserDropdown } from './LoggedUserDropdown';

export interface IHeaderProps extends React.Props<{}> {
    loggedUser: ILoggedUser;
}

export const Header = ({ loggedUser, children }: IHeaderProps) => {
    const rightComponent = loggedUser.id
        ? <LoggedUserDropdown loggedUser={loggedUser} />
        : <Link to="/login" className="button vibrant" >Entrar</Link>;

    return (
        <header className="header">
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

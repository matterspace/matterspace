import * as React from 'react';
import { ILoggedUser } from '../types/LoggedUser';
import { LoggedUserDropdown } from './LoggedUserDropdown';

const stubLoggedUser: ILoggedUser = {
    displayName: 'André Pena',
    id: 0,
    photoUrl: '0293840293',
};

const TopMenu = () => (
    <ul className="top-menu">
        <li>
            <LoggedUserDropdown loggedUser={stubLoggedUser} />
        </li>
    </ul>
);

export default TopMenu;

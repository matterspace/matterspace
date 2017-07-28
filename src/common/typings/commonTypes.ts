import * as ReactNotificationSystem from 'react-notification-system';

export interface CurrentUserProfile {
    id: number;
    name: string;
    gender: number;
    displayName: string;
    photoUrl: string;
}

export interface ReduxState {
    loggedUser: CurrentUserProfile;
    form: {
        profileEdit?: any,
    };
    notifications: ReactNotificationSystem.Notification[];
}

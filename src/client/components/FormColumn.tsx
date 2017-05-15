import * as React from 'react';

/**
 * Props for the FormColumn component
 */
export interface IFormColumnProps extends React.Props<{}> {
    eq: boolean;
    style?: object;
}

export const FormColumn: React.StatelessComponent<IFormColumnProps> = (props: IFormColumnProps) => (
    <div className={`form-column ${props.eq ? 'eq' : ''}`} style={props.style}>
        {props.children}
    </div>
);

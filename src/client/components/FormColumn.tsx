import * as React from 'react';
import { ComponentProps } from '../types/ComponentTypes';

/**
 * Props for the FormColumn component
 */
export interface FormColumnProps extends ComponentProps {
    eq: boolean,
    style: object,
}

export const FormColumn: React.StatelessComponent<FormColumnProps> = (props: FormColumnProps) => (
    <div className={`form-column ${props.eq ? 'eq' : ''}`} style={props.style}>
        {props.children}
    </div>
);

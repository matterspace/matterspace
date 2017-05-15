import * as React from 'react';
import { ComponentProps } from '../types/ComponentTypes';

export interface FormGroupProps extends ComponentProps {
    label: string,
    labelFor: string,
    help: string
}

export const FormGroup = (props: FormGroupProps) => {
    const helpComponent = props.help ? <small className="form-text">{props.help} </small> : null;
    return (<div className="form-group">
        <label htmlFor={props.labelFor}>{props.label}</label>
        {props.children}
        {helpComponent}
    </div>);
};


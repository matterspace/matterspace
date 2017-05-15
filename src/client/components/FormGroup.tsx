import * as React from 'react';

export interface IFormGroupProps extends React.Props<{}> {
    label: string;
    labelFor: string;
    help: string;
}

export const FormGroup = (props: IFormGroupProps) => {
    const helpComponent = props.help ? <small className="form-text">{props.help} </small> : null;
    return (
        <div className="form-group">
            <label htmlFor={props.labelFor}>{props.label}</label>
            {props.children}
            {helpComponent}
        </div>
    );
};

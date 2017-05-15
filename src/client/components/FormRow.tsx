import * as React from 'react';
import { ComponentProps } from '../types/ComponentTypes';

const FormRow = (props: ComponentProps) => (
    <div className="form-row">
        {props.children}
    </div>
);

export default FormRow;

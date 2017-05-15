import * as React from 'react';

const FormRow = (props: React.Props<{}>) => (
    <div className="form-row">
        {props.children}
    </div>
);

export default FormRow;

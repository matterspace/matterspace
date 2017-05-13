import * as React from 'react';
import * as ReactDOM from 'react-dom';
require('./styles/styles.scss');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/font-awesome/css/font-awesome.css');

const getMountPoint = () => {
	return document.getElementById("app");
};

declare var module: { hot: any };

if (module.hot) {  
    module.hot.accept();  
}

ReactDOM.render(
	<div>
		Home 2
	</div>,
	getMountPoint()
);
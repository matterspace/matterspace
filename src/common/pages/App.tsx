import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { IndexPage } from './IndexPage';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';

interface AppStateProps {
}

interface AppDispatchProps {

}

interface AppOwnProps extends ReactRouter.RouteComponentProps<any> {

}

declare type AppProps = AppStateProps & AppDispatchProps & AppOwnProps;

const App: React.SFC<AppProps> = () => (
    <div className="container">
        <Switch>
            <Route exact={true} path="/" component={IndexPage} />
        </Switch>
    </div>
);

// CONNECT

const mapStateToProps = (state: any): AppStateProps => ({
});

const mapDispatchToProps = (dispatch: ReactRedux.Dispatch<any>): AppDispatchProps => ({

});

const mergeProps = (stateProps: AppStateProps, dispatchProps: AppDispatchProps, ownProps: AppOwnProps): AppProps => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps
});

const ConnectedApp = connect<AppStateProps, AppDispatchProps, AppOwnProps, AppProps>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(App);

export { ConnectedApp as App };

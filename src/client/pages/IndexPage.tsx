import * as React from 'react';
import { connect } from 'react-redux';
import * as ReactRouter from 'react-router';
import * as ReactRedux from 'react-redux';

interface IndexPageStateProps {

}

interface IndexPageDispatchProps {

}

interface IndexPageOwnProps extends ReactRouter.RouteComponentProps<any> {

}

declare type IndexPageProps = IndexPageStateProps & IndexPageDispatchProps & IndexPageOwnProps;

const IndexPage: React.SFC<IndexPageProps> = () => (
    <div className="page-wrapper">
        <div className="index-page-wrapper">
            Welcome to Matterspace
    </div>
    </div>
);

// CONNECT

const mapStateToProps = (state: any): IndexPageStateProps => ({

});

const mapDispatchToProps = (dispatch: ReactRedux.Dispatch<any>): IndexPageDispatchProps => ({

});

const mergeProps = (stateProps: IndexPageStateProps, dispatchProps: IndexPageDispatchProps, ownProps: IndexPageOwnProps): IndexPageProps => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
});

const ConnectedIndexPage = connect<IndexPageStateProps, IndexPageDispatchProps, IndexPageOwnProps, IndexPageProps>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(IndexPage);

export { ConnectedIndexPage as IndexPage }

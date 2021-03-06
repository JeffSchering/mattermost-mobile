// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {bindActionCreators} from 'redux';

import navigationSceneConnect from '../navigationSceneConnect';

import {loadStorage, removeStorage} from 'app/actions/storage';
import {goToSelectServer} from 'app/actions/views/root';
import {handleServerUrlChanged} from 'app/actions/views/select_server';
import {goToLoadTeam} from 'app/actions/navigation';

import {setStoreFromLocalData} from 'mattermost-redux/actions/general';

import Root from './root';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        credentials: state.entities.general.credentials,
        logoutRequest: state.requests.users.logout,
        loginRequest: state.requests.users.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            goToLoadTeam,
            goToSelectServer,
            handleServerUrlChanged,
            loadStorage,
            removeStorage,
            setStoreFromLocalData
        }, dispatch)
    };
}

export default navigationSceneConnect(mapStateToProps, mapDispatchToProps)(Root);

require('module-alias').addAlias("@src", __dirname);
import '@src/server';
import Websocket$ from '@src/observables/websocket';
import * as interfaces from '@src/interfaces';
import * as constants from '@src/consts';
import { ServerConfiguration } from '@src/config';

Websocket$.subscribe(
    (action: interfaces.WebsocketActions) => {
        switch (action.type) {
            case constants.WEBSOCKET_NEW_CONNECTION_MADE:
                console.log(constants.WEBSOCKET_NEW_CONNECTION_MADE);
                action.socket.send('Hello and welcome');
                break;

            case constants.WEBSOCKET_CONNECTION_CLOSED:
                console.log(constants.WEBSOCKET_CONNECTION_CLOSED);
                break;

            case constants.WEBSOCKET_CONNECTION_ERROR:
                console.log(constants.WEBSOCKET_CONNECTION_ERROR);
                break;

            case constants.WEBSOCKET_MESSAGE_RECEIVED:
                console.log(constants.WEBSOCKET_MESSAGE_RECEIVED, action.message);
                break;
        }
    }
);

console.log(`Start listening on port ${ServerConfiguration.port}`);
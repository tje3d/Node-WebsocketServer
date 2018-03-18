import WebsocketServer from 'ws';
import { ServerConfiguration } from '@src/config';
import * as constants from '@src/consts';
import Websocket$ from '@src/observables/websocket';

const server = new WebsocketServer.Server({
    port: ServerConfiguration.port,
});

server.on('connection', socket => {
    Websocket$.next({type: constants.WEBSOCKET_NEW_CONNECTION_MADE, socket});

    socket.on('message', message => {
        Websocket$.next({type: constants.WEBSOCKET_MESSAGE_RECEIVED, socket, message});
    });
});

server.on('error', message => {
    Websocket$.next({type: constants.WEBSOCKET_CONNECTION_ERROR, message});
});

server.on('closed', () => {
    Websocket$.next({type: constants.WEBSOCKET_CONNECTION_CLOSED});
});

export default server;
import * as constants from '@src/consts';

export interface ServerConfiguration {
    port: number;
}

export interface WebsocketAction {
    type?: any;
}
export interface WebsocketNewConnectionMade extends WebsocketAction {
    type: constants.WEBSOCKET_NEW_CONNECTION_MADE;
    socket: WebSocket;
}

export interface WebsocketMessageReceived extends WebsocketAction {
    type: constants.WEBSOCKET_MESSAGE_RECEIVED;
    socket: WebSocket;
    message: string;
}

export interface WebsocketConnectionError extends WebsocketAction {
    type: constants.WEBSOCKET_CONNECTION_ERROR;
    message: string;
}

export interface WebsocketConnectionClosed extends WebsocketAction {
    type: constants.WEBSOCKET_CONNECTION_CLOSED;
}

export type WebsocketActions = WebsocketNewConnectionMade | WebsocketMessageReceived | WebsocketConnectionError | WebsocketConnectionClosed;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Log {
    debug(message, ...additionalData) {
        this.emitMessage('debug', message, additionalData);
    }
    warn(message, ...additionalData) {
        this.emitMessage('warn', message, additionalData);
    }
    error(message, ...additionalData) {
        this.emitMessage('error', message, additionalData);
    }
    info(message, ...additionalData) {
        this.emitMessage('info', message, additionalData);
    }
    emitMessage(msgType, msg, additionalData) {
        if (additionalData.length > 0) {
            console[msgType](msg, additionalData);
        }
        else {
            console[msgType](msg);
        }
    }
}
exports.Log = Log;

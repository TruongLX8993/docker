const {createLogger, format, transports} = require('winston');
const winston = require("winston");
const {combine, timestamp, label, prettyPrint} = format;


class Logger {

    winstonLogger;

    constructor(pLabel, fileName) {
        if (fileName == null) fileName = 'global.log';
        this.winstonLogger = createLogger({
            format: combine(label({lable: pLabel}), timestamp(), prettyPrint()),
            transports: [new transports.Console(), new transports.File({filename: `logs/${fileName}`})]
        });
    }

     logError(msg) {
        this.winstonLogger.log({level: 'error', message: msg})
    }
}


module.exports = {
    Logger: Logger
}
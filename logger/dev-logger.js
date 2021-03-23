const { format, createLogger, transports } = require('winston')

function buildDevLogger() {
    const logFormat = format.printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${stack || message}`
    })

    return createLogger({
        format: format.combine(format.timestamp(), format.errors({ stack: true }), logFormat),
        transports: [
            new transports.Console()
        ]
    })
}



module.exports = buildDevLogger
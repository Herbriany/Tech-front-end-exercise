const { format, createLogger, transports } = require('winston')

function buildProdLogger() {
    return createLogger({
        format: format.combine(format.timestamp(), format.errors({ stack: true }), format.json()),
        defaultMeta: { service: 'react-product-basket' },
        transports: [
            new transports.Console()
        ]
    })
}



module.exports = buildProdLogger
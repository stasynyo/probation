define('ember-ajax/-private/utils/parse-response-headers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = parseResponseHeaders;
    const CRLF = exports.CRLF = '\u000d\u000a';
    function parseResponseHeaders(headersString) {
        const headers = {};
        if (!headersString) {
            return headers;
        }
        return headersString.split(CRLF).reduce((hash, header) => {
            let [field, ...value] = header.split(':');
            field = field.trim();
            const valueString = value.join(':').trim();
            if (valueString) {
                hash[field] = valueString;
            }
            return hash;
        }, headers);
    }
});
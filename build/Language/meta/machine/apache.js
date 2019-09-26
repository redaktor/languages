(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta = {
        name: 'Apache HTTP Server',
        wiki: 'Apache_HTTP_Server',
        type: 'markup',
        languageId: 16,
        aliases: ['aconf', 'apache', 'apacheconf'],
        extensions: ['.apacheconf', '.vhost'],
        aceMode: 'apache_conf',
        tmScope: 'source.apache-config'
    };
    exports.default = meta;
});
//# sourceMappingURL=apache.js.map
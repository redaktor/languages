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
        name: 'Nginx',
        wiki: 'Nginx',
        type: 'markup',
        languageId: 248,
        color: '#9469E9',
        aliases: ['nginx configuration file'],
        extensions: ['.nginxconf', '.vhost'],
        aceMode: 'text',
        tmScope: 'source.nginx',
        codemirrorMode: 'nginx',
        codemirrorMimeType: 'text/x-nginx-conf',
        filenames: ['nginx.conf']
    };
    exports.default = meta;
});
//# sourceMappingURL=nginx.js.map
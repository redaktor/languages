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
        name: 'Protocol Buffers (protobuf)',
        wiki: 'Protocol_Buffers',
        type: 'markup',
        languageId: 297,
        aliases: ['protobuf', 'Protocol Buffers'],
        extensions: ['.proto'],
        aceMode: 'protobuf',
        tmScope: 'source.protobuf',
        codemirrorMode: 'protobuf',
        codemirrorMimeType: 'text/x-protobuf'
    };
    exports.default = meta;
});
//# sourceMappingURL=protobuf.js.map
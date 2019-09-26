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
        name: 'SystemVerilog',
        wiki: 'SystemVerilog',
        type: 'programming',
        languageId: 387,
        color: '#b2b7f8',
        extensions: ['.v', '.veo'],
        aceMode: 'verilog',
        codemirrorMode: 'verilog',
        codemirrorMimeType: 'text/x-verilog'
    };
    exports.default = meta;
});
//# sourceMappingURL=verilog.js.map
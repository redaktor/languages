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
        name: 'VHDL',
        wiki: 'VHDL',
        type: 'programming',
        languageId: 385,
        color: '#adb2cb',
        extensions: ['.vhdl', '.vhd', '.vhf', '.vhi', '.vho', '.vhs', '.vht', '.vhw'],
        aceMode: 'vhdl',
        codemirrorMode: 'vhdl',
        codemirrorMimeType: 'text/x-vhdl'
    };
    exports.default = meta;
});
//# sourceMappingURL=vhdl.js.map
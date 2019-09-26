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
        name: 'GLSL',
        wiki: 'GLSL',
        type: 'programming',
        languageId: 124,
        extensions: ['.glsl', '.fp', '.frag', '.frg', '.fs', '.fsh', '.fshader', '.geo', '.geom', '.glslv', '.gshader', '.shader', '.vert', '.vrx', '.vsh', '.vshader'],
        aceMode: 'glsl'
    };
    exports.default = meta;
});
//# sourceMappingURL=glsl.js.map
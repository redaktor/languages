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
        name: 'Bash',
        wiki: 'Bash_(Unix_shell)',
        type: 'programming',
        languageId: 346,
        color: '#89e051',
        aliases: ['sh', 'shell-script', 'bash', 'zsh'],
        extensions: ['.sh', '.bash', '.bats', '.cgi', '.command', '.fcgi', '.ksh', '.sh.in', '.tmux', '.tool', '.zsh'],
        aceMode: 'sh',
        interpreters: ['bash', 'rc', 'sh', 'zsh'],
        codemirrorMode: 'shell',
        codemirrorMimeType: 'text/x-sh',
        filenames: ['.bash_history', '.bash_logout', '.bash_profile', '.bashrc', 'PKGBUILD', 'gradlew']
    };
    exports.default = meta;
});
//# sourceMappingURL=bash.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
class Grammar {
    constructor(s) {
        this.terminals = new Map();
        let lines = s.split("\n");
        for (let num = 0; num < lines.length - 1; num++) {
            let s2 = lines[num].split("->");
            let lhs = s2[0].trim();
            let rhs = s2[1].trim();
            if (this.terminals.has(lhs)) {
                throw new console_1.error("Identifier already exists");
            }
            else {
                try {
                    //console.log(rhs);
                    let r = new RegExp(rhs, "gy");
                    this.terminals.set(lhs, r);
                }
                catch (e) {
                    throw new console_1.error("Invalid Regex");
                }
            }
        }
        if (!this.terminals.has("WHITESPACE")) {
            let r = new RegExp("\\s+", "gy");
            this.terminals.set("WHITESPACE", r);
        }
    }
}
exports.Grammar = Grammar;
//# sourceMappingURL=Grammar.js.map
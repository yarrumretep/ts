// Type definitions for LevelDown 3.0.0
// Project: https://github.com/level/memdown
// Definitions by: Thiago de Arruda <https://github.com/tarruda>
//                 Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="abstract-leveldown"/>

declare module 'leveldown' {
const leveldown: (path: string) => AbstractLevelDOWN;

export default leveldown;
}

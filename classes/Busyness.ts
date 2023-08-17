import { PosTerminal } from "./PosTerminal.js";

export class Business{
    name: string;
    terminal: PosTerminal;
    constructor(name: string, terminal: PosTerminal)
    {
        this.name=name;
        this.terminal=terminal;
    }
}
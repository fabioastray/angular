export interface AppState {
    name: string;
    state: string;

    setState(state: string);
}

export class GameControlAppState implements
AppState {
    constructor(public name: string, public state: string) {
        this.name = name;
        this.state = state;
    }

    setState(state: string) {
        this.state = state;
    }
}

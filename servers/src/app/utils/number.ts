export function random(max: number): number {
    return Math.random() * Math.floor(max);
}

export function randomInt(max: number): number {
    return Math.floor(random(max));
}

const INSENSITIVE = { sensitivity: 'accent' };

export function string(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b, undefined, INSENSITIVE);
    }

    return fallback(a, b);
}

export function number(a, b) {
    return a - b;
}

export function date(a, b) {
    const dA = a instanceof Date ? a : new Date(a);
    const dB = b instanceof Date ? b : new Date(b);

    return dA.getTime() - dB.getTime();
}

export default function fallback(a, b) {
    if (a < b) return -1;
    if (a > b) return  1;
    return  0;
}

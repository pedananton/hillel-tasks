import * as comparators from './compare.js';

export function sortBy(arr, selector, comparator = comparators.default) {
    return arr.slice().sort((a, b) => {
        const sa = selector(a);
        const sb = selector(b);

        return comparator(sa, sb);
    });
}

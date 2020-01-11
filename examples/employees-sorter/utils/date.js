export function toUSFormat(date) {
    if (date instanceof Date) {
        const yyyy = date.getFullYear();
        const m = date.getMonth();
        const d = date.getDate();

        return `${m}/${d}/${yyyy}`;
    }

    return date;
}
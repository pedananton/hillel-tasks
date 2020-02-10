export default function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;

    script.addEventListener('load', function () {
        callback(null, script);
    });

    script.addEventListener('error', function (e) {
        const err = new Error(`Failed to load the script at: ${src}`);
        err.event = e;
        callback(err);
    });

    document.head.appendChild(script);
}

// TODO: 1. Полностью перепишите исходную функцию с использованием new Promise
export function loadScriptWithPromise(src) {

}

// TODO: 2. Используйте исходную функцию, не меняя ее, и промисифицируйте ее
export function loadScriptPromisified(src) {

}

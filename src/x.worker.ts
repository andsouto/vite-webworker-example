/// <reference lib="webworker" />

addEventListener('message', ({data}) => {
    console.warn('Message received in web worker (application)', data);
});

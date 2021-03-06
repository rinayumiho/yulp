import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.user) {
        const preloadedState = {
            session: { id: window.user.id },
            entities: {
                users: { [window.user.id]: window.user }
            }
        };
        store = configureStore(preloadedState);
        delete window.user;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
});
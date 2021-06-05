export const setToLocalStorage = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data));
}

export const getFromLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name)) || null;
}
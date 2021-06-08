export const setToLocalStorage = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data));
}

export const getFromLocalStorage = (name) => {
    return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : null;
}

export const deleteInLocalStorage = (name) => {
    localStorage.removeItem(name)
}
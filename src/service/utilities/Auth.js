export const checkAdminLocal = (user, token) => {
    if (!user || !token || user?.role === 0) {
        return false;
    }
    return true;
}
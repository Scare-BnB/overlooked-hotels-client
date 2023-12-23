export const isUserSignedIn = () => {
    const token = localStorage.getItem("token");
    return !!token;
}

export const signOffUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
}

export const isUserAdmin = () => {
    return (localStorage.getItem("admin") === "true");
}
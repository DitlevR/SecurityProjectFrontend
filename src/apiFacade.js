const URL = "http://localhost:8080/securitybackendflaws/api/";
const ENTREYPATH = "blogentry/"
const USERPATH = "user/"

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
    }
    console.log(res)
    return res.json();
}

function apiFacade() {

    const setToken = (token) => {
        localStorage.setItem("jwtToken", token);
    }

    const getToken = () => {
        return localStorage.getItem("jwtToken");
    }

    const validateToken = (setLoggedIn) => {
        const options = makeOptions("POST", true);
        return fetch(`${URL}${USERPATH}validatetoken`, options)
            .then(handleHttpErrors)
            .then(res => {
                setLoggedIn(true)
            })
            .catch(err => {
                logout()
            });
    }

    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }

    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                Accept: "application/json"
            }
        };
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    };

    const getRole = () => {
        let jwt = localStorage.getItem("jwtToken");
        let jwtData = jwt.split(".")[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles;
    };

    const login = (user, setRole) => {
        const options = makeOptions("POST", false, user);
        return fetch(`${URL}${USERPATH}login`, options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token);
                setRole(getRole());
            });
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
    };

    const fetchEntryById = id => {
        return fetch(`${URL}${ENTREYPATH}${id}`, makeOptions("get")).then(handleHttpErrors);
    };

    const fetchAllEntries = () => {
        console.log("hal")
        return fetch(`${URL}${ENTREYPATH}all`, makeOptions("get")).then(handleHttpErrors);
    };

    const deleteComment = (id) => {
        return fetch(`${URL}${ENTREYPATH}deletecomment/${id}`, makeOptions("delete")).then(handleHttpErrors);
    };

    return { fetchEntryById, fetchAllEntries, deleteComment, login, logout, loggedIn, validateToken };
}
export default apiFacade();
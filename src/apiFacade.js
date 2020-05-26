const URL = "http://localhost:8080/securitybackendflaws/api/";
const ENTREYPATH = "blogentry/"
function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
}

function apiFacade() {
    const makeOptions = (method, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                Accept: "application/json"
            }
        };
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
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

    return { fetchEntryById, fetchAllEntries, deleteComment };
}
export default apiFacade();
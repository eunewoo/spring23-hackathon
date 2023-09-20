const defaultHeaders = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
}

export const getNotesAPIMethod = () => {
    return fetch(`/api/notes`, {
        ...defaultHeaders,
    }).then(checkStatus)
        .then(parseJSON);
}
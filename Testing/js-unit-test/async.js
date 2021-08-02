const httpClient = {
    get: (url) => fetch(url),
    post: (url, headers) => fetch('POST', url),
    fake: (f) => {
        // for (var i = 0; i < 2; i++) {
        //     f(`fake-${i}`,i);
        // }
        f('fake');
    }
}

module.exports = httpClient;
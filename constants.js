const mainUrl = 'https://sta1kers.ru/zona.php';
let goKey;
let page;

function getGoKey() {
    return goKey;
}

function setGoKey(value) {
    goKey = value;
}

function getPage() {
    return page;
}

function setPage(value) {
    page = value;
}

module.exports = {
    mainUrl,
    setGoKey,
    getGoKey,
    setPage,
    getPage,
}

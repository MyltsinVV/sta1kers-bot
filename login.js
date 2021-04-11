async function login(page, nick, password) {
    await page.type('input[name="nick"]', nick);
    await page.type('input[name="pass"]', password);
    await page.click('input[name="log"]');
}

module.exports = login;

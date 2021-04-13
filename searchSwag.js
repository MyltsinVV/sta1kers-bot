async function searchSwag(page) {
    await page.goto('https://sta1kers.ru/zona.php');
    const content = await page.content();
    const index = content.indexOf('var cells = "');
    await page.goto(`https://sta1kers.ru/zona.php?hb_pass=${content.slice(index + 13, index + 18)}`);
}

module.exports = searchSwag;

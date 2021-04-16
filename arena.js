async function arena(page) {
    await page.goto('https://sta1kers.ru/arena1.php?tip=1');
    const queryParams = page.url().split('?')[1].split('&');
    let errorCode = '0';
    let error = 0;
    for (let queryParam of queryParams) {
        const [a, b] = queryParam.split('=');
        if (a === 'time') {
            error = b;
        }
        if (a === 'err') {
            errorCode = b;
        }
    }
    if (errorCode === '1') {
        // Я тут труп, нужно выличиться и потом заново запустить арену
    } else if (errorCode === '4') {
        return error;
    } else if (errorCode === '5') {
        return await arena(page);
    } else {
        await page.click('table>tbody>tr>td>div>a.simple-but.border.gray.mb1');
        return await arena(page);
    }
}

module.exports = arena;

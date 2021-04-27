const mainUrl = 'https://sta1kers.ru/zona.php';

async function cache(page) {
    await page.goto(mainUrl + '?mod=start_search');

    setTimeout(async () => {
        await page.goto(mainUrl);

        const level1 = Boolean(await page.evaluate(() =>
            document.querySelector('img[src="../new_zona/img/stash/1.png"]')
        ));
        const level2 = Boolean(await page.evaluate(() =>
            document.querySelector('img[src="../new_zona/img/stash/2.png"]')
        ));
        const level3 = Boolean(await page.evaluate(() =>
            document.querySelector('img[src="../new_zona/img/stash/3.png"]')
        ));

        if (level1) {
            await _level1(page);
        } else if (level2) {
            await _level2(page);
        } else if (level3) {
            await _level3(page);
        }
    }, 30 * 1000);
    // await page.goto(mainUrl);
    // await _level3(page);
}

// Todo: Проверить когда закончились отмычки

const correctAnswer = [];
let deep = 0;


async function _level1(page) {
    if (deep === 5) {
        return;
    }

    if (!correctAnswer[deep]) {
        await page.goto(mainUrl + '?mod=left_search');
        // Отмычка сломалась
        const error = await page.evaluate(() => document.querySelector('.r6.stalker_link.error')?.innerText);
        if (error) {
            correctAnswer[deep] = 'right';
            deep = 0;
        } else {
            correctAnswer[deep] = 'left';
            deep++;
        }
        await _level1(page);
    } else {
        if (correctAnswer[deep] === 'left') {
            await page.goto(mainUrl + '?mod=left_search');
        } else {
            await page.goto(mainUrl + '?mod=right_search');
        }
        deep++;
        await _level1(page);
    }
}

async function _level2(page) {
    console.log(2);
}

async function _level3(page) {
    if (deep === 5) {
        return;
    }

    if (!correctAnswer[deep]) {
        await page.click('input[value="one_search"]');
        await page.click('input[name="addad"]');

        const error = await page.evaluate(() => document.querySelector('.r6.stalker_link.error')?.innerText);
        if (error) {
            correctAnswer[deep] = 'notOne';
            deep = 0;
        } else {
            correctAnswer[deep] = 'left';
            deep++;
        }
        await _level3(page);
    } else if (correctAnswer[deep] === 'notOne') {
        await page.click('input[value="two_search"]');
        await page.click('input[name="addad"]');

        const error = await page.evaluate(() => document.querySelector('.r6.stalker_link.error')?.innerText);
        if (error) {
            correctAnswer[deep] = 'right';
            deep = 0;
        } else {
            correctAnswer[deep] = 'center';
            deep++;
        }
        await _level3(page);
    } else {
        if (correctAnswer[deep] === 'left') {
            await page.click('input[value="one_search"]');
        } else if (correctAnswer[deep] === 'center') {
            await page.click('input[value="two_search"]');
        } else if (correctAnswer[deep] === 'right') {
            await page.click('input[value="three_search"]');
        }
        await page.click('input[name="addad"]');
        deep++;
        await _level3(page);
    }
}

module.exports = cache;

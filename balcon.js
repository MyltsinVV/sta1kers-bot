const startGame = require('./startGame');
const farm = require('./farm');
const arena = require('./arena');
const { searchSwagPripyat } = require('./searchSwag');

const {mainUrl, getPage} = require('./constants');

const arr = [
    'arena',
    'farm'
];

(async () => {
    await startGame('balcon', '12345');

    const page = getPage();

    async function test() {
        const hp = await page.evaluate(
            () => document.querySelector('img[src="../img/ico/life.png"]').parentNode.innerText
        );

        if (hp.trim() === '0') {
            const apte4ka = await page.evaluate(() =>
                document.querySelector('small.stalker_link > img[src="../img/ico/apte4ka.png"]')?.parentNode?.innerText
            );
            if (!apte4ka) {
                await page.goto(`${mainUrl}?&apt=use`);
            }
        } else {
            const item = arr.shift();
            if (item === 'arena') {
                const time = await arena(page);
                setTimeout(() => {
                    arr.unshift('arena');
                }, time * 1000);
            } else if (item === 'farm') {
                await farm();
                arr.push('farm');
            }
        }

        setTimeout(async () => {
            await test();
        }, 1000)
    }

    await test();
})();

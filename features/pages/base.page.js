module.exports = class BasePage {

    open (path) {

        browser.url(path);

    }

    async pressButton (button)  {
        const elem = await $("//*[contains(text(),'"+button+"')]")
        await elem.waitForEnabled();
        await elem.click();

    }

}


module.exports = class BasePage {

    open (path) {

        browser.url(path);

    }

    async pressButton (button)  {
        console.log("99999999999999999999999999999999999999999999999999999"+button)
        const elem = await $("//*[contains(text(),'"+button+"')]")
        await elem.waitForEnabled();
        await elem.click();

    }

}


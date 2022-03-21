module.exports = class BasePage {

    open (path) {

        browser.url(path);

    }

    async pressButton (button)  {
       
        const elem = await $("//*[contains(text(),'"+button+"')]")
        await elem.waitForEnabled();
        await elem.click();

    }

    async pressButtonWithLocator (locator)  {
       
        const elem = await $(locator)
        await elem.waitForEnabled();
        await elem.click();

    }



    async fillInEditBox(locator, value)
    {
        const elem =  await $(locator);
        await elem.waitForEnabled()
        await elem.click();
        await elem.setValue(value)
    }

}


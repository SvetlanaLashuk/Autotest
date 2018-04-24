var po = require("../page-object");

describe('testing the https://angular.io/docs page', function() {

    beforeEach(function (done) {
        browser.get('https://angular.io/docs');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        setTimeout(function () {
            done();
        }, 2000);
    });

    it('checks whether submenus in vertical menu are displayed', function (done) {
        po.verticalMenuItem.click().then(function () {
            return po.submenuElement.isPresent();
        }).then(function (element) {
            expect(element).toBe(true);
        }).then(function () {
            done();
        });
    });

    it('checks TAB key',  function (done) {
        po.docsMenuItem.sendKeys(protractor.Key.TAB)
            .then(function () {
                return po.resourcesName.getText();
            })
            .then(function (text) {
                expect(text).toEqual('RESOURCES');
            })
            .then(function () {
                done();
            });
    });

    it('checks links to other page', function (done) {
        po.resourcesLink.click().then(function () {
            return po.resourcesMenuItem.getText();
        }).then(function (text) {
            expect(text).toBe('EXPLORE ANGULAR RESOURCES');
        }).then(function () {
            done();
        });
    });

    it('matches url', function (done) {
        po.featuresLink.click().then(function () {
            return browser.getCurrentUrl();
        }).then(function (link) {
            expect(link).toMatch(/\/features/);
        }).then(function () {
            done();
        });
    });

    it('checks whether vertical menu is closed after clicking on the button ', function (done) {
        po.buttonVertMenu.click().then(function () {
            return po.sideNav.isDisplayed();
        }).then(function (menu) {
            expect(menu).toBe(false);
        }).then(function () {
            done();
        });
    });

    //Expected 'Searching ... ' вместо 'No result found'
    it('tests the search field', function (done) {
        po.searchField.sendKeys('fdffd', protractor.Key.ENTER).then(function () {
            browser.wait(function () {
                return po.searchResTitle.getText();
            }).then(function (text) {
                expect(text).toEqual('No results found.');
            }).then(function () {
                done();
            });
        });
    });

    it('displays the search area', function (done) {
        po.searchField.sendKeys('a', protractor.Key.ENTER).then(function () {
            browser.wait(function () {
                return po.searchReasults.isPresent();
            }).then(function (search) {
                expect(search).toBe(true);
            }).then(function () {
                done();
            });
        });
    });

    it('goes to the home page', function (done) {
        po.homeLink.click().then(function () {
            return browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual('https://angular.io/');
            }).then(function () {
                done();
            });
        });
    });

    it('minimize the window', function (done) {
        browser.driver.manage().window().setSize(1000, 500).then(function () {
            return po.navigationBar.isPresent().then(function (navbar) {
                expect(navbar).toBe(false);
            });
        }).then(function () {
            done();
        });
    });

});
import{BasePage} from './basePage'
import{By} from 'selenium-webdriver'

export class demoblaze extends BasePage{


    Homepage: By = By.xpath('//li[@class="nav-item active"]')
    login: By = By.id('login2')
    logout: By = By.xpath('//a[text()="Log out"]')
    loginUsername: By = By.id('loginusername')
    loginPassword: By = By.id('loginpassword')
    longinEnter: By = By.xpath('(//button[@class="btn btn-primary"])[3]')
    cartButton: By = By.id('cartur')
    addtoCart: By = By.className('btn btn-success btn-lg')
    contactEmail: By = By.id('recipient-email')
    contactName: By = By.id('recipient-name')
    contactMessage: By = By.id('message-text')
    contactButton: By = By.xpath('(//a[@class="nav-link"])[2]')
    contactsendMessage: By = By.xpath('(//button[@class="btn btn-primary"])[1]')
    samsungPhone: By = By.xpath('//a[text()="Samsung galaxy s6"]')
    Nokiaphone: By = By.xpath('//a[text()="Nokia lumia 1520"]')
    laptops: By = By.xpath('//a[text()="Laptops"]')
    MacBookAir: By = By.xpath('//a[text()="MacBook air"]')
    DeletingNokia: By = By.xpath('(//a[text()="Delete"])[2]')
    Monitors: By = By.xpath('//a[text()="Monitors"]')
    AsusFullHD: By = By.xpath('//a[text()="ASUS Full HD"]')
    placeOrder: By = By.xpath('//button[text()="Place Order"]')
    name: By = By.id('name')
    country: By = By.id('country')
    city; By = By.xpath('(//input[@class="form-control"])[8]')
    creditCard: By = By.id('credit')
    month: By = By.id('month')
    year: By = By.id('year')
    purchase: By = By.xpath('//button[text()="Purchase"]')






    
    constructor() {
        super({url: 'https://www.demoblaze.com/index.html'})
    }

}


    
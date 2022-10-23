
import { demoblaze } from "./demoblazePageObject";
const demo = new demoblaze


test('Log in and out of Demoblaze with valid username and password', async() => {
await demo.navigate()  
await demo.click(demo.login)
await demo.setInput(demo.loginUsername,'remotely')
await demo.setInput(demo.loginPassword,'remotely')
await demo.click(demo.longinEnter)
await demo.click(demo.logout)
    


await demo.driver.sleep(3000)
  await demo.driver.quit()
    
    })
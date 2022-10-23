import { demoblaze } from "./demoblazePageObject";
const demo = new demoblaze


test('Sending contact message', async() => {


await demo.navigate()
await demo.navigate()
await demo.click(demo.contactButton)
await demo.setInput(demo.contactEmail, 'demoblaze@hype.com')
await demo.setInput(demo.contactName, 'Blaze')
await demo.setInput (demo.contactMessage,'This is a test')
await demo.click(demo.contactsendMessage)


await demo.driver.sleep(3000)
  await demo.driver.quit()


})

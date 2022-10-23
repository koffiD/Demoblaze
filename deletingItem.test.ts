import { demoblaze } from "./demoblazePageObject";
const demo = new demoblaze


test('Deleting item from cart', async() => {
await demo.navigate()
await demo.click(demo.samsungPhone)
await demo.click(demo.addtoCart)
await demo.click(demo.Homepage)
await demo.click(demo.Nokiaphone)
await demo.click(demo.addtoCart)
await demo.click(demo.Homepage)
await demo.click(demo.cartButton)
await demo.click(demo.DeletingNokia)


await demo.driver.sleep(3000)
  await demo.driver.quit()


})
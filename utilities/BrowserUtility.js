export class BrowserUtility {
  static async sleep(seconds) {
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...

  //create a funtion that can verify  expected and actual messages  are equal use promeses
  static async verifyMessage(actual, expected) {
    return new Promise((resolve) => {
      resolve(actual.toString() === expected.toString());
    });
  }
}

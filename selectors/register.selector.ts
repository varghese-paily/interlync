class RegisterSelectors {
    public static registerLink = "//a[@href='/register']"
    public static enterName = "input[placeholder='Enter name']"
    public static enterAddress = "input[placeholder='Enter email address']"
    public static password = "(//input[@type='password'])[1]"
    public static confirmPassword = "(//input[@type='password'])[2]"
    public static registerButton = "//button[text()='Register']"
    public static successMsg = "//p[text()='Registration Successful']"
    public static warningMsg = "//p[text()='Email has already been taken']"
}  
export { RegisterSelectors }
  
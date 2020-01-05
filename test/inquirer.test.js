const inquirerLib = require("../lib/inquirer")
const inquirer = require('inquirer')

jest.mock('inquirer');

describe('Module test null', () => {
  test('user input', async () => {
    expect.assertions(1);
    inquirer.prompt = jest.fn().mockResolvedValue({ targetDir: '' });

    await expect(inquirerLib.askTargetDirectory()).resolves.toEqual({ targetDir: '' });
  });
});


// test('Null value should not be allowed', () => {
//     expect(inquirer.askTargetDirectory("")).toBe("Please enter a valid path.");
// });

// test('Should be able to find cats directory', () => {
//     expect(inquirer.askTargetDirectory("./cats")).toBe(true);
// });

// test('Should not be able to find frog directory', () => {
//     expect(inquirer.askTargetDirectory("./frog")).toBe(false);
// });

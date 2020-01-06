const inquirerLib = require("../lib/inquirer")
const inquirer = require('inquirer')

jest.mock('inquirer');

describe('Module test null', () => {
  test('user input', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ targetDir: '' });

    let answer = await inquirerLib.askTargetDirectory()
    expect(inquirerLib.validateDir(answer.targetDir)).toEqual('Please enter a valid path.');
  });
});

describe('Module test correct directory', () => {
  test('user input', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ targetDir: './Code Test' });

    let answer = await inquirerLib.askTargetDirectory()
    expect(inquirerLib.validateDir(answer.targetDir)).toEqual(true);
  });
});

describe('Module test non existent directory', () => {
  test('user input', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ targetDir: './Code Test 2' });

    let answer = await inquirerLib.askTargetDirectory()
    expect(inquirerLib.validateDir(answer.targetDir)).toEqual(true);
    // still returns true as this validates the null value only
  });
});

const inquirer = require('inquirer')
const validateDir = ( value ) => {
  if (value.length) {
    return true
  } else {
    return 'Please enter a valid path.'
  }
}
module.exports = {
    validateDir,
    askTargetDirectory: () => {
      const questions = [
        {
          name: 'targetDir',
          type: 'input',
          message: 'Please enter the image directory:',
          validate: validateDir
        },
      ]
      return inquirer.prompt(questions)
    },
  }
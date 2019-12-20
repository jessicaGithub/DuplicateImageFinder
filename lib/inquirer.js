const inquirer = require('inquirer')

module.exports = {
    askTargetDirectory: () => {
      const questions = [
        {
          name: 'targetDir',
          type: 'input',
          message: 'Please enter the image directory:',
          validate: function( value ) {
            if (value.length) {
              return true
            } else {
              return 'Please enter a valid path.'
            }
          }
        },
      ]
      return inquirer.prompt(questions)
    },
  }
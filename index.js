// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'title',
            messsage: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            messsage: 'Description of your project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            messsage: 'What licnese do you want to have in this project?',
            choices: [
                'Apache',
                'Academic',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open'
            ]
        },
        {
            type: 'input',
            name: 'install',
            messsage: 'Code to install the project?'
        },
        {
            type: 'input',
            name: 'deployed',
            messsage: 'Deployed link? (Github page)'
        },
        


    ])
    .then((data) => {
        console.log(data);
        const generateREADME = generateMarkdown(data);
    
        fs.writeFile('README.md',generateREADME, (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
    
    
    
    


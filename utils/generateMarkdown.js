// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br>
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [DeployedLink](#DeployedLink)
  * [License](#License)
  
 
  * [Questions](#Questions)

  ## Installation
  To install the necessary dependencies, run the following command:<br>
  <code>${data.install}</code>

  ## Usage
  

  ## DeployedLink
  ${data.deployed}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

 



  ## Questions
  For more information, please contact me: <br>
  
  Email: xuanan.ian23y@gmail.com   
  </br>GitHub: [King23WL](https://github.com/King23WL)
`;
}

module.exports = generateMarkdown;

# Candidate for QA

Testing automation framework i used CodeceptJS with Puppeteer Gherkin. Guidelines installation can be following in here https://codecept.io/quickstart/ and for enable gherkin project in here https://codecept.io/bdd/#what-is-behavior-driven-development

For support Gherkin, Install extension on VsCode : 
A. Cucumber (Gherkin) Full Support 
B. Feature syntax Highlight & Snippets (Cucumber/Gherkin) 
C. Snippets and Syntax Highlight for gherkin (cucumber)

To provide element selectors, i will be grouping in Page Object at pages, technicalTest.js.

How to run Automation Script :

1. Before that, running NPM install to get node_modules
2. At file codecept.conf.js file must be settings gherkin: features & steps with selected path files feature & steps to running 
(e.g: features: './features/technicalTest.feature', steps: './step_definitions/technicalTest.step.js). And include page object model (e.g technicalTestPage: './pages/technicalTest.js')
3. To running selected scenario can use @tags selected scenario in feature files on Terminal, (syntax: npx codeceptjs run --features
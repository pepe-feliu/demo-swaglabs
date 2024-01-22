[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Cucumber](https://img.shields.io/badge/Documentation-Cucumber-23d96c.svg?logo=cucumber)](https://cucumber.io/docs/cucumber)
[![GitHub actions](https://img.shields.io/badge/Documentation-GitHub%20Actions-23d96c.svg?logo=github)](https://playwright.dev/docs/ci-intro)
<br>

# Playwright Workshop Template with Javascript - Cucumber - BDD

Workshop Ready: GitHub template project designed for workshops, offering a structured starting point with documentation, sample code, and collaborative features. Accelerate learning and engagement in your workshops with this organized and customizable repository.

## Installation

### Execute if using template

- Install necessary modules
    - `npm i`

### Set-up from scratch

- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> => Install Playwright => OK
- Install plugins
    - [Playwright Test for VSCode](vscode:extension/ms-playwright.playwright)
    - [Cucumber (Gherking) Full Support](vscode:extension/alexkrechik.cucumberautocomplete)
- Install dependencies: 
    - `npm i @cucumber/cucumber -D`
    - `npm i ts-node -D`
- Create folder `src/test/features` and `src/test/steps`
- Create `cucumber.json` file
- Copy code into `cucumber.json`
    ```json
    {
        "default": {
            "formatOptions": {
                "snippetInterface": "async-await"
            },
            "paths": [
                "src/test/features/"
            ],
            "require": [
                "src/test/steps/*.ts",
                "src/hooks/hooks.ts"
            ],
            "requireModule": [
                "ts-node/register"
            ],
            "format": [
                "html:cucumber-reports/cucumber-report.html"
            ]
        }
    }
    ```

## Extra's

- Install optional plugins
    - [Playwright Runner](vscode:extension/ortoni.ortoni) -> execute test inside the spec file
    - [Snippets and Syntax Highlight for Gherkin (Cucumber)](vscode:extension/stevejpurves.cucumber) -> Use snippets to create methods and scenario templates

- Make Gherkin steps clickable in feature file
    - Create a `.vscode` folder in the project root
    - Create a `settings.json` file under `.vscode` folder
    - Copy code into the `settings.json` file
    
    ```json
    {
        "cucumberautocomplete.steps": [
            "src/test/steps/*.ts"
        ],
        "cucumberautocomplete.syncfeatures": "src/test/features/*feature", 
        "cucumberautocomplete.strictGherkinCompletion": true
    }
    ```
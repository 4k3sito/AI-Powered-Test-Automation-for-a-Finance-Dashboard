# AI-Powered Test Automation for a Finance Dashboard

This project demonstrates **AI-powered test automation** for a finance dashboard application. It uses **Groq AI** to generate test cases and **Playwright** to run them. The goal is to automate testing for user interactions on a finance dashboard, such as login, data visualization, and redirection.

## Features

- **AI-Generated Test Cases**: Uses Groq's AI model to automatically generate Playwright tests based on natural language descriptions.
- **Finance Dashboard Testing**: Focuses on automating tests for a finance dashboard, including scenarios like login, page redirection, and data visualization.
- **CI/CD Integration**: Implements continuous integration using GitHub Actions, ensuring that tests are automatically run on every push or pull request.
- **Playwright Automation**: Utilizes Playwright for headless browser testing of the finance dashboard.

## Prerequisites

Before running this project, ensure you have the following:

- [Node.js](https://nodejs.org/) (Version 16 or higher)
- [Groq API Key](https://groq.com/) for AI-powered test generation
- [GitHub Account](https://github.com/) to host the repository and set up CI/CD

## Setup

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/yourusername/ai-powered-finance-dashboard.git
cd ai-powered-finance-dashboad
```
### 2. Install Dependencies
Install the necessary dependencies:

```bash
npm install
```
### 3. Configure Groq API Key
Create a *.env* file in the project root directory and add your Groq API key:

```bash
GROQ_API_KEY=your_groq_api_key_here
```
### 4. Generate Tests Using AI
You can generate test cases by rinning:
```bash
npm run generate:test "Test that user is redirected to /dashboard after login"
```
Replace the test description with your own test scenario.

### Running Tests
To run the generated playwright tests locally:
```bash
npx playwright test
```

### CI/CD Integration with GitHub Actions
This project includes a GitHub Actions workflow for Continuous Integration (CI). Every time you push to the *main* branch or create a pull request, GitHub Actions will:
- Install dependencies
- Run the Playwright tests

## Workflow File
The CI pipeline is configured in the *.github/workflows/ci.yml* file.



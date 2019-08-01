# Retail store

- Run `npm install` from this projects root directory
- To run the project: Run `npm start`
- To verify business rules, navigate to src/index and change the input and observe the output.
- You will need to understand models like User, Item, Cart.
- Pass cart and user to store.calculateNetPayableAmount in order to calculate net payable.
- This project also has integration and unit tests under test folder.
- The tests are also documenting business rules.
- Run `npm run test` to execute all tests.
- Run `npm run cover-test` to execute all tests with coverage.
- Run `npm run coverage-report` to execute all tests with coverage and gather in HTML.
  The HTML could be found under coverage folder that will be created upon running the command.  

## Others
- `.babelrc`: Options for babel.
- `.editorconfig`: It will help your team to maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- `.eslintrc.json`: This store options for linter `eslint`.
- `.gitignore`: To ignore files and folder like node_modules, coverage...

## Commands
- `npm run start`
- `npm run lint`
- `npm run lint-fix`
- `npm run test`
- `npm run cover-test`
- `npm run coverage-report`

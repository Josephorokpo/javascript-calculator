# JavaScript Calculator

## Overview
This is a JavaScript calculator built using React.js. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It follows the formula logic for calculation, ensuring that operations are performed in the correct order of precedence.

## Features
Supports addition, subtraction, multiplication, and division.
Allows chaining of multiple operations.
Displays the entire expression as it is typed.
Handles decimal points and prevents multiple decimal points in a single number.
Ensures proper handling of multiple consecutive operators, following the rule that the last operator is the one performed.
Precision handling for calculations, ensuring accurate results to several decimal places.

## User Stories
1. The calculator includes an equals button (=) with an id="equals".
2.It includes buttons for numbers 0-9 with corresponding IDs (id="zero" to id="nine").
3. The four primary operators (addition, subtraction, multiplication, division) each have a corresponding ID (id="add", id="subtract", id="multiply", id="divide").
4. A decimal point button is provided with id="decimal".
5. A clear button with id="clear" resets the calculator.
6. The calculator displays the input and result in an element with id="display".
7.The calculator supports chaining operations and displays results following correct order of operations.
8.The calculator prevents input from starting with multiple zeros.
9. Decimal points are correctly handled, preventing multiple decimals in one number.
10.Operations involving decimal points are performed accurately.
11. If multiple operators are entered consecutively, the last operator is used.
12. Following an evaluation, pressing an operator starts a new calculation with the previous result.

## Installation
1. Clone the repository:
 git clone https://github.com/yourusername/javascript-calculator.git

2. Navigate to the project directory:
 cd javascript-calculator

3. Install the dependencies
 npm install

4. Start the development server:
 npm start

## Usage
- Click the number buttons to input numbers.
- Use the operator buttons to perform arithmetic operations.
- Press = to evaluate the expression.
- Press C to clear the display and start over.

## Demo:  
 https://josephorokpo.github.io/javascript-calculator/

## Deployment
This project can be deployed on GitHub Pages. To do so, ensure the homepage field in package.json is set to "https://yourusername.github.io/javascript-calculator". Then, run:
 npm run deploy

This will build the project and push the static files to the gh-pages branch, making it live on GitHub Pages.
## Lab Sample Manager

#### A sample sorter application to manage the assignment of lab test tubes to racks based on specific legal constraints.

1. Each tube contains a material for a specific patient.
2. It is illegal to place patients of the same age into the same rack.
3. It is illegal to place patients working in the same company into the same rack.
4. It is illegal to place patients who live in the same city district into the same rack.
5. It is illegal to place patients with the same vision defect into the same rack.
6. The number of racks is very limited.

## How to Use
* You can add your own custom test tube or load a set of example tubes by clicking the "Load example tubes" button.
* Next, click the "Sort test tubes" button. The tubes will be sorted and displayed according to the constraints above.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Tests:

`npm test`

To Start Server:

`npm start`

This will run the app on `http://localhost:3000` by default. Open this URL in your browser to view the application.

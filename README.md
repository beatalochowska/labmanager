## Lab Sample Manager

#### A sample sorter application to manage the assignment of lab test tubes to racks based on specific legal constraints.

1. Each tube contains a material for a specific patient.
2. It is illegal to place patients of the same age into the same rack.
3. It is illegal to place patients working in the same company into the same rack.
4. It is illegal to place patients who live in the same city district into the same rack.
5. It is illegal to place patients with the same vision defect into the same rack.
6. The number of racks is very limited.

You can add your own custom tube or load set of example tubes using button "Load example tubes". Next click "Sort test tubes" button. Your tubes should be sorted and displayed correctly acording to the contrains above.

## Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

This will run the app on `http://localhost:3000` by default. Open this URL in your browser to view the application.

Running Tests

To run the unit tests and verify that all components and utility functions work as expected, run:

`npm test`

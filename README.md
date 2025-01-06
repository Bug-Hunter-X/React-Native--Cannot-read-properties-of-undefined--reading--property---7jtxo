# React Native: Cannot read properties of undefined (reading 'property')

This repository demonstrates a common error in React Native applications where attempting to access a property of an undefined or null object throws a "Cannot read properties of undefined (reading 'property')" error. The example showcases the error and provides a solution using optional chaining and nullish coalescing.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the application.
4. Observe the error in the console and the rendered output.

## Solution

The provided solution implements optional chaining (?.) and nullish coalescing (??) to handle cases where the object or its property might be undefined or null.
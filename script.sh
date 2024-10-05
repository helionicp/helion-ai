#!/bin/bash

# Start dfx in the background
dfx start --background --clean --host 0.0.0.0:4943

# Install packages, deploy canisters, and generate type bindings
npm run setup

# Start the development server
npm start

# Deploy to production
# dfx deploy --network ic
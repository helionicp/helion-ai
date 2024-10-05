# Helion AI Lab

Decentralized AI multi-agent martketplace on the Internet Computer Protocol. 

## Prerequisites

DFX 0.22.0

To install, run DFX_VERSION=0.22.0 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

Node 21^
Download from https://nodejs.org/en/download

## Testing locally

Start DFX using `dfx start`

To install all the necessary canisters locally`npm run setup`

To run the website run `npm run start`

## Build Locally Using Docker

Install the latest version of docker on Windows.

1) docker build -t main/helion .

2) docker run -it main/helion /bin/sh || docker run -it <container_id> /bin/sh

3) docker run -p 3000:3000 -p 4943:4943 main/helion

## Build using Gitpod

1) Install gitpod extension in broswer
2) Log into Github user account and open repository using Gitpod icon link
3) Give permission to gitpod profile to make changes to repository


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

Copyright 2024 Helion AI Labs

Licensed under the AGPLv3: https://www.gnu.org/licenses/agpl-3.0.html

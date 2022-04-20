# Random Solana Testbed

### Components: 
- Solana Blockchain
- Anchor is a framework to build on Solana
- MetaPlex is an NFT framework on Solana
- Switchboard is a tool for building Oracles

### Docs: 
- https://solanacookbook.com/#contributing
- https://book.anchor-lang.com
- https://docs.metaplex.com/storefront/introduction
- https://docs.switchboard.xyz/developers/localnet
- https://solana-labs.github.io/solana-web3.js/

### Technical Notes:
- Local network starts with solana-test-validator
- @solana/web3.js acts like Ethereums web3 library
- Switchboard offers localnet testing mocks

### Rough Testing Plan: 

* Document user flows to build up a series of manual tests to be carried out

* Build an integration environment
    * Docker-compose a local network with deterministic state
    * Deploy said network with Github Actions for CI testing

* Check there’s a proper test/dev/deployment divide for releasing 



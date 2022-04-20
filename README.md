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
* Check there’s a proper test/dev/deployment divide for releasing 
* Build an integration environment
    * Docker-compose a local network with deterministic state
        * Mock switchboard feeds
        * Alice/Bob testing accounts with funds
        * Metaplex storefront for UI testing
    * Deploy said network with Github Actions for CI testing
* Develop a framework over the Metaplex Storefront (cypress?)
* Develop a framework over the Solana Programs (@solana/web3.js?)
* Move manual testing documented in point 1 into CI with these frameworks

### Down The Line Plans: 

* Research best testing practices across other projects for Solana Programs and evaluate/implement
   * Static analysis tools like [Slither](https://github.com/crytic/slither)
   * Fuzzing
   * General best practices 
* Security
   * Auditors? 
   * Bug bounty boards? 

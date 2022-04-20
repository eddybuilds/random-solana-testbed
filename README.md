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

## Draft Testing Strategy

### Apprentice: 
* Document user flows to build up a series of manual tests to be carried out
* Check there’s a proper test/dev/deployment divide for releasing
* Build an integration environment
    * Docker-compose a local network with deterministic state
        * Mock switchboard feeds
        * Alice/Bob testing accounts with funds
        * Metaplex storefront for UI testing
    * Deploy said network with Github Actions for CI testing
        * Add current automated tests into CI
        * Set-up test reporting

### Journeyman: 
* Develop a framework over the Metaplex Storefront (cypress?)
* Develop a framework over the Solana Programs (@solana/web3.js?)
* Move manual testing documented in point 1 into CI with these frameworks
* Switchboard/Oracles
   * Health checks on data uptime and data consistency between oracles
      * Well-tested disaster plans if all oracles are down, etc... 
   * General integration tests between oracle and internal services 

### Master: 
* Research best testing practices across other projects for Solana Programs and evaluate/implement
   * Static analysis tools like [Slither](https://github.com/crytic/slither)
   * Fuzzing tools like [Echidna](https://github.com/crytic/echidna)
   * General best practices 
* Open-source security
   * Auditors? 
   * Bug bounty boards? 

### Non-Functional Testing:
* Performance
* Volume
   * World cup and everyone is going divvy over divvy? 
* Disaster recovery
   * All oracle datapoints go down so contract does't receive result
   * 50/50 split conesnsus between oracle datapoints 
   * Bet never receives results

### Caveats:
This assumes linear work without interruptions. Things that will require more attention as and when they pop up

#### Milestones: 
* Mainnet Launch
* Token Launch

#### Bugs
* Confirm and troubleshoot issues raised internally and by the community

### Random thoughts: 
* What happens if a bad actor adds a custom bet designed to have insane odds, but they can fix the game? Limits?
* What is the betting algorithm? Simple ratio of `For:Against`?
* ...

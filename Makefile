launch-testnet:
		solana-test-validator

launch-clean-testnet:
		solana-test-validator -r

solana-localnet:
		solana config set --url localhost

solana-devnet:
		solana config set --url devnet

solana-bootstrap:
		solana-keygen new -o /root/.config/solana/id.json --force
		solana config set --url localhost
		solana airdrop 100

launch-metaplex:
		# https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported
		# nvm install 16 && nvm use 16
		export NODE_OPTIONS=--openssl-legacy-provider
		cd metaplex/js && \
				yarn install && \
				yarn bootstrap && \
				yarn build && \
				yarn start
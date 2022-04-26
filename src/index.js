import {
  clusterApiUrl,
  Connection,
  Keypair,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction
} from "@solana/web3.js";


const alice = Keypair.generate();
const bob = Keypair.generate();

let connection = new Connection(clusterApiUrl('testnet'));

const airdropSignature = await connection.requestAirdrop(
  alice.publicKey,
  1000000000,
);

await connection.confirmTransaction(airdropSignature);

console.log(`Alice: ${(await connection.getBalance(alice.publicKey)) / 1000000000} SOL`);
console.log(`Bob:   ${(await connection.getBalance(alice.publicKey)) / 1000000000} SOL`);

let transaction = new Transaction();

transaction.add(
  SystemProgram.transfer({
    fromPubkey: alice.publicKey,
    toPubkey: bob.publicKey,
    lamports: 100000000
  })
);

await sendAndConfirmTransaction(
  connection,
  transaction,
  [alice]
);

console.log(`Alice: ${(await connection.getBalance(alice.publicKey)) / 1000000000} SOL`);
console.log(`Bob:   ${(await connection.getBalance(alice.publicKey)) / 1000000000} SOL`);

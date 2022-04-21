import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MyChain } from "../target/types/my_chain";

describe("my-chain", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MyChain as Program<MyChain>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});

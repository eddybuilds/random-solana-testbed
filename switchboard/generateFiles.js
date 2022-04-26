import { SwitchboardTestEnvironment } from "@switchboard-xyz/switchboard-v2";
import { Keypair, PublicKey } from "@solana/web3.js";

const keyPair = Keypair.generate();

const testEnv = await SwitchboardTestEnvironment.create(keyPair, {
  USDC_MINT: new PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"),
});
testEnv.writeAll("./switchboard_test_env", process.cwd());
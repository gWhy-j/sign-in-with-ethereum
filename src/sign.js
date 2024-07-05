import { privateKeyToAccount } from 'viem/accounts'
import { encodePacked, keccak256 } from 'viem';
import dotenv from "dotenv";
dotenv.config();
 
const account = privateKeyToAccount(process.env.DEV)
 
async function main() {
    const signature = await account.signMessage({
        // Hex data representation of message.
        message: {raw: keccak256(encodePacked(['uint256', 'string'], [
            100,
            "ipfs://QmPMaxM9eQcz9wzLd8XXAHtCTyW5zqQzeVD3X88XcuDvw7"
          ]))},
      });
    console.log(signature);
}

main();
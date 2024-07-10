import { privateKeyToAccount } from 'viem/accounts'
import { encodePacked, keccak256 } from 'viem';
import dotenv from "dotenv";
dotenv.config();
 
const account = privateKeyToAccount(process.env.DEPLOYER)

const user1 = "0x1d8e5a1c88aCfccED410f1a7A89237BA11FaF02F";
const user2 = "0x2300Ed1feECD5Fe7D1913DD3eB4699aC05D16122";
const validTimestamp = 1770186688;
const invalidTimestamp = 1710187779;
 
async function main() {
    const user1FristSig = await account.signMessage({
        message: {raw: keccak256(encodePacked(['address', 'uint256', 'uint256', 'string', 'uint256'], [
            user1,
            0,
            100,
            "ipfs://QmPMaxM9eQcz9wzLd8XXAHtCTyW5zqQzeVD3X88XcuDvw7",
            validTimestamp
          ]))},
    });
    const user1SecondSig = await account.signMessage({
        message: {raw: keccak256(encodePacked(['address', 'uint256', 'uint256', 'string', 'uint256'], [
            user1,
            1,
            200,
            "ipfs://QmPMaxM9eQcz9wzLd8XXAHtCTyW5zqQzeVD3X88XcuDvw8",
            validTimestamp
          ]))},
    });
    const user1InvalidSig = await account.signMessage({
        message: {raw: keccak256(encodePacked(['address', 'uint256', 'uint256', 'string', 'uint256'], [
            user1,
            1,
            200,
            "ipfs://QmPMaxM9eQcz9wzLd8XXAHtCTyW5zqQzeVD3X88XcuDvw8",
            invalidTimestamp
          ]))},
    });
    const user2FristSig = await account.signMessage({
        message: {raw: keccak256(encodePacked(['address', 'uint256', 'uint256', 'string', 'uint256'], [
            user2,
            0,
            100,
            "ipfs://QmPMaxM9eQcz9wzLd8XXAHtCTyW5zqQzeVD3X88XcuDvw7",
            validTimestamp
          ]))},
    });
    const user2SecondSig = await account.signMessage({
        message: {raw: keccak256(encodePacked(['address', 'uint256', 'uint256', 'string', 'uint256'], [
            user2,
            2,
            200,
            "ipfs://QmPMaxM9eQcz9wzLd8XXAHtCTyW5zqQzeVD3X88XcuDvw8",
            validTimestamp
          ]))},
    });
    const user2InvalidSig = await account.signMessage({
        message: {raw: keccak256(encodePacked(['address', 'uint256', 'uint256', 'string', 'uint256'], [
            user2,
            2,
            200,
            "ipfs://QmPMaxM9eQcz9wzLd8XXAHtCTyW5zqQzeVD3X88XcuDvw8",
            invalidTimestamp
          ]))},
    });
    console.log({
        user1FristSig,user1SecondSig,user1InvalidSig,user2FristSig,user2SecondSig,user2InvalidSig
    });
}

main();
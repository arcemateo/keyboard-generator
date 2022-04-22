import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x388d54A3d2c3be107610Eb488D723CBEE6327055';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}

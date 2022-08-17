import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'AllowTest',
  tokenName: 'AllowTest',
  tokenSymbol: 'ALT',
  hiddenMetadataUri: "ipfs://bafkreibvnudhtwgj2zcckbqs5xdulkxhuw2lkavdz3nc65mzmtytvil7lm/",
  maxSupply: 5000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  contractAddress: 'null',
  marketplaceIdentifier: 'AllowTest',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

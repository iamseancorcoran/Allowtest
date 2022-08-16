import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'AllowTest',
  tokenName: 'AllowTest',
  tokenSymbol: 'ALT',
  hiddenMetadataUri: "ipfs://bafkreibvnudhtwgj2zcckbqs5xdulkxhuw2lkavdz3nc65mzmtytvil7lm/",
  maxSupply: 1000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "0xf25F970d8962e1ddf14C2B3220EF8D2a72E8d681",
  marketplaceIdentifier: 'AllowTest',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

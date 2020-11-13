// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

export default {
  "Address": "GenericAddress",
  "LookupSource": "GenericLookupSource",
  "EthereumAddress": "H160",
  "EcdsaSignature": "[u8; 65]",
  "EthereumTxHash": "H256",
  "WorkerInfo": {
    "machineId": "Vec<u8>",
    "pubkey": "Vec<u8>",
    "lastUpdated": "u64",
    "status": "i32",
    "score": "Option<Score>"
  },
  "Score": {
    "overallScore": "u32",
    "features": "Vec<u32>"
  },
  "StashInfo": {
    "controller": "AccountId",
    "payoutPrefs": "PayoutPrefs"
  },
  "PayoutPrefs": {
    "commission": "u32",
    "target": "AccountId"
  },
  "MiningInfo": {
    "isMining": "bool",
    "startBlock": "Option<BlockNumber>"
  }
};

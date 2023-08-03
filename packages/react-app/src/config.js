import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x70aa855cDB1297186EF1fA2BebE87dc922F35987";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/KmQtEo-413DQ6gZpixQCdjSikm7hrIma",
  },
};
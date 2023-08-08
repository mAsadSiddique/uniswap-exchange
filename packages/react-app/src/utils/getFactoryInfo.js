import { abis } from "@my-app/contracts"
import { getPairsInfo } from "./getPairsInfo"

export const getFactoryInfo = async (factoryAddress, web3) => {
    const factory = new web3.eth.Contract(abis.factory, factoryAddress)

    const factoryInfo = {
        fee: await factory.methods.feeTo().call(),
        feeToSetter: await factory.methods.feeToSetter().call(),
        allPairsLength: await factory.methods.allPairsLength().call(),
        allPairs: []
    }

    for (let index = 0; index < factoryInfo.allPairsLength; index++) {
        factoryInfo.allPairs[index] = await factory.methods.allPairs(index).call()
    }

    factoryInfo.pairsInfo = await getPairsInfo(factoryInfo.allPairs, web3)

    return factoryInfo
}
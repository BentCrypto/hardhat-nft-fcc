const networkConfig = {
    default: {
        name: "hardhat",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        automationUpdateInterval: "30",
    },
    31337: {
        name: "localhost",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        automationUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
        mintFee: "10000000000000000", // 0.01 ETH
    },
    1: {
        name: "mainnet",
        linkToken: "0x514910771af9ca656af840dff83e8264ecf986ca",
        fundAmount: "0",
        automationUpdateInterval: "30",
    },
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        callbackGasLimit: "500000", // 500,000 gas
        mintFee: "10000000000000000", // 0.01 ETH
        subscriptionId: "10326", // add your ID here!
    },
    137: {
        name: "polygon",
        linkToken: "0xb0897686c545045afc77cf20ec7a532e3120e0f1",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
        oracle: "0x0a31078cd57d23bf9e8e8f1ba78356ca2090569e",
        jobId: "12b86114fa9e46bab3ca436f88e1a912",
        fee: "100000000000000",
        fundAmount: "100000000000000",
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const DECIMALS = "18"
const INITIAL_PRICE = "200000000000000000000"

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    DECIMALS,
    INITIAL_PRICE,
}

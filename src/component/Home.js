import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import './Style.css'
import Web3 from "web3";

import bgimage from "../asset/parkday.png";
import mirror from "../asset/mirror_transparent.png";
import banner from "../asset/banner_transparent.png";
import bannerSmall from "../asset/banner_transparent_25px.png";
import bannerMedium from "../asset/banner_transparent_55px.png";
import logo from "../asset/logo.png";
import exampleHamstar from "../asset/example.gif";

function Home({ myref }) {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(``);
    const [mintAmount, setMintAmount] = useState(1);
    const [totalCost, setTotalCost] = useState(0.045);
    const [maxWhitelistMint, setMaxWhitelistMint] = useState(0);
    const [isWhitelisted, setIsWhitelisted] = useState(false);
    const [initialTotalSupply, setInitialTotalSupply] = useState(0);
    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        SCAN_LINK: "",
        NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
        },
        NFT_NAME: "",
        SYMBOL: "",
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: "",
        MARKETPLACE_LINK: "",
        SHOW_BACKGROUND: false,
    });

    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let gasLimitMulti = CONFIG.GAS_LIMIT_MULTI;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        if (mintAmount > 1) { // use lower gas limit for multiple transactions
            totalGasLimit = String(100000 * mintAmount);
        }
        if (mintAmount > 2) {
            totalGasLimit = String(80000 * mintAmount);
        }
        if (mintAmount > 3) {
            totalGasLimit = String(70000 * mintAmount);
        }
        if (mintAmount > 4) {
            totalGasLimit = String(60000 * mintAmount);
        }
        if (mintAmount > 9) {
            totalGasLimit = String(55000 * mintAmount);
        }
        if (mintAmount > 14) {
            totalGasLimit = String(50000 * mintAmount);
        }
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        //setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setFeedback(``);
        setClaimingNft(true);
        blockchain.smartContract.methods
        .mint(mintAmount)
        .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
        })
        .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
        })
        .then((receipt) => {
            console.log(receipt);
            setFeedback(
            `Hamstar successfully minted! Go to Opensea.io to view your Hamstar!`
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
        });
    };

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
        newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
        let newTotalCost = newMintAmount * CONFIG.DISPLAY_COST;
        setTotalCost(newTotalCost.toFixed(3));
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        
        // Presale limits, It's connected properly
        /*if (blockchain.account !== "" && blockchain.smartContract !== null) {
            if (isWhitelisted) {
                // Make sure newMintAmount doesn't go over the max
                if (newMintAmount > maxWhitelistMint) {
                    newMintAmount = maxWhitelistMint;
                }
            } else {
                // Otherwise, it should always stay at 0
                newMintAmount = 0;
            }
        }*/
        
        // Public sale numbers
        if (newMintAmount > 20) {
             newMintAmount = 20;
        }
        setMintAmount(newMintAmount);
        let newTotalCost = newMintAmount * CONFIG.DISPLAY_COST;
        setTotalCost(newTotalCost.toFixed(3));
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
        }
    };

    const getConfig = async () => {
        const configResponse = await fetch("/config/config.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
    };

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    const getMaxWhitelistMint = async () => {
        try {
            // If blockchain.account exists, check what the max mint is
            if (blockchain.account !== "" && blockchain.smartContract !== null) {
                // Get Config
                const configResponse = await fetch("/config/config.json", {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });
                const config = await configResponse.json();
                // Get ABI
                const abiResponse = await fetch("/config/abi.json", {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });
                const abi = await abiResponse.json();
                // Get Web3
                const web3 = new Web3(
                    new Web3.providers.HttpProvider(config.PROVIDER)
                );
                
                // Get Contract
                const hamstarzContract = new web3.eth.Contract(
                    abi,
                    config.CONTRACT_ADDRESS
                );
                
            
                    dispatch(fetchData(blockchain.account));
                

                const maxWhitelistMintAmt = await hamstarzContract.methods
                    .whitelistMaxMint(blockchain.account)
                    .call();

                setMaxWhitelistMint(maxWhitelistMintAmt);

                const onWhitelist = await hamstarzContract.methods
                    .onWhitelist(blockchain.account)
                    .call();
                
                setIsWhitelisted(onWhitelist);
            }
        } catch (err) {
        }
    };

    useEffect(() => {
        getMaxWhitelistMint();
    }, [blockchain.account]);

    const getInitialTotalSupply = async () => {
        // Get Config
        const configResponse = await fetch("/config/config.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const config = await configResponse.json();
        // Get ABI
        const abiResponse = await fetch("/config/abi.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const abi = await abiResponse.json();
        // Get Web3
        const web3 = new Web3(
            new Web3.providers.HttpProvider(config.PROVIDER)
        );
        
        // Get Contract
        const hamstarzContract = new web3.eth.Contract(
            abi,
            config.CONTRACT_ADDRESS
        );
        const tokenSupply = await hamstarzContract.methods
            .totalPublicSupply()
            .call();

        setInitialTotalSupply(tokenSupply);
    };

    useEffect(() => {
        getInitialTotalSupply();
    }, []);
    

    return (
        <div ref={myref} className={"home-container"} >
            
            <div className={"overlay"}>

                <img className={'outfit-img'} src={mirror}/>

                <div className={"animated-banner"} style={{backgroundImage: `url(${bannerMedium})`}}> </div>

                


            </div>
        </div>
    );
}

export default Home;
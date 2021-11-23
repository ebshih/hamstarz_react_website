import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import './Style.css'

import bgimage from "../asset/bg.png";
import logo from "../asset/logo.png";
import exampleHamstar from "../asset/example.gif";

function Home({ myref }) {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
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
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
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
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 10) {
        newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
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


    return (
        <div ref={myref} className={"home-container"} style={{ backgroundImage: `url(${bgimage})` }}>
            <div className={"overlay"}>
                <div className="main-logo">
                    <img className={'logo-img'} src={logo}/>
                </div>
                <div className="split-container">
                    <div className={"spacer-horizontal"}/>
                    <div className={"image-1-of-2-container"}>
                        <img className={"sample-img"} src={exampleHamstar} />
                    </div>
                    <div className={"text-1-of-2-container"}>
                        <h2 className={"home-title"}>Mint Hamstarz</h2>
                        <h3 className={"home-desc-num"}>{data.totalSupply} / {CONFIG.MAX_SUPPLY}</h3>

                        {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                            <>
                                <p>
                                    The sale has ended.
                                </p>
                                <p>
                                You can still find {CONFIG.NFT_NAME} on 
                                </p>
                                <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                                {CONFIG.MARKETPLACE}
                                </a>
                            </>
                        ) : (
                        <>
                            <h3 className={"home-desc"}>1 {CONFIG.NFT_NAME} costs {CONFIG.DISPLAY_COST}{" "}{CONFIG.NETWORK.SYMBOL} + gas.</h3>

                            {blockchain.account === "" || blockchain.smartContract === null ? (
                            <>
                                <h2 className={"home-desc"}>Connect to the {CONFIG.NETWORK.NAME} Mainnet</h2>
                                    <div className={"connect-button"}>
                                        <button className={"connect-button"}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(connect());
                                                getData();
                                            } }
                                        >
                                            Connect
                                        </button>
                                    </div>
                                
                                {blockchain.errorMsg !== "" ? (
                                    <>
                                      <p
                                        style={{
                                          textAlign: "center"
                                        }}
                                      >
                                        {blockchain.errorMsg}
                                      </p>
                                    </>
                                ) : null}
                                
                            </>
                            ) : (
                            <>
                                <p className={"mint-feedback"}>
                                    {feedback}
                                </p>
                                <div />
                                <div className={"mint-quantity-bar"}>
                                    <button className={"dec-button"}
                                        style={{ lineHeight: 0.4 }}
                                        disabled={claimingNft ? 1 : 0}
                                        onClick={(e) => {
                                        e.preventDefault();
                                        decrementMintAmount();
                                        }}
                                    >
                                        -
                                    </button>
                                    <div className={"spacerMedium"}/>
                                    <p className={"mint-quantity-counter"}>
                                        {mintAmount}
                                    </p>
                                    <div className={"spacerMedium"}/>
                                    <button className={"inc-button"}
                                        disabled={claimingNft ? 1 : 0}
                                        onClick={(e) => {
                                        e.preventDefault();
                                        incrementMintAmount();
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <div>
                                    
                                </div>
                                <div/>
                                <div >
                                    <button className={"mint-button"}
                                        disabled={claimingNft ? 1 : 0}
                                        onClick={(e) => {
                                        e.preventDefault();
                                        claimNFTs();
                                        getData();
                                        }}
                                    >
                                        {claimingNft ? "Minting..." : "Mint Now"}
                                    </button>
                                </div>
                            </>

                            )}
                        </>
                        )}
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
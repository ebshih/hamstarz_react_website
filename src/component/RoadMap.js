import React from 'react';
import './Style.css'
import { Chrono } from "react-chrono";
import nemesis from "../asset/nemesis.png";
import netvrk from "../asset/netvrk.png";
import netvrkhoriz from "../asset/netvrkhoriz.png";
import nemscoin from "../asset/nemscoin.png";


function RoadMap({ myref }) {
    return (
        <div ref={myref} className={"road-container bottom-border font-options"}>
            <h1 className={"about-title"}>Roadmap</h1>
            <div className={"roadmap-container"}>
                <div className={"roadmap-section"}>
                    <h3 className={"roadmap-section-title"}>
                        20% minted 
                    </h3>
                    <div className={"spacerSmall"}/>
                    <div className={"roadmap-section-data"}>
                        <b>First Grand Prize and NFT Giveaway. </b>
                        When the 1337 Hamstar is minted, we will do a $15,000 giveaway to one lucky Hamstar holder! The more Hamstarz you hold the higher your chance to win. 
                        We will also be giving away 10 Hamstarz NFTs exclusively to our early adopters. Thank you so much for believing in us!
                        <div className={"spacerSmall"}/>
                        <b>Community art & meme contest. </b>
                        We know how important it is to build a strong community from the start, and what better way than with some memes and art. There will be prizes!
                    </div>
                </div>
            </div>
            <div className={"roadmap-container"}>
                <div className={"roadmap-section"}>
                    <h3 className={"roadmap-section-title"}>
                        40% minted
                    </h3>
                    <div className={"spacerSmall"}/>
                    <div className={"roadmap-section-data"}>
                        <b>Hamstarzland Grand Opening. </b> We have been hard at work building our first Hamstarzland theme park in collaboration with The Nemesis metaverse platform, as seen in our Discord sneak peeks. 
                        We will go live with our grand opening and host our first series of community mini-game tournaments to celebrate.
                        <div className={"spacerSmall"}/>
                        <b>Charity Donation Giveaway. </b> 
                        We will host our first charity donation giveaway live inside our theme park's interactive streaming theatre. With the help of the community, we will decide on a charity, or charities, to donate $20,000 to support animal rescue and wellfare. The team has a shortlist of hamster-focused charities in mind, and we are committed to working with the community to pick the best charity, or charities, that matches our community’s values.
                    </div>
                </div>
            </div>
            <div className={"roadmap-container"}>
                <div className={"roadmap-section"}>
                    <h3 className={"roadmap-section-title"}>
                        60% minted
                    </h3>
                    <div className={"spacerSmall"}/>
                    <div className={"roadmap-section-data"}>
                        <b>Free companion NFT. </b> 
                        Hamstarz NFT holders will receive a free companion NFT, which will provide unique benefits when paired with Hamstarz come breeding season. While hamsters in the human world are often solitary, Hamstarz on the contrary, are quite social. During their adventures, our Hamstarz meet and bond with not only other Hamstarz, but also with other species we have not yet encountered!
                    </div>
                </div>
            </div>
            <div className={"roadmap-container"}>
                <div className={"roadmap-section"}>
                    <h3 className={"roadmap-section-title"}>
                        80% minted
                    </h3>
                    <div className={"spacerSmall"}/>
                    <div className={"roadmap-section-data"}>
                        <b>Breeding adorable babies. </b> 
                        Holders of both a Hamstarz and a companion are able to breed and create babies. “Sugar, spice, and everything nice” may have been a winning formula for Professor Utonium, but our team has an even more promising concoction brewing… Depending on the type of companion, we may even see the birth of some entirely new species!
                    </div>
                </div>
            </div>
            <div className={"roadmap-container"}>
                <div className={"roadmap-section"}>
                    <h3 className={"roadmap-section-title"}>
                        90% minted
                    </h3>
                    <div className={"spacerSmall"}/>
                    <div className={"roadmap-section-data"}>
                        <b>Merch store. </b> 
                        An exclusive Hamstarz merch store will drop, featuring clothing and stationary for your everyday needs. We are super excited for the opportunity to spice things up in the human world for our community.
                        <div className={"spacerSmall"}/>
                        <b>Community fund created. </b>
                        Cultivating an engaged and empowered community is our top priority, and we plan to support this by launching a community grant fund starting with $30,000. These funds will go towards projects, charities, and/or causes that the community votes on. Furthermore, 2.5% of secondary market fees will go towards the community fund to support community-driven initiatives moving forward.
                    </div>
             </div>
            </div>
            <div className={"roadmap-container"}>
                <div className={"roadmap-section last-section"}>
                    <h3 className={"roadmap-section-title"}>
                        100% minted
                    </h3>
                    <div className={"spacerSmall"}/>
                    <div className={"roadmap-section-data"}>
                        <b>Expansion of Hamstarzland theme parks to NetVRk and Sandbox. </b>
                        Our team has acquired <b>5 Large plots of land in the NetVRk metaverse</b>, totaling over 50,000 sq meters (12.3 acres)! 
                        We are thrilled to expand our Hamstarzland into this space and create the perfect space for our Hamstarz community! 
                        After NetVRk, Sandbox and Voxels are next on our mission to be the Disneyland of the metaverses!
                        <div className={"spacerSmall"}/>

                        <b>Enjoy HamstarzCafe. </b> 
                        We will build an interactive hamster-themed cafe for NFT holders to enjoy cozy time in the VR universe. Holding a Hamstarz NFT will grant exclusive access to our HamstarzCafe inside Hamstarzland, where players can compete in speed runs,
                        2v2 arena games, and tournaments to earn rewards. Champions will be enshrined in the Hamstarz Hall of Fame!
                        <div className={"spacerSmall"}/>

                        <b>3D Playable Avatars. </b> We will create exclusive 3D interactive Hamstar avatars for NFT holders to play with inside our many theme parks and HamstarzCafe. 

                        <div className={"spacerSmall"}/>
                        <b>$HAMMY token. </b> We will integrate a fully compliant native utility token. Earn $HAMMY by holding your Hamstarz and participating in our metaverse gaming experiences and competitions. 
                        $HAMMY token will be your key to unlocking exclusive metaverse experiences and future planned NFT drops.

                        <div className={"spacerSmall"}/>
                        It is our mission to build expand Hamstarzlands into the biggest metaverses and create the best metaverse gaming and social hub for our community.
                        Expect a consistent schedule of social events, gaming tournaments, and contests for our Hamstarz community to play, earn, win prizes, and have fun! 
                         
                        <div className={"spacerSmall"}/>

                        <div className={"partners-container"}>
                            <div className={"partner-card"}>
                                <div ref={myref} className={"partner-logo-wrapper partner-left"} style={{ backgroundImage: `url(${netvrkhoriz})` }}></div>
                                </div>
                            <div className={"partner-card"}>
                                <div ref={myref} className={"partner-logo-wrapper partner-right"} style={{ backgroundImage: `url(${nemesis})` }}></div>
                                </div>
                        </div>
                    </div>
             </div>
            </div>
        </div>
    );
}

export default RoadMap;
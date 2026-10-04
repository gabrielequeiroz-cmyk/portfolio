import "./CardNFT.css";

function CardNFT() {
    return (
        <div className="card-nft">

            <div className="nft-image-container">
                <img
                    src="/images/nft.png"
                    alt="Equilibrium NFT"
                    className="nft-image"
                />

                <div className="image-overlay">
                    <span>👁</span>
                </div>
            </div>

            <h2>Equilibrium #3429</h2>

            <p className="description">
                Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="nft-info">

                <span className="price">
                    ♦ 0.041 ETH
                </span>

                <span className="time">
                    ◷ 3 days left
                </span>

            </div>

            <div className="divider"></div>

            <div className="creator">

                <img
                    src="/images/avatar.png"
                    alt="Jules Wyvern"
                    className="avatar"
                />

                <p>
                    Creation of <span>Jules Wyvern</span>
                </p>

            </div>

        </div>
    );
}

export default CardNFT;
import "./CardNFT.css";
import "animate.css";

function CardNFT({ titulo, descricao, preco, tempo }) {
    return (
        <div className="card-nft animate__animated animate__fadeInUp">
            <h2>{titulo}</h2>

            <p className="description">
                {descricao}
            </p>

            <div className="nft-info">
                <span className="price">
                    ♦ {preco} ETH
                </span>

                <span className="time">
                    ◷ {tempo}
                </span>
            </div>

            <div className="divider"></div>

            <div className="creator">
                <p>
                    Creation of <span>Jules Wyvern</span>
                </p>
            </div>
        </div>
    );
}

export default CardNFT;
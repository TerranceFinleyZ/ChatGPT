import React from 'react';
import { Coins } from "@/constants";

interface Coin {
    id: string;
    name: string;
    current_price: number;
    symbol: string;
    market_cap: number;
    volume: number;
    image: string;
    price_change_percentage_24h: number;
}

interface CoinListProps {
    filteredCoins: Coin[];
}

const CoinList: React.FC<CoinListProps> = ({ filteredCoins }) => {
    return (
        <>
            {filteredCoins && filteredCoins.map((coin) => (
                <Coins 
                    key={coin.id}
                    name={coin.name}
                    id={coin.id}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    volume={coin.volume}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                />
            ))}
        </>
    );
}

export default CoinList;

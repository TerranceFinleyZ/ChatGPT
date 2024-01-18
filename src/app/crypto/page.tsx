'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import Link from 'next/link';

type Coin = {
    id: string;
    name: string;
    symbol: string;
    image: string;
    price: string;
    market_cap: string;
    total_volume: string;
    price_change_percentage_24h: string;
};

export default function Home() {
    const [coins, setCoins] = useState<Coin[]>([]);

    useEffect(() => {
        getCoinsData();
    }, []);

    async function getCoinsData() {
        const response = await axios.get<Coin[]>(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
        );
        setCoins(response.data);
    }

    return (
        <div className='flex flex-col w-full min-h-screen justify-center items-center'>
            {coins.map((coin: Coin) => (
                <div className='coin_contianer' key={coin.id}>
                    <div className='coin_row'>
                        <div className='coin'>
                            <img src={coin.image} alt={coin.name} className='coin_img' />
                            <h1 className='coin_h1'>{coin.name}</h1>
                            <p className='coin_symbol'>{coin.symbol}</p>
                        </div>
                        <div className='coin_data'>
                            <p className='coin_price'>${coin.price}</p>
                            <p className='coin_volume'>${coin.total_volume.toLocaleString()}</p>

                            {Number(coin.price_change_percentage_24h) < 0 ? (
                                <p className='coin_percent red'>{Number(coin.price_change_percentage_24h).toFixed(2)}%</p>
                            ) : (
                                <p className='coin_percent green'>{Number(coin.price_change_percentage_24h).toFixed(2)}%</p                      >
                            )}

                            <p className='coin_marketcap'>
                                MKt Cap: ${coin.market_cap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <Link className='flex mb-9 items-center justify-center ' href="/">
      <MdArrowBackIosNew className="text-white lg:text-3xl mt-5 hover:-translate-y-1 hover:scale-110 duration-300" />
      </Link>
        </div>
    )
}
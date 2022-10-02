import axios from 'axios'
const Url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false` as string;


export const getQuotes = async () => {

    let coins = await axios.get(Url);
    return coins.data;
}

export const searchCoin = (coin :string, coins:any) =>{

    let resultCoins = coins.filter((value:any)=>{
        let symbol :string = value.symbol;
        let name :string = value.name;

        return symbol.toLowerCase().includes(coin) || name.toLowerCase().includes(coin);
    })
    
    return resultCoins;
}   

type Symbol = "off" | "on";

export const Numberformat = (num:number, symbol:Symbol) =>{
    if(symbol === 'on'){
        return new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(num);
    }else{
        return new Intl.NumberFormat('en-US').format(num);
    }
    
    
}
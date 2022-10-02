import { Request, Response } from "express"
import { getQuotes, Numberformat, searchCoin } from "./coins";

const home = async (req: Request, res: Response) =>{

    try {
        let coins = await getQuotes();
        res.render('pages/home', {coins, Nformat:Numberformat});
    } catch (error:any) {
        res.status(404).render('pages/404')
    }
    
}

const search = async (req: Request, res: Response) =>{

    if(!req.query.q){
        res.redirect('/')
    }
    else{
        try {
            let coins = await getQuotes();
    
            let coin = req.query.q as string;
            let coinsResult = searchCoin(coin.toLowerCase(), coins)
    
            coins = [...coinsResult];
            
            res.render('pages/home', {coins, Nformat:Numberformat});
        } catch (error:any) {
            res.status(404).render('pages/404')
        }
    }
    
}
export default {home, search}
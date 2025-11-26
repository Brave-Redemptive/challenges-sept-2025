import { Request, Response, NextFunction } from "express";
import { config } from "../config";
import * as redisCache from "../cache/redisCache";
import * as memoryCache from "../cache/memoryCache";
import { fetchLegacyCustomers } from "../services/legacyClient";
import { transformCustomers } from "../services/transform";

const CACHE_KEY = 'customers:all';
export async function getv2Customers(req: Request, res: Response, next: NextFunction){
try{

    const ttl = config.cacheTtlSeconds;
    //use redis to cache data
    let cachedData = null;
    if(config.useRedis){
        cachedData = await redisCache.getCachedData(CACHE_KEY);
    }else{
        cachedData = await memoryCache.getCachedData(CACHE_KEY)
    }
    if(cachedData) return res.json({source: 'cache', data: cachedData});

    //if cache is empty or cachedData is expired fetch cacheData
    const legacyData = await fetchLegacyCustomers();
    //transform data from legacyCustomer url
    const transformedData = transformCustomers(legacyData);
    
    //set redis with cachedData
    if(config.useRedis) {
        await redisCache.setCacheData(CACHE_KEY, transformedData, ttl)
    } else {
        await memoryCache.setCacheData(CACHE_KEY, transformedData, ttl)
    }

    return res.json({source: 'legacy', data: transformedData })

}catch(err){
next(err);
}
}
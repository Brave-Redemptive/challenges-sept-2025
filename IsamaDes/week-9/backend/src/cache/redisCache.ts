import Redis from 'ioredis';
import {config} from "../config/index";

const redisClient = new Redis(config.redisUrl);


/**
 * Retrieves data from Redis cache
 * @param cacheKey - The key to look up in Redis
 * @returns The cached data or null if not found
 */
export async function getCachedData<T>(cacheKey: string): Promise<T | null> {
  // Try to get the data from Redis
  const cachedJsonString = await redisClient.get(cacheKey);
  
  // If nothing found, return null
  if (!cachedJsonString) {
    return null;
  }
  
  // Parse the JSON string back to the original data type
  const cachedData = JSON.parse(cachedJsonString) as T;
  return cachedData;
}

/**
 * Stores data in Redis cache with automatic expiration
 * @param cacheKey - The key to store the data under
 * @param data - The data to cache
 * @param expirationInSeconds - How long to keep the data (default: 60 seconds)
 */
export async function setCacheData<T>(
  cacheKey: string, 
  data: T, 
  expirationInSeconds: number = 60
): Promise<void> {
  // Convert data to JSON string
  const jsonString = JSON.stringify(data);
  
  // Store in Redis with expiration time
  // 'EX' means "expire after X seconds"
  await redisClient.set(cacheKey, jsonString, 'EX', expirationInSeconds);
}
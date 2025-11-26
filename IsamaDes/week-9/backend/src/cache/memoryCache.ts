
import NodeCache from 'node-cache';

/**
 * In-memory cache using node-cache
 * This stores data in your Node.js server's memory (RAM)
 * 
 * Difference from Redis:
 * - node-cache: Stored in your app's memory (dies when server restarts)
 * - Redis: Separate server (persists across app restarts, can be shared)
 * 
 * Use node-cache for: Simple apps, development, single-server deployments
 * Use Redis for: Production, multiple servers, persistent caching
 */
const memoryCache = new NodeCache();

/**
 * Retrieves data from in-memory cache
 * @param cacheKey - The key to look up in cache
 * @returns The cached data or null if not found/expired
 */
export async function getCachedData<T>(cacheKey: string): Promise<T | null> {
  // Try to get data from memory cache
  const cachedValue = memoryCache.get<T>(cacheKey);
  
  // Return the value if found, otherwise return null
  // The ?? operator means "if undefined/null, use the right side"
  return cachedValue ?? null;
}

/**
 * Stores data in in-memory cache with automatic expiration
 * @param cacheKey - The key to store the data under
 * @param data - The data to cache
 * @param expirationInSeconds - How long to keep the data (default: 60 seconds)
 */
export async function setCacheData<T>(
  cacheKey: string, 
  data: T, 
  expirationInSeconds: number = 60
): Promise<void> {
  // Store data in memory cache with TTL (Time To Live)
  // After expirationInSeconds, node-cache automatically deletes it
  memoryCache.set(cacheKey, data, expirationInSeconds);
}

/**
 * @param cacheKey - The key to remove from cache
 */
export async function clearCachedData(cacheKey: string): Promise<void> {
  memoryCache.del(cacheKey);
}

/**
Clear all cached data
 */
export async function clearAllCache(): Promise<void> {
  memoryCache.flushAll();
}
export const config = {
port: process.env.PORT ? Number(process.env.PORT) : 4000,
legacyBaseUrl: process.env.LEGACY_BASE_URL || 'https://jsonplaceholder.typicode.com',
cacheTtlSeconds: Number(process.env.CACHE_TTL),
useRedis: process.env.USE_REDIS == "true",
redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
}


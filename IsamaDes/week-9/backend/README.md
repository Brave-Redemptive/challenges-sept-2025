# legacybridge-backend

## Discription:

Node integration service bridging legacy API -> modern endpoints (v2), with caching, retries, and versioning.

## FOLDER STRUCTURE

legacybridge-backend/
├── .github/workflows/ci.yml
├── docker-compose.yml (optional)
├── Dockerfile
├── package.json
├── tsconfig.json
├── jest.config.ts
├── src/
│ ├── index.ts
│ ├── server.ts
│ ├── config/
│ │ └── index.ts
│ ├── routes/
│ │ ├── v1/
│ │ │ └── customers.ts
│ │ └── v2/
│ │ └── customers.ts
│ ├── controllers/
│ │ └── customersController.ts
│ ├── services/
│ │ ├── legacyClient.ts
│ │ ├── transform.ts
│ │ └── retryHttp.ts
│ ├── cache/
│ │ ├── redisCache.ts
│ │ └── memoryCache.ts
│ ├── middlewares/
│ │ └── errorHandler.ts
│ ├── utils/
│ │ └── logger.ts
│ └── tests/
│ ├── transform.test.ts
│ └── legacyClient.test.ts
├── postman_collection.json
└── README.md

## Setup

1. `cp .env.example .env` and fill values
2. `npm ci`
3. `npm run dev`

## En

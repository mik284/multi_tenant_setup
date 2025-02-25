# multi-tenant
Multi Tenant Database Architecture.

## How to run

```bash
npm install
node index.js

or

pnpm install
pnpm start

or 

yarn install
yarn start
```

## How to test

```bash
curl http://localhost:3000/tenant?tenantId=1
curl http://localhost:3000/customer?tenantId=1&customer=michael
curl http://localhost:3000/customer?tenantId=1&customer=kamau
curl http://localhost:3000/customer?tenantId=2&customer=michael
curl http://localhost:3000/customer?tenantId=2&customer=kamau
```

## why we need multi-tenant database architecture

- Multi-tenant database architecture is a database architecture that allows multiple tenants to share a single database or multiple tenants to have their own databases.
- Multi-tenant database architecture is useful when you have a large number of customers and you want to manage them efficiently.
> NOTE:  Multi-tenant database architecture can be used for both single-tenant and multi-tenant applications.
      - Single-tenant applications can use single-tenant database architecture.
      - Multi-tenant applications can use multi-tenant database architecture.

## References

- [Multi-tenant Database Architecture](https://www.mongodb.com/languages/multi-tenant-database-architecture)
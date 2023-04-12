# Project Structure

```
node_modules/
|
public/
├── index.html
├── favicon.ico
docs/
|
cypress/
|
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── types.d.ts
│   └── ...
├── routes/
│   ├── types.d.ts
│   ├── AppRoutes.tsx
│   └── ...
├── hooks/
│   ├── types.d.ts
│   ├── useAuth.tsx
│   ├── useModal.tsx
│   └── ...
├── hoc/
│   │   ├── types.d.ts
│   │   ├── ErrorBoundary.tsx
│   │   ├── withLoading.tsx
│   │   └── PrivateRoute.tsx
├── store/
│   ├── configureStore.ts
│   ├── rootReducer.ts
│   ├── auth/
│   │   ├── authSlice.ts
│   │   ├── authAPI.ts
│   │   └── ...
│   ├── types.d.ts
│   └── ...
├── styles/
│   ├── global.css
│   ├── Header.module.css
│   └── ...
├── modules/
│   ├── login/
│   │   ├── LoginPage.tsx
│   │   ├── loginSlice.ts
│   │   ├── loginAPI.ts
│   │   ├── loginStyles.module.css
│   │   ├── types.d.ts
│   │   └── ...
│   └── ...
├── tests/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── routes/
│   │   ├── store/
│   │   ├── utils/
|   |   └── setupTests.ts
│   │   └── ...
├── types/
│   │   ├── index.d.ts
│   │   └── ...
├── App.tsx
└── index.ts
├── .env
├── .gitignore
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

# Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── ...
├── routes/
│   ├── AppRoutes.js
│   └── ...
├── hooks/
│   ├── useAuth.js
│   ├── useModal.js
│   └── ...
├── store/
│   ├── configureStore.js
│   ├── rootReducer.js
│   ├── auth/
│   │   ├── authSlice.js
│   │   ├── authAPI.js
│   │   └── ...
│   └── ...
├── styles/
│   ├── global.css
│   ├── Header.module.css
│   └── ...
├── modules/
│   ├── home/
│   │   ├── HomeRoutes.js
│   │   ├── HomePage.js
│   │   ├── homeSlice.js
│   │   ├── homeAPI.js
│   │   ├── homeStyles.module.css
│   │   └── ...
│   ├── login/
│   │   ├── LoginPage.js
│   │   ├── loginSlice.js
│   │   ├── loginAPI.js
│   │   ├── loginStyles.module.css
│   │   └── ...
│   ├── dashboard/
│   │   ├── DashboardRoutes.js
│   │   ├── DashboardPage.js
│   │   ├── dashboardSlice.js
│   │   ├── dashboardAPI.js
│   │   ├── dashboardStyles.module.css
│   │   └── ...
│   └── ...
├── App.js
└── index.js
```

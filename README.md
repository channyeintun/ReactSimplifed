# Project Name

This project is built with [React](https://reactjs.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) and is intended to...

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm start`.

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

## Conventional Git Commits

This project uses conventional Git commits to keep the commit history readable and organized. Conventional Git commits follow a specific format: `<type>(<scope>): <description>`.

The available types for commits are:

- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Changes to documentation.
- `style`: Changes to code style (no code changes).
- `refactor`: Code changes that neither fixes a bug nor adds a feature.
- `perf`: Code changes that improve performance.
- `test`: Adding or updating tests.
- `chore`: Changes to the build process, development tools, or other miscellaneous tasks.

The optional scope can indicate the area of the code affected by the commit.

For example, a conventional commit might look like this:  
  
`feat(login): add ability to remember login credentials`  


## Pull Requests

When creating a pull request, please follow these guidelines:

1. Use a clear and descriptive title.
2. Include a description of the changes made and any relevant context.
3. Ensure that all tests pass and the code is properly formatted and documented.
4. Assign at least one reviewer.
5. Wait for approval before merging the pull request.
  
For example,  
```  
# Description
[Describe what changes this pull request makes and why it should be merged.]

# Checklist
- [ ] I have read the contributing guidelines and this PR complies with them
- [ ] I have tested this PR locally and ensured that it works as expected
- [ ] I have added unit tests for the changes made in this PR
- [ ] I have updated the documentation to reflect any changes made in this PR
- [ ] I have assigned a reviewer to this PR

# Related Issues
[If there are any related issues or pull requests, link them here.]
```  
  
  
# Clean Code Rules

- Write meaningful and descriptive variable, function, and class names.
- Keep functions and methods short and focused on a single task.
- Use comments sparingly and only when necessary to clarify intent or explain complex code.
- Write code that is easy to read and understand, avoiding overly clever or obscure constructs.
- Avoid duplication of code and strive for code reuse and modular design.
- Write unit tests to verify the correctness of code and prevent regressions.
- Keep the codebase organized and maintainable, using consistent formatting and file structure.
- Refactor code regularly to improve clarity, maintainability, and performance.
- Avoid premature optimization and focus on writing correct, understandable, and maintainable code.



Setup:
```
yarn
```

Run:
```
yarn start
```

Test redux-persist not reloading `offline.outbox`:

1. Load the app http://localhost:3000/
2. Click the button
3. Notice the outbox count goes up
4. Check the dev console notice the failed requests and retries being logged
5. Refresh the page
6. Notice the outbox count goes back to 0
7. Check the dev console notice there is no failed requests or retries being logged

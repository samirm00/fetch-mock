# Mocking Fetch API with fetch-mock

## Introduction

This project demonstrates how to effectively mock the Fetch API for testing and development purposes. Mocking allows you to simulate network requests and responses, enabling you to isolate and test various parts of your application without making actual HTTP requests. We will explore two methods of achieving this: manual mocking in the api-post section and utilizing the fetch-mock library in the api-movie section.

### Manual Mocking in api-post

In the api-post section, we manually mock Fetch API requests and responses to simulate a server without making actual network requests. This approach is useful when you want fine-grained control over mocking specific endpoints and scenarios. Here's how it works:

We define a mockApiResponse function that intercepts Fetch API calls and returns mock responses.

Within the api-post directory, you can find examples of how to use mockApiResponse to simulate successful and error responses for various endpoints.

Use these mock responses during development and testing to ensure your application behaves correctly under different scenarios.

### Using `fetch-mock` library in api-movie

In the api-movie section, we take advantage of the fetch-mock library to simplify mocking the Fetch API. fetch-mock provides an elegant way to intercept and mock network requests without manual intervention. 

### Set up

#### To install dependencies

```bash
npm install
```

#### To format your files

```bash
npm run format
```

#### To run your tests

```bash
npm run test
```

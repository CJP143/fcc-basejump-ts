Welcome to the Timestamp Microservice
=====================================

The URL takes a string as a parameter, and it will check to see if that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

If it does, it returns a Unix timestamp and natural language form of the date.

If it does not, it returns null for both properties.

The example is hosted on **Glitch**

**Example usage:**

[https://endurable-trout.glitch.me/December 15, 2015](https://endurable-trout.glitch.me/December%2015,%202015)

[https://endurable-trout.glitch.me/1450137600](https://endurable-trout.glitch.me/1450137600)

**Example output:**

{ "unix": 1450137600, "natural": "December 15, 2015" }
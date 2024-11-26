# Introduction

Welcome to the GoTable API! You can use our API to access GoTable API endpoints, which can get information on restaurants, reservations, and availability in our database.

# Authentication

> To authorize, use this code:

```shell
# With shell, you have to pass the correct header with each request:
curl "https://gotable.app/api/v1/restaurants" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

```ruby
require 'gotable_api'

api = GoTableAPI::API.new(api_key: 'YOUR_API_KEY_HERE')

restaurants = api.restaurants.list
puts restaurants
```

> Make sure to replace `YOUR_API_KEY_HERE` with your API key.

GoTable uses API keys to allow access to the API. You can register a new GoTable API key by contacting our support team.

<aside class="notice">GoTable expects the API key to be included in all API requests to the server in a header that looks like the following:

<code>Authorization: Bearer YOUR_API_KEY_HERE</code> </aside>
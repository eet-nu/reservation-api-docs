# Restaurants

## Get Registered Restaurants

```shell
curl "https://gotable.app/api/v1/restaurants" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

> The above command returns JSON structured like this:

```json
{
  "restaurants": [
    {
      "id": 129946,
      "name": "Restaurant name",
      "telephone": "+31 6 23 45 67 89",
      "email": "info@gotable.nl",
      "street": "Brugstraat",
      "zipcode": "6136 AC",
      "street_number": "77",
      "city": "geleen",
      "country": "The Netherlands"
    },
    {
      "id": 129947,
      "name": "Another Restaurant",
      "telephone": "+31 6 12 34 56 78",
      "email": "info@anotherrestaurant.nl",
      "street": "Main Street",
      "zipcode": "1234 AB",
      "city": "Amsterdam",
      "country": "The Netherlands"
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 20,
    "total_pages": 5,
    "total_count": 100
  }
}
```
```ruby
{
  "restaurants": [
    {
      "id": 129946,
      "name": "Restaurant name",
      "telephone": "+31 6 23 45 67 89",
      "email": "info@gotable.nl",
      "street": "Brugstraat",
      "zipcode": "6136 AC",
      "street_number": "77",
      "city": "geleen",
      "country": "The Netherlands"
    },
    {
      "id": 129947,
      "name": "Another Restaurant",
      "telephone": "+31 6 12 34 56 78",
      "email": "info@anotherrestaurant.nl",
      "street": "Main Street",
      "zipcode": "1234 AB",
      "city": "Amsterdam",
      "country": "The Netherlands"
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 20,
    "total_pages": 5,
    "total_count": 100
  }
}
```

This endpoint retrieves all restaurants registered to your API Key.

### HTTP Request

`GET https://gotable.app/api/v1/restaurants`

### Query Parameters

| Parameter | Default | Description                    |
| --------- | ------- | ------------------------------ |
| page      | 1       | The page number for pagination |
| per_page  | 20      | Number of restaurants per page |

## Get a Specific Restaurant

```shell
curl "https://gotable.app/api/v1/restaurants/129946" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

> The above command returns JSON structured like this:

```json
{
  "id": 129946,
  "name": "Testorant",
  "telephone": "+31 6 28 79 87 78",
  "email": "John@doe.nl",
  "street": "Brugstraat 77",
  "zipcode": "6131 AC",
  "city": "Sittard",
  "country": "The Netherlands"
}
```

This endpoint retrieves a specific restaurant.

### HTTP Request

`GET https://gotable.app/api/v1/restaurants/<restaurantUid>`

### URL Parameters

| Parameter       | Description                     |
| --------------- | ------------------------------- |
| restaurantUid\* | The unique id of the restaurant |

## Create a New Restaurant

```shell
curl -X POST "https://gotable.app/api/v1/restaurants" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "restaurant": {
      "name": "New Restaurant",
      "email": "info@newrestaurant.com",
      "telephone": "+31 6 12 34 56 78",
      "private_feedback_url": "https://feedback.newrestaurant.com",
      "reservation_follow_up_setting": "always",
      "minimum_guests": 1,
      "maximum_guests": 10,
      "realtime_setting": "availability",
      "realtime_reject_setting": "accept",
      "country_code": "NL"
    }
  }'
```

> The above command returns JSON structured like this:

```json
{
  "id": 129948,
  "name": "New Restaurant",
  "telephone": "+31 6 12 34 56 78",
  "email": "info@newrestaurant.com",
  "private_feedback_url": "https://feedback.newrestaurant.com",
  "reservation_follow_up_setting": "always",
  "minimum_guests": 1,
  "maximum_guests": 10,
  "realtime_setting": "availability",
  "realtime_reject_setting": "accept",
  "country_code": "NL"
}
```

This endpoint creates a new restaurant. Creating a restaurant will automatically register this restaurant your api Key.


### HTTP Request

`POST https://gotable.app/api/v1/restaurants`

### Request Parameters

| Parameter                       | Type    | Default  | Description                                                                     |
| ------------------------------- | ------- | -------- | ------------------------------------------------------------------------------- |
| name\*                          | string  |          | The name of the restaurant                                                      |
| email\*                         | string  |          | The email address of the restaurant                                             |
| telephone                       | string  |          | The telephone number of the restaurant                                          |
| private_feedback_url            | string  |          | URL for private feedback (must start with http:// or https://)                  |
| reservation_follow_up_setting\* | string  | 'never'  | Must be one of: 'always', 'local', 'self', or 'never'                           |
| minimum_guests                  | integer |          | Minimum number of guests allowed (must be less than or equal to maximum_guests) |
| maximum_guests                  | integer |          | Maximum number of guests allowed                                                |
| realtime_setting\*              | string  | 'off'    | Must be one of: 'off', 'availability', or 'capacity'                            |
| realtime_reject_setting\*       | string  | 'accept' | Must be one of: 'accept' or 'reject'                                            |
| country_code\*                  | string  | 'NL'     | Two-letter country code                                                         |
| maintainer_ids                  | array   |          | Array of maintainer IDs                                                         |

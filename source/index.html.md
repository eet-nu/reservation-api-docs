---
title: GoTable API Reference

language_tabs:
  - shell
  - ruby
  - javascript

toc_footers:
  - <a href='https://gotable.app/api-signup'>Sign Up for a Developer Key</a>

includes:
  - errors

search: true

code_clipboard: true

meta:
  - name: description
    content: Documentation for the GoTable API
---

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
require 'gotable'

api = GoTable::APIClient.authorize!('YOUR_API_KEY_HERE')
api.restaurants.get
```

> Make sure to replace `YOUR_API_KEY_HERE` with your API key.

GoTable uses API keys to allow access to the API. You can register a new GoTable API key by contacting our support team.

<aside class="notice">GoTable expects the API key to be included in all API requests to the server in a header that looks like the following:

<code>Authorization: Bearer YOUR_API_KEY_HERE</code> </aside>

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

This endpoint creates a new restaurant.

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

# Availability

## Get Restaurant Availability

```shell
curl "https://gotable.app/api/v1/restaurants/129946/availability?from=2024-10-29&till=2024-11-01" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

> The above command returns JSON structured like this:

```json
{
  "from":"2024-09-18",
  "till":"2024-09-23",
  "availabilities":[
    {
      "date":"2024-09-18",
      "timeslots":[
        {
          "timeslot":"11:00",
          "minimum_seats_available":0,
          "maximum_seats_available":20
        },
        {
          "timeslot":"11:30",
          "minimum_seats_available":0,
          "maximum_seats_available":20
        },
        {
          "timeslot":"12:00",
          "minimum_seats_available":0,
          "maximum_seats_available":20
        }
      ]
    },
    {
      "date":"2024-09-18",
      "timeslots":[
        {
          "timeslot":"11:00",
          "minimum_seats_available":0,
          "maximum_seats_available":20
        },
        {
          "timeslot":"11:30",
          "minimum_seats_available":0,
          "maximum_seats_available":20
        },
        {
          "timeslot":"12:00",
          "minimum_seats_available":0,
          "maximum_seats_available":20
        }
      ]
    }
  ]
}
```

This endpoint retrieves the availability for a specific restaurant over a given date range.

### HTTP Request

`GET https://gotable.app/api/v1/restaurants/<restaurantUid>/availability`

### URL Parameters

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| ID\*      | The ID of the restaurant to retrieve availability for |

### Query Parameters

| Parameter       | Default  | Description                                      |
| --------------- | -------- | ------------------------------------------------ |
| from            | today    | Start date for availability (format: YYYY-MM-DD) |
| till            | tomorrow | End date for availability (format: YYYY-MM-DD)   |
| restaurantUid\* |          | The unique id of the restaurant                  |

### Response Structure

The response includes the following main elements:

-   `from`: The start date of the requested availability range
-   `till`: The end date of the requested availability range
-   `availabilities`: An array of availability objects, one for each date in the range

Each availability object contains:

-   `date`: The date for this availability entry
-   `timeslots`: An object where each key is a time slot (in "HH:MM" format) and each value is an array with two elements:
    -   The first element is the minimum number of seats available
    -   The second element is the maximum number of seats available

# Reservations

## Get Reservation

```shell
curl "https://gotable.app/api/v1/restaurants/<restaurantUid>/reservations/<reservationUid>" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

This endpoint retrieves information about a specific reservation.

### HTTP Request

`GET https://gotable.app/api/v1/<restaurantUid>/reservation/<reservationUid>`

### URL Parameters

| Parameter        | Description                      |
| ---------------- | -------------------------------- |
| restaurantUid\*  | The unique id of the restaurant  |
| reservationUid\* | The unique id of the reservation |

## Create Reservation

```shell
curl -X POST "https://gotable.app/api/v1/restaurants/<restaurantUid>/reservations" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "reservation": {
      "date": "2024-11-01",
      "time": "19:00",
      "party_size": 4,
      "customer_name": "John Doe",
      "customer_email": "john@example.com",
      "customer_phone": "+31612345678"
    }
  }'
```

This endpoint creates a new reservation for the restaurant.

### HTTP Request

`POST https://gotable.app/api/v1/<restaurantUid>/reservations`

> The above command returns JSON structured like this:

```json
{
  "id":3042496,
  "customer_name":"John Doe",
  "customer_email":"customer@example.com",
  "date":"2024-11-01",
  "time":"19:00",
  "guests":4,
  "state":"pending",
  "restaurant_id":129946
}

```


### URL Parameters

| Parameter       | Description                     |
| --------------- | ------------------------------- |
| restaurantUid\* | The unique id of the restaurant |

## Update Reservation

```shell
curl -X PUT "https://gotable.app/api/v1/restaurants/129946/reservations/12345" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "reservation": {
      "guests: 5
    }
  }'
```

This endpoint updates the details of a reservation. #TODO

### HTTP Request

`PUT https://gotable.app/api/v1/<restaurantUid>/reservation/<uid>`

> The above command returns JSON structured like this:

```json
{
  "id":3042496,
  "customer_name":"John Doe",
  "customer_email":"customer@example.com",
  "date":"2024-11-01",
  "time":"19:00",
  "guests":5,
  "state":"pending",
  "restaurant_id":129946
}

```

### URL Parameters

| Parameter       | Description                      |
| --------------- | -------------------------------- |
| restaurantUid\* | The unique id of the restaurant  |
| uid\*           | The unique id of the reservation |

## Cancel Reservation

```shell
curl -X DELETE "https://gotable.app/api/v1/restaurants/<restaurantUid>/reservations/<reservationUid>" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

This endpoint cancels a reservation. #TODO

### HTTP Request

`DELETE https://gotable.app/api/v1/<restaurantUid>/reservation/<uid>`

### URL Parameters

| Parameter       | Description                      |
| --------------- | -------------------------------- |
| restaurantUid\* | The unique id of the restaurant  |
| uid\*           | The unique id of the reservation |

# Tables

## Get Available Restaurant Tables

```shell
curl "https://gotable.app/api/v1/restaurants/129946/tables" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

This endpoint retrieves the list of tables for a restaurant.

### HTTP Request

`GET https://gotable.app/api/v1/<restaurantUid>/tables`

### URL Parameters

| Parameter       | Description                     |
| --------------- | ------------------------------- |
| restaurantUid\* | The unique id of the restaurant |

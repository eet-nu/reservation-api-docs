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

## Create Restaurant Table

```shell
curl -X POST "https://gotable.app/api/v1/restaurants/<restaurantUid>/tables" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "table": {
      "label": "Window Table",
      "section": "Main Floor",
      "maximum_guests": 6,
      "minimum_guests": 2,
      "realtime": true,
      "preference_order": 1,
      "enabled": true
    }
  }'
```

> The above command returns JSON structured like this:

```json
{
  "id": 19269,
  "restaurant_id": 129946,
  "label": "Window Table",
  "section": "Main Floor",
  "maximum_guests": 6,
  "realtime": true,
  "created_at": "2024-10-01T07:37:41.471Z",
  "updated_at": "2024-10-01T07:37:41.471Z",
  "preference_order": 1,
  "minimum_guests": 2,
  "enabled": true
}
```

This endpoint creates a new table for the specified restaurant.

### HTTP Request

`POST https://gotable.app/api/v1/restaurants/<restaurantUid>/tables`

### URL Parameters

| Parameter      | Description                     |
| -------------- | ------------------------------- |
| restaurantUid* | The unique ID of the restaurant |

### Request Body Parameters

| Parameter             | Type    | Description                                               |
| --------------------- | ------- | --------------------------------------------------------- |
| label*                | string  | The name or label of the table                            |
| section               | string  | The section or area where the table is located            |
| maximum_guests*       | integer | The maximum number of guests the table can accommodate    |
| minimum_guests        | integer | The minimum number of guests required for this table      |
| realtime              | boolean | Whether the table is available for realtime bookings      |
| preference_order      | integer | The order of preference for assigning this table          |
| enabled               | boolean | Whether the table is currently enabled for bookings       |
| external_table_number | string  | An external identifier for the table                      |

## Update Restaurant Table

```shell
curl -X PUT "https://gotable.app/api/v1/restaurants/<restaurantUid>/tables/<tableId>" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "table": {
      "maximum_guests": 3
    }
  }'
```

> The above command returns JSON structured like this:

```json
{
  "id": 19269,
  "restaurant_id": 129946,
  "label": "Window Table",
  "section": "Main Floor",
  "maximum_guests": 3,
  "realtime": true,
  "created_at": "2024-10-01T07:37:41.471Z",
  "updated_at": "2024-10-01T07:55:12.430Z",
  "preference_order": 1,
  "minimum_guests": 1,
  "enabled": true,
  "external_table_number": "13"
}
```

This endpoint updates an existing table for the specified restaurant.

### HTTP Request

`PUT https://gotable.app/api/v1/restaurants/<restaurantUid>/tables/<tableId>`

### URL Parameters

| Parameter      | Description                     |
| -------------- | ------------------------------- |
| restaurantUid* | The unique ID of the restaurant |
| tableId*       | The unique ID of the table      |

### Request Body Parameters

| Parameter             | Type    | Required | Description                                               |
| --------------------- | ------- | -------- | --------------------------------------------------------- |
| label                 | string  | No       | The name or label of the table                            |
| section               | string  | No       | The section or area where the table is located            |
| maximum_guests        | integer | No       | The maximum number of guests the table can accommodate    |
| minimum_guests        | integer | No       | The minimum number of guests required for this table      |
| realtime              | boolean | No       | Whether the table is available for realtime bookings      |
| preference_order      | integer | No       | The order of preference for assigning this table          |
| enabled               | boolean | No       | Whether the table is currently enabled for bookings       |
| external_table_number | string  | No       | An external identifier for the table                      |

Note: Include only the fields you want to update in the request body.
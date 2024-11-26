
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
          "min":0,
          "max":20
        },
        {
          "timeslot":"11:30",
          "min":0,
          "max":20
        },
        {
          "timeslot":"12:00",
          "min":0,
          "max":20
        }
      ]
    },
    {
      "date":"2024-09-18",
      "timeslots":[
        {
          "timeslot":"11:00",
          "min":0,
          "max":20
        },
        {
          "timeslot":"11:30",
          "min":0,
          "max":20
        },
        {
          "timeslot":"12:00",
          "min":0,
          "max":20
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

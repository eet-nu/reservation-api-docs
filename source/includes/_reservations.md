
# Reservations

## Get Reservation

```shell
curl "https://gotable.app/api/v1/restaurants/<restaurantUid>/reservations/<reservationUid>" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

This endpoint retrieves information about a specific reservation. Linked to a restaurant that is registered to your API Key.

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
      "customer_phone": "+31612345678",
      "type": "WalkIn" # if its a normal reservation, you can leave this field out
    }
  }'
```

This endpoint creates a new reservation for the restaurant. You can create a reservation for a restaurant that is registered to your API Key.
When the type is not provided, the reservation will be created as a normal reservation. If you want to create a walk-in reservation, you can provide the type as "WalkIn".
A walk-in reservation is a reservation that is made by a customer that is already in the restaurant. For a walk-in reservation, the date and time of the reservation will be the current date and time as default.


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

This endpoint updates the details of a reservation.

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

| Parameter       | Description           |
| --------------- | --------------------- |
| restaurantUid\* | id of the restaurant  |
| uid\*           | id of the reservation |

## Cancel Reservation

```shell
curl -X PUT "https://gotable.app/api/v1/restaurants/<restaurantUid>/reservations/<reservationUid>" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE"
```

This endpoint cancels a specific reservation.

### HTTP Request

`PUT https://gotable.app/api/v1/<restaurantUid>/reservation/<uid>`

### URL Parameters

| Parameter       | Description                      |
| --------------- | -------------------------------- |
| restaurantUid\* | The unique id of the restaurant  |
| uid\*           | The unique id of the reservation |
const FLIGHTS = [{
      "id": 1,
      "airline_code": "indigo",
      "airline": "Indigo",
      "number": "IND-101",
      "from": "HYDERABAD",
      "to": "KOLKATA",
      "from_code": "HYD",
      "to_code": "KOL",
      "depart_date": "Wed Sep 13 2017 16:02:07",
      "arrive_date": "Wed Sep 13 2017 18:03:07",
      "price": 3400,
      "return_trip": {
        "airline": "Indigo",
        "number": "INd-102",
        "from": "KOLKATA",
        "to": "HYDERABAD",
        "from_code": "KOL",
        "to_code": "HYD",
        "depart_date": "Thu Sep 14 2017 11:02:01",
        "arrive_date": "Thu Sep 14 2017 13:08:04",
        "price": 3200
      }
    }, {
      "id": 2,
      "airline_code": "indigo",
      "airline": "Indigo",
      "number": "IND-203",
      "from": "HYDERABAD",
      "to": "DELHI",
      "from_code": "HYD",
      "to_code": "DEL",
      "depart_date": "Wed Sep 20 2017 14:02:08",
      "arrive_date": "Wed Sep 20 2017 18:03:08",
      "price": 5900,
      "return_trip": {
        "airline": "Indigo",
        "number": "IND-204",
        "from": "DELHI",
        "to": "HYDERABAD",
        "from_code": "DEL",
        "to_code": "HYD",
        "depart_date": "Thu Sep 21 2017 09:03:07",
        "arrive_date": "Thu Sep 21 2017 11:03:07",
        "price": 4500
      }
    }, {
      "id": 3,
      "airline_code": "ai",
      "airline": "Air India",
      "number": "AI-205",
      "from": "KOLKATA",
      "to": "DELHI",
      "from_code": "KOL",
      "to_code": "DEL",
      "depart_date": "Sat Sep 23 2017 17:03:07",
      "arrive_date": "Sat Sep 23 2017 19:03:07",
      "price": 2000,
      "return_trip": {
        "airline": "Air India",
        "number": "AI-206",
        "from": "DELHI",
        "to": "KOLKATA",
        "from_code": "DEL",
        "to_code": "KOL",
        "depart_date": "Mon Sep 25 2017 10:03:07",
        "arrive_date": "Mon Sep 25 2017 12:03:07",
        "price": 3000
      }
    }, {
      "id": 4,
      "airline_code": "indigo",
      "airline": "Indigo",
      "number": "IND-207",
      "from": "HYDERABAD",
      "to": "DELHI",
      "from_code": "HYD",
      "to_code": "DEL",
      "depart_date": "Tue Sep 26 2017 14:02:08",
      "arrive_date": "Tue Sep 26 2017 16:03:02",
      "price": 6200,
      "return_trip": {
        "airline": "Indigo",
        "number": "IND-208",
        "from": "DELHI",
        "to": "HYDERABAD",
        "from_code": "DEL",
        "to_code": "HYD",
        "depart_date": "Wed Sep 27 2017 10:03:07",
        "arrive_date": "Wed Sep 27 2017 12:03:07",
        "price": 7500
      }
    }];

  export default FLIGHTS;

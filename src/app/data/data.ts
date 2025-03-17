export interface Product {
    id: number;
    title: string;
    price: string;
    image: string;
    category: string;
    rating: number; // ✅ Keep it string because of .toFixed(1)
  }
  
  export const products: Product[] = [
        {
            "id": 1,
            "title": "Fashion Product 1",
            "price": "$435.36",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 2.4
        },
        {
            "id": 2,
            "title": "Home Appliances Product 2",
            "price": "$240.85",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 2.3
        },
        {
            "id": 3,
            "title": "Electronics Product 3",
            "price": "$234.0",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 2.1
        },
        {
            "id": 4,
            "title": "Home Appliances Product 4",
            "price": "$81.89",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 3.0
        },
        {
            "id": 5,
            "title": "Fashion Product 5",
            "price": "$154.62",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 2.7
        },
        {
            "id": 6,
            "title": "Fashion Product 6",
            "price": "$83.65",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 2.7
        },
        {
            "id": 7,
            "title": "Fashion Product 7",
            "price": "$415.7",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 2.2
        },
        {
            "id": 8,
            "title": "Toys Product 8",
            "price": "$187.86",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 4.9
        },
        {
            "id": 9,
            "title": "Fashion Product 9",
            "price": "$436.07",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 3.3
        },
        {
            "id": 10,
            "title": "Toys Product 10",
            "price": "$142.35",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 1.2
        },
        {
            "id": 11,
            "title": "Fashion Product 11",
            "price": "$281.33",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 2.2
        },
        {
            "id": 12,
            "title": "Electronics Product 12",
            "price": "$250.54",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 2.5
        },
        {
            "id": 13,
            "title": "Electronics Product 13",
            "price": "$408.13",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 2.0
        },
        {
            "id": 14,
            "title": "Electronics Product 14",
            "price": "$273.43",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 2.2
        },
        {
            "id": 15,
            "title": "Toys Product 15",
            "price": "$271.44",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 4.4
        },
        {
            "id": 16,
            "title": "Electronics Product 16",
            "price": "$424.01",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 1.9
        },
        {
            "id": 17,
            "title": "Fashion Product 17",
            "price": "$270.87",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 1.6
        },
        {
            "id": 18,
            "title": "Electronics Product 18",
            "price": "$179.56",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 4.0
        },
        {
            "id": 19,
            "title": "Electronics Product 19",
            "price": "$98.4",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 1.8
        },
        {
            "id": 20,
            "title": "Electronics Product 20",
            "price": "$368.57",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 4.7
        },
        {
            "id": 21,
            "title": "Fashion Product 21",
            "price": "$375.99",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 4.8
        },
        {
            "id": 22,
            "title": "Fashion Product 22",
            "price": "$244.71",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 4.3
        },
        {
            "id": 23,
            "title": "Home Appliances Product 23",
            "price": "$445.44",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 4.8
        },
        {
            "id": 24,
            "title": "Electronics Product 24",
            "price": "$484.83",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 2.3
        },
        {
            "id": 25,
            "title": "Home Appliances Product 25",
            "price": "$201.3",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 4.9
        },
        {
            "id": 26,
            "title": "Home Appliances Product 26",
            "price": "$94.63",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 2.0
        },
        {
            "id": 27,
            "title": "Toys Product 27",
            "price": "$381.89",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 3.7
        },
        {
            "id": 28,
            "title": "Fashion Product 28",
            "price": "$338.12",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 3.5
        },
        {
            "id": 29,
            "title": "Home Appliances Product 29",
            "price": "$197.09",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 2.3
        },
        {
            "id": 30,
            "title": "Toys Product 30",
            "price": "$73.41",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 3.9
        },
        {
            "id": 31,
            "title": "Fashion Product 31",
            "price": "$458.17",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 2.0
        },
        {
            "id": 32,
            "title": "Fashion Product 32",
            "price": "$332.25",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 2.1
        },
        {
            "id": 33,
            "title": "Home Appliances Product 33",
            "price": "$123.8",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 4.7
        },
        {
            "id": 34,
            "title": "Toys Product 34",
            "price": "$449.03",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Toys",
            "rating": 1.8
        },
        {
            "id": 35,
            "title": "Home Appliances Product 35",
            "price": "$145.47",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 1.8
        },
        {
            "id": 36,
            "title": "Toys Product 36",
            "price": "$459.58",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Toys",
            "rating": 4.1
        },
        {
            "id": 37,
            "title": "Home Appliances Product 37",
            "price": "$133.96",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 2.7
        },
        {
            "id": 38,
            "title": "Home Appliances Product 38",
            "price": "$180.1",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 3.4
        },
        {
            "id": 39,
            "title": "Toys Product 39",
            "price": "$360.12",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 1.3
        },
        {
            "id": 40,
            "title": "Electronics Product 40",
            "price": "$442.91",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 2.0
        },
        {
            "id": 41,
            "title": "Home Appliances Product 41",
            "price": "$207.34",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 1.5
        },
        {
            "id": 42,
            "title": "Home Appliances Product 42",
            "price": "$412.7",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 3.2
        },
        {
            "id": 43,
            "title": "Electronics Product 43",
            "price": "$121.79",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 3.4
        },
        {
            "id": 44,
            "title": "Fashion Product 44",
            "price": "$445.82",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 1.9
        },
        {
            "id": 45,
            "title": "Home Appliances Product 45",
            "price": "$487.34",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 3.4
        },
        {
            "id": 46,
            "title": "Toys Product 46",
            "price": "$156.91",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 3.0
        },
        {
            "id": 47,
            "title": "Fashion Product 47",
            "price": "$220.32",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 1.9
        },
        {
            "id": 48,
            "title": "Home Appliances Product 48",
            "price": "$250.04",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 3.1
        },
        {
            "id": 49,
            "title": "Fashion Product 49",
            "price": "$50.76",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 4.2
        },
        {
            "id": 50,
            "title": "Home Appliances Product 50",
            "price": "$343.89",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 3.0
        },
        {
            "id": 51,
            "title": "Home Appliances Product 51",
            "price": "$368.74",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 2.5
        },
        {
            "id": 52,
            "title": "Electronics Product 52",
            "price": "$355.74",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 1.6
        },
        {
            "id": 53,
            "title": "Fashion Product 53",
            "price": "$98.51",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 4.9
        },
        {
            "id": 54,
            "title": "Fashion Product 54",
            "price": "$250.85",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 3.6
        },
        {
            "id": 55,
            "title": "Electronics Product 55",
            "price": "$328.31",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 1.6
        },
        {
            "id": 56,
            "title": "Electronics Product 56",
            "price": "$467.01",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 2.7
        },
        {
            "id": 57,
            "title": "Electronics Product 57",
            "price": "$159.1",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 3.5
        },
        {
            "id": 58,
            "title": "Electronics Product 58",
            "price": "$166.77",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 4.8
        },
        {
            "id": 59,
            "title": "Toys Product 59",
            "price": "$407.8",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Toys",
            "rating": 2.7
        },
        {
            "id": 60,
            "title": "Home Appliances Product 60",
            "price": "$194.27",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 3.2
        },
        {
            "id": 61,
            "title": "Fashion Product 61",
            "price": "$287.82",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 2.1
        },
        {
            "id": 62,
            "title": "Electronics Product 62",
            "price": "$379.93",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 1.2
        },
        {
            "id": 63,
            "title": "Toys Product 63",
            "price": "$112.93",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Toys",
            "rating": 3.0
        },
        {
            "id": 64,
            "title": "Home Appliances Product 64",
            "price": "$362.09",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 4.2
        },
        {
            "id": 65,
            "title": "Toys Product 65",
            "price": "$81.25",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 3.2
        },
        {
            "id": 66,
            "title": "Toys Product 66",
            "price": "$225.59",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 3.8
        },
        {
            "id": 67,
            "title": "Fashion Product 67",
            "price": "$469.68",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 4.3
        },
        {
            "id": 68,
            "title": "Toys Product 68",
            "price": "$57.0",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 1.6
        },
        {
            "id": 69,
            "title": "Toys Product 69",
            "price": "$361.29",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 2.3
        },
        {
            "id": 70,
            "title": "Electronics Product 70",
            "price": "$263.16",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 2.5
        },
        {
            "id": 71,
            "title": "Home Appliances Product 71",
            "price": "$464.69",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 4.5
        },
        {
            "id": 72,
            "title": "Electronics Product 72",
            "price": "$369.35",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 1.8
        },
        {
            "id": 73,
            "title": "Home Appliances Product 73",
            "price": "$134.13",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 2.4
        },
        {
            "id": 74,
            "title": "Home Appliances Product 74",
            "price": "$120.5",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 1.5
        },
        {
            "id": 75,
            "title": "Fashion Product 75",
            "price": "$361.86",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 4.2
        },
        {
            "id": 76,
            "title": "Fashion Product 76",
            "price": "$53.01",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 4.0
        },
        {
            "id": 77,
            "title": "Electronics Product 77",
            "price": "$131.26",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 2.7
        },
        {
            "id": 78,
            "title": "Fashion Product 78",
            "price": "$274.69",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 4.2
        },
        {
            "id": 79,
            "title": "Toys Product 79",
            "price": "$304.95",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Toys",
            "rating": 1.8
        },
        {
            "id": 80,
            "title": "Home Appliances Product 80",
            "price": "$195.29",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 2.5
        },
        {
            "id": 81,
            "title": "Toys Product 81",
            "price": "$361.45",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 3.4
        },
        {
            "id": 82,
            "title": "Fashion Product 82",
            "price": "$498.66",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 2.3
        },
        {
            "id": 83,
            "title": "Electronics Product 83",
            "price": "$210.35",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 3.7
        },
        {
            "id": 84,
            "title": "Fashion Product 84",
            "price": "$110.5",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 3.9
        },
        {
            "id": 85,
            "title": "Electronics Product 85",
            "price": "$420.62",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 3.1
        },
        {
            "id": 86,
            "title": "Home Appliances Product 86",
            "price": "$436.92",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 1.6
        },
        {
            "id": 87,
            "title": "Fashion Product 87",
            "price": "$383.25",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 4.8
        },
        {
            "id": 88,
            "title": "Home Appliances Product 88",
            "price": "$405.19",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Home Appliances",
            "rating": 4.1
        },
        {
            "id": 89,
            "title": "Toys Product 89",
            "price": "$364.76",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 1.5
        },
        {
            "id": 90,
            "title": "Electronics Product 90",
            "price": "$182.7",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Electronics",
            "rating": 2.5
        },
        {
            "id": 91,
            "title": "Fashion Product 91",
            "price": "$119.41",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Fashion",
            "rating": 4.9
        },
        {
            "id": 92,
            "title": "Home Appliances Product 92",
            "price": "$452.57",
            "image": "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
            "category": "Home Appliances",
            "rating": 3.6
        },
        {
            "id": 93,
            "title": "Fashion Product 93",
            "price": "$191.97",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 1.1
        },
        {
            "id": 94,
            "title": "Toys Product 94",
            "price": "$446.41",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 4.7
        },
        {
            "id": 95,
            "title": "Toys Product 95",
            "price": "$339.3",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Toys",
            "rating": 3.5
        },
        {
            "id": 96,
            "title": "Toys Product 96",
            "price": "$156.89",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 2.9
        },
        {
            "id": 97,
            "title": "Toys Product 97",
            "price": "$477.58",
            "image": "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 3.7
        },
        {
            "id": 98,
            "title": "Electronics Product 98",
            "price": "$269.76",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Electronics",
            "rating": 1.7
        },
        {
            "id": 99,
            "title": "Toys Product 99",
            "price": "$351.13",
            "image": "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
            "category": "Toys",
            "rating": 1.5
        },
        {
            "id": 100,
            "title": "Fashion Product 100",
            "price": "$421.74",
            "image": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
            "category": "Fashion",
            "rating": 4.3
        }
    ]

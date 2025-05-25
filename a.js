import OrderModel from "./models/orderModel.js";

const om = new OrderModel();

let orders = [
  {
    "customer": "test@example.com",
    "products": [
      { "id": "1", "name": "Chăn Cotton Cao Cấp Everon", "quantity": 1, "price": 750000 },
      { "id": "2", "name": "Gối Lông Vũ Everon Standard", "quantity": 2, "price": 320000 }
    ],
    "total": 1390000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "7", "name": "Nệm Bông Ép Everon Comfort", "quantity": 1, "price": 2500000 },
      { "id": "6", "name": "Gối Ôm Cotton Everon", "quantity": 1, "price": 180000 }
    ],
    "total": 2680000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "4", "name": "Bộ Ga Gối Cotton Lụa Everon (Đơn)", "quantity": 1, "price": 980000 },
      { "id": "5", "name": "Chăn Lông Cừu Tổng Hợp Everon Warm", "quantity": 1, "price": 600000 }
    ],
    "total": 1580000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "3", "name": "Nệm Cao Su Thiên Nhiên Everon Luxe", "quantity": 1, "price": 8500000 }
    ],
    "total": 8500000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "9", "name": "Gối Cao Su Non Everon Ergonomic", "quantity": 2, "price": 480000 },
      { "id": "8", "name": "Chăn Hè Cotton Mỏng Everon Air", "quantity": 1, "price": 450000 }
    ],
    "total": 1410000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "10", "name": "Bộ Ga Gối Cotton Hàn Quốc Everon Queen", "quantity": 1, "price": 1350000 },
      { "id": "13", "name": "Gối Tựa Lưng Everon Decor", "quantity": 3, "price": 150000 }
    ],
    "total": 1800000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "11", "name": "Chăn Chần Bông Cao Cấp Everon Diamond", "quantity": 1, "price": 1100000 },
      { "id": "12", "name": "Nệm Lò Xo Túi Độc Lập Everon Gold", "quantity": 1, "price": 6200000 }
    ],
    "total": 7300000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "14", "name": "Bộ Ga Gối Lụa Tencel Everon King", "quantity": 1, "price": 2800000 },
      { "id": "18", "name": "Chăn Lụa Tơ Tằm Everon Silk", "quantity": 1, "price": 1800000 }
    ],
    "total": 4600000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "15", "name": "Chăn Đông Vải Nỉ Everon Cozy", "quantity": 1, "price": 550000 },
      { "id": "16", "name": "Gối Cao Su Thiên Nhiên Everon Kids", "quantity": 2, "price": 280000 },
      { "id": "17", "name": "Nệm Cuộn Everon Travel", "quantity": 1, "price": 950000 }
    ],
    "total": 2060000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  },
  {
    "customer": "test@example.com",
    "products": [
      { "id": "21", "name": "Chăn Tuyết Nhung Everon Plush", "quantity": 1, "price": 700000 },
      { "id": "25", "name": "Gối Massage Everon Relax", "quantity": 1, "price": 550000 }
    ],
    "total": 1250000,
    "payment": "Credit Card",
    "address": "123 Main St, Anytown, USA"
  }
]

Object.values(orders).map(async ord => {
    await om.add(ord);
});

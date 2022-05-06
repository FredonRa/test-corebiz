export type Product = {
    "productId": number,
    "productName": string,
    "stars": number,
    "imageUrl": string,
    "listPrice": number,
    "price": number,
    "installments": [
      {
        "quantity": number,
        "value": number
      }
    ],
    "length": number,
    "finalPrice": number
}
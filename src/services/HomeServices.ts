import {API_BASE, API_ROUTES} from "../constants"
import { Newsletter } from "../types/Newsletter";
import { Product } from "../types/product";

export default class HomeServices {
    static async getProducts(): Promise<Product[]> {
        let url = API_BASE + API_ROUTES.products;
        const response = await fetch(url)
        .then((response) => response.json())
        .catch((err) => {
            throw new Error(err)
        });
        return response
    }

    static async postNewsletter(data: Newsletter): Promise<string> {
        console.log(data)
        let url = API_BASE + API_ROUTES.newsletter;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .catch((err) => {
            throw new Error(err)
        });
        return response
    }
}
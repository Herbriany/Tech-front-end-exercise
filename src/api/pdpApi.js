import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://jsainsburyplc.github.io/front-end-test/products.json"

export function getProducts() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError)
}
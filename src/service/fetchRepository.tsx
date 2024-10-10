import { IProduct } from "./interface";

export async function getAll():Promise<IProduct[] | undefined>{
    const url = 'http://localhost:8080/products/all';
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        return json;
    }catch(error:Error|unknown){
        console.error(error);
    }
}

export async function getById(id:number):Promise<IProduct | undefined> {
    const url = 'http://localhost:8080/products/getById?id='+id
    try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`)
			}
			const json = await response.json()
			return json
		} catch (error: Error | unknown) {
			console.error(error)
		}
}
export async function create(product:IProduct){
    const url = 'http://localhost:8080/products/create'
    try{
        const response = await fetch(url,{
            method:"POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type":"application/json",
            },
        })
        const json = await response.json()
        console.log('Втаю', JSON.stringify(json))
    }catch(error){
        console.error('Помилка',error)
    }
}
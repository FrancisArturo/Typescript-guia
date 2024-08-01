(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id:string):string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'John',
        age: 25,
        address: {
            id: 123,
            zip: 'ASJ MNB',
            city: 'Tokyo'
        },
        getFullAddress(id:string) {
            return this.address.city
        }
    }

    const client2: Client = {
        name: 'Jane',
        address: {
            id: 456,
            zip: 'KIW TFD',
            city: 'Paris'
        },
        getFullAddress(id:string) {
            return this.address.city
        }
    }

    console.log(client);
    console.log(client2);
})()
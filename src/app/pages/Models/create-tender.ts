export interface CreateTenderOptions {

    unitOfMeasurement: Array<string>;

    categories: Array<string>;

    address: AddressOptions;

} 

export interface AddressOptions {
    states: Array<{key: string, value: Array<string>}>;
}

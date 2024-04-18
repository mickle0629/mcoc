/**
 * Lists each data models that represents data in the database.
 * This is done to ensure data integrity.
 *   For example:  type Parent is used in actions.tsx/insertParent to ensure
 *   all data entered are strings.
 */
export type Parent = {
    firstName: string;
    lastName: string;
    email?: string;
    phoneNumber?: string;
    zip: string
}

export type Shoe = {
    shoeType: string;
    shoeSize: string;
    child: Child;
}

export type Child = {
    firstName: string;
    lastName: string;
    age: number;
    dob: string;
    grade: number;
    school: string;
    
}

export type BulkOrder = {
    parent: Parent;
    shoes: Shoe[];

}
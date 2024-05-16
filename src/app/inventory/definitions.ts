/**
 * Lists each data models that represents data in the database.
 * This is done to ensure data integrity.
 *   For example:  type Parent is used in actions.tsx/insertParent to ensure
 *   all data entered are strings.
 */
export type Parent = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    zip: string
}

export type Order = {
    OrderID: number;
    ShoeID: number;
    ChildID: number;
    ParentID: number;
    OrderDate: Date
}

export type Child = {
    idChild: number;
    idiParent: number;
    fName: string;
    lName: string;
    age: string;
    dob: Date;
    grade: number;
    shoeType: string;
    shoeSize: string;
    SchoolAttending: string
}

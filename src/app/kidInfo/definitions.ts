/**
 * Lists each data models that represents data in the database.
 * This is done to ensure data integrity.
 *   For example:  type Parent is used in actions.tsx/insertParent to ensure
 *   all data entered are strings.
 */
export type Child = {
    firstName: string;
    lastName: string;
    age: string;
    grade: string;
    schoolattending: string;
    shoesize:string;
    shoestype:string;
}
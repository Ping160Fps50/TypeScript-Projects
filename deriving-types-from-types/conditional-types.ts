type StringArray = string[];

let id = 3;

type GetElementTypes<T> = T extends any[] ? T[number] : T;

type Example1 = GetElementTypes<StringArray>;
type Example2 = GetElementTypes<typeof id>;

type Fullname = { firstName: string; lastName: string };

type FullnameOrNothing<T> = T extends Fullname ? string : never;

function getFullname<T extends object>(obj: T): FullnameOrNothing<T> {
  if (
    "firstName" in obj &&
    "lastName" in obj &&
    obj.firstName &&
    obj.lastName
  ) {
    return `${obj.firstName} ${obj.lastName}` as FullnameOrNothing<T>;
  }
  throw new Error("Object does not have firstName or lastName");
}

let name1 = getFullname({});
let name2 = getFullname({ firstName: "Alireza", lastName: "Shahnazari" });

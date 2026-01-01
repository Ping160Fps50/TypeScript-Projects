type ReadPermisions = "read" | "no-read";
type WritePermisions = "write" | "no-write";
type DeletePermisions = "delete" | "no-delete";

type Permisions = `${ReadPermisions}-${WritePermisions}-${DeletePermisions}`;

type DataFile = {
  data: string;
  permisions: Permisions;
};

type DataFilesEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [Key in DataFilesEventNames]: () => void;
};

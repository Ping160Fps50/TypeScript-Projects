type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccssecedFileData = FileData & Status;
type AccssecedDatabaseData = DatabaseData & Status;

interface FileDatai {
  path: string;
  content: string;
}

interface DatabaseDatai {
  connectionUrl: string;
  credentials: string;
}

interface Statusi {
  isOpen: boolean;
  errorMessage?: string;
}

interface AccssecedFileDatai extends FileDatai, Statusi {}
interface AccssecedDatabaseDatai extends DatabaseDatai, Statusi {}

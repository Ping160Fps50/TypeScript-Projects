type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: "URL",
};

type DBSource = { type: "db"; connectionUrl: string };
const dBSource: DBSource = {
  type: "db",
  connectionUrl: "URL",
};

type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type === "file";
}

function loadData(source: Source) {
  // if ("path" in source) {
  //   source.path;
  //   return;
  // }
  // if (source.type === "file") {
  //   source.path;
  //   return;
  // }
  if (isFile(source)) {
    source.path;
    return;
  }
  source.connectionUrl;
}

class User {
  constructor(public name: string) {}

  join() {}
}

class Admin {
  constructor(public permisions: string[]) {}

  scan() {}
}

const user = new User("Alireza");
const admin = new Admin(["admin", "superadmin"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan();
}

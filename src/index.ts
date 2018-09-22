import fs from "fs";
import path from "path";
import shell from "shelljs";

export default function createFile(filePath: string) {
  const dirName = path.dirname(filePath);

  if (!fs.existsSync(dirName)) {
    // create directory
    shell.mkdir("-p", dirName);
  }
  shell.touch(filePath);
}

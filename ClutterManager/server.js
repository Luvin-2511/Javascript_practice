import fs1 from "fs";
import path from "path";
import fs from "fs/promises";

let basepath = "C:\\Users\\luvin\\Documents\\TestIng Web\\TestingAnimation";
let files = await fs.readdir(basepath);

for (const item of files) {
  let ext = item.split('.')[1];

  // Skip .json and .js files
  if (ext !== "json" && ext !== "js") {
    let folderPath = path.join(basepath, ext);
    let sourcePath = path.join(basepath, item);
    let destPath = path.join(folderPath, item);

    // If folder doesn't exist, create it
    if (!fs1.existsSync(folderPath)) {
      await fs.mkdir(folderPath);
    }

    // Move the file
    await fs.rename(sourcePath, destPath);
  }
}

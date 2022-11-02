/*
 * Description:
 * Created: 2022-11-02 18:59:12
 * Author : Wing
 * Email : cairz@mogulinker.com
 * -----
 * Last Modified: 2022-11-02 18:59:12
 * Modified By: Wing
 * -----
 * Copyright (c) 2022 www.mogulinker.com
 */

const path = require("path");
// const util = require("util");
const fs = require("fs");

const _deleteDir = (directoryPath, callback) => {
  const promisefs = fs.promises;
  async function rmdirAsync(directoryPath) {
    try {
      let stat = await promisefs.stat(directoryPath);
      if (stat.isFile()) {
        await promisefs.unlink(directoryPath);
      } else {
        let dirs = await promisefs.readdir(directoryPath);
        // 递归删除文件夹内容(文件/文件夹)
        dirs = dirs.map((dir) => rmdirAsync(path.join(directoryPath, dir)));
        await Promise.all(dirs);
        await promisefs.rmdir(directoryPath);
      }
    } catch (e) {
      alert(e);
      console.error(e);
    }
  }
  require("fs").existsSync(directoryPath) &&
    rmdirAsync(directoryPath).then(() => {
      // 确保文件/文件夹均已删除 => 回调
      callback && callback();
    });
};

// 异步读取上级目录下的所有文件
fs.readdir("./src/md/", function (err, files) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Result", files);
    let indexData = "";
    let fileNameStr = "";
    // 读取文件
    files.forEach((file, index) => {
      const basename = path.basename(file);
      const extname = path.extname(file);
      const filename = file.substring(0, basename.indexOf(extname));

      if (!extname.includes("ts")) {
        fileNameStr += `{  path: require('${path.join(
          __dirname,
          "/src/md/",
          file
        )}'), name: '${filename}', }${index !== files.length - 1 ? ",\n" : ""}`;
        // const data = fs.readFileSync(path.join(__dirname, '/src/md/', file), 'utf8');
        // fileNameStr += `{  path: '${data}', name: '${filename}', }${index !== files.length - 1 ? ",\n" : ""}`;
      }
      // 把md文件导入到index.ts
    });

    indexData += `export default [\n${fileNameStr}\n]`;
    console.log(indexData);
    // const indexPath = path.join(__dirname, "/src/md/index.ts");
    fs.writeFile(path.join(__dirname, "/src/md/index.ts"), indexData, (err) => {
      if (err) {
        console.log(err);
      }
    }); // 把md文件导入到index.ts
  }
});

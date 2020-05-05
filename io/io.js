const fs = require("fs");

module.exports.decodeHexFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath).toString();
    const decodedContent = decodeURIComponent(
      fileContent.replace(/\s+/g, "").replace(/[0-9a-f]{2}/g, "%$&")
    );
    resolve(decodedContent);
  });
};

const crypto = require("crypto");
class Hash {
  static encrypt(text, pass) {
    const password = pass;
    const salt = crypto.randomBytes(16); // Generate a random salt
    const key = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha512");
    const iv = crypto.randomBytes(16); // Generate a random IV
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return {
      text: `${salt.toString("hex")}:${iv.toString("hex")}:${encrypted}`,
      key: pass,
    };
  }

  static decrypt({ text: encryptedText, key: password }) {
    const [saltHex, ivHex, encrypted] = encryptedText.split(":");
    const salt = Buffer.from(saltHex, "hex");
    const key = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha512");
    const iv = Buffer.from(ivHex, "hex");
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return { text: decrypted, key: password };
  }
}

module.exports = Hash;

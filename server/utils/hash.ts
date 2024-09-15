import { config } from "~/server/config";
import {
  randomBytes,
  scrypt,
  timingSafeEqual,
  createHmac,
  BinaryToTextEncoding,
} from "node:crypto";

const KEY_LENGTH = 32;

export const createHash = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const salt = randomBytes(16).toString("hex");

    scrypt(password, salt, KEY_LENGTH, (err, derivedKey) => {
      if (err) reject(err);
      resolve(`${salt}.${derivedKey.toString("hex")}`);
    });
  });
};

export const verifyHash = (
  password: string,
  hash: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const [salt, hashKey] = hash.split(".");
    const hashKeyBuff = Buffer.from(hashKey, "hex");
    scrypt(password, salt, KEY_LENGTH, (err, derivedKey) => {
      if (err) {
        reject(err);
      }
      resolve(timingSafeEqual(hashKeyBuff, derivedKey));
    });
  });
};

export const createRandomHash = () => {
  return randomBytes(48).toString("base64url");
};

function createDigest(
  encodedData: unknown,
  format: BinaryToTextEncoding = "hex"
) {
  return createHmac("sha256", config.SECRET_KEY)
    .update(String(encodedData))
    .digest(format);
}

export function encodeHash<T>(source: T) {
  const json = JSON.stringify(source);
  const encodedData = Buffer.from(json).toString("hex");
  return `${encodedData}:${createDigest(encodedData, "hex")}`;
}

export function decodeHash<T>(value: string) {
  let [encodedData, sourceDigest] = value.split(":");
  if (!encodedData || !sourceDigest) throw new Error("invalid value");
  const json = Buffer.from(encodedData, "hex").toString("utf8");
  const decodedData = JSON.parse(json) as T;
  const checkDigest = createDigest(encodedData);
  const digestsEqual = timingSafeEqual(
    Buffer.from(sourceDigest, "hex"),
    Buffer.from(checkDigest, "hex")
  );
  if (!digestsEqual) throw new Error("invalid value");
  return decodedData;
}

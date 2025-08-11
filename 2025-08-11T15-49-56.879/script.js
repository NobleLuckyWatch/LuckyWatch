// script.js
const fs = require("fs");
const crypto = require("crypto");

const participantsFile = process.argv[2];
const seedFile = process.argv[3];

if (!participantsFile || !seedFile) {
  console.error("Cách dùng: node script.js <Participants.csv> <seed.txt>");
  process.exit(1);
}

const participantsData = fs
  .readFileSync(participantsFile, "utf8")
  .split("\n")
  .map(line => line.trim())
  .filter(line => line && !line.startsWith("#"))
  .map(line => {
    const parts = line.split(",");
    return { name: parts[0], phone: parts[1], playerId: parts[2] || "" };
  });

const seed = fs.readFileSync(seedFile, "utf8").trim();
const hash = crypto.createHash("sha256").update(seed).digest("hex");
const hashNumber = parseInt(hash.slice(0, 8), 16);
const winnerIndex = hashNumber % participantsData.length;
const winner = participantsData[winnerIndex];

console.log("===== KẾT QUẢ QUAY THƯỞNG =====");
console.log(`Tổng số người tham gia: ${participantsData.length}`);
console.log(`Seed (đã công bố trước): ${seed}`);
console.log(`SHA-256 Hash: ${hash}`);
console.log(`HashNumber (số nguyên từ hash): ${hashNumber}`);
console.log(`WinnerIndex (chỉ số người thắng): ${winnerIndex}`);
console.log("Người thắng:", winner);
console.log("===============================");

const { PrismaClient } = require("@prisma/client");

// Create a new Prisma Client instance
let prisma;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}
//check if the prisma instance is already defined

module.exports = prisma;

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// 非同期関数 main　を定義する
// この中にクエリを描く
async function main() {
    const addUser = await prisma.user.create({
        data: {
            name: "Alice",
            email: "alice@shun.io",
            address: "0x12345",
            chains: {
                create: {
                    chainName: "Polygon",
                }
            }
        }
    })
}

main().then(async () => {
    await prisma.$disconnect()
    console.log("Success")
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
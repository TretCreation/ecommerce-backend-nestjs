import { PrismaClient } from "@prisma/client"

import { users, productInfo, brands, types, products, wishlist, cart, orderProducts, orders } from "./data"

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.user.deleteMany()
    console.log("Deleted Users 🚮")

    await prisma.product_info.deleteMany()
    console.log("Deleted Product_info 🚮")

    await prisma.wishlist.deleteMany()
    console.log("Deleted Wishlist 🚮")

    await prisma.cart.deleteMany()
    console.log("Deleted Cart 🚮")

    await prisma.order_product.deleteMany()
    console.log("Deleted Order_Product 🚮")

    await prisma.product.deleteMany()
    console.log("Deleted Products 🚮")

    await prisma.brand.deleteMany()
    console.log("Deleted Brands 🚮")

    await prisma.type.deleteMany()
    console.log("Deleted Type 🚮")

    await prisma.order.deleteMany()
    console.log("Deleted Orders 🚮")

    await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`
    console.log("Reset User auto increment to 1 🔄")

    await prisma.$executeRaw`ALTER SEQUENCE "Product_info_id_seq" RESTART WITH 1;`
    console.log("Reset Product_info auto increment to 1 🔄")

    await prisma.$executeRaw`ALTER SEQUENCE "Wishlist_id_seq" RESTART WITH 1;`
    console.log("Reset Wishlist auto increment to 1 🔄")

    await prisma.$executeRaw`ALTER SEQUENCE "Cart_id_seq" RESTART WITH 1;`
    console.log("Reset Cart auto increment to 1 🔄")

    await prisma.$executeRaw`ALTER SEQUENCE "Order_product_id_seq" RESTART WITH 1;`
    console.log("Reset Order_Product auto increment to 1 🔄")

    await prisma.$executeRaw`ALTER SEQUENCE "Product_id_seq" RESTART WITH 1;`
    console.log("Reset Product auto increment to 1 🔄")

    await prisma.$executeRaw`ALTER SEQUENCE "Brand_id_seq" RESTART WITH 1;`
    console.log("Reset Brand auto increment to 1 🔄")

    await prisma.$executeRaw`ALTER SEQUENCE "Type_id_seq" RESTART WITH 1;`
    console.log("Reset Type auto increment to 1 🔄")

    await prisma.$executeRaw`ALTER SEQUENCE "Order_id_seq" RESTART WITH 1;`
    console.log("Reset Orders auto increment to 1 🔄")

    await prisma.user.createMany({
      data: users
    })
    console.log("Created Users 🌱")

    await prisma.product_info.createMany({
      data: productInfo
    })
    console.log("Created Product_info 🌱")

    await prisma.brand.createMany({
      data: brands
    })
    console.log("Created Brands 🌱")

    await prisma.type.createMany({
      data: types
    })
    console.log("Created Types 🌱")

    await prisma.product.createMany({
      data: products
    })
    console.log("Created Products 🌱")

    await prisma.wishlist.createMany({
      data: wishlist
    })
    console.log("Created Wishlist 🌱")

    await prisma.cart.createMany({
      data: cart
    })
    console.log("Created Cart 🌱")

    await prisma.order_product.createMany({
      data: orderProducts
    })
    console.log("Created Order_Products 🌱")

    await prisma.order.createMany({
      data: orders
    })
    console.log("Created Orders 🌱")

    console.log("Data seeding complete ✅")
  } catch (error) {
    console.log(error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

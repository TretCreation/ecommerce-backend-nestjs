import { PrismaClient } from "@prisma/client"

import { users, productInfo, brands, types, products, wishlist, cart, orderProduct, orders } from "./data"

const prisma = new PrismaClient()

async function main() {
  try {
    //* Users
    await prisma.user.deleteMany()
    console.log("Deleted Users")

    await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`
    console.log("Reset User auto increment to 1")

    await prisma.user.createMany({
      data: users
    })

    //* Product_info
    await prisma.product_info.deleteMany()
    console.log("Deleted Product_info")

    await prisma.$executeRaw`ALTER SEQUENCE "Product_info_id_seq" RESTART WITH 1;`
    console.log("Reset Product_info auto increment to 1")

    await prisma.product_info.createMany({
      data: productInfo
    })

    //* Brand
    await prisma.brand.deleteMany()
    console.log("Deleted Brands")

    await prisma.$executeRaw`ALTER SEQUENCE "Brand_id_seq" RESTART WITH 1;`
    console.log("Reset Brand auto increment to 1")

    await prisma.brand.createMany({
      data: brands
    })

    //* Type
    await prisma.type.deleteMany()
    console.log("Deleted Type")

    await prisma.$executeRaw`ALTER SEQUENCE "Type_id_seq" RESTART WITH 1;`
    console.log("Reset Type auto increment to 1")

    await prisma.type.createMany({
      data: types
    })

    //* Products
    await prisma.product.deleteMany()
    console.log("Deleted Products")

    await prisma.$executeRaw`ALTER SEQUENCE "Product_id_seq" RESTART WITH 1;`
    console.log("Reset Product auto increment to 1")

    await prisma.product.createMany({
      data: products
    })

    //* Wishlist
    await prisma.wishlist.deleteMany()
    console.log("Deleted Wishlist")

    await prisma.$executeRaw`ALTER SEQUENCE "Wishlist_id_seq" RESTART WITH 1;`
    console.log("Reset Wishlist auto increment to 1")

    await prisma.wishlist.createMany({
      data: wishlist
    })

    //* Cart
    await prisma.cart.deleteMany()
    console.log("Deleted Cart")

    await prisma.$executeRaw`ALTER SEQUENCE "Cart_id_seq" RESTART WITH 1;`
    console.log("Reset Cart auto increment to 1")

    await prisma.cart.createMany({
      data: cart
    })

    //* Order_Product
    await prisma.order_product.deleteMany()
    console.log("Deleted Order_Product")

    await prisma.$executeRaw`ALTER SEQUENCE "Order_Product_id_seq" RESTART WITH 1;`
    console.log("Reset Order_Product auto increment to 1")

    await prisma.order_product.createMany({
      data: orderProduct
    })

    //* Orders
    await prisma.order.deleteMany()
    console.log("Deleted Orders")

    await prisma.$executeRaw`ALTER SEQUENCE "Order_id_seq" RESTART WITH 1;`
    console.log("Reset Orders auto increment to 1")

    await prisma.order.createMany({
      data: orders
    })

    console.log("Data seeding complete")
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

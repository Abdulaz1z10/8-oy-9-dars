import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { IProductsPromise } from '@/app/types/users'
import { fetchProducts } from '@/app/lib/data'
import {deleteProduct} from '@/app/lib/userAction'

export default async function Products({searchParams}:{searchParams: {query: string, page: string}}) {
  const q = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1
  const results:IProductsPromise | undefined = await fetchProducts(q, page)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Color</td>
            <td>Size</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
        {
          results?.products?.map((product)=>(
            <tr key={product.title}>
            <td>
              <div className={styles.product}>
                <Image src={product.img || "/noavatar.jpg"} alt="user" width={40} height={40} className={styles.productImage}/>
                {product.title}
              </div>
            </td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.color}</td>
            <td>{product.size}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/${product._id}`}>
                <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <form action={deleteProduct}>
                <input type="text" hidden name="id" value={product?.id}/>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </form>
              </div>
            </td>
          </tr>
          ))
    }
        </tbody>
      </table>
      <Pagination count={results?.count} />
    </div>
  )
}

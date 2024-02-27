import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'
import {fetchProduct} from '@/app/lib/data'
import {updateProduct} from '@/app/lib/userAction'

export default async function SingleProductPage({params}: {params:{id:string}}) {
  const id = params.id
  const product = await fetchProduct(id)
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={product?.img || "/noavatar.jpg"} alt="" fill/>
            </div>
            {product.title}
        </div>
      <div className={styles.formContainer}>
      <form action={updateProduct} className={styles.form}>
        <input type="hidden" name="id" value={product.id} />
      <label>Title</label>
      <input type="text" name="title" placeholder={product.title}/>
      <label>Price</label>
      <input type="number" name="price" placeholder={product.price} />
      <label>Stock</label>
      <input type="number" name="stock" placeholder={product.stock} />
      <label>Color</label>
      <input type="text" name="color" placeholder={product.color} />
      <label>Size</label>
      <textarea name="size" placeholder={product.size}/>
      <label>Cat</label>
      <select name="cat" id="cat">
        <option value="kitchen">Kitchen</option>
        <option value="computers">Computers</option>
      </select>
      <label>Description</label>
      <textarea name="desc" id="desc" rows={10} placeholder={product.desc} ></textarea>
      <button>Update</button>
      </form>
      </div>
    </div>
  )
}

"use server"
import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { connectToDB} from "./utils"
import { redirect } from "next/navigation"
export const addUser =async(formData: FormData)=>{
    const {username, phone, email, password, isAdmin, isActive, address } = Object.fromEntries(formData)
    // console.log(username)    
    try{
    connectToDB
    const newUser = new User({
        username,phone, email, password, isAdmin, isActive, address 
    })
    await newUser.save()
    }catch(error){
    console.log(error)
}
revalidatePath("/dashboard/users")
redirect("/dashboard/users")
}

export const updateUser = async (formData: FormData) => {
  const {id, username, phone, email, password, isAdmin, isActive, address } = Object.fromEntries(formData);
  try {
    connectToDB;
    const updatedFields = {
        id, username, phone, email, password, isAdmin,isActive, address
    }
    await User.findByIdAndUpdate(id, updatedFields)
} catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async(formData:FormData)=>{
    const {id} = Object.fromEntries(formData)
    try{
        connectToDB()
        await User.findByIdAndDelete(id)
    }catch(error){
        console.log(error)
    }
    revalidatePath("/dashboard/users")
}

export const addProduct = async (formData: FormData) => {
  const { title, desc, price, stock, img, color, size } =
    Object.fromEntries(formData);
  // console.log(username)
  try {
    connectToDB;
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      img,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: FormData) => {
  const { id, title, desc, price, stock, img, color, size } = Object.fromEntries(formData);
  try {
    connectToDB;
    const updatedFields = {id, title, desc, price, stock, img, color, size}
    await Product.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async(formData:FormData)=>{
    const {id} = Object.fromEntries(formData)
    try{
        connectToDB()
        await Product.findByIdAndDelete(id)
    }catch(error){
        console.log(error)
    }
    revalidatePath("/dashboard/products")
}
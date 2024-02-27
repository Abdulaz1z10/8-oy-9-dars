"use client"
import React, { ChangeEvent } from 'react'
import styles from './search.module.css'
import {MdSearch} from 'react-icons/md'
import {useSearchParams, usePathname, useRouter } from 'next/navigation'
export default function Search({placeholder}: {placeholder: string}){
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()
    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        const params = new URLSearchParams(searchParams)
        params.set("query", e.target.value)
        replace(`${pathname}?${params}`)
    }
    return (
        <div className={styles.container}>
            <MdSearch/>
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleChange} />
        </div>
    )
}
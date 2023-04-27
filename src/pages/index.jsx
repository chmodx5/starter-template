import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import prisma from "@/utils/prismaConnector";

export default function Home({ products }) {
    return (
        <>
            <main>{JSON.stringify(products)}</main>
            <div>wow this thing is just another banger</div>
        </>
    );
}

export async function getServerSideProps() {
    const products = await prisma.product.findMany();

    return {
        props: {
            products: products,
        },
    };
}

import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from '../../components/layout.module.css';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>;
            <h2> <Link href="/" className={styles.link}>Back</Link></h2>
            
        </Layout>
    )

}
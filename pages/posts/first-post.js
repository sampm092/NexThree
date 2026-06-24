import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from '../../components/layout.module.css';
import Script from "next/script";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                {/* SDK ini dibutuhkan jika kamu ingin mengintegrasikan fitur-fitur Facebook di web kamu, seperti Facebook Login, Facebook Pixel (untuk tracking iklan), atau menyematkan (embed) Feed/Like button. */}
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload" //script Facebook ini baru akan dimuat setelah semua resource utama halaman selesai di-download
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            </Head>
            <h1>First Post</h1>
            <h2> <Link href="/" className={styles.link}>Back</Link></h2>

        </Layout>
    )

}
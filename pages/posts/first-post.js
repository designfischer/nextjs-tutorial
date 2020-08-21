import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../src/components/layout/layout'

function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <div>            
                First Post  
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </div>
        </Layout>
    )
}

export default FirstPost

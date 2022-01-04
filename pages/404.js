import Image from "next/image"
import Layout from "../components/Layout"
import logo from "../public/logo.jpeg"

export default function Custom404() {
    return (
        <Layout>
            <div className="container text-center">
                <h1>Error 404 - Page Not Found</h1>
                <Image src={logo} alt="Logo" />

            </div>
        </Layout>
    )
}
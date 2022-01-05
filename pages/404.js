import Image from "next/image"
import Layout from "../components/Layout"
import logo from "../public/logo.jpeg"
import { useLocales } from "../components/useLocales";

export default function Custom404() {
    const text = useLocales("about");
    return (
        <Layout title={text.title404}>
            <div className="container text-center">
                <h1>{text.title404}</h1>
                <Image src={logo} alt="Logo" />

            </div>
        </Layout>
    )
}
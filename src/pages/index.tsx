import Head from "next/head";
import { useState } from "react";

export default function Home() {
    const [theme, setTheme] = useState("");
    const [color, setColor] = useState("");

    return (
        <>
            <Head>
                <title>Gym</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />
                <meta name="theme-color" content={theme} />
            </Head>
            <main
                className={`h-screen overflow-hidden ${color} bg-black`}
            ></main>
        </>
    );
}

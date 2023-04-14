import '../styles/globals.css'
import React from 'react'
import {PromptInput} from "@/src/app/components/PromptInput";
import {Header} from "@/src/app/components/Header";


export const metadata = {
    title: 'Dall-e 2.0',
    description: 'Chat GPT image creator'
}

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Header/>
        <PromptInput/>
        <body>{children}</body>
        </html>
    )
}

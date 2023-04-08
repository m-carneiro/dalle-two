import '../styles/globals.css'
import React from 'react'
import {Header} from './components/Header'
import {PromptInput} from "@/src/app/components/Prompt";

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

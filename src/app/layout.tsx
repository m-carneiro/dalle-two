import '../styles/globals.css'
import React from "react";

export const metadata = {
  title: 'Dall-e 2.0',
  description: 'Chat GPT image creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

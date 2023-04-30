import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post page',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return children
}

export default RootLayout

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts page',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return children
}

export default RootLayout

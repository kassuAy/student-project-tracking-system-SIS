import clsx from 'clsx'
import Head from 'next/head'
// import { Footer } from '../navigation/footer/Footer'
// import NavBar from '../navigation/header/NavBar'

export interface BaseLayoutProps extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start'
  classname?: string
}

const BaseLayout = ({
  children,
  justify = 'items-center',
  className,
  ...divProps
}: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <title>Student Project Tracking System </title>
      </Head>
      <div
        {...divProps}
        className={clsx(`min-h-screen flex flex-col ${justify}`, className)}
      >
        {/* <NavBar /> */}
        <main>{children}</main>
        {/* <div className="m-auto" /> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default BaseLayout

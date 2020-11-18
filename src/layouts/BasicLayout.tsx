import React, { useEffect } from 'react'
import BottomNav from '@/components/BottomNav';
import Location from 'umi'

interface BasicLayoutProps {
  location: Location
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, location } = props
  useEffect(() => {}, [])
  const { pathname } = location
  return <div>
    <article>{children}</article>
    <BottomNav pathname={pathname} />
  </div>
}
export default BasicLayout

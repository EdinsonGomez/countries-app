'use client'

import { useRouter } from 'next/navigation';

const Flag = ({ src, alt, countryCode }) => {
  const router = useRouter();

  const onClick = () => {
    if (!countryCode) return
    router.push(`/country/${countryCode}`);
  }

  return (
    <img alt={alt} src={src} onClick={onClick} />
  )
}

export default Flag;
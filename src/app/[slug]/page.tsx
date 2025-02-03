import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export const metadata: Metadata = {
  title: 'Dynamic Page',
  description: 'Dynamic page description',
}

export default function Page({ params }: Props) {
  return (
    <div>
      <h1>Dynamic Route: {params.slug}</h1>
    </div>
  )
}
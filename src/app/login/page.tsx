import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Crazy Offers',
  description: 'Login to your account',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        {/* Add your login form or other content here */}
      </div>
    </div>
  )
}
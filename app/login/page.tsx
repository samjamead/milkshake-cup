import Messages from './messages';

export default function Login() {
  return (
    <div className='pt-12 flex flex-col w-full px-4 sm:max-w-md justify-center gap-2'>
      <p className='mb-8'>Logins coming soon (maybe 2024...)</p>
      <form
        className='mb-12 flex-1 flex flex-col w-full justify-center gap-2 text-foreground'
        action='/auth/sign-in'
        method='post'
      >
        <label className='text-md' htmlFor='email'>
          Email
        </label>
        <input
          className='rounded-md px-4 py-2 bg-inherit border mb-6'
          name='email'
          placeholder='you@example.com'
          required
        />
        <label className='text-md' htmlFor='password'>
          Password
        </label>
        <input
          className='rounded-md px-4 py-2 bg-inherit border mb-6'
          type='password'
          name='password'
          placeholder='••••••••'
          required
        />
        <button className='bg-green-700 rounded px-4 py-2 text-white mb-2'>
          Sign In
        </button>
        {/* <button
          formAction='/auth/sign-up'
          className='border border-gray-700 rounded px-4 py-2 text-black mb-2'
        >
          Sign Up
        </button> */}
        <Messages />
      </form>
    </div>
  );
}

import Messages from './messages';

export default function Login() {
  return (
    <div className='max-w-4xl mx-auto mt-8 mb-20 px-4 pt-12 flex flex-col justify-center gap-2'>
      <form
        className='mx-auto p-8 flex-1 flex flex-col w-full md:max-w-md justify-center gap-2 text-foreground border rounded-xl'
        action='/auth/sign-in'
        method='post'
      >
        <p className='mb-8 text-foreground'>
          Sorry to dissapoint but this doesn&apos;t do anything yet! Logins
          coming soon (maybe 2024...)
        </p>
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

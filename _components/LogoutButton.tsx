export default function LogoutButton() {
  return (
    <form action='/auth/sign-out' method='post'>
      <button className='py-2 px-4 text-slate-50 duration-300 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover'>
        Logout
      </button>
    </form>
  );
}

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-xl font-semibold'>Home Page</h1>
      <div className='text-center flex flex-col items-center gap-5'>
        <h2>You can see all users and posts</h2>
        <span>
          <Link
            href='/users'
            className='bg-orange-900 text-white rounded px-3 py-2 hover:bg-orange-950'
          >
            Users
          </Link>
          <Link
            href='/posts'
            className='bg-green-900 text-white rounded px-3 py-2 hover:bg-green-950 ml-4'
          >
            Posts
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HomePage;

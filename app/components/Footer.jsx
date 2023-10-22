const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-100 dark:bg-darktheme fixed inset-x-0 bottom-0 py-4'>
      <div className='container text-center'>
        <p className='font-medium'>Adel Tahenti &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;

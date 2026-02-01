import Link from 'next/link';

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <div className="flex justify-between items-center p-4 px-6">
      <h1 className="font-bold text-2xl text-color-white border-l-[7px] border-color-blue pl-2">{title}</h1>
      {linkTitle && linkHref ? (
        <Link href={linkHref} className="md:text-xl text-md underline text-color-blue hover:text-color-1">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

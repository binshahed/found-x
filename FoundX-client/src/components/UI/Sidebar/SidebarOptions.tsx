import Link from "next/link";

type LinkItems = {
  href: string;
  label: string;
};
const SidebarOptions = ({ links }: { links: LinkItems[] }) => {
  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link?.href}
          className="block w-full rounded-md px-3 py-2 hover:bg-default-200 "
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default SidebarOptions;

import Link from "next/link";

export const Arrow = ({ href = "#" }: { href?: string }) => {
  return (
    <div className="relative mt-20">
      <Link href={href} className="arrow-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </Link>
    </div>
  );
};

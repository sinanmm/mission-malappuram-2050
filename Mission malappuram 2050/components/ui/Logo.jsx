"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO, LOGO_ALT } from "@/lib/brand";

/**
 * @param {"header"|"mobile"|"footer"} variant
 */
const variants = {
  /** Navbar — cropped logo, height matches bar (h-14 / h-16). */
  header: {
    src: LOGO.navbar.src,
    mobileSrc: LOGO.navbarMobile.src,
    width: LOGO.navbar.width,
    height: LOGO.navbar.height,
    sizes: "(max-width: 640px) 130px, 170px",
    className: "h-11 w-auto sm:h-12 md:h-14",
    useMobileSource: true,
  },
  mobile: {
    src: LOGO.navbarMobile.src,
    width: LOGO.navbarMobile.width,
    height: LOGO.navbarMobile.height,
    sizes: "130px",
    className: "h-11 w-auto",
    useMobileSource: false,
  },
  footer: {
    src: LOGO.header.src,
    width: LOGO.header.width,
    height: LOGO.header.height,
    sizes: "(max-width: 640px) 200px, 280px",
    className: "h-auto w-[180px] max-w-[90vw] sm:w-[220px] md:w-[260px]",
    useMobileSource: false,
  },
};

function LogoImage({ asset, priority, className }) {
  const img = (
    <Image
      src={asset.src}
      alt={LOGO_ALT}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={`block object-contain object-left ${asset.className} ${className}`}
      sizes={asset.sizes}
    />
  );

  if (!asset.useMobileSource) {
    return img;
  }

  return (
    <picture>
      <source media="(max-width: 640px)" srcSet={asset.mobileSrc} />
      {img}
    </picture>
  );
}

export default function Logo({
  variant = "header",
  className = "",
  link = true,
  priority = false,
}) {
  const asset = variants[variant] ?? variants.header;
  const content = <LogoImage asset={asset} priority={priority} className={className} />;

  if (!link) {
    return <span className="inline-flex h-full shrink-0 items-center">{content}</span>;
  }

  return (
    <Link
      href="/"
      className="inline-flex h-full shrink-0 items-center rounded-sm transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-mist"
      aria-label={`${LOGO_ALT} — home`}
    >
      {content}
    </Link>
  );
}

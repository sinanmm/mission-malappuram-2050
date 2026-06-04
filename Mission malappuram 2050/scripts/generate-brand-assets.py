#!/usr/bin/env python3
"""Generate brand logo assets at recommended display/source sizes."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "logo.png"
OUT = ROOT / "public" / "brand"


def trim_to_content(im: Image.Image, padding: int = 12) -> Image.Image:
    """Remove empty transparent margins so navbar logo fills the bar."""
    im = im.convert("RGBA")
    bbox = im.split()[-1].getbbox()
    if not bbox:
        return im
    left, top, right, bottom = bbox
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(im.width, right + padding)
    bottom = min(im.height, bottom + padding)
    return im.crop((left, top, right, bottom))


def resize_by_height(im: Image.Image, height: int) -> Image.Image:
    ratio = height / im.height
    width = max(1, int(im.width * ratio))
    return im.resize((width, height), Image.Resampling.LANCZOS)


def lanczos_resize_square(im: Image.Image, size: int) -> Image.Image:
    if im.width == size and im.height == size:
        return im.copy()
    if im.width < size:
        return im.resize((size, size), Image.Resampling.LANCZOS)
    resized = im.copy()
    resized.thumbnail((size, size), Image.Resampling.LANCZOS)
    return resized


def save_navbar_logo(im: Image.Image, path: Path, display_height_px: int) -> tuple[int, int]:
    """2× source for retina; returns (width, height)."""
    source_h = display_height_px * 2
    out = resize_by_height(im, source_h)
    out.save(path, optimize=True)
    return out.width, out.height


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    src = Image.open(SRC).convert("RGBA")
    cropped = trim_to_content(src)

    # Navbar — tight crop, fills h-14 / h-16 bar (display heights 48px / 56px)
    nav_w, nav_h = save_navbar_logo(cropped, OUT / "logo-navbar.png", 56)
    mob_w, mob_h = save_navbar_logo(cropped, OUT / "logo-navbar-mobile.png", 48)

    # Legacy square exports (footer, etc.) from cropped for sharper horizontal logos
    cropped_800 = resize_by_height(cropped, 160)
    if cropped_800.width < 800:
        canvas = Image.new("RGBA", (800, 160), (0, 0, 0, 0))
        canvas.paste(cropped_800, (0, 0), cropped_800)
        cropped_800 = canvas
    cropped_800.save(OUT / "logo-header.png", optimize=True)

    resize_by_height(cropped, 112).save(OUT / "logo-mobile.png", optimize=True)
    lanczos_resize_square(src, 1000).save(OUT / "logo-master-1000.png", optimize=True)

    lanczos_resize_square(src, 512).save(OUT / "icon-512.png", optimize=True)
    lanczos_resize_square(src, 192).save(OUT / "icon-192.png", optimize=True)

    for size in (48, 32, 16):
        lanczos_resize_square(src, size).save(OUT / f"icon-{size}.png", optimize=True)

    lanczos_resize_square(src, 180).save(OUT / "apple-touch-icon.png", optimize=True)

    ico_32 = lanczos_resize_square(src, 32)
    ico_32.save(
        ROOT / "public" / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    og_w, og_h = 1200, 630
    bg = Image.new("RGBA", (og_w, og_h), (255, 253, 245, 255))
    logo_og = resize_by_height(cropped, 320)
    x = (og_w - logo_og.width) // 2
    y = (og_h - logo_og.height) // 2
    bg.paste(logo_og, (x, y), logo_og)
    bg.convert("RGB").save(OUT / "og-image.jpg", quality=90, optimize=True)

    print(f"Generated brand assets in {OUT.relative_to(ROOT)}")
    print(f"  logo-navbar.png: {nav_w}x{nav_h} (display ~56px tall)")
    print(f"  logo-navbar-mobile.png: {mob_w}x{mob_h} (display ~48px tall)")


if __name__ == "__main__":
    main()

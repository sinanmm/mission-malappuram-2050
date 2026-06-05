/** Verified Unsplash URLs (direct CDN, no Next image optimizer required). */
const unsplash = (photoId, width = 1920) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

/** Local images in /public */
const local = (path) => path;

export const siteImages = {
  hero: local("/images/hero.jpg"),
  malappuramLandscape: unsplash("photo-1500530855697-b586d89ba3ee"),
  whyMission: unsplash("photo-1500530855697-b586d89ba3ee", 2400),
  businessModel: unsplash("photo-1560518883-ce09059eeffa", 1920),
  blueZone: local("/images/blue-zone-habitat.jpg"),
  research: local("/images/madras.webp"),
  asiPrepared: unsplash("photo-1677442136019-21780ecad995"),
  finalCta: unsplash("photo-1501785888041-af3ef285b470"),
  teamChairman: local("/shahid.JPG"),
  teamExecutive: unsplash("photo-1573496359142-b8d87734a5a2"),
  teamInstitution: unsplash("photo-1472099645785-5658abf4ff4e"),
  projectBlueZone: local("/images/blue-zone-habitat.jpg"),
  brandVersity: local("/images/brand-versity.jpg"),
  projectBrandVersity: local("/images/brand-versity.jpg"),
  projectBusinessSchool: unsplash("photo-1524178232363-1fb2b075b655"),
  projectInfravision: unsplash("photo-1542744173-8e7e53415bb0"),
  projectSeekk: local("/images/seeaakk.jpg"),
  projectAiSchool: unsplash("photo-1677442136019-21780ecad995"),
  projectDesignSchool: unsplash("photo-1557804506-669a67965ba0"),
  projectThanalValley: unsplash("photo-1500382017468-9049fed747ef"),
  projectConsultancy: unsplash("photo-1552664730-d307ca884978"),
  projectSports: local("/3gmasda.jpeg"),
};

/** Gradient SVG used when a remote image fails to load in the browser. */
export const imageFallback =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a1510"/><stop offset="100%" stop-color="#2f8f83"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/></svg>'
  );

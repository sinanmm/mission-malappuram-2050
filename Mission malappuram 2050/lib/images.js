/** Verified Unsplash URLs (direct CDN, no Next image optimizer required). */
const unsplash = (photoId, width = 1920) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

export const siteImages = {
  hero: unsplash("photo-1506744038136-46273834b3fb"),
  malappuramLandscape: unsplash("photo-1500530855697-b586d89ba3ee"),
  whyMission: unsplash("photo-1500530855697-b586d89ba3ee", 2400),
  businessModel: unsplash("photo-1560518883-ce09059eeffa", 1920),
  blueZone: unsplash("photo-1613490493576-7fde63acd811"),
  research: unsplash("photo-1562774053-701939374585"),
  asiPrepared: unsplash("photo-1677442136019-21780ecad995"),
  finalCta: unsplash("photo-1501785888041-af3ef285b470"),
  teamChairman: unsplash("photo-1560250097-0b93528c311a"),
  teamExecutive: unsplash("photo-1573496359142-b8d87734a5a2"),
  teamInstitution: unsplash("photo-1472099645785-5658abf4ff4e"),
  projectBlueZone: unsplash("photo-1613490493576-7fde63acd811"),
  projectBrandVersity: unsplash("photo-1523240795612-9a054b0db644"),
  projectBusinessSchool: unsplash("photo-1524178232363-1fb2b075b655"),
  projectInfravision: unsplash("photo-1542744173-8e7e53415bb0"),
  projectSeekk: unsplash("photo-1451187580459-43490279c0fa"),
  projectAiSchool: unsplash("photo-1677442136019-21780ecad995"),
  projectDesignSchool: unsplash("photo-1557804506-669a67965ba0"),
  projectThanalValley: unsplash("photo-1500382017468-9049fed747ef"),
  projectConsultancy: unsplash("photo-1552664730-d307ca884978"),
  projectSports: unsplash("photo-1461896836934-ffe607ba8211"),
};

/** Gradient SVG used when a remote image fails to load in the browser. */
export const imageFallback =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a1510"/><stop offset="100%" stop-color="#2f8f83"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/></svg>'
  );

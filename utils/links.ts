const links: TLink[] = [
  {
    belongsTo: "",
    name: "Pertanian",
    href: "/pertanian",
  },
  {
    belongsTo: "",
    name: "Industri",
    href: "/industri",
  },
  {
    belongsTo: "",
    name: "PEK",
    href: "/pek",
  },
  {
    belongsTo: "",
    name: "Web Entry",
    href: "/web-entry",
  },
];

const pertanianLinks: TLink[] = [
  {
    belongsTo: "Pertanian",
    name: "Monev",
    href: "https://docs.google.com/spreadsheets/d/1qaN1tKHAAbZNsNojxPzowjDPkfq6dC1nOmBWPszXzNI/edit?usp=sharing",
    spreadsheetId: "1qaN1tKHAAbZNsNojxPzowjDPkfq6dC1nOmBWPszXzNI",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#2D95C9",
  },
  {
    belongsTo: "Pertanian",
    name: "Jadwal",
    href: "https://docs.google.com/spreadsheets/d/1Zy5Y_QYtW_d8k8U6vGC5281n_P2QbPdcdYaORYXnckQ/edit?usp=sharing",
    spreadsheetId: "1Zy5Y_QYtW_d8k8U6vGC5281n_P2QbPdcdYaORYXnckQ",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#75B547",
  },
  {
    belongsTo: "Pertanian",
    name: "Upload Laporan",
    href: "http://sussy-baka.com",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#E18939",
  },
];

const industriLinks: TLink[] = [
  {
    belongsTo: "Industri",
    name: "Monev",
    href: "https://docs.google.com/spreadsheets/d/1SrN96lNEKqjuYXp7-xC--QphvoX_mBUDsT8-hxktBnU/edit?usp=sharing",
    spreadsheetId: "1SrN96lNEKqjuYXp7-xC--QphvoX_mBUDsT8-hxktBnU",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#2D95C9",
  },
  {
    belongsTo: "Industri",
    name: "Jadwal",
    href: "https://docs.google.com/spreadsheets/d/1zoQrVY489yCO0kvYcXWBas3m-fxzasKbfS5iT8Im0RM/edit?usp=sharing",
    spreadsheetId: "1zoQrVY489yCO0kvYcXWBas3m-fxzasKbfS5iT8Im0RM",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#75B547",
  },
  {
    belongsTo: "Industri",
    name: "Upload Laporan",
    href: "http://sussy-baka.com",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#E18939",
  },
];

const pekLinks: TLink[] = [
  {
    belongsTo: "PEK",
    name: "Monev",
    href: "https://docs.google.com/spreadsheets/d/1cVCPSklTRZKE8lvBKAGZZtjH3_5XoibWYJeie8lEuYY/edit?usp=sharing",
    spreadsheetId: "1cVCPSklTRZKE8lvBKAGZZtjH3_5XoibWYJeie8lEuYY",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#2D95C9",
  },
  {
    belongsTo: "PEK",
    name: "Jadwal",
    href: "https://docs.google.com/spreadsheets/d/153mkPUrAgaqVXi9Je8LqPgnWx4c9ywiz_lsDsU7b2TQ/edit?usp=sharing",
    spreadsheetId: "153mkPUrAgaqVXi9Je8LqPgnWx4c9ywiz_lsDsU7b2TQ",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#75B547",
  },
  {
    belongsTo: "PEK",
    name: "Upload Laporan",
    href: "http://sussy-baka.com",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
    bgColor: "#E18939",
  },
];

const webEntryLinks: TLink[] = [
  {
    belongsTo: "Web Entry",
    name: "Perkebunan Tahunan",
    href: "http://pengolahan.bps.go.id/",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
  },
  {
    belongsTo: "Web Entry",
    name: "Perkebunan Bulanan",
    href: "https://skb.bps.go.id/pb",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
  },
  {
    belongsTo: "Web Entry",
    name: "Perikanan",
    href: "https://ipd.bps.go.id/perikanan",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
  },
  {
    belongsTo: "Web Entry",
    name: "Kehutanan",
    href: "https://webentry.bps.go.id/kehutanan",
    iconClassName: "fa-solid fa-arrow-up-right-from-square",
  },
];

export { links, pertanianLinks, industriLinks, pekLinks, webEntryLinks };

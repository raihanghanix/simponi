import Link from "next/link";

type SpreadsheetProps = {
  spreadsheetId: string;
};

const Spreadsheet = ({ spreadsheetId }: SpreadsheetProps) => {
  return (
    <div className="relative h-full w-full rounded-lg border border-neutral-300">
      <Link
        href={`https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit?usp=sharing`}
        target="_blank"
        className="absolute right-4 top-4 bg-neutral-600 p-4"
      >
        <i className="fa-solid fa-arrow-up-right-from-square text-2xl text-white"></i>
      </Link>
      <iframe
        src={`https://docs.google.com/spreadsheets/d/${spreadsheetId}/preview?rm=minimal`}
        width="100%"
        height="512px"
        allowFullScreen
        className="rounded-lg p-2"
      ></iframe>
    </div>
  );
};

export default Spreadsheet;

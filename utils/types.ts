type TLinks = {
  name: string;
  href: string;
  access?: string;
};

type TUser = {
  id: string | number;
  nama: string;
  tempatTanggalLahir: string;
  tanggalLahir: string;
  statusPernikahan: boolean;
  nasional: string;
  username: string;
  password: string;
};

type TAdmin = {
  id: string | number;
  username: string;
  password: string;
};

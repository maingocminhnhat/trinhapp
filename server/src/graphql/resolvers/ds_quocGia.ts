const ds_quocGia = [
  {
    id: 1,
    tenQuocGia: "Afghanistan",
    tenDayDu: "Tiểu Vương quốc Hồi giáo Afghanistan",
    name: "Afghanistan",
    fullName: "Islamic Emirate of Afghanistan",
    dien_tich: 1230000,
  },
];

const quocGiaResolves = {
  Query: {
    ds_quocGia: () => ds_quocGia,
  },
};

export { quocGiaResolves };

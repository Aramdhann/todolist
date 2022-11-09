const getLocalStorageData = (itemName) => {
    // ambil data notes di localStorage
    const existing = localStorage.getItem(itemName);
    // check data di localStorage tipe data string (localStorage cuma menyimpan data string) dengan nama notes menggunakan method JSON.parse(). Jika tidak ada data, maka buat array kosong
    return existing ? JSON.parse(existing) : [];
};

export default getLocalStorageData;

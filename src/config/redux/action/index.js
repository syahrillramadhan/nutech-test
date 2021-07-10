import { database } from '../../firebase';

export const addDataToFirebase = (data) => (dispatch) => {
  database.ref('produk/').set({
    name: data.name,
    image: data.image,
    hargaBeli: data.hargaBeli,
    hargaJual: data.hargaJual,
    stok: data.stok,
  });
};

// Komponen Antonym bertugas menampilkan sinonim dari kata yang diberikan.

const Antonym = ({ mean }) => {
  // Komponen ini menerima prop 'mean', yang berisi data arti kata dari API.

  return (
    // Menggunakan elemen div dengan class 'columns-2 md:columns-3' untuk mengatur tampilan tampilan sinonim menjadi kolom.

    <div className="columns-2 md:columns-3">
      {/* Melakukan mapping pada data 'mean', yang berisi arti kata dari API. */}
      {mean.map((val) =>
        // Melakukan mapping pada 'meanings' dari data 'mean', yang berisi informasi tentang arti kata dalam berbagai konteks.
        val.meanings.map((means) =>
          // Melakukan mapping pada 'synonyms' dari 'meanings', yang berisi daftar sinonim dari arti kata tersebut.
          means.synonyms?.map((ant) => <li>{ant}</li>)
        )
      )}
    </div>
  );
};

export default Antonym;

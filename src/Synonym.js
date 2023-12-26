const Synonym = ({ mean }) => {
  // Komponen ini bertanggung jawab untuk menampilkan sinonim dari kata yang diberikan.

  return (
    // Menggunakan elemen div dengan class 'columns-2 md:columns-3' untuk mengatur tampilan sinonim menjadi kolom.

    <div className="columns-2 md:columns-3">
      {/* Melakukan mapping pada data 'mean', yang berisi arti kata dari API. */}
      {mean.map((val) =>
        // Melakukan mapping pada 'meanings' dari data 'mean', yang berisi informasi tentang arti kata dalam berbagai konteks.
        val.meanings.map((means) =>
          // Melakukan mapping pada 'antonyms' dari 'meanings', yang berisi daftar sinonim dari arti kata tersebut.
          means.antonyms?.map((syn) => <li>{syn}</li>)
        )
      )}
    </div>
  );
};

export default Synonym;

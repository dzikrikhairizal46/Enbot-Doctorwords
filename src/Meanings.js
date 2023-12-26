const Meanings = ({ mean }) => {

  // Tampilkan data 'mean' ke konsol untuk memeriksa struktur datanya
  console.log(mean);

  return (
      <div>
          {/* Melakukan mapping pada data 'mean', yang berisi arti kata dari API. */}
          {mean.map(val => 
              // Melakukan mapping pada 'meanings' dari data 'mean', yang berisi informasi tentang arti kata dalam berbagai konteks.
              val.meanings.map(means => 
                  // Melakukan mapping pada 'definitions' dari 'meanings', yang berisi definisi dari arti kata tersebut.
                  means.definitions.map(def => (
                      // Menampilkan definisi arti kata dalam elemen <li> dan garis pemisah <hr>
                      <div key={def.definition}>
                          <li>{def.definition}</li>
                          <hr />
                      </div>
                  ))
              )
          )}
      </div>
  );
};

export default Meanings;

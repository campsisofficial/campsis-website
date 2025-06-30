
import Head from 'next/head';

export default function Home({ products }) {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <Head>
        <title>Campsis - Menu</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6 text-center">Menu Campsis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border rounded-2xl shadow p-4 bg-white">
            <img src={item.gambar_url} alt={item.nama_produk} className="w-full h-48 object-cover rounded-xl mb-2" />
            <h2 className="text-xl font-semibold">{item.nama_produk}</h2>
            <p className="text-gray-600 mb-1">{item.deskripsi}</p>
            <p className="font-bold text-cyan-700 mb-2">Rp{item.harga.toLocaleString()}</p>
            <button className="w-full bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-700">Pesan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://script.google.com/macros/s/AKfycbzvdNRJkgXPO-f_WU7jyofShZ-mAtUy_VZdWzyao1ZaYhK2QfKL1CfUBEk14ze7BuMqMQ/exec");
  const products = await res.json();
  return { props: { products } };
}

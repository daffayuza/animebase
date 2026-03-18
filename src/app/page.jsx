import Header from '@/components/AnimeList/Header';
import AnimeList from '../components/AnimeList';
import getAnimeResponse, { getNestedAnimeResponse, reproduce } from '../libs/api-libs';

export default async function Page() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8');
  let recomendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');
  recomendedAnime = reproduce(recomendedAnime, 4);

  return (
    <>
      <section
        className="relative h-96 overflow-hidden bg-cover bg-center bg-fixed md:h-[500px] lg:h-[600px]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(13,148,180,0.3)), url('/naruto.jpeg')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className='text-center justify-center font-bold uppercase text-xl md:text-2xl text-color-white shadow-2xl'>Temukan Anime Terbaikmu Disini</h1>
        </div>
      </section>
      {/* anime populer */}
      <section className="pt-2">
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref={'/populer'} />
        <AnimeList api={topAnime} />
      </section>

      {/* anime recomended */}
      <section className="mt-5 mb-14">
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
}

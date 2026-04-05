import Header from '@/components/AnimeList/Header';
import Image from 'next/image';
import AnimeList from '../components/AnimeList';
import getAnimeResponse, { getNestedAnimeResponse, reproduce } from '../libs/api-libs';

export default async function Page() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8');
  let recomendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');
  recomendedAnime = reproduce(recomendedAnime, 4);

  return (
    <>
      <section
        className="relative h-[190px] overflow-hidden bg-cover bg-center rounded-2xl md:h-[300px] lg:h-[400px] md:mx-14 mx-4 md:mt-10 mt-6 md:mb-6 mb-4 border border-color-1"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(13,148,180,0.3)), url('/naruto.jpeg')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center justify-center font-bold uppercase text-lg md:text-2xl text-color-white shadow-2xl">Temukan Anime Favoritmu Disini</h1>
        </div>
      </section>
      {/* anime populer */}
      <section className="pt-2 md:mx-10 mx-1 flex flex-col gap-2">
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref={'/populer'} />
        <AnimeList api={topAnime} />
      </section>

      <div className="md:mx-14 mx-5 mt-10 md:mb-4 mb-2 border-t border-color-blue opacity-60"></div>

      {/* anime recomended */}
      <section className="mb-14 md:mx-10 mx-1">
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
}

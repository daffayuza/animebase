import Header from '@/components/AnimeList/Header';
import AnimeList from '@/components/AnimeList';
import getAnimeResponse from '@/libs/api-libs';

export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse('anime', `q=${decodedKeyword}`);

  return (
    <>
      <section className='mb-10'>
        <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}

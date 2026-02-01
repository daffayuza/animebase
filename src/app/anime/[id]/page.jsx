import getAnimeResponse from '@/libs/api-libs';
import VideoPlayer from '@/components/utilities/VideoPlayer';
import Image from 'next/image';

export default async function Page({ params }) {
  const { id } = params;
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4 text-2xl text-color-white font-bold">
        <h3>
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="flex pt-4 px-4 text-sm font-bold gap-2 overflow-x-auto">
        <div className="flex flex-col justify-center items-center border-2 bg-color-blue w-32 py-1 rounded">
          <h1>PERINGKAT</h1>
          <p className="text-color-white">{anime.data.rank}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 bg-color-blue w-32 py-1 rounded">
          <h1>SKOR</h1>
          <p className="text-color-white">{anime.data.score}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 bg-color-blue w-32 py-1 rounded">
          <h1>ANGGOTA</h1>
          <p className="text-color-white">{anime.data.members}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 bg-color-blue w-32 py-1 rounded">
          <h1>EPISODE</h1>
          <p className="text-color-white">{anime.data.episodes}</p>
        </div>
      </div>
      <div className="flex gap-6 pt-6 px-4 flex-wrap md:flex-nowrap">
        <div className="relative w-full max-w-xs aspect-[3/4] shrink-0">
          <Image src={anime.data.images.webp.image_url} alt={anime.data.title} fill className="object-fill rounded" />
        </div>
        <div>
          <h1 className='text-2xl mb-2 w-fit text-color-white bg-color-1 px-2 rounded font-semibold'>Synopsis :</h1>
          <p className="text-xl text-justify text-color-font">{anime.data.synopsis}</p>
        </div>
      </div>

      <div>
        <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
}

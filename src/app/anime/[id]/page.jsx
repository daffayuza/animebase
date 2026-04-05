import getAnimeResponse from '@/libs/api-libs';
import VideoPlayer from '@/components/utilities/VideoPlayer';
import Image from 'next/image';

export default async function Page({ params }) {
  const { id } = params;
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <div className="min-h-screen md:mb-[-40px] mb-10 px-0 mx-2 md:mx-10">
      <div className="pt-4 px-4 text-2xl text-color-white font-bold">
        <h3>
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="flex gap-6 pt-6 px-4 flex-wrap md:flex-nowrap">
        <div className="relative w-52 shrink-0">
          <Image src={anime.data.images.webp.image_url} alt={anime.data.title} fill className="w-full h-full object-fill rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-color-blue text-xl underline">Peringkat:</h1>
            <p className="text-color-font text-md md:text-lg">{anime.data.rank}</p>
          </div>
          <div>
            <h1 className="text-color-blue text-xl underline">Skor:</h1>
            <p className="text-color-font text-md md:text-lg">{anime.data.score}</p>
          </div>
          <div>
            <h1 className="text-color-blue text-xl underline">Duration:</h1>
            <p className="text-color-font text-md md:text-lg">{anime.data.duration}</p>
          </div>
          <div>
            <h1 className="text-color-blue text-xl underline">Genres:</h1>
            <p className="text-color-font text-md md:text-lg w-52 md:w-full">
              {anime.data.genres.map((genre, index) => (
                <span key={index}>
                  {genre.name}
                  {index < anime.data.genres.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
          <div>
            <h1 className="text-color-blue text-xl underline">Episode:</h1>
            <p className="text-color-font text-lg">{anime.data.episodes}</p>
          </div>
        </div>
      </div>
      <div className='px-4 pt-6'>
        <h1 className="text-2xl mb-2 w-fit text-color-blue rounded font-semibold underline">Synopsis :</h1>
        <p className="text-md md:text-lg text-justify text-color-font">{anime.data.synopsis}</p>
      </div>

      <div>
        <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
}

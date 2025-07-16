import { SeasonAppearance } from "../modules/characters/characters.schemas";

export function groupEpisodesBySeason(urls: string[]): SeasonAppearance[] {
    const seasons: SeasonAppearance[] = [];
    let seasonNumber = 1;
    let episodeCount = 0;
    let episodesPerSeason = 11;

    urls.forEach(url => {
        url = url.replace("https://rickandmortyapi.com/api/episode/", "");
        const episode = parseInt(url);

        if (seasonNumber === 1 && episode > episodesPerSeason || episode > episodesPerSeason * seasonNumber + 1) {
            episodeCount = 0;
            episodesPerSeason = 10;
            while (episode > episodesPerSeason * seasonNumber + 1) seasonNumber++;
        }

        let season = seasons.find((s) => s.season === seasonNumber);
        if (!season) {
            season = { season: seasonNumber, appearances: 0 };
            seasons.push(season);
        }

        if ((episode <= episodesPerSeason && seasonNumber === 1) || (episode <= episodesPerSeason * seasonNumber + 1)) {
            episodeCount++;
            seasons[seasons.length - 1].appearances = episodeCount;
        }
    });

    return seasons;
}
/// <reference path="./custom-source.d.ts" />

const anime: Record<number, $app.AL_CompleteAnime> = {
  1: {
    id: 1,
    idMal: null,
    format: "OVA",
    status: "FINISHED",
    season: null,
    seasonYear: null,
    episodes: 1,
    duration: null,
    countryOfOrigin: "JP",
    isAdult: true,
    title: {
      userPreferred: "アリアリアナマンさっきゅばす ち◯ちん生えてる悪魔っ娘",
      romaji: "アリアリアナマンさっきゅばす ち◯ちん生えてる悪魔っ娘",
      english: null,
      native: "アリアリアナマンさっきゅばす ち◯ちん生えてる悪魔っ娘",
    },
    coverImage: {
      extraLarge: "https://files.catbox.moe/v82105.jpg",
      large: "https://files.catbox.moe/v82105.jpg",
      medium: "https://files.catbox.moe/v82105.jpg",
      color: null,
    },
    bannerImage: null,
    description: "Publisher: Majenta Rose",
    genres: [],
    averageScore: null,
    popularity: 0,
    startDate: { year: null, month: null, day: null },
    endDate: { year: null, month: null, day: null },
    relations: { edges: [] },
  } as unknown as $app.AL_CompleteAnime,

  2: {
    id: 2,
    idMal: null,
    format: "OVA",
    status: "FINISHED",
    season: null,
    seasonYear: null,
    episodes: 1,
    duration: null,
    countryOfOrigin: "JP",
    isAdult: true,
    title: {
      userPreferred: "俺のセフレは男の娘",
      romaji: "俺のセフレは男の娘",
      english: null,
      native: "俺のセフレは男の娘",
    },
    coverImage: {
      extraLarge: "https://files.catbox.moe/14b1ju.jpg",
      large: "https://files.catbox.moe/14b1ju.jpg",
      medium: "https://files.catbox.moe/14b1ju.jpg",
      color: null,
    },
    bannerImage: null,
    description: "Publisher: Majenta Rose",
    genres: [],
    averageScore: null,
    popularity: 0,
    startDate: { year: null, month: null, day: null },
    endDate: { year: null, month: null, day: null },
    relations: { edges: [] },
  } as unknown as $app.AL_CompleteAnime,

  3: {
    id: 3,
    idMal: null,
    format: "OVA",
    status: "FINISHED",
    season: null,
    seasonYear: null,
    episodes: 1,
    duration: null,
    countryOfOrigin: "JP",
    isAdult: true,
    title: {
      userPreferred: "SUCCUBUS T.G.D.",
      romaji: "SUCCUBUS T.G.D.",
      english: "SUCCUBUS T.G.D.",
      native: "SUCCUBUS T.G.D.",
    },
    coverImage: {
      extraLarge: "https://files.catbox.moe/48cn39.jpg",
      large: "https://files.catbox.moe/48cn39.jpg",
      medium: "https://files.catbox.moe/48cn39.jpg",
      color: null,
    },
    bannerImage: null,
    description: "Publisher: Majenta Rose",
    genres: [],
    averageScore: null,
    popularity: 0,
    startDate: { year: null, month: null, day: null },
    endDate: { year: null, month: null, day: null },
    relations: { edges: [] },
  } as unknown as $app.AL_CompleteAnime,
}

class Provider implements CustomSource {
  getSettings(): Settings {
    return { supportsAnime: true, supportsManga: false }
  }

  async getAnime(ids: number[]): Promise<$app.AL_BaseAnime[]> {
    const ret: $app.AL_BaseAnime[] = []
    for (const id of ids) {
      if (anime[id]) {
        const a = $clone(anime[id]) as any
        delete a["relations"]
        ret.push(a)
      }
    }
    return ret
  }

  async getAnimeDetails(): Promise<$app.AL_AnimeDetailsById_Media | null> {
    return null
  }

  async getAnimeMetadata(id: number): Promise<$app.Metadata_AnimeMetadata | null> {
    return {
      episodes: {
        "1": {
          episodeNumber: 1,
          title: "OVA",
          image: null,
          length: null,
          summary: "",
          airDate: "",
        },
      },
    } as unknown as $app.Metadata_AnimeMetadata
  }

  async getAnimeWithRelations(id: number): Promise<$app.AL_CompleteAnime> {
    if (anime[id]) return anime[id]
    throw new Error("not found.")
  }

  async getManga(): Promise<$app.AL_BaseManga[]> { return [] }
  async getMangaDetails(): Promise<$app.AL_MangaDetailsById_Media | null> { return null }

  async listAnime(): Promise<ListResponse<$app.AL_BaseAnime>> {
    return {
      media: Object.values(anime),
      total: Object.keys(anime).length,
      page: 1,
      totalPages: 1,
    }
  }

  async listManga(): Promise<ListResponse<$app.AL_BaseManga>> {
    return { media: [], total: 0, page: 1, totalPages: 1 }
  }
}

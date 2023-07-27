
interface SongSearch {
    songs:Songs[]
    playlists:Playlist[]
    artists:Artists[]
}

type Artists = {
    id: string;
    name: string;
    thumbnailM: string;
    playlistId: string;
    thumbnail:string
}

type Songs = {
    encodeId: string;
    title: string;
    artists:Artists[]
    thumbnailM:string
    thumbnail:string
}

type Playlist = {
    encodeId: string;
    title: string;
    artists:Artists[]
    thumbnailM:string
    thumbnail:string
    artistsNames:string
}
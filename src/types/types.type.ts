export interface Songs {
   singers: string[];
   songName: string;
   category: string;
   src: string;
   image: HTMLImageElement;
   duration: string;
   link: string;
   favorites: number | string;
}

export interface List {
   data: Song[];
   thumbnails: Thumbnail;
}

export interface Thumbnail {
   image: HTMLImageElement;
   title: string;
   singers: string[];
   song: Song;
   favorites: number | string;
}

export interface BtnPlay {
   show?: boolean;
   circle?: boolean;
   isPlay?: boolean;
   isLoad?: boolean;
   size?: number;
   active?: boolean;
}

export interface Item {
   song?:any,
   sectionType?:string,
   viewType?:string,
   title?:string,
   link?:string,
   sectionId?:string,
   items?:any,
   itemType?:string
 }

 export interface Path {
   pathname?:string,
   search?:string
 }

 interface Song {
   [key: number]: string
   title: string
   infoSong: string
   thumbnail: string
   artistsNames: string
   artists: []
 }

 export interface SongDetailConfig{
   id?: string,
   idPlayList?: string
 }
 
 export interface IPath {
   hash?: string
   key?: string
   pathname?: string
   search?: string
 }
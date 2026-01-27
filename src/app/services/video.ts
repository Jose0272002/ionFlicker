import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  private videos = [
    {
      id: 1, title: 'bird of paradise',
      url: 'https://ia601603.us.archive.org/7/items/Bird_of_Paradise_1932/BirdofParadise_512kb.mp4',
      thumb: 'assets/img/bird_of_paradise.png',
      category: ['Romance', 'Drama']
    },
    {
      id: 2, title: 'The Iron Mask',
      url: 'https://ia800603.us.archive.org/32/items/iron_mask/iron_mask_512kb.mp4',
      thumb: 'assets/img/The_Iron_Mask.png',
      category: ['Action', 'Adventure', 'Drama', 'Romance']
    },
    {
      id: 3, title: 'His girl friday',
      url: 'https://ia601408.us.archive.org/30/items/his_girl_friday/his_girl_friday_512kb.mp4',
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6a_C3k_458Ui7ijvOc9ZroIiwKrlFTqMPA&s',
      category: ['Comedy', 'Drama', 'Romance']
    },
    {
      id: 4, title: 'The General',
      url: 'https://ia800209.us.archive.org/13/items/TheGeneral/The_General_512kb.mp4',
      thumb: 'https://imgs.search.brave.com/VAiLMc9DEujtzsELtMEEXjHx2bseF4TZRws5HXIw8EI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFZTlRHOUI4NEwu/anBn',
      category: ['Comedy', 'Action', 'Adventure', 'Drama']
    },
    {
      id: 5, title: 'Born to win',
      url: 'https://ia801604.us.archive.org/12/items/BorntoWin/BorntoWin_512kb.mp4',
      thumb: 'https://www.picclickimg.com/g5oAAOSwGPxnSLZz/Born-To-Win-Robert-De-Niro-George.webp',
      category: ['Comedy', 'Drama']
    },
    {
      id: 6, title: 'the vagabond',
      url: 'https://ia600603.us.archive.org/28/items/TheVagabond_1916/The_Vagabond_512kb.mp4',
      thumb: 'https://m.media-amazon.com/images/M/MV5BYzIyMWYyNjMtNmRkNC00YWVjLWFhNTktMWY3Njk2YTM4MTRkXkEyXkFqcGc@._V1_.jpg',
      category: ['Comedy', 'Drama']
    },
    {
      id: 7, title: 'meet John Doe',
      url: 'https://publicdomainmovie.net/movie.php?id=meet_john_doe_ipod&type=.mp4',
      thumb:'https://imgs.search.brave.com/prC9Y7FL2Bihr0yNJvionrdqbbZF4Wkeg5SHDgN0NK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFZbHFPcnAxeEwu/anBn',
      category: ['Comedy', 'Drama', 'Romance']
    },
    {
      id: 8, title: 'The Last of the Mohicans',
      url: 'https://ia801304.us.archive.org/14/items/last_of_the_mohicans_1920/last_of_the_mohicans_silent_512kb.mp4',
      thumb: 'https://imgs.search.brave.com/3zmuqf6py9bI7elcU1Jwfg4wDHx9ZbsM4XOM0bpUt7E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5EUXpNamxr/TkRRdE4ySTJZaTAw/WW1ObExUZ3hNelF0/Tm1ZMk16Rm1aR0pt/T0RabVhrRXlYa0Zx/Y0djQC5qcGc',
      category: ['Adventure', 'Drama', 'Romance']
    }
  ];

  private canales = [
    {
      name: 'La 1',
      link: 'https://rtvelivestream.rtve.es/rtvesec/la1/la1_main_dvr_720.m3u8',
      image: 'https://imgs.search.brave.com/lxLRmH2b6mVJzFe-YQtpIIQQr72Iby1WoGFG3GvlBPM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg3L1RWRV9MYTFf/LV9Mb2dvXzIwMDgu/cG5n'
    },
    {
      name: 'Tdp',
      link: 'https://rtvelivestream.rtve.es/rtvesec/tdp/tdp_main_dvr_720.m3u8',
      image: 'https://imgs.search.brave.com/SzmbHCiT8Ue_Lh_odz84WumGvYjoXSJd-iQjnB6MQtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92ZXJ0/ZWxlLm9ubGluZS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/My90ZHAtZW4tZGly/ZWN0by1sb2dvLnBu/Zw'
    },
    {
      name: '24h',
      link: 'https://rtvelivestream.rtve.es/rtvesec/24h/24h_main_dvr_720.m3u8',
      image: 'https://imgs.search.brave.com/NOSN8lW7jW3YKLVnaJjf4qrhfybfOvDmJnMKPhklhlk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXppbGxhLmNv/bS9jbGlwYXJ0cy83/ODI3MzYzL2xvZ28t/dHZlLTI0aC1jbGlw/YXJ0LXNtLnBuZw'
    },
    {
      name: 'Clan',
      link: 'https://rtvelivestream.rtve.es/rtvesec/clan/clan_main_dvr.m3u8',
      image: 'https://imgs.search.brave.com/x-hhF2lGGwaUkwshiodNMwlSuiWxZ4wb69VmtPmzrcc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9ybXVsYXR2LmNv/bS9pbWFnZXMvY2Fk/ZW5hcy9sb2dvX2Ns/YW4uc3Zn'
    },
  ];


  private categories = this.videos.map(video => video.category);

  getVideos() {
    return this.videos;
  }
  getCanales() {
    return this.canales;
  }
  getCategories() {
    return this.categories;
  }

}
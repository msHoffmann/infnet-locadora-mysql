"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Movies", [
      {
        title: "Jaws",
        year: "1975",
        description:
          "Jaws is a 1975 American thriller film directed by Steven Spielberg, based on the 1974 novel by Peter Benchley.",
        image_url:
          "https://m.media-amazon.com/images/I/71IjkDc8w-L._AC_SY741_.jpg",
        wallpaper_url:
          "https://images2.alphacoders.com/112/thumb-1920-1121109.jpg",
        voteAverage: "8.1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Titanic",
        year: "1997",
        description:
          "Titanic is a 1997 American epic romance and disaster film directed, written, produced, and co-edited by James Cameron.",
        image_url:
          "https://m.media-amazon.com/images/I/51gEpO63aRL._AC_UF894,1000_QL80_.jpg",
        wallpaper_url:
          "https://free4kwallpapers.com/uploads/originals/2015/12/17/titanic-movie-wallpaper.jpg",
        voteAverage: "7.9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Lion King",
        year: "1994",
        description:
          "The Lion King is a 1994 American animated musical drama film directed by Roger Allers and Rob Minkoff, released by Walt Disney Pictures.",
        image_url:
          "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
        wallpaper_url: "https://wallpapercave.com/wp/wp1849319.jpg",
        voteAverage: "8.5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Exorcist",
        year: "1997",
        description:
          "The Exorcist is a 1973 American supernatural horror film directed by William Friedkin.",
        image_url:
          "https://cdn.shopify.com/s/files/1/0561/8162/0895/products/exorcist_movie_poster_magnet_1.png?v=1635284282",
        wallpaper_url: "https://images.alphacoders.com/698/698953.jpg",
        voteAverage: "8.1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pyscho",
        year: "1960",
        description:
          "Psycho is a 1960 American psychological horror thriller film produced and directed by Alfred Hitchcock.",
        image_url:
          "https://milesherndon.com/uploads/blogImages/psycho-movie-poster-josh-miles.gif",
        wallpaper_url: "https://images.alphacoders.com/650/650612.jpg",
        voteAverage: "8.5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Alien",
        year: "1979",
        description:
          "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon",
        image_url:
          "https://image.tmdb.org/t/p/original/bk9GVjN4kxmGekswNigaa5YIdr5.jpg",
        wallpaper_url: "https://wallpaperaccess.com/full/245631.jpg",
        voteAverage: "8.5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Shining",
        year: "1980",
        description:
          "The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson.",
        image_url:
          "https://cdn.entries.clios.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/51/1445/22197/65020/dn-ubbljyQwtSFSjqd8Zr2TVttMiImApLAn2fN1b23o.jpg",
        wallpaper_url:
          "https://images5.alphacoders.com/310/thumb-1920-310773.jpg",
        voteAverage: "8.4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mad Max: Fury Road",
        year: "2015",
        description:
          "Mad Max: Fury Road is a 2015 Australian post-apocalyptic action film co-written, co-produced, and directed by George Miller.",
        image_url:
          "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        wallpaper_url: "https://images8.alphacoders.com/598/598990.jpg",
        voteAverage: "8.1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Die Hard",
        year: "1988",
        description:
          "Die Hard is a 1988 American action film directed by John McTiernan, with a screenplay by Jeb Stuart and Steven E. de Souza.",
        image_url:
          "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        wallpaper_url:
          "https://w0.peakpx.com/wallpaper/590/73/HD-wallpaper-movie-die-hard-bruce-willis-john-mcclane.jpg",
        voteAverage: "8.2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Raiders of the Lost Ark",
        year: "1981",
        description:
          "Raiders of the Lost Ark[a] is a 1981 American action-adventure film directed by Steven Spielberg and written by Lawrence Kasdan, based on a story by George Lucas and Philip Kaufman.",
        image_url:
          "https://image.tmdb.org/t/p/original/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
        wallpaper_url:
          "https://images4.alphacoders.com/110/thumb-1920-1109673.jpg",
        voteAverage: "8.4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Dark Knight",
        year: "2008",
        description:
          "The Dark Knight is a 2008 superhero film directed by Christopher Nolan from a screenplay he co-wrote with his brother Jonathan.",
        image_url:
          "https://image.tmdb.org/t/p/original/eP5NL7ZlGoW9tE9qnCdHpOLH1Ke.jpg",
        wallpaper_url: "https://wallpapercave.com/wp/wp383267.jpg",
        voteAverage: "9.0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Terminator 2: Judgment Day",
        year: "1991",
        description:
          "The Dark Knight is a 2008 superhero film directed by Christopher Nolan from a screenplay he co-wrote with his brother Jonathan.",
        image_url:
          "https://d1w8cc2yygc27j.cloudfront.net/7072119697327582111/-1587603792984343210.jpg",
        wallpaper_url: "https://wallpapercave.com/wp/wp4119889.jpg",
        voteAverage: "8.6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Miss Congeniality",
        year: "2000",
        description:
          "Miss Congeniality is a 2000 American comedy film directed by Donald Petrie, produced by Sandra Bullock, and written by Marc Lawrence, Katie Ford and Caryn Lucas.",
        image_url:
          "https://i.etsystatic.com/30490360/r/il/44c2e9/3505854569/il_fullxfull.3505854569_4ct6.jpg",
        wallpaper_url:
          "https://image.tmdb.org/t/p/original/hgGwWdLPlXuFj77Hsz4i05xzEvB.jpg",
        voteAverage: "6.3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bridge Jones's Diary",
        year: "2000",
        description:
          "Bridget Jones's Diary is a 2001 romantic comedy film directed by Sharon Maguire and written by Richard Curtis, Andrew Davies, and Helen Fielding.",
        image_url:
          "https://m.media-amazon.com/images/I/51QSukon9OL._AC_UF894,1000_QL80_.jpg",
        wallpaper_url:
          "https://images2.alphacoders.com/610/thumb-1920-610820.jpg",
        voteAverage: "6.8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "White Chicks",
        year: "2004",
        description:
          "White Chicks is a 2004 American comedy film directed by Keenen Ivory Wayans.",
        image_url:
          "https://cineclick-static.flixmedia.cloud/480/processed/69/1080x1620_1589914813.webp",
        wallpaper_url:
          "https://images.fanart.tv/fanart/white-chicks-59003983c5132.jpg",
        voteAverage: "5.7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};

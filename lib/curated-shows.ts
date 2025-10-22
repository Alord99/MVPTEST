// Curated Top Shows with Direct Links
export interface CuratedShow {
  title: string;
  service: string;
  directUrl: string;
  serviceId: string;
}

export const NETFLIX_SHOWS: CuratedShow[] = [
  // Original hits
  { title: "Breaking Bad", service: "Netflix", directUrl: "https://www.netflix.com/title/70143836", serviceId: "netflix" },
  { title: "Stranger Things", service: "Netflix", directUrl: "https://www.netflix.com/title/80057281", serviceId: "netflix" },
  { title: "Squid Game", service: "Netflix", directUrl: "https://www.netflix.com/title/81040344", serviceId: "netflix" },
  { title: "The Crown", service: "Netflix", directUrl: "https://www.netflix.com/title/80025678", serviceId: "netflix" },
  { title: "Wednesday", service: "Netflix", directUrl: "https://www.netflix.com/title/81231974", serviceId: "netflix" },
  { title: "Bridgerton", service: "Netflix", directUrl: "https://www.netflix.com/title/80232398", serviceId: "netflix" },
  { title: "The Witcher", service: "Netflix", directUrl: "https://www.netflix.com/title/80189685", serviceId: "netflix" },
  { title: "Ozark", service: "Netflix", directUrl: "https://www.netflix.com/title/80117552", serviceId: "netflix" },
  { title: "Better Call Saul", service: "Netflix", directUrl: "https://www.netflix.com/title/80021955", serviceId: "netflix" },
  { title: "The Queen's Gambit", service: "Netflix", directUrl: "https://www.netflix.com/title/80234304", serviceId: "netflix" },
  { title: "Dark", service: "Netflix", directUrl: "https://www.netflix.com/title/80100172", serviceId: "netflix" },
  { title: "Arcane", service: "Netflix", directUrl: "https://www.netflix.com/title/81435684", serviceId: "netflix" },
  { title: "Money Heist", service: "Netflix", directUrl: "https://www.netflix.com/title/80192098", serviceId: "netflix" },
  { title: "Peaky Blinders", service: "Netflix", directUrl: "https://www.netflix.com/title/80002479", serviceId: "netflix" },
  { title: "Narcos", service: "Netflix", directUrl: "https://www.netflix.com/title/80025172", serviceId: "netflix" },
  { title: "Black Mirror", service: "Netflix", directUrl: "https://www.netflix.com/title/70264888", serviceId: "netflix" },
  { title: "Mindhunter", service: "Netflix", directUrl: "https://www.netflix.com/title/80114855", serviceId: "netflix" },
  { title: "The Umbrella Academy", service: "Netflix", directUrl: "https://www.netflix.com/title/80186863", serviceId: "netflix" },
  { title: "Cobra Kai", service: "Netflix", directUrl: "https://www.netflix.com/title/81002370", serviceId: "netflix" },
  { title: "The Haunting of Hill House", service: "Netflix", directUrl: "https://www.netflix.com/title/80189221", serviceId: "netflix" },
  
  // More popular shows
  { title: "Seinfeld", service: "Netflix", directUrl: "https://www.netflix.com/title/70153373", serviceId: "netflix" },
  { title: "BoJack Horseman", service: "Netflix", directUrl: "https://www.netflix.com/title/70298930", serviceId: "netflix" },
  { title: "Avatar: The Last Airbender", service: "Netflix", directUrl: "https://www.netflix.com/title/70142405", serviceId: "netflix" },
  { title: "Russian Doll", service: "Netflix", directUrl: "https://www.netflix.com/title/80211627", serviceId: "netflix" },
  { title: "When They See Us", service: "Netflix", directUrl: "https://www.netflix.com/title/80200549", serviceId: "netflix" },
  { title: "Unbelievable", service: "Netflix", directUrl: "https://www.netflix.com/title/80153467", serviceId: "netflix" },
  { title: "The Sandman", service: "Netflix", directUrl: "https://www.netflix.com/title/81150303", serviceId: "netflix" },
  { title: "Lupin", service: "Netflix", directUrl: "https://www.netflix.com/title/80994082", serviceId: "netflix" },
  { title: "One Piece", service: "Netflix", directUrl: "https://www.netflix.com/title/80217863", serviceId: "netflix" },
  { title: "Sex Education", service: "Netflix", directUrl: "https://www.netflix.com/title/80197526", serviceId: "netflix" },
  { title: "Heartstopper", service: "Netflix", directUrl: "https://www.netflix.com/title/81059939", serviceId: "netflix" },
  { title: "Orange Is the New Black", service: "Netflix", directUrl: "https://www.netflix.com/title/70242311", serviceId: "netflix" },
  { title: "House of Cards", service: "Netflix", directUrl: "https://www.netflix.com/title/70178217", serviceId: "netflix" },
  { title: "Gilmore Girls", service: "Netflix", directUrl: "https://www.netflix.com/title/70155618", serviceId: "netflix" },
  { title: "Arrested Development", service: "Netflix", directUrl: "https://www.netflix.com/title/70140358", serviceId: "netflix" },
  { title: "Lucifer", service: "Netflix", directUrl: "https://www.netflix.com/title/80057918", serviceId: "netflix" },
  { title: "GLOW", service: "Netflix", directUrl: "https://www.netflix.com/title/80114988", serviceId: "netflix" },
  { title: "Ripley", service: "Netflix", directUrl: "https://www.netflix.com/title/80221412", serviceId: "netflix" },
  { title: "The Great British Baking Show", service: "Netflix", directUrl: "https://www.netflix.com/title/80063224", serviceId: "netflix" },
  { title: "I Think You Should Leave", service: "Netflix", directUrl: "https://www.netflix.com/title/80986854", serviceId: "netflix" },
  
  // Additional acclaimed shows
  { title: "Beef", service: "Netflix", directUrl: "https://www.netflix.com/title/81447461", serviceId: "netflix" },
  { title: "3 Body Problem", service: "Netflix", directUrl: "https://www.netflix.com/title/81024821", serviceId: "netflix" },
  { title: "You", service: "Netflix", directUrl: "https://www.netflix.com/title/80211991", serviceId: "netflix" },
  { title: "The Last Kingdom", service: "Netflix", directUrl: "https://www.netflix.com/title/80074249", serviceId: "netflix" },
  { title: "Vikings: Valhalla", service: "Netflix", directUrl: "https://www.netflix.com/title/81002396", serviceId: "netflix" },
  { title: "The Diplomat", service: "Netflix", directUrl: "https://www.netflix.com/title/81284801", serviceId: "netflix" },
  { title: "Outer Banks", service: "Netflix", directUrl: "https://www.netflix.com/title/80236318", serviceId: "netflix" },
  { title: "Emily in Paris", service: "Netflix", directUrl: "https://www.netflix.com/title/81037371", serviceId: "netflix" },
  { title: "Virgin River", service: "Netflix", directUrl: "https://www.netflix.com/title/80222601", serviceId: "netflix" },
  { title: "Ginny & Georgia", service: "Netflix", directUrl: "https://www.netflix.com/title/80242118", serviceId: "netflix" },
  { title: "Shadow and Bone", service: "Netflix", directUrl: "https://www.netflix.com/title/80236319", serviceId: "netflix" },
  { title: "Sweet Tooth", service: "Netflix", directUrl: "https://www.netflix.com/title/81237994", serviceId: "netflix" },
  { title: "The Midnight Club", service: "Netflix", directUrl: "https://www.netflix.com/title/81080510", serviceId: "netflix" },
  { title: "Dead to Me", service: "Netflix", directUrl: "https://www.netflix.com/title/80219707", serviceId: "netflix" },
  { title: "Locke & Key", service: "Netflix", directUrl: "https://www.netflix.com/title/80241239", serviceId: "netflix" },
  { title: "The Lincoln Lawyer", service: "Netflix", directUrl: "https://www.netflix.com/title/81280922", serviceId: "netflix" },
  { title: "Dahmer", service: "Netflix", directUrl: "https://www.netflix.com/title/81368177", serviceId: "netflix" },
  { title: "The Night Agent", service: "Netflix", directUrl: "https://www.netflix.com/title/81396586", serviceId: "netflix" },
  { title: "1899", service: "Netflix", directUrl: "https://www.netflix.com/title/80198819", serviceId: "netflix" },
  { title: "The OA", service: "Netflix", directUrl: "https://www.netflix.com/title/80044950", serviceId: "netflix" },
  { title: "Sense8", service: "Netflix", directUrl: "https://www.netflix.com/title/80025744", serviceId: "netflix" },
  { title: "Altered Carbon", service: "Netflix", directUrl: "https://www.netflix.com/title/80097140", serviceId: "netflix" },
  { title: "Lost in Space", service: "Netflix", directUrl: "https://www.netflix.com/title/80104198", serviceId: "netflix" },
  { title: "The Chilling Adventures of Sabrina", service: "Netflix", directUrl: "https://www.netflix.com/title/80223989", serviceId: "netflix" },
  { title: "Daredevil", service: "Netflix", directUrl: "https://www.netflix.com/title/80018294", serviceId: "netflix" },
  { title: "Jessica Jones", service: "Netflix", directUrl: "https://www.netflix.com/title/80002311", serviceId: "netflix" },
  { title: "The Punisher", service: "Netflix", directUrl: "https://www.netflix.com/title/80117284", serviceId: "netflix" },
  { title: "Luke Cage", service: "Netflix", directUrl: "https://www.netflix.com/title/80002537", serviceId: "netflix" },
  { title: "Iron Fist", service: "Netflix", directUrl: "https://www.netflix.com/title/80002612", serviceId: "netflix" },
  { title: "The Defenders", service: "Netflix", directUrl: "https://www.netflix.com/title/80002566", serviceId: "netflix" },
];

export const HULU_SHOWS: CuratedShow[] = [
  // Top Originals - VERIFIED WORKING LINKS
  { title: "Murdaugh: Death In The Family", service: "Hulu", directUrl: "https://www.hulu.com/series/b7741f3a-15ae-42dc-b196-f810bce02f11", serviceId: "hulu" },
  { title: "The Bear", service: "Hulu", directUrl: "https://www.hulu.com/series/05eb6a8e-90ed-4947-8c0b-e6536cbddd5f", serviceId: "hulu" },
  { title: "The Handmaid's Tale", service: "Hulu", directUrl: "https://www.hulu.com/series/ef31c7e1-cd0f-4e07-848d-1cbfedb50ddf", serviceId: "hulu" },
  { title: "Only Murders in the Building", service: "Hulu", directUrl: "https://www.hulu.com/series/13988f84-f1c8-40dd-a73c-4e71ab4bbe63", serviceId: "hulu" },
  { title: "The Dropout", service: "Hulu", directUrl: "https://www.hulu.com/series/227de06a-d3d4-42e0-9df1-bb5495e1738d", serviceId: "hulu" },
  { title: "Dopesick", service: "Hulu", directUrl: "https://www.hulu.com/series/238db0d4-c476-47ed-9bee-d326fd302f7d", serviceId: "hulu" },
  { title: "The Great", service: "Hulu", directUrl: "https://www.hulu.com/series/5a310c23-e2db-4c9f-a66c-27c2fee43d92", serviceId: "hulu" },
  { title: "Reservation Dogs", service: "Hulu", directUrl: "https://www.hulu.com/series/c88bb35c-880b-437e-9187-ab59b52df1a2", serviceId: "hulu" },
  
  // Comedy Hits
  { title: "The Simpsons", service: "Hulu", directUrl: "https://www.hulu.com/series/85bf4cc1-cd8b-4469-ad87-7289217a0b74", serviceId: "hulu" },
  { title: "Bob's Burgers", service: "Hulu", directUrl: "https://www.hulu.com/series/4e0f6374-fc81-4da2-b7a9-f7f8c29e7acc", serviceId: "hulu" },
  { title: "Futurama", service: "Hulu", directUrl: "https://www.hulu.com/series/2171423f-3326-4dfa-b193-b40494e60109", serviceId: "hulu" },
  { title: "Rick and Morty", service: "Hulu", directUrl: "https://www.hulu.com/series/22b4b3c8-0827-42d2-a841-50e8f3464dc2", serviceId: "hulu" },
  { title: "It's Always Sunny in Philadelphia", service: "Hulu", directUrl: "https://www.hulu.com/series/200c56d4-124c-41a1-b7d2-688f86f432bf", serviceId: "hulu" },
  { title: "Archer", service: "Hulu", directUrl: "https://www.hulu.com/series/a2e7a946-9652-48a8-884b-3ea7ea4de273", serviceId: "hulu" },
  { title: "Community", service: "Hulu", directUrl: "https://www.hulu.com/series/0b10c46a-12f0-4357-8a00-547057b49bac", serviceId: "hulu" },
  { title: "Schitt's Creek", service: "Hulu", directUrl: "https://www.hulu.com/series/3529d0f1-acaf-476d-8be3-66cd6bf12530", serviceId: "hulu" },
  { title: "What We Do in the Shadows", service: "Hulu", directUrl: "https://www.hulu.com/series/0cb9b63b-de82-4751-99c9-1cb12118ab9d", serviceId: "hulu" },
  { title: "Atlanta", service: "Hulu", directUrl: "https://www.hulu.com/series/9dc170da-85db-475d-9df4-6572f15ffb00", serviceId: "hulu" },
  { title: "Frasier", service: "Hulu", directUrl: "https://www.hulu.com/series/6deba130-65fb-4816-acb1-aea5eb940f0f", serviceId: "hulu" },
  
  // Drama & Thriller
  { title: "This Is Us", service: "Hulu", directUrl: "https://www.hulu.com/series/8cc910fe-b59e-46a5-9966-16c4e0ed208d", serviceId: "hulu" },
  { title: "The Americans", service: "Hulu", directUrl: "https://www.hulu.com/series/57048262-2ca5-41ee-9b57-53bb9b9e1596", serviceId: "hulu" },
  { title: "The Act", service: "Hulu", directUrl: "https://www.hulu.com/series/d6a7aec6-72d2-46bb-b337-2cb412df64c8", serviceId: "hulu" },
  { title: "Normal People", service: "Hulu", directUrl: "https://www.hulu.com/series/466b3994-b574-44f1-88bc-63707507a6cb", serviceId: "hulu" },
  { title: "Love, Victor", service: "Hulu", directUrl: "https://www.hulu.com/series/044bbd6e-4ef5-4723-93fe-a384d785b45d", serviceId: "hulu" },
  
  // Sci-Fi & Mystery
  { title: "The X-Files", service: "Hulu", directUrl: "https://www.hulu.com/series/4626972c-9da7-40fe-aed7-977f55f48fc5", serviceId: "hulu" },
  { title: "Lost", service: "Hulu", directUrl: "https://www.hulu.com/series/a67a233c-fcfe-4e8e-b000-052603ddd616", serviceId: "hulu" },
  { title: "Firefly", service: "Hulu", directUrl: "https://www.hulu.com/series/f2c277c5-62b4-417c-b277-8435b70176dd", serviceId: "hulu" },
  { title: "Veronica Mars", service: "Hulu", directUrl: "https://www.hulu.com/series/720ef5c1-fc77-4924-98c5-491455a06895", serviceId: "hulu" },
  
  // Horror & Suspense
  { title: "American Horror Story", service: "Hulu", directUrl: "https://www.hulu.com/series/08cc467f-2057-4331-825a-1f993c79c862", serviceId: "hulu" },
  { title: "Buffy the Vampire Slayer", service: "Hulu", directUrl: "https://www.hulu.com/series/2faf68df-e153-4e47-b117-a048427b250f", serviceId: "hulu" },
  
  // Crime & Legal
  { title: "Law & Order: SVU", service: "Hulu", directUrl: "https://www.hulu.com/series/bbdeec4e-ddf8-49e8-9152-28baea903902", serviceId: "hulu" },
  { title: "Bones", service: "Hulu", directUrl: "https://www.hulu.com/series/3c3c0f8b-7366-4d15-88ab-18050285978e", serviceId: "hulu" },
  { title: "Justified", service: "Hulu", directUrl: "https://www.hulu.com/series/977c8e25-cde0-41b7-80ce-e746f2d2093f", serviceId: "hulu" },
  
  // Additional Popular Shows
  { title: "Family Guy", service: "Hulu", directUrl: "https://www.hulu.com/series/883c414c-34a3-4fcc-b50a-0ad5a184c977", serviceId: "hulu" },
  { title: "American Dad", service: "Hulu", directUrl: "https://www.hulu.com/series/42850dbc-0f98-4d8a-a09a-3427ee8085e5", serviceId: "hulu" },
  { title: "Modern Family", service: "Hulu", directUrl: "https://www.hulu.com/series/bc68ac79-3ace-4427-9ec0-5ee6f314d194", serviceId: "hulu" },
  { title: "New Girl", service: "Hulu", directUrl: "https://www.hulu.com/series/bba197b5-eb03-4a09-b5f6-f04c053471d7", serviceId: "hulu" },
  { title: "How I Met Your Mother", service: "Hulu", directUrl: "https://www.hulu.com/series/30fb4e12-5a72-4fe6-85ff-ddb5e88d1a65", serviceId: "hulu" },
  { title: "Scrubs", service: "Hulu", directUrl: "https://www.hulu.com/series/bfd6ba83-5fff-46f8-abae-76f1796c1c8e", serviceId: "hulu" },
];

export const DISNEY_SHOWS: CuratedShow[] = [
  { title: "The Mandalorian", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-mandalorian/3jLIGMDlxR5E", serviceId: "disney-plus" },
  { title: "Loki", service: "Disney+", directUrl: "https://www.disneyplus.com/series/loki/6pARMvILBGzF", serviceId: "disney-plus" },
  { title: "WandaVision", service: "Disney+", directUrl: "https://www.disneyplus.com/series/wandavision/4SrN28ZjDLwH", serviceId: "disney-plus" },
  { title: "Andor", service: "Disney+", directUrl: "https://www.disneyplus.com/series/andor/3xsQKWG00GL5", serviceId: "disney-plus" },
  { title: "Star Wars: The Clone Wars", service: "Disney+", directUrl: "https://www.disneyplus.com/series/star-wars-the-clone-wars/1wYXzjabXGVZ", serviceId: "disney-plus" },
  { title: "Star Wars Rebels", service: "Disney+", directUrl: "https://www.disneyplus.com/series/star-wars-rebels/1wYXzjZ4kMWy", serviceId: "disney-plus" },
  { title: "The Simpsons", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-simpsons/5ZSPgHjR9P07", serviceId: "disney-plus" },
  { title: "Bluey", service: "Disney+", directUrl: "https://www.disneyplus.com/series/bluey/0QGZ0uKK7K6m", serviceId: "disney-plus" },
  { title: "Gravity Falls", service: "Disney+", directUrl: "https://www.disneyplus.com/series/gravity-falls/2cIRMzm3Ka6s", serviceId: "disney-plus" },
  { title: "The Owl House", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-owl-house/2hoKyD2UDDU3", serviceId: "disney-plus" },
  { title: "Marvel's What If…?", service: "Disney+", directUrl: "https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9", serviceId: "disney-plus" },
  { title: "Daredevil", service: "Disney+", directUrl: "https://www.disneyplus.com/series/marvels-daredevil/1rP2AYMaBDX2", serviceId: "disney-plus" },
  { title: "Jessica Jones", service: "Disney+", directUrl: "https://www.disneyplus.com/series/marvels-jessica-jones/1gXMw37Y62VN", serviceId: "disney-plus" },
  { title: "Agents of S.H.I.E.L.D.", service: "Disney+", directUrl: "https://www.disneyplus.com/series/marvels-agents-of-shield/5ZXm3d9L1ChA", serviceId: "disney-plus" },
  { title: "The Falcon and The Winter Soldier", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-falcon-and-the-winter-soldier/4gglDBMx8icA", serviceId: "disney-plus" },
  { title: "Hawkeye", service: "Disney+", directUrl: "https://www.disneyplus.com/series/hawkeye/11Zy8m9Dkj5l", serviceId: "disney-plus" },
  { title: "Moon Knight", service: "Disney+", directUrl: "https://www.disneyplus.com/series/moon-knight/4S3oOF1KnNoX", serviceId: "disney-plus" },
  { title: "Ahsoka", service: "Disney+", directUrl: "https://www.disneyplus.com/series/ahsoka/72ZVjlsq0asB", serviceId: "disney-plus" },
  { title: "Obi-Wan Kenobi", service: "Disney+", directUrl: "https://www.disneyplus.com/series/obi-wan-kenobi/6YXs2RZHQI6N", serviceId: "disney-plus" },
  { title: "The Book of Boba Fett", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-book-of-boba-fett/67j3r8JuZOD5", serviceId: "disney-plus" },
  { title: "Hannah Montana", service: "Disney+", directUrl: "https://www.disneyplus.com/series/hannah-montana/5rAr80WwuvJu", serviceId: "disney-plus" },
  { title: "The World According to Jeff Goldblum", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-world-according-to-jeff-goldblum/6hc7rVRxX7K3", serviceId: "disney-plus" },
  { title: "High School Musical: The Musical: The Series", service: "Disney+", directUrl: "https://www.disneyplus.com/series/high-school-musical-the-musical-the-series/2EIgZcJUfGPO", serviceId: "disney-plus" },
  { title: "Monsters at Work", service: "Disney+", directUrl: "https://www.disneyplus.com/series/monsters-at-work/5RhgQgZkq5n6", serviceId: "disney-plus" },
  { title: "Star Wars: Visions", service: "Disney+", directUrl: "https://www.disneyplus.com/series/star-wars-visions/6hY7RzW3I0mY", serviceId: "disney-plus" },
  { title: "The Imagineering Story", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-imagineering-story/1hRJ7EuuTNs5", serviceId: "disney-plus" },
  { title: "The Beatles: Get Back", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-beatles-get-back/7DcWEeWVqrkE", serviceId: "disney-plus" },
  { title: "Once Upon a Time", service: "Disney+", directUrl: "https://www.disneyplus.com/series/once-upon-a-time/2ulBFOM7VGYD", serviceId: "disney-plus" },
  { title: "The Muppet Show", service: "Disney+", directUrl: "https://www.disneyplus.com/series/the-muppet-show/6sG9AbtiZujc", serviceId: "disney-plus" },
  { title: "X-Men: The Animated Series", service: "Disney+", directUrl: "https://www.disneyplus.com/series/x-men/5YCbujSpGD1v", serviceId: "disney-plus" },
  { title: "Secret Invasion", service: "Disney+", directUrl: "https://www.disneyplus.com/series/secret-invasion/3SgnoZa4S138", serviceId: "disney-plus" },
  { title: "Ms. Marvel", service: "Disney+", directUrl: "https://www.disneyplus.com/series/ms-marvel/45uN6kspanve", serviceId: "disney-plus" },
  { title: "Runaways", service: "Disney+", directUrl: "https://www.disneyplus.com/series/marvels-runaways/6BUGVxQl1sVe", serviceId: "disney-plus" },
  { title: "The Punisher", service: "Disney+", directUrl: "https://www.disneyplus.com/series/marvels-the-punisher/6Z1RJ54IoODu", serviceId: "disney-plus" },
  { title: "Alias", service: "Disney+", directUrl: "https://www.disneyplus.com/series/alias/51oJqYyTi5Zm", serviceId: "disney-plus" },
  { title: "Lost", service: "Disney+", directUrl: "https://www.disneyplus.com/series/lost/5czGEh2HzOHB", serviceId: "disney-plus" },
  { title: "Modern Family", service: "Disney+", directUrl: "https://www.disneyplus.com/series/modern-family/52SH0SsRM0VZ", serviceId: "disney-plus" },
  { title: "Glee", service: "Disney+", directUrl: "https://www.disneyplus.com/series/glee/7IbGyQcp7cnX", serviceId: "disney-plus" },
  { title: "Prison Break", service: "Disney+", directUrl: "https://www.disneyplus.com/series/prison-break/3ZQh0pTHDnTN", serviceId: "disney-plus" },
];

export const MAX_SHOWS: CuratedShow[] = [
  { title: "The Sopranos", service: "Max", directUrl: "https://www.max.com/shows/sopranos/818c3d9d-1831-48a6-9583-0364a7f98453", serviceId: "hbo-max" },
  { title: "The Wire", service: "Max", directUrl: "https://www.max.com/shows/the-wire/94dc0e9b-f51a-4646-8582-a42fa0197f96", serviceId: "hbo-max" },
  { title: "Game of Thrones", service: "Max", directUrl: "https://www.max.com/shows/game-of-thrones/ea8d61ae-546a-4f98-91f2-1f1632938440", serviceId: "hbo-max" },
  { title: "Succession", service: "Max", directUrl: "https://www.max.com/shows/succession/7d78008e-45fd-4c1a-bcd5-8edc5d0dffd4", serviceId: "hbo-max" },
  { title: "Band of Brothers", service: "Max", directUrl: "https://www.max.com/shows/band-of-brothers/fc8e2181-7674-4bfe-97db-0983a3f20607", serviceId: "hbo-max" },
  { title: "Chernobyl", service: "Max", directUrl: "https://www.hbomax.com/shows/chernobyl/396999a6-3fff-4af3-802b-10c46d10deff", serviceId: "hbo-max" },
  { title: "House of the Dragon", service: "Max", directUrl: "https://www.hbomax.com/shows/house-of-the-dragon/c68e69d7-9317-428a-a615-cdf8fe5a2e06", serviceId: "hbo-max" },
  { title: "Friends", service: "Max", directUrl: "https://www.max.com/shows/friends/227ad9a2-336c-4f14-93b1-7becec721414", serviceId: "hbo-max" },
  { title: "South Park", service: "Max", directUrl: "https://www.max.com/shows/south-park/59e8c210-e48a-4de9-8824-8e2f50db127a", serviceId: "hbo-max" },
  { title: "Rick and Morty", service: "Max", directUrl: "https://www.max.com/shows/rick-and-morty/36c03c30-880b-4b18-bd3f-eca2e20f3a5f", serviceId: "hbo-max" },
  { title: "Watchmen", service: "Max", directUrl: "https://www.max.com/shows/watchmen/522d6bb2-f05b-4bf1-9573-68f2d43d97cf", serviceId: "hbo-max" },
  { title: "True Detective", service: "Max", directUrl: "https://www.max.com/shows/true-detective/1e51fab5-2c91-40d9-bdb1-67c6a1b105dd", serviceId: "hbo-max" },
  { title: "Euphoria", service: "Max", directUrl: "https://www.max.com/shows/euphoria/3f5fd3c6-256e-4b64-9fc7-be6b4fa819c0", serviceId: "hbo-max" },
  { title: "Curb Your Enthusiasm", service: "Max", directUrl: "https://www.max.com/shows/curb-your-enthusiasm/ca4ae63c-0e9b-4feb-8cb2-c2c76b8898b0", serviceId: "hbo-max" },
  { title: "Barry", service: "Max", directUrl: "https://www.max.com/shows/barry/74be8166-0ced-4d1c-8747-78dbb8b1ef5b", serviceId: "hbo-max" },
  { title: "Hacks", service: "Max", directUrl: "https://www.max.com/shows/hacks/860f6190-7664-4c06-b5e3-61a0c96bdf5f", serviceId: "hbo-max" },
  { title: "The White Lotus", service: "Max", directUrl: "https://www.max.com/shows/white-lotus/14f9834d-bc23-41a8-ab61-5c8abdbea505", serviceId: "hbo-max" },
  { title: "Six Feet Under", service: "Max", directUrl: "https://www.max.com/shows/six-feet-under/0945b382-4614-4b55-aec4-6b4e2a4fe3be", serviceId: "hbo-max" },
  { title: "Deadwood", service: "Max", directUrl: "https://www.max.com/shows/deadwood/bb4d1f09-94c8-4383-821a-a2b61a62d2c0", serviceId: "hbo-max" },
  { title: "Rome", service: "Max", directUrl: "https://www.max.com/shows/rome/5d861a91-0ae9-4b5a-91c0-8d09a5b58f3a", serviceId: "hbo-max" },
  { title: "The Leftovers", service: "Max", directUrl: "https://www.max.com/shows/the-leftovers/3539a7d0-03a9-4262-8466-454f8e8d6280", serviceId: "hbo-max" },
  { title: "Veep", service: "Max", directUrl: "https://www.max.com/shows/veep/3190cb19-90c9-42ef-adc3-942bcd865d42", serviceId: "hbo-max" },
  { title: "Silicon Valley", service: "Max", directUrl: "https://www.max.com/shows/silicon-valley/0e17d921-9f9a-4c79-923f-4931f1aa1c99", serviceId: "hbo-max" },
  { title: "The Larry Sanders Show", service: "Max", directUrl: "https://www.max.com/shows/the-larry-sanders-show/aa3e5f8b-ff1a-4a6b-94b7-5cb9a845bf40", serviceId: "hbo-max" },
  { title: "Mare of Easttown", service: "Max", directUrl: "https://www.max.com/shows/mare-of-easttown/f57f35ed-fb11-4b4a-bc88-0dcf0176c637", serviceId: "hbo-max" },
  { title: "Big Little Lies", service: "Max", directUrl: "https://www.max.com/shows/big-little-lies/e63abdf7-9c0f-405c-869b-2a27f588d3ec", serviceId: "hbo-max" },
  { title: "Station Eleven", service: "Max", directUrl: "https://www.max.com/shows/station-eleven/0f2754d9-9d83-448b-9bdb-1417016b9ff7", serviceId: "hbo-max" },
  { title: "The West Wing", service: "Max", directUrl: "https://www.max.com/shows/the-west-wing/da7ad6c3-6d01-415e-92f9-07bb4fbc4b3d", serviceId: "hbo-max" },
  { title: "The Big Bang Theory", service: "Max", directUrl: "https://www.max.com/shows/the-big-bang-theory/6ce7d692-7b33-42b7-8795-3f3a8e730ef0", serviceId: "hbo-max" },
  { title: "Batman: The Animated Series", service: "Max", directUrl: "https://www.max.com/shows/batman-the-animated-series/f7d0f7a1-1ad7-49fb-910e-5fe9b1c50138", serviceId: "hbo-max" },
  { title: "Adventure Time", service: "Max", directUrl: "https://www.max.com/shows/adventure-time/0aa79ae3-5465-4b3c-a6b1-b87320b28e5c", serviceId: "hbo-max" },
  { title: "The Last of Us", service: "Max", directUrl: "https://www.max.com/shows/the-last-of-us/31af9141-394a-4df6-9cba-2ed1ac167d15", serviceId: "hbo-max" },
  { title: "Our Flag Means Death", service: "Max", directUrl: "https://www.max.com/shows/our-flag-means-death/f621ae6a-7acd-4a30-9a8a-0f7fef3efb4c", serviceId: "hbo-max" },
  { title: "Harley Quinn", service: "Max", directUrl: "https://www.max.com/shows/harley-quinn/302d1583-55f1-4a6a-8d9d-1ad7fa4112e8", serviceId: "hbo-max" },
  { title: "Young Justice", service: "Max", directUrl: "https://www.max.com/shows/young-justice/c6115cff-791a-435e-a6a5-455a7d3b8c5b", serviceId: "hbo-max" },
  { title: "The Boondocks", service: "Max", directUrl: "https://www.max.com/shows/the-boondocks/effd049e-36a8-4594-9a6a-8cefc351883b", serviceId: "hbo-max" },
  { title: "Fringe", service: "Max", directUrl: "https://www.max.com/shows/fringe/5d7d6bc5-799e-4b91-87b7-229d4700212a", serviceId: "hbo-max" },
];

export const PRIME_SHOWS: CuratedShow[] = [
  { title: "Fleabag", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B07HPC3CV1", serviceId: "amazon-prime" },
  { title: "The Marvelous Mrs. Maisel", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B077JBPCCG", serviceId: "amazon-prime" },
  { title: "The Boys", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B0875V2F41", serviceId: "amazon-prime" },
  { title: "Invincible", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B08P3QB6JP", serviceId: "amazon-prime" },
  { title: "The Expanse", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B08B49QMGV", serviceId: "amazon-prime" },
  { title: "Bosch", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B00I3M40Q0", serviceId: "amazon-prime" },
  { title: "Bosch: Legacy", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B09QH6Z7XN", serviceId: "amazon-prime" },
  { title: "The Legend of Vox Machina", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B09QH98YGX", serviceId: "amazon-prime" },
  { title: "Good Omens", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B07FCVJRRL", serviceId: "amazon-prime" },
  { title: "The Man in the High Castle", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B00RSGIVVO", serviceId: "amazon-prime" },
  { title: "The Wheel of Time", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B096TWDL89", serviceId: "amazon-prime" },
  { title: "Reacher", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B09NP4B1JX", serviceId: "amazon-prime" },
  { title: "Jack Ryan", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B073RPQFVR", serviceId: "amazon-prime" },
  { title: "Transparent", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B00I3NIA0W", serviceId: "amazon-prime" },
  { title: "Mozart in the Jungle", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B00I3NHQ5I", serviceId: "amazon-prime" },
  { title: "The Underground Railroad", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B09223LLPT", serviceId: "amazon-prime" },
  { title: "A Very English Scandal", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B07J3C1X9W", serviceId: "amazon-prime" },
  { title: "Small Axe", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B08MQLD1YD", serviceId: "amazon-prime" },
  { title: "Deadloch", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B0B6W1L9J7", serviceId: "amazon-prime" },
  { title: "Catastrophe", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B07GFPMFNS", serviceId: "amazon-prime" },
  { title: "Harlem", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B09MSYGB6S", serviceId: "amazon-prime" },
  { title: "The Summer I Turned Pretty", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B09XDHYZM7", serviceId: "amazon-prime" },
  { title: "Downton Abbey", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B00X8Q9S32", serviceId: "amazon-prime" },
  { title: "Orphan Black", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B00CHTYJW6", serviceId: "amazon-prime" },
  { title: "Mr. Robot", service: "Prime Video", directUrl: "https://www.amazon.com/dp/B016DR3S60", serviceId: "amazon-prime" },
];

export const APPLE_SHOWS: CuratedShow[] = [
  { title: "Ted Lasso", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy", serviceId: "apple-tv" },
  { title: "Severance", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx", serviceId: "apple-tv" },
  { title: "For All Mankind", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7", serviceId: "apple-tv" },
  { title: "The Morning Show", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/the-morning-show/umc.cmc.25tn3v8ku4b39tr6ccgb8nl6m", serviceId: "apple-tv" },
  { title: "Foundation", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3", serviceId: "apple-tv" },
  { title: "Slow Horses", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o", serviceId: "apple-tv" },
  { title: "Mythic Quest", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/mythic-quest/umc.cmc.1nfdfd5zlk05fo1bwwetzldy3", serviceId: "apple-tv" },
  { title: "Defending Jacob", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/defending-jacob/umc.cmc.5h5mr0shyyqqahqdv55ywyilr", serviceId: "apple-tv" },
  { title: "Pachinko", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/pachinko/umc.cmc.17vf6g68dy89kk1l1nnb6min4", serviceId: "apple-tv" },
  { title: "Dickinson", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/dickinson/umc.cmc.1ogyy5s2agasxa5qztabrlykn", serviceId: "apple-tv" },
  { title: "Servant", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/servant/umc.cmc.4y25wuby7pck9o6vaubbbk7m", serviceId: "apple-tv" },
  { title: "The Afterparty", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/the-afterparty/umc.cmc.5q8sccvw6n0xulc4p7rmnyoy", serviceId: "apple-tv" },
  { title: "Black Bird", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/black-bird/umc.cmc.2cehpx8nylr90xn7pdtpq93ja", serviceId: "apple-tv" },
  { title: "Bad Sisters", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/bad-sisters/umc.cmc.4depy99negtpsvqy7vqmnntfz", serviceId: "apple-tv" },
  { title: "Silo", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/silo/umc.cmc.3s7c0v9sa4cg272ufz8hcz8p2", serviceId: "apple-tv" },
  { title: "Platonic", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/platonic/umc.cmc.3ovgk18cfsv2b40v4e20x9gq", serviceId: "apple-tv" },
  { title: "Hijack", service: "Apple TV+", directUrl: "https://tv.apple.com/us/show/hijack/umc.cmc.41u1v8n6n7wokqo81kntpkr8m", serviceId: "apple-tv" },
];

export const PEACOCK_SHOWS: CuratedShow[] = [
  { title: "The Office", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/the-office", serviceId: "peacock" },
  { title: "Parks and Recreation", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/parks-and-recreation", serviceId: "peacock" },
  { title: "30 Rock", service: "Peacock", directUrl: "https://www.peacocktv.com/watch-online/tv/30-rock", serviceId: "peacock" },
  { title: "Yellowstone", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/yellowstone", serviceId: "peacock" },
  { title: "Brooklyn Nine-Nine", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/brooklyn-nine-nine", serviceId: "peacock" },
  { title: "Modern Family", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/modern-family", serviceId: "peacock" },
  { title: "Battlestar Galactica", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/battlestar-galactica", serviceId: "peacock" },
  { title: "Psych", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/psych", serviceId: "peacock" },
  { title: "Monk", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/monk", serviceId: "peacock" },
  { title: "Friday Night Lights", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/friday-night-lights", serviceId: "peacock" },
  { title: "Poker Face", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/poker-face", serviceId: "peacock" },
  { title: "Bel-Air", service: "Peacock", directUrl: "https://www.peacocktv.com/stream-tv/bel-air", serviceId: "peacock" },
];

export const PARAMOUNT_SHOWS: CuratedShow[] = [
  { title: "Star Trek: Strange New Worlds", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/star-trek-strange-new-worlds/", serviceId: "paramount-plus" },
  { title: "Star Trek: Picard", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/star-trek-picard/", serviceId: "paramount-plus" },
  { title: "Star Trek: The Next Generation", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/star-trek-the-next-generation/", serviceId: "paramount-plus" },
  { title: "The Good Fight", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/the-good-fight/", serviceId: "paramount-plus" },
  { title: "Yellowjackets", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/yellowjackets/", serviceId: "paramount-plus" },
  { title: "Dexter", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/dexter/", serviceId: "paramount-plus" },
  { title: "Dexter: New Blood", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/dexter-new-blood/", serviceId: "paramount-plus" },
  { title: "Billions", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/billions/", serviceId: "paramount-plus" },
  { title: "Homeland", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/homeland/", serviceId: "paramount-plus" },
  { title: "Frasier (2023)", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/frasier-2023/", serviceId: "paramount-plus" },
  { title: "Avatar: The Last Airbender", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/avatar-the-last-airbender/", serviceId: "paramount-plus" },
  { title: "SpongeBob SquarePants", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/spongebob-squarepants/", serviceId: "paramount-plus" },
  { title: "The Legend of Korra", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/legend-of-korra/", serviceId: "paramount-plus" },
  { title: "Halo", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/halo/", serviceId: "paramount-plus" },
  { title: "1883", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/1883/", serviceId: "paramount-plus" },
  { title: "Mayor of Kingstown", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/mayor-of-kingstown/", serviceId: "paramount-plus" },
  { title: "Evil", service: "Paramount+", directUrl: "https://www.paramountplus.com/shows/evil/", serviceId: "paramount-plus" },
  { title: "South Park", service: "Paramount+", directUrl: "https://www.paramountplus.com/collections/south-park/", serviceId: "paramount-plus" },
];

// Combine all shows
export const ALL_SHOWS: CuratedShow[] = [
  ...NETFLIX_SHOWS,
  ...HULU_SHOWS,
  ...DISNEY_SHOWS,
  ...MAX_SHOWS,
  ...PRIME_SHOWS,
  ...APPLE_SHOWS,
  ...PEACOCK_SHOWS,
  ...PARAMOUNT_SHOWS,
];

// Get shows by service
export function getShowsByService(serviceId: string): CuratedShow[] {
  return ALL_SHOWS.filter(show => show.serviceId === serviceId);
}

// Get featured shows (mix from all services)
export function getFeaturedShows(count: number = 20): CuratedShow[] {
  const shuffled = [...ALL_SHOWS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Get shows excluding user's active services
export function getShowsNotOnUserServices(activeServiceIds: string[]): CuratedShow[] {
  return ALL_SHOWS.filter(show => !activeServiceIds.includes(show.serviceId));
}


// FindWeed — sample data
window.WS_DATA = {
  categories: [
    { id: "disp",   label: "Dispenzáře",   icon: "🌿", color: "moss" },
    { id: "cbd",    label: "CBD obchody",  icon: "🧴", color: "moss" },
    { id: "cafe",   label: "Kavárny",      icon: "☕", color: "terracotta" },
    { id: "rest",   label: "Restaurace",   icon: "🍴", color: "terracotta" },
    { id: "bar",    label: "Bary",         icon: "🍷", color: "mustard" },
    { id: "shop",   label: "Coffeeshopy",  icon: "🌬", color: "moss" },
    { id: "event",  label: "Akce",         icon: "✦",  color: "mustard" },
  ],
  spots: [
    { id: 1, name: "Café Listopad",       cat: "cafe",  dist: "0.4 km", open: true,  rating: 4.8, reviews: 142, tags: ["specialty kafe","CBD menu","pet-friendly"], hours: "do 22:00", area: "Praha 7", lat: 0.55, lng: 0.42, img: "moss" },
    { id: 2, name: "Green Republic",      cat: "disp",  dist: "0.8 km", open: true,  rating: 4.9, reviews: 318, tags: ["medical","ověřeno","výběr 40+"],         hours: "do 20:00", area: "Praha 1", lat: 0.42, lng: 0.55, img: "terracotta" },
    { id: 3, name: "Konopná Lékárna",     cat: "cbd",   dist: "1.2 km", open: false, rating: 4.6, reviews: 89,  tags: ["CBD","extrakty","oleje"],                hours: "otevře 9:00", area: "Praha 2", lat: 0.62, lng: 0.30, img: "mustard" },
    { id: 4, name: "Bistro Sedmička",     cat: "rest",  dist: "0.6 km", open: true,  rating: 4.7, reviews: 211, tags: ["brunch","CBD koktejly","terasa"],        hours: "do 23:00", area: "Praha 7", lat: 0.50, lng: 0.48, img: "terracotta" },
    { id: 5, name: "Mlýnská Kavárna",     cat: "cafe",  dist: "0.9 km", open: true,  rating: 4.5, reviews: 76,  tags: ["víkend brunch","kniha"],                  hours: "do 19:00", area: "Praha 5", lat: 0.35, lng: 0.40, img: "moss" },
    { id: 6, name: "Bar Pětka",           cat: "bar",   dist: "1.4 km", open: true,  rating: 4.4, reviews: 198, tags: ["natural","DJ","zahrádka"],               hours: "do 02:00", area: "Praha 5", lat: 0.30, lng: 0.62, img: "mustard" },
    { id: 7, name: "Highline Coffeeshop", cat: "shop",  dist: "2.1 km", open: true,  rating: 4.7, reviews: 504, tags: ["lounge","wifi","menu 20+"],              hours: "do 24:00", area: "Praha 4", lat: 0.70, lng: 0.65, img: "moss" },
  ],
  reviews: [
    { id: 1, spot: 1, user: "Tereza M.", avatar: "T", rating: 5, when: "2 dny", text: "Sobotní brunch byl naprosto skvělý — domácí granola a kafe na úrovni. Personál nechal nás sedět 3 hodiny v klidu." },
    { id: 2, spot: 1, user: "Jakub R.",  avatar: "J", rating: 4, when: "1 týden", text: "Příjemné místo. CBD menu je drobné ale vybrané. Doporučuji oblíbený stůl u okna." },
    { id: 3, spot: 1, user: "Lenka V.",  avatar: "L", rating: 5, when: "3 týdny", text: "Můj nový oblíbený spot v Praze 7. Konečně místo, kde nemusím nic vysvětlovat." },
  ],
  user: {
    name: "Adam Novotný",
    handle: "@adamn",
    saved: 12,
    visited: 38,
    reviews: 7,
    avatar: "A",
  },
};

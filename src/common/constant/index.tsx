import SurabayaImage from "@/assets/images/surabaya.jpg"
import JogjaImage from "@/assets/images/jogja.jpg"
import BirthdayImage from "@/assets/images/birthday.jpg"
import TentenImage from "@/assets/images/tenten.jpeg"

const LIST_MENU = [
  {
    menu: 'Prolouge',
    id: 'prolouge',
  },
  {
    menu: 'Moments',
    id: 'moments',
  },
  {
    menu: 'Wish',
    id: 'wish',
  },
  {
    menu: 'Epilogue',
    id: 'epilogue',
  }
];

const LIST_MOMENT = [
  {
    key: 1,
    date: 'February 2023',
    title: 'Dating in Surabaya',
    description: 
      `For the first time in many years, returning to Surabaya for a holiday, 
      but this time it's a little different hehe. Because this holiday is with you, even 
      though when you picked me up at the station it was annoying haha, but it's okay, 
      it's really fun to be able to go on a date with you in Surabaya.`,
    image: SurabayaImage
  },
  {
    key: 2,
    date: 'May 2023',
    title: 'Dating in Yogyakarta',
    description: 
      `After previously we had a date in Surabaya, 
      now we are moving to Yogyakarta hehe. It's really exciting to be able to date in 
      Yogyakarta after previously being single during college, and when I had 
      a girlfriend I was in a long distance relationship. Starting from the pine forest, 
      Tamansari, to Art Jog, and also chasing the sunset on the beach. It's really fun darling.`,
    image: JogjaImage
  },
  {
    key: 3,
    date: 'October 2023',
    title: `Celebrate Boyfriend Birthday`,
    description: 
      `Thank you darling, for trying to celebrate my birthday huhu and 
      buying lots of gifts for myself, I'm very happy because all the 
      gifts are very useful and I continue to use them for work and play. 
      I hope you like your birthday gift from me`,
    image: BirthdayImage
  },
  {
    key: 4,
    date: 'December 2023',
    title: `Date last year in Yogyakarta`,
    description: 
      `Thank you to last time you come to Jogja again for this year and I can give you a really 
      gifthbirthday to you`,
    image: TentenImage
  }
]

const LIST_WISH = [
  {
    name: "Dindha",
    wish: `Happy Birthday Dessy!♡
          Ga kerasa kita udah 15tahunan berteman, meskipun pernah renggang ataupun bertengkar wkw mianhae👉🏻👈🏻 maaciw sudah menerima keluh kesahku selama ini
          Semoga hari ini bisa menjadi momen penting yang selalu kamu rindukan setiap tahunnya
          Semoga kamu selalu diberikan kesehatan dimanapun kamu berada tp kl bisa yg deket2 bjn aja yak🤨 selalu dimudahkan dan dilancarkan segala urusannya, bahagia dunia akhirat🤲🏻
          Dannnnnn semoga kali ini menjadi pelabuhan terakhirmu yaa xixi
          Aamiin ya rabbal allamiin.....

          Ditunggu kabar baik dan undangannya!😙
          Once again, happy birthday beb!!🤍`
  },{
    name : "Sasha",
    wish: `Happy Birthdayyyyy luvvvvv. Semoga selalu sehat sekeluarga, selalu diberi keberkahan dalam hidup, dimudahkan segala urusan dunia-akhirat, selalu mendapatkan yg terbaik dalam segala hal. Jangan lupa selalu bahagia yaaaahhhh. kurangkurangi ngambekane, wis karek rabine lohh wkwkwkw. Terima kasih karena sudah dan masih betah temenan sama aku, sudah selalu ada tiap aku butuh bantuan, temen main atau temen ceritaaa. met ultah cantikkk, enjoy ur 24🫶🏻`
  },
  {
    name: "Ama",
    wish: `Happy Birthday Dessy Devina, wish all the best for you ya! aku harap semua impian kamu akan terwujud, bahagia selalu dan lancar segala urusan kamu ya! sehat sehat diumur yg makin menuwir ini 🫶🏼`
  }
]

export { LIST_MENU, LIST_MOMENT, LIST_WISH }
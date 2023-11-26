import SurabayaImage from "@/assets/images/surabaya.jpg"
import JogjaImage from "@/assets/images/jogja.jpg"
import BirthdayImage from "@/assets/images/birthday.jpg"

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
    menu: 'Songs',
    id: 'songs',
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
  }
]

export { LIST_MENU, LIST_MOMENT }
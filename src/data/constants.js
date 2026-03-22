export const COLORS = {
  fiqh: '#D4AC0D',
  usulfiqh: '#A8CC30',
  aqidah: '#3A8ED8',
  hadith: '#38B870',
  tafsir: '#9858D8',
  ulum: '#E82020',
  mantiq: '#A8A8B8',
  tasawwuf: '#D84878',
  ruler: '#C05838',
  history: '#6898A8'
};

export const LABELS = {
  fiqh: 'Fiqh',
  aqidah: 'Aqidah / Kalam',
  usulfiqh: 'Usul al-Fiqh',
  hadith: 'Hadith',
  tafsir: 'Tafsir',
  ulum: 'Ulum al-Awail',
  mantiq: 'Mantiq / Logic',
  tasawwuf: 'Tasawwuf',
  ruler: 'Ruler / Sultan',
  history: 'History / Encyclopedist'
};

export const PERIODS = [
  {id: 'p1', era: 'Founding Era', hijri: '80 – 200 AH', dynasty: 'Umayyad · Early Abbasid', range: [0, 200]},
  {id: 'p2', era: 'Abbasid Classical', hijri: '200 – 350 AH', dynasty: 'Abbasid Caliphate', range: [200, 350]},
  {
    id: 'p3',
    era: 'Samanid / Buyid',
    hijri: '350 – 460 AH',
    dynasty: 'Samanids · Buyids · Ghaznavids',
    range: [350, 460]
  },
  {
    id: 'p4',
    era: 'Seljuk Era',
    hijri: '460 – 600 AH',
    dynasty: 'Great Seljuks · Qarakhanids · Khwarazmians',
    range: [460, 600]
  },
  {
    id: 'p5',
    era: 'Ayyubid / Mongol',
    hijri: '600 – 700 AH',
    dynasty: 'Zengids · Ayyubids · Mongol Invasion',
    range: [600, 700]
  },
  {
    id: 'p6',
    era: 'Ilkhanid / Mamluk',
    hijri: '700 – 800 AH',
    dynasty: 'Ilkhanids · Mamluks · Delhi Sultanate · Early Ottomans',
    range: [700, 800]
  },
  {
    id: 'p7',
    era: 'Timurid / Early Ottoman',
    hijri: '800 – 900 AH',
    dynasty: 'Timurids · Mamluks · Ottoman Rise',
    range: [800, 900]
  },
  {
    id: 'p8',
    era: 'Ottoman / Mughal Golden Age',
    hijri: '900 – 1150 AH',
    dynasty: 'Ottoman Empire · Mughal Empire',
    range: [900, 1150]
  },
  {
    id: 'p9',
    era: 'Late Ottoman',
    hijri: '1150 – 1350 AH',
    dynasty: 'Late Ottoman · Mughal Decline · Colonial Era',
    range: [1150, 1350]
  },
  {
    id: 'p10',
    era: 'Modern Era',
    hijri: '1350 AH – Present',
    dynasty: 'Post-Ottoman · Contemporary',
    range: [1350, 9999]
  }
];

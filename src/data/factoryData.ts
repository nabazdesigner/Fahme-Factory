import { Product, GalleryItem } from '../types';

export const FACTORY_INFO = {
  nameAr: 'معمل حدادة فهمي',
  nameEn: 'FAHME BLOCK MACHINE FACTORY',
  subEn: 'Fahme Concrete Block Machines',
  taglineAr: 'لصنع كابسات البلوك و الخباطة المركزية و سايلوات و ملحقاته',
  phone: '0770 151 4860',
  phoneRaw: '07701514860',
  email: 'fahmekarkoki@gmail.com',
  facebook: 'Fahme Hadad',
  facebookUrl: 'https://www.facebook.com/share/1KoV2grUSr/?mibextid=wwXIfr',
  youtubeUrl: 'https://youtube.com/@fahmehadad4584?si=z80TRopKwrBW-8jM',
  tiktokUrl: 'https://www.tiktok.com/@fahmehadad?_r=1&_t=ZS-9AT88wwPkFW',
  locationAr: 'كركوك - حي صناعي',
  locationDetails: 'العراق - كركوك - حي صناعي',
  googleMapsUrl: 'https://maps.app.goo.gl/hDGVhV8DPGLeUdBP9?g_st=ic',
  establishedYear: 2004,
  experienceYears: 22,
  whatsappLink: 'https://wa.me/9647701514860',
  description: 'معمل حدادة فهمي هو أحد المعامل الرائدة في العراق لصناعة كابسات البلوك المتطورة والخباطات المركزية والسايلوات والقوالب الهندسية. تأسس المعمل عام 2004 بخبرة هندسية وميكانيكية عالية لتجهيز مشاريع الإعمار بأحدث خطوط الإنتاج المعتمدة.',
  quoteSlogan: 'جودة البناء ... تبدأ من أساس قوي وتصنيع هندسي دقيق',
  footerSlogan: 'معاً نبني مستقبلاً أقوى',
};

export const HERO_BADGES = [
  {
    id: 'quality',
    title: 'جودة صناعية عالية',
    desc: 'تصنيع هندسي مطابق لأعلى معايير المتانة',
    icon: 'award',
  },
  {
    id: 'durability',
    title: 'متانة وضغط هيدروليكي',
    desc: 'هياكل فولاذية سميكة تتحمل العمل الشاق',
    icon: 'shield',
  },
  {
    id: 'pricing',
    title: 'أسعار مناسبة ومباشرة',
    desc: 'تصنيع محلي مباشر بدون وسطاء وبأعلى جودة',
    icon: 'tag',
  },
  {
    id: 'experience',
    title: 'خبرة عريقة منذ 2004',
    desc: 'أكثر من 22 سنة من الخبرة الصناعية الرائدة',
    icon: 'trophy',
  },
  {
    id: 'precision',
    title: 'دقة في القوالب',
    desc: 'خراطة وقوالب دقيقة لكل أشكال ومقاسات البلوك',
    icon: 'gear',
  },
  {
    id: 'service',
    title: 'ضمان وقطع غيار',
    desc: 'صيانة مستمرة وتوفر كامل للملحقات والقطع',
    icon: 'tool',
  },
];


export const GALLERY_ITEMS: GalleryItem[] = [
  // ==========================================
  // 1. كابسات بلوك (Block Machines) - 4 نماذج
  // ==========================================
  {
    id: 'gal-kb-1',
    title: 'خط كابسة بلوك هيدروليكية أوتوماتيكية متكاملة FAHME',
    category: 'كابسات بلوك',
    imageUrl: '/uploads/1.PNG',
    description: 'كابسة FAHME المتطورة أثناء خط تجميع وكبس البلوك المجوف والصلب داخل الورشة بمواصفات فولاذية متينة ونظام ضغط هيدروليكي عالي الكفاءة.',
    views: [
      {
        imageUrl: '/uploads/1.PNG',
      },
      {
        imageUrl: '/uploads/2.PNG',
      },
      {
        imageUrl: '/uploads/3.PNG',
      },
      {
        imageUrl: '/uploads/4.PNG',
      },
      {
        imageUrl: '/uploads/5.PNG',
      },
    ],
  },
  {
    id: 'gal-kb-2',
    title: 'كابسة بلوك نصف أوتوماتيكية عالية المتانة (موديل الورش الإنشائية)',
    category: 'كابسات بلوك',
    imageUrl: '/uploads/6.PNG',
    description: 'ماكينة كبس وتفريغ قوية وسهلة الصيانة مصممة للعمل المتواصل في المعامل والمشاريع مع نظام اهتزاز ميكانيكي مضاعف.',
    views: [
      {
        imageUrl: '/uploads/6.PNG',
      },
      {
        imageUrl: '/uploads/7.PNG',
      },
      {
        imageUrl: '/uploads/8.PNG',
      },
      {
        imageUrl: '/uploads/9.PNG',
      },
      {
        imageUrl: '/uploads/10.JPG',
      },
    ],
  },
  {
    id: 'gal-kb-3',
    title: 'كابسة بلوك وإنترلوك هيدروليكية ثنائية المسار وعربة تغذية',
    category: 'كابسات بلوك',
    imageUrl: '/uploads/12.PNG',
    description: 'خط إنتاج كابسة بلوك وإنترلوك هيدروليكية متطورة ومصنعة في معمل حدادة فهمي بكركوك مع قادوس تغذية أزرق كبير وشاسيه متين لإنتاج البلوك عالي الصلابة.',
    views: [
      {
        imageUrl: '/uploads/12.PNG',
      },
      {
        imageUrl: '/uploads/11.PNG',
      },
      {
        imageUrl: '/uploads/13.PNG',
      },
      {
        imageUrl: '/uploads/14.PNG',
      },
      {
        imageUrl: '/uploads/15.PNG',
      },
    ],
  },
  {
    id: 'gal-kb-4',
    title: 'كابسة بلوك سريعة التحميل والإنتاج المستمر (جاهزة للشحن)',
    category: 'كابسات بلوك',
    imageUrl: '/uploads/16.PNG',
    description: 'كابسة بلوك متطورة تم تجميعها وفحصها تحت أقصى أحمال الكبس والتشغيل الميداني في ساحة معمل حدادة فهمي بكركوك.',
    views: [
      {
        imageUrl: '/uploads/16.PNG',
      },
      {
        imageUrl: '/uploads/17.PNG',
      },
      {
        imageUrl: '/uploads/18.PNG',
      },
      {
        imageUrl: '/uploads/19.PNG',
      },
      {
        imageUrl: '/uploads/20.PNG',
      },
    ],
  },

  // ==========================================
  // 2. قوالب كابسات (Block Molds) - 4 نماذج
  // ==========================================
  {
    id: 'gal-qb-1',
    title: 'قوالب كابسات البلوك الفولاذية المعالجة حرارياً',
    category: 'قوالب كابسات',
    imageUrl: '/src/assets/images/block_machine_press_mold_1791976398634.jpg',
    description: 'ورشة الحدادة والخراطة الخاصة بمعمل حدادة فهمي لتصنيع قوالب البلوك المجوف والصلب بمقاسات هندسية دقيقة ومعالجة ضد الاحتكاك.',
    views: [
      {
        imageUrl: '/src/assets/images/block_machine_press_mold_1791976398634.jpg',
      },
      {
        imageUrl: '/src/assets/images/hollow_concrete_blocks_1791653280342.jpg',
      },
      {
        imageUrl: '/src/assets/images/hero_block_machine_1791653257579.jpg',
      },
      {
        imageUrl: '/src/assets/images/block_machine_angle_side_1791976374427.jpg',
      },
      {
        imageUrl: '/src/assets/images/block_machine_exit_conveyor_1791976427960.jpg',
      },
    ],
  },
  {
    id: 'gal-qb-2',
    title: 'قوالب حجر الإنترلوك والمقرنص الهندسي المتداخل',
    category: 'قوالب كابسات',
    imageUrl: '/src/assets/images/interlock_pavers_blocks_1791653268909.jpg',
    description: 'قوالب إنترلوك بأشكال هندسية متعددة (سداسي، زكزاك، حرف I، بلاط أرصفة) ذات تعشيق متين لمواقف السيارات والممرات والحدائق.',
    views: [
      {
        imageUrl: '/src/assets/images/interlock_pavers_blocks_1791653268909.jpg',
      },
      {
        imageUrl: '/src/assets/images/block_machine_press_mold_1791976398634.jpg',
      },
      {
        imageUrl: '/src/assets/images/hero_block_machine_1791653257579.jpg',
      },
      {
        imageUrl: '/src/assets/images/block_machine_exit_conveyor_1791976427960.jpg',
      },
      {
        imageUrl: '/src/assets/images/factory_yard_night_1791653290351.jpg',
      },
    ],
  },
  {
    id: 'gal-qb-3',
    title: 'قوالب بردورات الأرصفة وحواف الطرق الخرسانية (Kerbstone)',
    category: 'قوالب كابسات',
    imageUrl: '/src/assets/images/hollow_concrete_blocks_1791653280342.jpg',
    description: 'قوالب فولاذية ثقيلة لصب وتشكيل بردورات الأرصفة وحواف الشوارع بحواف مشطوفة مطابقة للمواصفات القياسية للطرق والجسور.',
    views: [
      {
        imageUrl: '/src/assets/images/hollow_concrete_blocks_1791653280342.jpg',
      },
      {
        imageUrl: '/src/assets/images/block_machine_press_mold_1791976398634.jpg',
      },
      {
        imageUrl: '/src/assets/images/block_machine_angle_side_1791976374427.jpg',
      },
      {
        imageUrl: '/src/assets/images/block_machine_exit_conveyor_1791976427960.jpg',
      },
      {
        imageUrl: '/src/assets/images/factory_yard_night_1791653290351.jpg',
      },
    ],
  },
  {
    id: 'gal-qb-4',
    title: 'قوالب البلوك المصمت والهوردي العازل للأسقف الإنشائية',
    category: 'قوالب كابسات',
    imageUrl: '/src/assets/images/block_machine_electric_panel_1791976449621.jpg',
    description: 'قوالب هندسية لتصنيع بلوك الهوردي خفيف الوزن وبلوك الأساسات المصمت فائق التحمل للأبنية المتعددة الطوابق والجدران الحاملة.',
    views: [
      {
        imageUrl: '/src/assets/images/block_machine_electric_panel_1791976449621.jpg',
      },
      {
        imageUrl: '/src/assets/images/block_machine_press_mold_1791976398634.jpg',
      },
      {
        imageUrl: '/src/assets/images/hollow_concrete_blocks_1791653280342.jpg',
      },
      {
        imageUrl: '/src/assets/images/hero_block_machine_1791653257579.jpg',
      },
      {
        imageUrl: '/src/assets/images/factory_yard_night_1791653290351.jpg',
      },
    ],
  },

  // ==========================================
  // 3. خباطات المركزية (Central Mixers) - 4 نماذج
  // ==========================================
  {
    id: 'gal-kh-1',
    title: 'محطة الخباطة المركزية وبرج الخلط الخرساني المتكامل',
    category: 'خباطات المركزية',
    imageUrl: '/src/assets/images/concrete_batching_plant_1791656644910.jpg',
    description: 'محطة خلط خرسانية أوتوماتيكية متكاملة مجهزة بميزان إلكتروني ومصاعد ركام لتغذية الكابسات وسيارات الخلط.',
    views: [
      {
        imageUrl: '/src/assets/images/concrete_batching_plant_1791656644910.jpg',
      },
      {
        imageUrl: '/src/assets/images/concrete_mixer_pan_blades_1791976478048.jpg',
      },
      {
        imageUrl: '/src/assets/images/aggregate_batching_hopper_1791976507451.jpg',
      },
      {
        imageUrl: '/src/assets/images/factory_yard_night_1791653290351.jpg',
      },
      {
        imageUrl: '/src/assets/images/hero_block_machine_1791653257579.jpg',
      },
    ],
  },
  {
    id: 'gal-kh-2',
    title: 'صوامع الأسمنت العمودية (سايلوات 50 - 100 طن) وملحقاتها',
    category: 'خباطات المركزية',
    imageUrl: '/src/assets/images/aggregate_batching_hopper_1791976507451.jpg',
    description: 'سايلوات أسمنت مصنعة من ألواح حديد سميكة مع حلزونات التفريغ (Screw Conveyors) وصمامات الأمان وفلاتر الغبار.',
    views: [
      {
        imageUrl: '/src/assets/images/aggregate_batching_hopper_1791976507451.jpg',
      },
      {
        imageUrl: '/src/assets/images/concrete_batching_plant_1791656644910.jpg',
      },
      {
        imageUrl: '/src/assets/images/concrete_mixer_pan_blades_1791976478048.jpg',
      },
      {
        imageUrl: '/src/assets/images/factory_yard_night_1791653290351.jpg',
      },
      {
        imageUrl: '/src/assets/images/hero_block_machine_1791653257579.jpg',
      },
    ],
  },
  {
    id: 'gal-kh-3',
    title: 'خلاطة الحوض الدائري وثنائية المحور المكثفة (Pan & Twin Shaft Mixer)',
    category: 'خباطات المركزية',
    imageUrl: '/src/assets/images/concrete_mixer_pan_blades_1791976478048.jpg',
    description: 'أحواض خلط خرسانية مزودة بشفرات وأذرع كشط فولاذية صلبة مضادة للتآكل لخلط الخرسانة الجافة والرطبة بتجانس فائق.',
    views: [
      {
        imageUrl: '/src/assets/images/concrete_mixer_pan_blades_1791976478048.jpg',
      },
      {
        imageUrl: '/src/assets/images/aggregate_batching_hopper_1791976507451.jpg',
      },
      {
        imageUrl: '/src/assets/images/concrete_batching_plant_1791656644910.jpg',
      },
      {
        imageUrl: '/src/assets/images/factory_yard_night_1791653290351.jpg',
      },
      {
        imageUrl: '/src/assets/images/hero_block_machine_1791653257579.jpg',
      },
    ],
  },
  {
    id: 'gal-kh-4',
    title: 'منظومة سيور النقل الثقيلة وقواديس وزن الركام الأوتوماتيكية',
    category: 'خباطات المركزية',
    imageUrl: '/src/assets/images/concrete_batching_plant_1791656644910.jpg',
    description: 'خطوط نقل بالسيور المطاطية المتينة مع قواديس التغذية الرقمية لضبط عيارات الرمل والحصى والأسمنت بأعلى دقة.',
    views: [
      {
        imageUrl: '/src/assets/images/concrete_batching_plant_1791656644910.jpg',
      },
      {
        imageUrl: '/src/assets/images/aggregate_batching_hopper_1791976507451.jpg',
      },
      {
        imageUrl: '/src/assets/images/concrete_mixer_pan_blades_1791976478048.jpg',
      },
      {
        imageUrl: '/src/assets/images/factory_yard_night_1791653290351.jpg',
      },
      {
        imageUrl: '/src/assets/images/hero_block_machine_1791653257579.jpg',
      },
    ],
  },
];
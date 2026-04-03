import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        retreats: "Retreats",
        about: "About",
        book: "Book Class",
        programs: "Programs",
        contact: "Contact"
      },
      hero: {
        title: "DoctorYog – Holistic Wellness Foundation",
        subtitle: "Rooted in the Himalayas · Rishikesh · Ancient Healing for Modern Life",
        register: "Register Now",
        whatsapp: "Talk on WhatsApp"
      },
      featured: {
        badge: "Featured Program",
        title: "Integrated Yoga Therapy, Ayurveda & Healing Training",
        date: "10 April – 20 April | 11 Days Intensive Program",
        bullets: [
          "Learn Yoga as complete healing science",
          "Combine Yoga + Ayurveda + Marma + Acupressure",
          "Root cause diagnosis training",
          "Practical therapy application"
        ],
        brochure: "Download Brochure"
      },
      why: {
        title: "Why Choose Integrated Yoga Therapy?",
        subtitle: "Our unique methodology combines multiple ancient sciences for a comprehensive healing experience.",
        items: [
          { title: "Holistic Science", desc: "We don't just treat symptoms; we look at the body as a whole system of energy and biology." },
          { title: "Ancient Wisdom", desc: "Rooted in authentic Himalayan traditions passed down through generations of masters." },
          { title: "Modern Application", desc: "Techniques adapted for modern lifestyle diseases like stress, obesity, and chronic pain." },
          { title: "Proven Results", desc: "Thousands of students have experienced life-changing transformations through our programs." }
        ]
      },
      poses: {
        title: "Healing Library",
        subtitle: "Explore the therapeutic benefits of authentic yoga asanas.",
        items: [
          { name: "Tree Pose", benefits: ["Improves balance", "Strengthens legs", "Calms the mind"] },
          { name: "Downward Dog", benefits: ["Energizes body", "Stretches spine", "Relieves stress"] },
          { name: "Cobra Pose", benefits: ["Strengthens spine", "Opens chest", "Improves digestion"] },
          { name: "Triangle Pose", benefits: ["Stretches legs", "Improves digestion", "Reduces anxiety"] },
          { name: "Sun Salutation", benefits: ["Full body workout", "Improves flexibility", "Boosts immunity"] },
          { name: "Corpse Pose", benefits: ["Deep relaxation", "Lowers blood pressure", "Reduces fatigue"] }
        ]
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "मुख्य पृष्ठ",
        retreats: "रिट्रीट",
        about: "हमारे बारे में",
        book: "क्लास बुक करें",
        programs: "कार्यक्रम",
        contact: "संपर्क"
      },
      hero: {
        title: "डॉक्टर योग – समग्र कल्याण फाउंडेशन",
        subtitle: "हिमालय में निहित · ऋषिकेश · आधुनिक जीवन के लिए प्राचीन उपचार",
        register: "अभी पंजीकरण करें",
        whatsapp: "व्हाट्सएप पर बात करें"
      },
      featured: {
        badge: "विशेष कार्यक्रम",
        title: "एकीकृत योग चिकित्सा, आयुर्वेद और उपचार प्रशिक्षण",
        date: "10 अप्रैल – 20 अप्रैल | 11 दिनों का गहन कार्यक्रम",
        bullets: [
          "योग को पूर्ण उपचार विज्ञान के रूप में सीखें",
          "योग + आयुर्वेद + मर्म + एक्यूप्रेशर का संयोजन",
          "मूल कारण निदान प्रशिक्षण",
          "व्यावहारिक चिकित्सा अनुप्रयोग"
        ],
        brochure: "ब्रोशर डाउनलोड करें"
      },
      why: {
        title: "एकीकृत योग चिकित्सा क्यों चुनें?",
        subtitle: "हमारी अनूठी कार्यप्रणाली एक व्यापक उपचार अनुभव के लिए कई प्राचीन विज्ञानों को जोड़ती है।",
        items: [
          { title: "समग्र विज्ञान", desc: "हम केवल लक्षणों का इलाज नहीं करते हैं; हम शरीर को ऊर्जा और जीव विज्ञान की एक पूरी प्रणाली के रूप में देखते हैं।" },
          { title: "प्राचीन ज्ञान", desc: "गुरुओं की पीढ़ियों के माध्यम से पारित प्रामाणिक हिमालयी परंपराओं में निहित।" },
          { title: "आधुनिक अनुप्रयोग", desc: "तनाव, मोटापा और पुराने दर्द जैसी आधुनिक जीवनशैली की बीमारियों के लिए अनुकूलित तकनीकें।" },
          { title: "प्रमाणित परिणाम", desc: "हजारों छात्रों ने हमारे कार्यक्रमों के माध्यम से जीवन बदलने वाले परिवर्तनों का अनुभव किया है।" }
        ]
      },
      poses: {
        title: "उपचार पुस्तकालय",
        subtitle: "प्रामाणिक योग आसनों के चिकित्सीय लाभों का अन्वेषण करें।",
        items: [
          { name: "वृक्षासन (Tree Pose)", benefits: ["संतुलन में सुधार करता है", "पैरों को मजबूत बनाता है", "मन को शांत करता है"] },
          { name: "अधोमुख श्वानासन (Downward Dog)", benefits: ["शरीर को ऊर्जावान बनाता है", "रीढ़ को खींचता है", "तनाव से राहत देता है"] },
          { name: "भुजंगासन (Cobra Pose)", benefits: ["रीढ़ को मजबूत बनाता है", "छाती खोलता है", "पाचन में सुधार करता है"] },
          { name: "त्रिकोणासन (Triangle Pose)", benefits: ["पैरों को खींचता है", "पाचन में सुधार करता है", "चिंता कम करता है"] },
          { name: "सूर्य नमस्कार (Sun Salutation)", benefits: ["पूरे शरीर का वर्कआउट", "लचीलापन बढ़ाता है", "रोग प्रतिरोधक क्षमता बढ़ाता है"] },
          { name: "शवासन (Corpse Pose)", benefits: ["गहरा विश्राम", "रक्तचाप कम करता है", "थकान कम करता है"] }
        ]
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        retreats: "静修营",
        about: "关于我们",
        book: "预约课程",
        programs: "课程项目",
        contact: "联系我们"
      },
      hero: {
        title: "DoctorYog – 整体健康基金会",
        subtitle: "植根于喜马拉雅山 · 瑞诗凯诗 · 现代生活的古老疗法",
        register: "立即注册",
        whatsapp: "WhatsApp 咨询"
      },
      featured: {
        badge: "特色课程",
        title: "综合瑜伽疗法、阿育吠陀与康复培训",
        date: "4月10日 – 4月20日 | 11天密集课程",
        bullets: [
          "将瑜伽作为完整的康复科学来学习",
          "结合瑜伽 + 阿育吠陀 + 玛玛点 + 穴位按摩",
          "根本原因诊断培训",
          "实际治疗应用"
        ],
        brochure: "下载手册"
      },
      why: {
        title: "为什么选择综合瑜伽疗法？",
        subtitle: "我们独特的方法论结合了多种古老科学，提供全面的康复体验。",
        items: [
          { title: "整体科学", desc: "我们不仅治疗症状；我们将身体视为能量和生物学的完整系统。" },
          { title: "古老智慧", desc: "植根于通过历代大师传承的真实喜马拉雅传统。" },
          { title: "现代应用", desc: "针对压力、肥胖和慢性疼痛等现代生活方式疾病调整的技术。" },
          { title: "显著成效", desc: "成千上万的学生通过我们的课程体验了改变人生的转变。" }
        ]
      },
      poses: {
        title: "康复库",
        subtitle: "探索正宗瑜伽体式的治疗功效。",
        items: [
          { name: "树式", benefits: ["改善平衡", "增强腿部力量", "平静心境"] },
          { name: "下犬式", benefits: ["激发身体活力", "拉伸脊柱", "缓解压力"] },
          { name: "眼镜蛇式", benefits: ["增强脊柱", "打开胸腔", "改善消化"] },
          { name: "三角式", benefits: ["拉伸腿部", "改善消化", "减轻焦虑"] },
          { name: "太阳礼拜式", benefits: ["全身锻炼", "提高灵活性", "增强免疫力"] },
          { name: "摊尸式", benefits: ["深度放松", "降低血压", "减轻疲劳"] }
        ]
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        retreats: "Retiros",
        about: "Sobre Nosotros",
        book: "Reservar Clase",
        programs: "Programas",
        contact: "Contacto"
      },
      hero: {
        title: "DoctorYog – Fundación de Bienestar Holístico",
        subtitle: "Arraigado en el Himalaya · Rishikesh · Sanación Antigua para la Vida Moderna",
        register: "Regístrate Ahora",
        whatsapp: "Hablar por WhatsApp"
      },
      featured: {
        badge: "Programa Destacado",
        title: "Terapia de Yoga Integrada, Ayurveda y Entrenamiento de Sanación",
        date: "10 de abril – 20 de abril | Programa Intensivo de 11 Días",
        bullets: [
          "Aprende Yoga como una ciencia de sanación completa",
          "Combina Yoga + Ayurveda + Marma + Acupresión",
          "Entrenamiento en diagnóstico de causa raíz",
          "Aplicación práctica de terapia"
        ],
        brochure: "Descargar Folleto"
      },
      why: {
        title: "¿Por qué elegir la Terapia de Yoga Integrada?",
        subtitle: "Nuestra metodología única combina múltiples ciencias antiguas para una experiencia de sanación integral.",
        items: [
          { title: "Ciencia Holística", desc: "No solo tratamos síntomas; vemos el cuerpo como un sistema completo de energía y biología." },
          { title: "Sabiduría Antigua", desc: "Arraigado en auténticas tradiciones del Himalaya transmitidas a través de generaciones de maestros." },
          { title: "Aplicación Moderna", desc: "Técnicas adaptadas para enfermedades del estilo de vida moderno como estrés, obesidad y dolor crónico." },
          { title: "Resultados Probados", desc: "Miles de estudiantes han experimentado transformaciones que cambian la vida a través de nuestros programas." }
        ]
      },
      poses: {
        title: "Biblioteca de Sanación",
        subtitle: "Explora los beneficios terapéuticos de las asanas de yoga auténticas.",
        items: [
          { name: "Postura del Árbol", benefits: ["Mejora el equilibrio", "Fortalece las piernas", "Calma la mente"] },
          { name: "Perro Boca Abajo", benefits: ["Energiza el cuerpo", "Estira la columna", "Alivia el estrés"] },
          { name: "Postura de la Cobra", benefits: ["Fortalece la columna", "Abre el pecho", "Mejora la digestión"] },
          { name: "Postura del Triángulo", benefits: ["Estira las piernas", "Mejora la digestión", "Reduce la ansiedad"] },
          { name: "Saludo al Sol", benefits: ["Entrenamiento de cuerpo completo", "Mejora la flexibilidad", "Aumenta la inmunidad"] },
          { name: "Postura del Cadáver", benefits: ["Relajación profunda", "Baja la presión arterial", "Reduce la fatiga"] }
        ]
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        retreats: "Ретриты",
        about: "О нас",
        book: "Записаться",
        programs: "Программы",
        contact: "Контакты"
      },
      hero: {
        title: "DoctorYog – Фонд целостного оздоровления",
        subtitle: "Корни в Гималаях · Ришикеш · Древнее исцеление для современной жизни",
        register: "Зарегистрироваться",
        whatsapp: "Написать в WhatsApp"
      },
      featured: {
        badge: "Рекомендуемая программа",
        title: "Интегрированная йога-терапия, аюрведа и обучение исцелению",
        date: "10 апреля – 20 апреля | 11-дневная интенсивная программа",
        bullets: [
          "Изучайте йогу как полноценную науку об исцелении",
          "Сочетание йоги + аюрведы + мармы + акупрессуры",
          "Обучение диагностике первопричин",
          "Практическое применение терапии"
        ],
        brochure: "Скачать брошюру"
      },
      why: {
        title: "Почему стоит выбрать интегрированную йога-терапию?",
        subtitle: "Наша уникальная методология сочетает в себе несколько древних наук для комплексного исцеления.",
        items: [
          { title: "Целостная наука", desc: "Мы не просто лечим симптомы; мы рассматриваем тело как единую систему энергии и биологии." },
          { title: "Древняя мудрость", desc: "Основано на подлинных гималайских традициях, передаваемых из поколения в поколение мастерами." },
          { title: "Современное применение", desc: "Техники, адаптированные для болезней современного образа жизни, таких как стресс, ожирение и хроническая боль." },
          { title: "Доказанные результаты", desc: "Тысячи студентов пережили меняющие жизнь трансформации благодаря нашим программам." }
        ]
      },
      poses: {
        title: "Библиотека исцеления",
        subtitle: "Узнайте о терапевтических преимуществах аутентичных асан йоги.",
        items: [
          { name: "Поза дерева", benefits: ["Улучшает баланс", "Укрепляет ноги", "Успокаивает ум"] },
          { name: "Собака мордой вниз", benefits: ["Заряжает тело энергией", "Растягивает позвоночник", "Снимает стресс"] },
          { name: "Поза кобры", benefits: ["Укрепляет позвоночник", "Открывает грудную клетку", "Улучшает пищеварение"] },
          { name: "Поза треугольника", benefits: ["Растягивает ноги", "Улучшает пищеварение", "Снижает тревожность"] },
          { name: "Приветствие солнцу", benefits: ["Тренировка всего тела", "Улучшает гибкость", "Повышает иммунитет"] },
          { name: "Поза трупа", benefits: ["Глубокое расслабление", "Снижает кровяное давление", "Уменьшает усталость"] }
        ]
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

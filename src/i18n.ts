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
          { name: "Corpse Pose", benefits: ["Deep relaxation", "Lowers blood pressure", "Reduces fatigue"] },
          { name: "Parvat Asan", benefits: ["Improves posture", "Strengthens shoulders", "Enhances focus"] },
          { name: "Padangustha Asan", benefits: ["Stretches hamstrings", "Relieves stress", "Improves digestion"] },
          { name: "Warrior II", benefits: ["Strengthens legs", "Increases stamina", "Improves balance"] }
        ]
      },
      common: {
        viewDetails: "View Details",
        register: "Register Now",
        whatsapp: "Enquire on WhatsApp",
        back: "Back",
        backToPrograms: "Back to All Programs",
        startingFrom: "Starting from",
        certified: "Certified Training",
        learnMore: "Learn More",
        contactUs: "Contact Us",
        knowMore: "Know More About Dr. Shakti",
        bookTrial: "Book Free Trial"
      },
      footer: {
        aboutTitle: "About DoctorYog",
        aboutDesc: "Holistic Wellness Foundation rooted in the Himalayas. Ancient healing wisdom for modern life transformation.",
        quickLinks: "Quick Links",
        programs: "Programs",
        contact: "Contact Us",
        subscribe: "Subscribe to get exclusive updates",
        email: "Email",
        join: "Join Our Mailing List",
        consent: "I want to subscribe to your mailing list.",
        rights: "All rights reserved."
      },
      reservation: {
        title: "Doctor Yog Reservation Form",
        subtitle: "Secure your spot for our upcoming programs and retreats.",
        success: "Reservation Received!",
        successDesc: "Thank you for choosing Doctor Yog. We will contact you shortly to confirm your booking.",
        another: "Make Another Reservation",
        submit: "Submit Reservation"
      },
      programs: {
        title: "Our Training Programs",
        subtitle: "Professional certification courses rooted in authentic Himalayan wisdom and modern therapeutic science.",
        overview: "Program Overview",
        structure: "Curriculum Structure",
        investment: "Course Investment",
        fullPrice: "Full Price",
        earlyBird: "Early Bird",
        bookingFee: "Booking Fee",
        experiences: "Student Experiences",
        notSureTitle: "Not sure which program is right for you?",
        notSureDesc: "Our experts can help you choose the best path based on your goals and experience level.",
        talkExpert: "Talk to an Expert"
      },
      home: {
        shaktiTitle: "Meet Dr. Shakti",
        shaktiQuote: "Healing is not just about curing a disease; it's about returning to your natural state of harmony.",
        shaktiStats: [
          "19+ years experience",
          "PhD Yoga",
          "5000+ lives transformed",
          "International training"
        ],
        therapyTitle: "Personalized Yoga Therapy",
        therapySubtitle: "Your Journey - Tailored One-on-One Care",
        availableOnline: "Available Online",
        serviceDescTitle: "Service Description",
        serviceDesc: "Experience a truly personalized yoga therapy class designed just for you. Each session is one-on-one, allowing us to focus entirely on your individual physical and mental condition.",
        benefitsTitle: "Healing Benefits",
        benefits: [
          { title: "Physical Health", desc: "Improve flexibility, strength, and balance while addressing chronic pain." },
          { title: "Mental Clarity", desc: "Reduce stress, anxiety, and mental fatigue through mindful practice." },
          { title: "Emotional Balance", desc: "Find inner peace and emotional stability in a supportive environment." },
          { title: "Spiritual Growth", desc: "Connect with your deeper self through ancient Himalayan traditions." }
        ],
        ayurvedaTitle: "Ayurveda & Ancient Healing",
        ayurvedaDesc: "Experience the profound wisdom of Ayurveda, the \"Science of Life.\" Our treatments are designed to balance your Doshas and restore your body's natural equilibrium.",
        ayurvedaItems: [
          { title: "Panchakarma", desc: "Deep detoxification and rejuvenation" },
          { title: "Marma Therapy", desc: "Vital energy point stimulation" },
          { title: "Herbal Healing", desc: "Customized natural remedies" },
          { title: "Diet & Lifestyle", desc: "Sattvic living guidance" }
        ],
        himalayasTitle: "Healing Power of the Himalayas",
        himalayasDesc: "Rishikesh is not just a location; it's a spiritual energy center. At Doctor Yog, we harness this natural vibration to accelerate your healing process.",
        whoTitle: "Who Is This Program For?",
        whoSubtitle: "Our teachings are designed to meet you exactly where you are on your journey.",
        whoItems: [
          { title: "Beginners", desc: "Start your journey with a strong, safe foundation in authentic yoga." },
          { title: "Yoga Teachers", desc: "Deepen your knowledge of therapy, anatomy, and ancient texts." },
          { title: "Lifestyle Change", desc: "Overcome chronic stress, poor habits, and find lasting balance." },
          { title: "Spiritual Seekers", desc: "Advance your practice through deep meditation and philosophy." }
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
          { name: "शवासन (Corpse Pose)", benefits: ["गहरा विश्राम", "रक्तचाप कम करता है", "थकान कम करता है"] },
          { name: "पर्वतासन (Parvat Asan)", benefits: ["मुद्रा में सुधार करें", "कंधों को मजबूत करें", "एकाग्रता बढ़ाएं"] },
          { name: "पादांगुष्ठासन (Padangustha Asan)", benefits: ["हैमस्ट्रिंग को स्ट्रेच करें", "तनाव दूर करें", "पाचन में सुधार करें"] },
          { name: "वीरभद्रासन (Warrior II)", benefits: ["पैरों को मजबूत करें", "सहनशक्ति बढ़ाएं", "संतुलन में सुधार करें"] }
        ]
      },
      common: {
        viewDetails: "विवरण देखें",
        register: "अभी पंजीकरण करें",
        whatsapp: "व्हाट्सएप पर पूछताछ करें",
        back: "वापस",
        backToPrograms: "सभी कार्यक्रमों पर वापस",
        startingFrom: "से शुरू",
        certified: "प्रमाणित प्रशिक्षण",
        learnMore: "अधिक जानें",
        contactUs: "संपर्क करें",
        knowMore: "डॉ. शक्ति के बारे में अधिक जानें",
        bookTrial: "निःशुल्क ट्रायल बुक करें"
      },
      footer: {
        aboutTitle: "डॉक्टर योग के बारे में",
        aboutDesc: "हिमालय में निहित समग्र कल्याण फाउंडेशन। आधुनिक जीवन परिवर्तन के लिए प्राचीन उपचार ज्ञान।",
        quickLinks: "त्वरित संपर्क",
        programs: "कार्यक्रम",
        contact: "संपर्क करें",
        subscribe: "विशेष अपडेट पाने के लिए सब्सक्राइब करें",
        email: "ईमेल",
        join: "हमारी मेलिंग लिस्ट में शामिल हों",
        consent: "मैं आपकी मेलिंग लिस्ट को सब्सक्राइब करना चाहता हूं।",
        rights: "सर्वाधिकार सुरक्षित।"
      },
      reservation: {
        title: "डॉक्टर योग आरक्षण फॉर्म",
        subtitle: "हमारे आगामी कार्यक्रमों और रिट्रीट के लिए अपनी जगह सुरक्षित करें।",
        success: "आरक्षण प्राप्त हुआ!",
        successDesc: "डॉक्टर योग को चुनने के लिए धन्यवाद। हम आपकी बुकिंग की पुष्टि के लिए जल्द ही आपसे संपर्क करेंगे।",
        another: "एक और आरक्षण करें",
        submit: "आरक्षण सबमिट करें"
      },
      programs: {
        title: "हमारे प्रशिक्षण कार्यक्रम",
        subtitle: "प्रामाणिक हिमालयी ज्ञान और आधुनिक चिकित्सीय विज्ञान में निहित पेशेवर प्रमाणन पाठ्यक्रम।",
        overview: "कार्यक्रम सिंहावलोकन",
        structure: "पाठ्यक्रम संरचना",
        investment: "पाठ्यक्रम निवेश",
        fullPrice: "पूर्ण शुल्क",
        earlyBird: "अर्ली बर्ड",
        bookingFee: "बुकिंग शुल्क",
        experiences: "छात्रों के अनुभव",
        notSureTitle: "निश्चित नहीं हैं कि कौन सा कार्यक्रम आपके लिए सही है?",
        notSureDesc: "हमारे विशेषज्ञ आपके लक्ष्यों और अनुभव स्तर के आधार पर सर्वोत्तम मार्ग चुनने में आपकी मदद कर सकते हैं।",
        talkExpert: "विशेषज्ञ से बात करें"
      },
      home: {
        shaktiTitle: "डॉ. शक्ति से मिलें",
        shaktiQuote: "उपचार केवल बीमारी को ठीक करने के बारे में नहीं है; यह आपके प्राकृतिक सामंजस्य की स्थिति में लौटने के बारे में है।",
        shaktiStats: [
          "19+ साल का अनुभव",
          "योग में पीएच.डी.",
          "5000+ जीवन परिवर्तित",
          "अंतर्राष्ट्रीय प्रशिक्षण"
        ],
        therapyTitle: "व्यक्तिगत योग चिकित्सा",
        therapySubtitle: "आपकी यात्रा - विशेष एक-से-एक देखभाल",
        availableOnline: "ऑनलाइन उपलब्ध",
        serviceDescTitle: "सेवा विवरण",
        serviceDesc: "केवल आपके लिए डिज़ाइन की गई वास्तव में व्यक्तिगत योग चिकित्सा क्लास का अनुभव करें। प्रत्येक सत्र एक-से-एक होता है, जिससे हम आपकी व्यक्तिगत शारीरिक और मानसिक स्थिति पर पूरी तरह ध्यान केंद्रित कर सकते हैं।",
        benefitsTitle: "उपचार के लाभ",
        benefits: [
          { title: "शारीरिक स्वास्थ्य", desc: "पुराने दर्द को दूर करते हुए लचीलापन, शक्ति और संतुलन में सुधार करें।" },
          { title: "मानसिक स्पष्टता", desc: "सचेत अभ्यास के माध्यम से तनाव, चिंता और मानसिक थकान को कम करें।" },
          { title: "भावनात्मक संतुलन", desc: "एक सहायक वातावरण में आंतरिक शांति और भावनात्मक स्थिरता पाएं।" },
          { title: "आध्यात्मिक विकास", desc: "प्राचीन हिमालयी परंपराओं के माध्यम से अपने गहरे स्व के साथ जुड़ें।" }
        ],
        ayurvedaTitle: "आयुर्वेद और प्राचीन उपचार",
        ayurvedaDesc: "आयुर्वेद के गहरे ज्ञान का अनुभव करें, जो \"जीवन का विज्ञान\" है। हमारे उपचार आपके दोषों को संतुलित करने और आपके शरीर के प्राकृतिक संतुलन को बहाल करने के लिए डिज़ाइन किए गए हैं।",
        ayurvedaItems: [
          { title: "पंचकर्म", desc: "गहरा विषहरण और कायाकल्प" },
          { title: "मर्म चिकित्सा", desc: "महत्वपूर्ण ऊर्जा बिंदु उत्तेजना" },
          { title: "हर्बल उपचार", desc: "अनुकूलित प्राकृतिक उपचार" },
          { title: "आहार और जीवनशैली", desc: "सात्विक जीवन मार्गदर्शन" }
        ],
        himalayasTitle: "हिमालय की उपचार शक्ति",
        himalayasDesc: "ऋषिकेश केवल एक स्थान नहीं है; यह एक आध्यात्मिक ऊर्जा केंद्र है। डॉक्टर योग में, हम आपके उपचार की प्रक्रिया को तेज करने के लिए इस प्राकृतिक कंपन का उपयोग करते हैं।",
        whoTitle: "यह कार्यक्रम किसके लिए है?",
        whoSubtitle: "हमारी शिक्षाएं आपकी यात्रा में आपको वहीं मिलने के लिए डिज़ाइन की गई हैं जहां आप हैं।",
        whoItems: [
          { title: "शुरुआती", desc: "प्रामाणिक योग में एक मजबूत, सुरक्षित नींव के साथ अपनी यात्रा शुरू करें।" },
          { title: "योग शिक्षक", desc: "चिकित्सा, शरीर रचना विज्ञान और प्राचीन ग्रंथों के अपने ज्ञान को गहरा करें।" },
          { title: "जीवनशैली परिवर्तन", desc: "पुराने तनाव, खराब आदतों पर काबू पाएं और स्थायी संतुलन पाएं।" },
          { title: "आध्यात्मिक साधक", desc: "गहन ध्यान और दर्शन के माध्यम से अपने अभ्यास को आगे बढ़ाएं।" }
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
          { name: "摊尸式", benefits: ["深度放松", "降低血压", "减轻疲劳"] },
          { name: "分腿式", benefits: ["改善姿态", "加强肩膀", "提高专注力"] },
          { name: "大脚趾式", benefits: ["拉伸腿筋", "缓解压力", "改善消化"] },
          { name: "战士二式", benefits: ["强健双腿", "增加耐力", "改善平衡"] }
        ]
      },
      common: {
        viewDetails: "查看详情",
        register: "立即注册",
        whatsapp: "WhatsApp 咨询",
        back: "返回",
        backToPrograms: "返回所有项目",
        startingFrom: "起价",
        certified: "认证培训",
        learnMore: "了解更多",
        contactUs: "联系我们",
        knowMore: "了解更多关于 Dr. Shakti",
        bookTrial: "预约免费试课"
      },
      footer: {
        aboutTitle: "关于 DoctorYog",
        aboutDesc: "植根于喜马拉雅山的整体健康基金会。古老的智慧助力现代生活转型。",
        quickLinks: "快速链接",
        programs: "项目课程",
        contact: "联系我们",
        subscribe: "订阅以获取独家资讯",
        email: "电子邮件",
        join: "加入邮件列表",
        consent: "我希望订阅您的邮件列表。",
        rights: "版权所有。"
      },
      reservation: {
        title: "Doctor Yog 预约表",
        subtitle: "为我们即将开始的项目和静修营预订名额。",
        success: "预约已收到！",
        successDesc: "感谢您选择 Doctor Yog。我们将很快与您联系以确认您的预订。",
        another: "再次预约",
        submit: "提交预约"
      },
      programs: {
        title: "我们的培训项目",
        subtitle: "植根于正宗喜马拉雅智慧和现代治疗科学的专业认证课程。",
        overview: "项目概览",
        structure: "课程结构",
        investment: "课程费用",
        fullPrice: "全价",
        earlyBird: "早鸟价",
        bookingFee: "预约费",
        experiences: "学生评价",
        notSureTitle: "不确定哪个项目适合您？",
        notSureDesc: "我们的专家可以根据您的目标和经验水平帮助您选择最佳路径。",
        talkExpert: "咨询专家"
      },
      home: {
        shaktiTitle: "认识 Dr. Shakti",
        shaktiQuote: "康复不仅仅是治愈疾病；它是回归到自然的和谐状态。",
        shaktiStats: [
          "19年以上经验",
          "瑜伽博士",
          "改变了5000多个生命",
          "国际培训"
        ],
        therapyTitle: "个性化瑜伽疗法",
        therapySubtitle: "您的旅程 - 量身定制的一对一护理",
        availableOnline: "在线可用",
        serviceDescTitle: "服务说明",
        serviceDesc: "体验专为您设计的真正个性化的瑜伽疗法课程。每节课都是一对一的，让我们能够完全专注于您的个人身心状况。",
        benefitsTitle: "康复益处",
        benefits: [
          { title: "身体健康", desc: "在解决慢性疼痛的同时提高灵活性、力量和平衡。" },
          { title: "思维清晰", desc: "通过正念练习减轻压力、焦虑和精神疲劳。" },
          { title: "情绪平衡", desc: "在支持性的环境中寻找内心平静和情绪稳定。" },
          { title: "精神成长", desc: "通过喜马拉雅山的古老传统与深层的自我建立联系。" }
        ],
        ayurvedaTitle: "阿育吠陀与古老疗法",
        ayurvedaDesc: "体验阿育吠陀——“生命科学”的深奥智慧。我们的疗法旨在平衡您的多沙（Doshas），恢复身体的自然平衡。",
        ayurvedaItems: [
          { title: "五行疗法 (Panchakarma)", desc: "深度排毒与回春" },
          { title: "玛玛疗法", desc: "生命能量点刺激" },
          { title: "草本疗法", desc: "定制天然药物" },
          { title: "饮食与生活方式", desc: "萨提维克生活指导" }
        ],
        himalayasTitle: "喜马拉雅山的康复力量",
        himalayasDesc: "瑞诗凯诗不仅仅是一个地点；它是一个精神能量中心。在 Doctor Yog，我们利用这种自然振动来加速您的康复过程。",
        whoTitle: "谁适合参加这个项目？",
        whoSubtitle: "我们的教学旨在为您旅程中的每个阶段提供支持。",
        whoItems: [
          { title: "初学者", desc: "在正宗瑜伽中建立稳固安全的基础，开启您的旅程。" },
          { title: "瑜伽老师", desc: "深化您在疗法、解剖学和古籍方面的知识。" },
          { title: "改善生活方式", desc: "克服慢性压力和不良习惯，找到持久的平衡。" },
          { title: "精神追求者", desc: "通过深度冥想和哲学提升您的修行。" }
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
    fallbackLng: ['en', 'hi'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

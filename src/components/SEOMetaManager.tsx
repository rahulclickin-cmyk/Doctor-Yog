import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOMetaManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Determine metadata configurations based on path
    let title = "Doctor Yog – Holistic Wellness, Ayurveda & Yoga Therapy in Rishikesh";
    let desc = "Explore authentic Yoga Therapy, Ayurveda, Marma Point Stimulation, Detox, and Yoga Teacher Trainings (100H & 200H TTC) in Rishikesh under Dr. Shakti Vidyalankar. Affordable certifications in Euros & Rupees.";
    let keywords = "Doctor Yog, Dr Shakti Vidyalankar, Yoga Therapy Rishikesh, Marma therapy, Ayurveda healing, Detox retreat, pain management, 100 hour yoga teacher training, 200 hour TTC";
    let schemaJson: Record<string, any> | null = null;

    // Contact/LocalBusiness baseline properties
    const localBusinessBase = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "name": "Doctor Yog Holistic Wellness Foundation",
      "alternateName": "Doctor Yog",
      "image": "https://img.youtube.com/vi/W7H3T9T8G_g/maxresdefault.jpg",
      "logo": "https://img.youtube.com/vi/W7H3T9T8G_g/maxresdefault.jpg",
      "@id": "https://doctor-yog.vercel.app/#localbusiness",
      "url": "https://doctor-yog.vercel.app",
      "telephone": "+919412056637",
      "priceRange": "$$",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shakti Vidyalankar",
        "jobTitle": "Doctor of Yogic Sciences & Ayurveda practitioner",
        "knowsAbout": ["Yoga Therapy", "Ayurveda", "Marma Science", "Acupressure", "Shatkarma Detox"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tapovan, Near Laxman Jhula",
        "addressLocality": "Rishikesh",
        "addressRegion": "Uttarakhand",
        "postalCode": "249192",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.1244,
        "longitude": 78.3229
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "21:00"
      },
      "sameAs": [
        "https://www.youtube.com/@doctoryog",
        "https://www.instagram.com/doctoryog"
      ]
    };

    // Routing conditions
    if (pathname === '/') {
      title = "Doctor Yog – Doctor of Yogic Sciences & Ayurveda, Rishikesh";
      desc = "Heal naturally with Doctor Yog (Dr. Shakti Vidyalankar) in Rishikesh. Discover Integrated Yoga Therapy, 7-Day Ayurveda & Marma Course, 5/10/14-Day Detox procedures, and Pain Correction remedies.";
      schemaJson = {
        "@graph": [
          localBusinessBase,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://doctor-yog.vercel.app",
            "name": "Doctor Yog",
            "description": "Holistic Wellness Foundation in Rishikesh, Uttarakhand"
          }
        ]
      };
    } else if (pathname === '/about') {
      title = "About Dr. Shakti Vidyalankar – Founder of Doctor Yog";
      desc = "Meet Dr. Shakti Vidyalankar (Doctor Yog), holding a doctorate in Yogic Sciences and years of experience teaching Yoga Therapy, Ayurveda, Marma Science, and Vedic practices.";
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Person",
          "name": "Dr. Shakti Vidyalankar",
          "description": "Doctor of Yogic Sciences & Ayurveda practitioner based in Rishikesh",
          "knowsAbout": ["Yogic Philosophy", "Marma Therapy", "Ayurveda Nutrition", "Acupressure Rehabilitation"]
        }
      };
    } else if (pathname === '/programs') {
      title = "Courses & Trainings | Yoga, Ayurveda, Marma Science | Doctor Yog";
      desc = "Unlock health with our structured courses: Integrated Yoga Therapy Course (11D, Offline 550€ or Online 370€), 7 Days Ayurveda & Marma course (280€), Pain Management & Detox retreats.";
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Integrated Yoga & Ayurveda Therapy Course (11 Days)",
            "url": "https://doctor-yog.vercel.app/programs/yoga-therapy"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "7 Days Ayurveda & Marma Therapy Training (7 Days)",
            "url": "https://doctor-yog.vercel.app/programs/ayurveda"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Detox & Holistic Healing Retreat (5/10/14 Days)",
            "url": "https://doctor-yog.vercel.app/programs/detox"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Therapeutic Pain Management Course (10 Days)",
            "url": "https://doctor-yog.vercel.app/programs/pain-management"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "100 Hour Yoga Teacher Training Course (11 Days)",
            "url": "https://doctor-yog.vercel.app/programs/100hr-ttc"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "200 Hour Yoga Teacher Training Course (22 Days)",
            "url": "https://doctor-yog.vercel.app/programs/200hr-ttc"
          }
        ]
      };
    } else if (pathname.startsWith('/programs/')) {
      const pType = pathname.split('/').pop();
      if (pType === 'yoga-therapy') {
        title = "Integrated Yoga & Ayurveda Therapy Course (11 Days) | Doctor Yog";
        desc = "Study Yoga Therapy & Ayurveda in an intensive 11-day program. Offline Option: 550€ (₹49,500) including accommodation. Online Option: 370€ (₹33,000) under Dr. Shakti Vidyalankar.";
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Integrated Yoga & Ayurveda Therapy Course",
          "description": "Intensive 11-day professional course integrating Classical Yoga Philosophy, Ayurveda, Marma Point Stimulation, and Acupressure for natural healing and therapeutics.",
          "provider": {
            "@type": "Organization",
            "name": "Doctor Yog",
            "sameAs": "https://doctor-yog.vercel.app"
          },
          "offers": [
            {
              "@type": "Offer",
              "category": "Offline Training with Accommodation",
              "price": "49500",
              "priceCurrency": "INR",
              "description": "550 Euro offline training includes accommodation."
            },
            {
              "@type": "Offer",
              "category": "Online Training",
              "price": "33000",
              "priceCurrency": "INR",
              "description": "370 Euro online comprehensive course."
            }
          ]
        };
      } else if (pType === 'ayurveda') {
        title = "7 Days Ayurveda & Marma Therapy Training | Doctor Yog";
        desc = "Discover Ayurveda's healing properties: learn Tridosha balances, restorative nutrition, Ayurvedic cooking, lifestyle for longevity, and 107 Marma Energy Points stimulation. Cost is 280€ (₹25,200).";
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "7 Days Ayurveda & Marma Therapy",
          "description": "Explore Tridosha harmonies, metabolic symptoms, healing diet, Ayurvedic biological clocks, longevity lifestyle, and stimulation of 107 Marma Energy Points.",
          "provider": {
            "@type": "Organization",
            "name": "Doctor Yog",
            "sameAs": "https://doctor-yog.vercel.app"
          },
          "offers": {
            "@type": "Offer",
            "price": "25200",
            "priceCurrency": "INR",
            "description": "280 Euro"
          }
        };
      } else if (pType === 'detox') {
        title = "Detox & Holistic Healing Retreat (5, 10, or 14 Days) | Doctor Yog";
        desc = "Purify your nerve channels and organs under expert clinical guidance. Features Shatkarma, custom Ayurvedic herbs, physical body alignment, acupressure, Marma therapy, and Vedic fire ceremonies (Havan).";
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Detox & Holistic Healing",
          "description": "Ancient purification methods incorporating Shatkarma cleansing, restorative herbs, nervous acupressure mapping, therapeutic yoga asana, and sacred Havan fire ceremony for ultimate youthfulness.",
          "provider": {
            "@type": "Organization",
            "name": "Doctor Yog",
            "sameAs": "https://doctor-yog.vercel.app"
          },
          "offers": [
            {
              "@type": "Offer",
              "category": "5 Days Detox Program",
              "price": "18000",
              "priceCurrency": "INR",
              "description": "200 Euro"
            },
            {
              "@type": "Offer",
              "category": "10 Days Detox Program",
              "price": "36000",
              "priceCurrency": "INR",
              "description": "400 Euro"
            },
            {
              "@type": "Offer",
              "category": "14 Days Detox Program",
              "price": "46800",
              "priceCurrency": "INR",
              "description": "520 Euro"
            }
          ]
        };
      } else if (pType === 'pain-management') {
        title = "10 Days Therapeutic Pain Management Course | Doctor Yog";
        desc = "Resolve chronic neck, joint, back, and muscular pain naturally using specialized body alignment techniques, targeted modern acupressure, and ancient Marma science. Fee: Offline 480€ (₹43,200).";
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Therapeutic Pain Management Course",
          "description": "Specialized 10-day physical alignment, acupressure mapping, and Marma joint restoration process under professional clinical therapist supervision.",
          "provider": {
            "@type": "Organization",
            "name": "Doctor Yog",
            "sameAs": "https://doctor-yog.vercel.app"
          },
          "offers": {
            "@type": "Offer",
            "price": "43200",
            "priceCurrency": "INR",
            "description": "480 Euro offline intensive pain relief course."
          }
        };
      } else if (pType === '100hr-ttc') {
        title = "100 Hour Yoga Teacher Training Course (11 Days) | Doctor Yog";
        desc = "Earn your international foundational yoga teacher certificate. Covers authentic Hatha asanas, skeletal posture setups, primary Ashtanga flow, and breathing mechanics. Offline: ₹55,000 | Online: ₹37,000.";
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "100 Hour Yoga Teacher Training Course",
          "description": "Professional 11-day foundational teacher training covering classical Hatha yoga mechanics, skeletal safety alignments, Ashtanga Vinyasa, and pranayama.",
          "provider": {
            "@type": "Organization",
            "name": "Doctor Yog",
            "sameAs": "https://doctor-yog.vercel.app"
          },
          "offers": [
            {
              "@type": "Offer",
              "category": "Offline TTC",
              "price": "55000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "category": "Online TTC",
              "price": "37000",
              "priceCurrency": "INR"
            }
          ]
        };
      } else if (pType === '200hr-ttc') {
        title = "200 Hour Yoga Teacher Training Course (22 Days) | Doctor Yog";
        desc = "Become a worldwide registered yoga teacher (TTC) over 22 days. Extensive curriculum of biomechanics, therapeutic anatomy, Hatha scriptures, and actual classroom dynamic trials. Offline: ₹85,000 | Online: ₹50,000.";
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "200 Hour Yoga Teacher Training Course",
          "description": "Flagship 22-day comprehensive certification course covering advanced postural adjustments, masterclass clinical anatomy, Hatha texts, and active classroom teaching practicums.",
          "provider": {
            "@type": "Organization",
            "name": "Doctor Yog",
            "sameAs": "https://doctor-yog.vercel.app"
          },
          "offers": [
            {
              "@type": "Offer",
              "category": "Offline TTC",
              "price": "85000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "category": "Online TTC",
              "price": "50000",
              "priceCurrency": "INR"
            }
          ]
        };
      }
    } else if (pathname === '/retreats') {
      title = "Holistic Wellness Retreats in Rishikesh | Doctor Yog";
      desc = "Immerse in rejuvenating wellness retreats. Pick from healing pathways, body alignment therapy, detox cleanses, and custom Ayurveda recovery schedules.";
    } else if (pathname === '/book') {
      title = "Book an Appointment / Secure Your Seat | Doctor Yog";
      desc = "Reserve a slot for professional personal body alignment therapies, personal wellness analysis, online consultations, or intensive courses with Doctor Yog.";
    } else if (pathname === '/reserve') {
      title = "Course Enrollment & Seat Security | Doctor Yog";
      desc = "Secure your slot for our upcoming Ayurveda, Yoga Therapy, or Teacher Training courses in Rishikesh. Direct integration with official verification sheets.";
    } else if (pathname === '/contact') {
      title = "Contact Doctor Yog – Tapovan, Rishikesh";
      desc = "Have questions about Ayurveda, Marma therapy, or Yoga courses? Get in touch with Dr. Shakti Vidyalankar in Tapovan, Rishikesh via phone, email, or WhatsApp.";
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "description": "Contact channels and location map for Doctor Yog Foundation in Tapovan, Rishikesh.",
        "mainEntity": localBusinessBase
      };
    } else if (pathname === '/contact/faqs') {
      title = "FAQs – Frequently Asked Questions about Ayurveda & Yoga Therapy";
      desc = "Find answers regarding course registrations, offline accommodations in Rishikesh, visa requirements, online learning environments, and Marma/Acupressure remedies.";
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Marma Therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Marma Therapy is an ancient Ayurvedic healing modality focusing on 107 vital energy spots on the body where physical structures and Prana (life-force) meets. Activating these spots releases long-term nerve blockages and alleviates pain."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the physical center located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The center is based in Tapovan, Rishikesh, Uttarakhand, India, close to the sacred Ganges river and Laxman Jhula bridge, known as the global capital of Yoga."
            }
          },
          {
            "@type": "Question",
            "name": "Are the certifications globally recognized?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our Yoga Teacher Training courses are fully structured aligned with global standards and certificate benchmarks."
            }
          }
        ]
      };
    } else if (pathname === '/contact/blogs') {
      title = "Healing Wisdom Blog | Articles on Ayurveda & Yoga";
      desc = "Browse professional guidance and blogs authored by Dr. Shakti Vidyalankar on topics like balancing Tridosha, Marma recovery techniques, and holistic lifestyles.";
    }

    // 2. Apply Dynamic Document Head Updates (Safe for browser environments)
    document.title = title;

    // Viewport-safe meta updating
    const updateMetaTag = (name: string, value: string, isProperty = false) => {
      const attributeName = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attributeName}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', value);
    };

    updateMetaTag('description', desc);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', desc, true);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', desc);

    // 3. Inject dynamic JSON-LD Schema
    const existingScript = document.getElementById('seo-dynamic-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaJson) {
      const script = document.createElement('script');
      script.id = 'seo-dynamic-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaJson);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}

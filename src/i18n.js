import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
// import translationEN from "./locale/en.json";
// import translationAR from "./locale/ar.json";

const options = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "localStorage",
    "path",
    "cookie",
    "sessionStorage",
    "navigator",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/", sameSite: "strict" },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about_us: "About us",
          services: "Services",
          our_projects: "Our Projects",
          clients: "Clients",
          mobile_apps: "Mobile Apps",
          electronic_invoice: "Electronic Invoice",
          blog: "Blog",
          contact_us: "Contact us",
          company_profile: "Company Profile",
          call_us: "Call us",
          view_details: "View Details",
          services_page_our_solutions: "Our Solutions",
          services_page_services: "Services",
          services_page_home_paragraph:
            "UD-Tech provides the latest IT services to ensure your organization stays up-to-date and drives results. Our comprehensive solutions can help you optimize operations, increase efficiency, and spark innovation within your entire IT ecosystem.",
          services_page_read_more: "Read More",
          services_page_paragraph:
            "UD-Tech provides the latest IT services to ensure your organization stays up-to-date and drives results. Our comprehensive solutions can help you optimize operations, increase efficiency, and spark innovation within your entire IT ecosystem.",
          about_page_get_to_know: "Get To Know",
          about_page_about_us: "About Us",
          about_page_why_choose: "Why Choose Us",
          about_page_title1:
            "For your project to get the results it deserves, come work with UD-Tech. Our team has delivered 100+ successful IT projects, and we're committed to ensuring yours is next. Let us help you bring your ideas to life!",
          about_page_paragraph1:
            "UD-Tech provides best-in-class digital solutions customized to fit each customer's vision and desired outcomes. Through our team of hand-picked software and app developers, we ensure the highest possible level of quality, efficiency, and results. Our developers are highly trained professionals with a passion for delivering excellence.",
          about_page_superior_support: "Superior Support",
          about_page_unique_design: "Unique Designs",
          about_page_clean_code: "Clean Code Develop",
          about_page_ud_history: "UD-Tech  History",
          about_page_our_history: "Our History",
          about_page_projects_completed: "Projects Completed",
          about_page_satisfied_customers: "Satisfied Customers",
          about_page_years: "Years",
          about_page_experts: "Experts",
          about_page_best_agency:
            "Best Creative software company And business Solutions ",
          about_page_since: "Since 2005.",
          project_page_case_study: "Case Study",
          project_page_project: "Projects",
          project_page_paragraph:
            "Check out some of our past work on complex projects for SMBs and enterprise-size businesses.",
          mobileApps_page_title1: "MOBILE APPS & WEBSITES",
          mobileApps_page_paragraph1:
            "We offer customization of applications and websites as requested by the client. Our programming capabilities range from IOS & Android to Flutter, .Net core, Backend, and 14 more languages. We invite you to contact us for further details and download our company profile.",
          mobileApps_page_send_mail: "Send Us email",
          mobileApps_page_tech_use: "Technologies That We Use",
          mobileApps_page_title2:
            "Grow your business with the right mobile solutions",
          mobileApps_page_paragraph2:
            "Custom mobile application development allows you to leverage modern technology to capitalize on new business processes, increase market presence and make a name for yourself. Our experienced design methodologies and high-quality processes will help you optimize the value of your application, so you can create an intuitive and feature-rich product that users adore.",
          mobileApps_page_title3:
            "Meet users’ increasingly demanding expectations",
          mobileApps_page_paragraph3:
            "To develop premier mobile applications, a combination of healthy system architecture and expert code is required. Our team assists you in selecting the most suitable technologies to accelerate the mobile app development process and guarantee our users gain the high-quality experience they deserve.",
          mobileApps_page_title4:
            "How to choose the technology for the application?",
          mobileApps_page_paragraph4:
            "When developing a custom mobile app, selecting the best technology is critical in achieving optimal results. Cross-platform technologies can offer many advantages such as faster development time and reduced cost. When it comes to more basic apps without specific platform requirements React Native has become a popular choice due to its performance, user-friendliness and attractive UI design capabilities. Of course, native app development may be superior in some cases; however, cross-platform solutions should also be taken into account when designing your app.",
          mobileApps_page_our_partners: "Our Partners",
          mobileApps_page_more_clients: "More Clients",
          blog_page_search: "Search here",
          blog_page_new_post: "Newest Posts",
          blog_page_hashtag: "Post Tag",
          blog_page_any_project: "Any Project",
          blog_page_call_now: "Call Now.",
          blog_page_category: "Category",
          blog_page_web: "Web Design",
          blog_page_app: "App Development",
          blog_page_software: "Software Development",
          blog_page_motion: "Motion Graphics",
          blog_page_ui_ux: "UI/UX Design",
          blog_page_graphic: "Graphic Design",
          contact_page_get_in_touch: "Get In Touch",
          contact_page_contact_us: "Contact Us If You Have More Questions.",
          contact_page_location: "Location",
          contact_page_phone: "Phone",
          contact_page_email: "Email",
          contact_page_questions: "Have Any Questions",
          contact_page_enter_name: "Enter your name",
          contact_page_enter_email: "Enter your email",
          contact_page_subject: "Subject",
          contact_page_message: "Your Message",
          contact_page_submit: "Submit",
          home_project_paragraph:
            "We have an extensive history of providing solutions for SMBs and large enterprises. Here is a snapshot of some of our complex projects that have been completed.",
          home_blog_all: "All Blogs",
          home_blog_latest: "Latest Post",
          home_blog_paragraph:
            "The latest news and views from our team of thought leaders",
          features_care_study: "Care Study",
          features_our_numbers: "Our Numbers",
          testimonial_title: "Testimonial",
          testimonial_client_say: "Client Say About us",
          testimonial_paragraph:
            "We pride ourselves on providing an exceptional service to our clients, but you don’t just have to take our word for it. Read what our clients have to say about working with us.",
          newsletter_subscribe: "Subscribe To Our",
          newsletter_subscribe2: "Newsletter",
          newsletter_connect: "connect",
          footer_paragraph1:
            "For your project to get the results it deserves, come work with UD-Tech. Our team has delivered 100+ successful IT projects, and we're committed to ensuring yours is next. Let us help you bring your ideas to life!",
          footer_our_services: "Our Services",
          footer_our_ui_ux: "UI/UX",
          footer_our_mobile_apps: "Mobile Applications",
          footer_our_websites: "Websites",
          footer_our_ecommerce: "E-commerce",
          footer_our_ERP_by_odoo: "ERP by odoo",
          footer_our_customized:
            "Customized Systems , System Integrations , Process Automation , AI , BI , VR , Electronic Invoice",
          footer_our_quick_links: "Quick Links",
          footer_our_careers: "Careers",
          footer_our_contacts: "Contact Us",
          footer_privacy: "Privacy Policy",
          footer_terms: "Terms of Use",
          blog_details: "Blog Details",
          comment: "Comment",
          share_on: "Share On:",
          by: "By",
          we_use_cookie: "WE USE COOKIES",
          cookie_paragraph:
            "THIS WEBSITE USES COOKIES TO ENSURE YOU GET THE BEST EXPERIENCE ON OUR WEBSITE",
          refuse: "Refuse",
          accept: "Accept",
        },
      },
      ar: {
        translation: {
          home: "الصفحة الرئيسية",
          about_us: "معلومات عنا",
          services: "خدماتنا",
          our_projects: "مشاريعنا",
          clients: "عملائنا",
          mobile_apps: "تطبيقات الجوال",
          electronic_invoice: "الفاتورة الإلكترونية",
          blog: "مدونة",
          contact_us: "تواصل معنا",
          company_profile: "ملف تعريف الشركة",
          call_us: "أتصل الأن",
          view_details: "عرض التفاصيل",
          services_page_our_solutions: "حلولنا",
          services_page_services: "الخدمات",
          services_page_home_paragraph:
            "نحن نفهم أن كل منظمة فريدة من نوعها، لهذا السبب نعمل عن كثب مع عملائنا لتطوير حلول مخصصة تلبي متطلباتهم الخاصة، لدينا فريق من المبرمجين  ذوي الخبرة هنا لمساعدتك في كل خطوة على الطريق - من الاستشارة الأولية إلى التنفيذ وما بعد ، نحن هنا لمساعدة عملك على النجاح ، لذلك لا تتردد في التواصل معنا إذا كان هناك أي شيء يمكننا القيام به من أجلك!",
          services_page_read_more: "قراءة المزيد",
          services_page_paragraph:
            "نحن نفهم أن كل منظمة فريدة من نوعها، لهذا السبب نعمل عن كثب مع عملائنا لتطوير حلول مخصصة تلبي متطلباتهم الخاصة، لدينا فريق من المبرمجين  ذوي الخبرة هنا لمساعدتك في كل خطوة على الطريق - من الاستشارة الأولية إلى التنفيذ وما بعد ، نحن هنا لمساعدة عملك على النجاح ، لذلك لا تتردد في التواصل معنا إذا كان هناك أي شيء يمكننا القيام به من أجلك!",
          about_page_get_to_know: "ماذا يجب أن تعرف",
          about_page_about_us: "معلومات عنا",
          about_page_why_choose: "لماذا تختارنا",
          about_page_title1:
            "هل تبحث عن شريك موثوق به في مجال تكنولوجيا المعلومات لمساعدتك في إحياء مشروعك؟ لقد عملنا في هذا المجال لأكثر من 10 سنوات وقدمنا بالفعل أكثر من 100 مشروع ناجح في مجال تكنولوجيا المعلومات ونحن واثقون من أن مشروعك يمكن أن يكون التالي دعنا نساعدك على جعل أفكارك تنبض بالحياة! اتصل بنا اليوم ودعنا نبدأ.",
          about_page_paragraph1:
            "نتفهم مدى أهمية وجود شركة يمكنها مساعدتك في الوصول إلى أهدافك وغاياتك، نحن نقدم أفضل الحلول البرمجية  في فئتها والمخصصة لتناسب رؤية كل عميل والنتائج المرجوة، يضمن فريق مطوري البرامج والتطبيقات المختارين بعناية أعلى مستوى ممكن من الجودة والكفاءة والنتائج. ساعدنا التزامنا بتقديم خدمة عملاء استثنائية في بناء علاقات قوية مع عملائنا على مر السنين، نحن نفخر بقدرتنا على تقديم حلول إبداعية تساعد عملائنا على تحقيق النتائج المرجوة ،نحن نتفهم أنه لا يوجد مشروعان متشابهان تمامًا ونعمل بجد لضمان أن حلولنا مصممة خصيصًا لتناسب متطلبات كل عميل.. إذا كنت تبحث عن شريك موثوق يمكنه ذلك.",
          about_page_superior_support: "دعم متميز",
          about_page_unique_design: "تصاميم مميزة",
          about_page_clean_code: "تطوير الكود النظيف",
          about_page_ud_history: "تاريخ UD-Tech",
          about_page_our_history: "تاريخنا",
          about_page_projects_completed: "المشاريع المنجزة",
          about_page_satisfied_customers: "عملاء راضون",
          about_page_years: "سنين",
          about_page_experts: "عدد الموظفين",
          about_page_best_agency: "أفضل شركة إبداعية للبرمجيات وحلول الأعمال ",
          about_page_since: "منذ 2015.",
          project_page_case_study: "مواضيع المشاريع",
          project_page_project: "مشاريعنا",
          project_page_paragraph:
            "نحن فخورون بأن يكون لدينا تاريخ طويل من العمل مع الشركات من جميع الأحجام، لدينا مجموعة واسعة من الخبرات عبر صناعات متعددة ونفخر بعرض إنجازاتنا.فيما يلي لمحة عن بعض المشاريع التي أنجزناها بنجاح:",
          mobileApps_page_title1: "تطبيقات الجوال والمواقع",
          mobileApps_page_paragraph1:
            "نحن متخصصون في برمجة التطبيقات والمواقع و والانظمة فقًا للاحتياجات الفريدة لعملائنا ، تشمل قدرات البرمجة لدينا IOS و Android و Flutter و .Net core و Backend و 14 لغة برمجية أخرى مما يجعلنا مجهزين جيدًا للتعامل مع أي مشروع.نحن نتفهم أن كل عمل لديه رؤية مختلفة لتطبيقه لهذا السبب سيعمل فريق المطورين لدينا عن كثب معك لضمان تحقيق رؤيتك ، دائمًا ما يكون المتخصصون ذوو الخبرة لدينا على اطلاع دائم بأحدث التقنيات والاتجاهات لذا يمكنك أن تطمئن إلى أن الحل الذي سيقدم لك سيكون موثوقًا به وسهل الاستخدام.ندعوك للاتصال بنا للحصول على مزيد من التفاصيل حول خدماتنا وتنزيل ملف تعريف الشركة.",
          mobileApps_page_send_mail: "أرسل لنا بريدًا إلكترونيًا",
          mobileApps_page_tech_use: "التقنيات التي نستخدمها",
          mobileApps_page_title2: "نمي مشروعك مع التطبيق المناسب",
          mobileApps_page_paragraph2:
            "سواء كنت تقوم بتحويل العمليات التجارية الداخلية ، أو تعمل على فكرة من شأنها تغيير العالم ، أو ببساطة زيادة وجود شركتك في السوق ، يتيح لك تطوير تطبيقات هاتف الجوال المخصصة تحقيق أهدافك بسرعة وكفاءة. تساعدك منهجيات التصميم الموثوقة والعمليات عالية الجودة على تعظيم قيمة تطبيق هاتف الجوال الخاص بك مع ضمان حصولك على منتج غني بالميزات يحبه المستخدمون",
          mobileApps_page_title3: "",
          mobileApps_page_paragraph3:
            "لإنشاء أفضل حل للأجهزة المحمولة ، فأنت بحاجة إلى مزيج من بنية نظام جيدة الإعداد وكود عالي الجودة يساعدك خبراؤنا في اختيار أنسب التقنيات لتسريع عملية تطوير تطبيقات الهاتف المحمول وضمان حصول المستخدمين لديك على التجربة المتميزة التي يتوقعونها.",
          mobileApps_page_title4: "",
          mobileApps_page_paragraph4:
            "يعد اختيار التقنية المناسبة لتطبيق الجوال الخاص بك قرارًا رئيسيًا سيؤثر بشكل كبير على نجاحه. عند التخطيط لتطبيق جوّال عبر الأنظمة الأساسية ، فأنت بحاجة إلى التأكد من أن التقنية الأساسية تضمن أداءً مستقرًا وملاءمة ملائمة للمستخدم. علاوة على ذلك ، يجب أن يمكّنك من إنشاء واجهة مستخدم جميلة وبديهية.على الرغم من وجود العديد من الحالات التي يكون من الأفضل فيها الالتزام بالتطوير المحلي ، إلا أن تطوير تطبيقات الجوّال عبر الأنظمة الأساسية أمر يستحق النظر لأنه يقلل بشكل كبير من وقت وتكلفة التطوير. بالنسبة لتطبيقات الجوال المخصصة الصغيرة نسبيًا بدون متطلبات محددة للنظام الأساسي ، يمكن أن يكون React Native أو إطار عمل مشابهًا مثاليًا.",
          mobileApps_page_our_partners: "شركائنا",
          mobileApps_page_more_clients: "المزيد من العملاء",
          blog_page_search: "بحث",
          blog_page_new_post: "أحدث موضوع",
          blog_page_hashtag: "هاشتاج",
          blog_page_any_project: "مشروع",
          blog_page_call_now: "أتصل الأن",
          blog_page_category: "فئة",
          blog_page_web: "مواقع الويب سايت",
          blog_page_app: "تطبيقات الجوال",
          blog_page_software: "Software Development",
          blog_page_motion: "Motion Graphics",
          blog_page_ui_ux: "واجهة المستخدم / تجربة المستخدم UI/UX",
          blog_page_graphic: "Graphic Design",
          contact_page_get_in_touch: "ابق على تواصل معنا",
          contact_page_contact_us:
            "نحن نتفهم أنه قد يكون لديك بعض الأسئلة والاستفسارات ، لذا لا تتردد في الاتصال بنا، فريقنا من المحترفين المطلعين موجود هنا لمساعدتك في حل أي مشكلات أو استفسارات قد تكون لديك.",
          contact_page_location: "الموقع",
          contact_page_phone: "رقم الهاتف",
          contact_page_email: "البريد الإلكتروني",
          contact_page_questions: "هل لديك أي سؤال ؟",
          contact_page_enter_name: "أدخل أسمك",
          contact_page_enter_email: "أدخل بريدك الإلكتروني",
          contact_page_subject: "الموضوع",
          contact_page_message: "رسالتك",
          contact_page_submit: "أرسال",
          home_project_paragraph:
            "نحن فخورون بأن يكون لدينا تاريخ طويل من العمل مع الشركات من جميع الأحجام، لدينا مجموعة واسعة من الخبرات عبر صناعات متعددة ونفخر بعرض إنجازاتنا.فيما يلي لمحة عن بعض المشاريع التي أنجزناها بنجاح:",
          home_blog_all: "جميع المدونة",
          home_blog_latest: "أخر منشور",
          home_blog_paragraph:
            "تقديم أحدث وجهات النظر من فريق الخبراء لدينا،انضم إلينا في السعي وراء المعرفة والاكتشاف!",
          features_care_study: "إحصائيات",
          features_our_numbers: "أرقامنا",
          testimonial_title: "آراء العملاء عنا ",
          testimonial_client_say:
            "خدمة العملاء بخدمة ونتائج استثنائية، قصص نجاحنا تتحدث عن نفسها - اقرأ ما يقوله عملاؤنا عنا!",
          testimonial_paragraph:
            "خدمة العملاء بخدمة ونتائج استثنائية، قصص نجاحنا تتحدث عن نفسها - اقرأ ما يقوله عملاؤنا عنا!",
          newsletter_subscribe: "الأشتراك فى",
          newsletter_subscribe2: "النشرة الأخبارية",
          newsletter_connect: "أرسل",
          footer_paragraph1:
            "هل تبحث عن شريك موثوق به في مجال تكنولوجيا المعلومات لمساعدتك في إحياء مشروعك؟ لقد عملنا في هذا المجال لأكثر من 10 سنوات وقدمنا بالفعل أكثر من 100 مشروع ناجح في مجال تكنولوجيا المعلومات ونحن واثقون من أن مشروعك يمكن أن يكون التالي دعنا نساعدك على جعل أفكارك تنبض بالحياة! اتصل بنا اليوم ودعنا نبدأ.",
          footer_our_services: "خدماتنا",
          footer_our_ui_ux: "واجهة المستخدم / تجربة المستخدم UI/UX",
          footer_our_mobile_apps: "تطبيقات الجوال",
          footer_our_websites: "مواقع الويب سايت",
          footer_our_ecommerce: "المتاجر الإلكترونية",
          footer_our_ERP_by_odoo: "برنامج إدارة الشركات  Odoo ERP",
          footer_our_customized:
            "برمجة أنظمة حسب الطلب ، ربط الأنظمة ، العمليات الآلية ، الذكاء الاصطناعي ، ذكاء الأعمال ، الواقع الافتراضي ، الفاتورة الإلكترونية",
          footer_our_quick_links: "روابط سريعة",
          footer_our_careers: "وظائف",
          footer_our_contacts: "تواصل معنا",
          footer_privacy: "سياسة الخصوصية",
          footer_terms: "شروط الاستخدام",
          blog_details: "تفاصيل المدونة",
          comment: "تعليق",
          share_on: "نشر على:",
          by: "بواسطة",
          we_use_cookie: "نستخدم ملفات تعريف",
          cookie_paragraph:
            "نسعى جاهدين لضمان حصولك على أفضل تجربة ممكنة معنا، لهذا السبب نستخدم ملفات التعريف ومعلومات حول تفضيلاتك واستخدامك لموقعنا على الويب.",
          refuse: "رفض",
          accept: "قبول",
        },
      },
    },

    fallbackLng: "en-US",
    detection: options,

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

function App() {
  const { t } = useTranslation();
  return <h2>{t("")}</h2>;
}

// append app to dom
const root = createRoot(document.getElementById("root"));
root.render(<App />);

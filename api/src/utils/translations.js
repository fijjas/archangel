/**
 * Translation system for multi-language support
 */

var translations = {
  welcome: {
    en: '🛡️ *Welcome to Archangel!*\n\nI am your personal safety assistant. Tell me about yourself in your own words.\n\nFor example:\n_"I\'m John, 25, living in Berlin. US citizen, software engineer, have work visa until 2026."_\n\nJust write whatever you think is important 👇',
    de: '🛡️ *Willkommen bei Archangel!*\n\nIch bin dein persönlicher Sicherheitsassistent. Erzähl mir in deinen eigenen Worten über dich.\n\nZum Beispiel:\n_"Ich bin Max, 28, lebe in Berlin. Deutscher Staatsbürger, Softwareentwickler."_\n\nSchreib einfach, was dir wichtig erscheint 👇',
    pl: '🛡️ *Witamy w Archangel!*\n\nJestem twoim osobistym asystentem bezpieczeństwa. Opowiedz mi o sobie własnymi słowami.\n\nNa przykład:\n_"Jestem Jan, 25 lat, mieszkam w Berlinie. Obywatel USA, inżynier oprogramowania."_\n\nPo prostu napisz wszystko, co uważasz za ważne 👇',
    ru: '🛡️ *Добро пожаловать в Archangel!*\n\nЯ твой персональный ассистент безопасности. Расскажи мне о себе своими словами.\n\nНапример:\n_"Я Максим, 28 лет, живу в Варшаве. Гражданин России, работаю программистом."_\n\nПросто напиши всё, что считаешь важным 👇',
    uk: '🛡️ *Ласкаво просимо до Archangel!*\n\nЯ ваш персональний асистент безпеки. Розкажіть мені про себе своїми словами.\n\nНаприклад:\n_"Я Максим, 28 років, живу у Варшаві. Громадянин України, працюю програмістом."_\n\nПросто напишіть все, що вважаєте важливим 👇',
    fr: '🛡️ *Bienvenue sur Archangel!*\n\nJe suis votre assistant de sécurité personnel. Parlez-moi de vous avec vos propres mots.\n\nPar exemple:\n_"Je m\'appelle Jean, 25 ans, je vis à Berlin. Citoyen américain, ingénieur logiciel."_\n\nÉcrivez simplement ce qui vous semble important 👇',
    es: '🛡️ *¡Bienvenido a Archangel!*\n\nSoy tu asistente de seguridad personal. Cuéntame sobre ti con tus propias palabras.\n\nPor ejemplo:\n_"Soy Juan, 25 años, vivo en Berlín. Ciudadano estadounidense, ingeniero de software."_\n\nSimplemente escribe lo que consideres importante 👇',
    he: '🛡️ *ברוכים הבאים ל-Archangel!*\n\nאני עוזר הביטחון האישי שלך. ספר לי על עצמך במילים שלך.\n\nלדוגמה:\n_"אני יוחנן, בן 25, גר בברלין. אזרח אמריקאי, מהנדס תוכנה."_\n\nפשוט כתוב את מה שחשוב לך 👇',
    ja: '🛡️ *Archangelへようこそ！*\n\n私はあなたの個人安全アシスタントです。自分の言葉で自己紹介してください。\n\n例:\n_「ジョンです。25歳、ベルリン在住。アメリカ市民、ソフトウェアエンジニアです。」_\n\n重要だと思うことを書いてください 👇',
    zh: '🛡️ *欢迎使用Archangel！*\n\n我是您的个人安全助手。请用您自己的话告诉我关于您的情况。\n\n例如：\n_"我叫约翰，25岁，住在柏林。美国公民，软件工程师。"_\n\n请写下您认为重要的信息 👇',
    ko: '🛡️ *Archangel에 오신 것을 환영합니다!*\n\n저는 당신의 개인 안전 도우미입니다. 자신에 대해 말씀해 주세요.\n\n예:\n_"저는 존이고, 25살이며 베를린에 살고 있습니다. 미국 시민이고 소프트웨어 엔지니어입니다."_\n\n중요하다고 생각하는 것을 적어주세요 👇',
    hi: '🛡️ *Archangel में आपका स्वागत है!*\n\nमैं आपका व्यक्तिगत सुरक्षा सहायक हूं। अपने बारे में अपने शब्दों में बताएं।\n\nउदाहरण:\n_"मैं जॉन हूं, 25 साल का, बर्लिन में रहता हूं। अमेरिकी नागरिक, सॉफ्टवेयर इंजीनियर।"_\n\nबस वही लिखें जो आपको महत्वपूर्ण लगे 👇',
    ar: '🛡️ *مرحباً بك في Archangel!*\n\nأنا مساعد الأمان الشخصي الخاص بك. أخبرني عن نفسك بكلماتك الخاصة.\n\nعلى سبيل المثال:\n_"أنا جون، 25 عاماً، أعيش في برلين. مواطن أمريكي، مهندس برمجيات."_\n\nفقط اكتب ما تعتقد أنه مهم 👇',
    bn: '🛡️ *Archangel-এ স্বাগতম!*\n\nআমি আপনার ব্যক্তিগত নিরাপত্তা সহায়ক। আপনার নিজের ভাষায় আপনার সম্পর্কে বলুন।\n\nউদাহরণ:\n_"আমি জন, ২৫ বছর, বার্লিনে থাকি। মার্কিন নাগরিক, সফটওয়্যার ইঞ্জিনিয়ার।"_\n\nগুরুত্বপূর্ণ মনে করেন এমন কিছু লিখুন 👇',
    pt: '🛡️ *Bem-vindo ao Archangel!*\n\nSou seu assistente de segurança pessoal. Conte-me sobre você com suas próprias palavras.\n\nPor exemplo:\n_"Sou João, 25 anos, moro em Berlim. Cidadão americano, engenheiro de software."_\n\nEscreva o que você acha importante 👇',
    id: '🛡️ *Selamat datang di Archangel!*\n\nSaya asisten keamanan pribadi Anda. Ceritakan tentang diri Anda dengan kata-kata Anda sendiri.\n\nContoh:\n_"Saya John, 25 tahun, tinggal di Berlin. Warga negara AS, insinyur perangkat lunak."_\n\nTulis saja apa yang Anda anggap penting 👇',
    sw: '🛡️ *Karibu Archangel!*\n\nMimi ni msaidizi wako wa usalama. Niambie kuhusu wewe kwa maneno yako mwenyewe.\n\nKwa mfano:\n_"Mimi ni John, miaka 25, ninaishi Berlin. Mwananchi wa Marekani, mhandisi programu."_\n\nAndika tu unachofikiri ni muhimu 👇',
    tr: '🛡️ *Archangel\'e hoş geldiniz!*\n\nBen kişisel güvenlik asistanınızım. Kendi kelimelerinizle kendinizden bahsedin.\n\nÖrneğin:\n_"Ben John, 25 yaşındayım, Berlin\'de yaşıyorum. ABD vatandaşı, yazılım mühendisiyim."_\n\nÖnemli olduğunu düşündüğünüz şeyleri yazın 👇',
    th: '🛡️ *ยินดีต้อนรับสู่ Archangel!*\n\nฉันเป็นผู้ช่วยด้านความปลอดภัยส่วนตัวของคุณ บอกเกี่ยวกับตัวคุณด้วยคำพูดของคุณเอง\n\nตัวอย่าง:\n_"ฉันชื่อจอห์น อายุ 25 ปี อาศัยอยู่ที่เบอร์ลิน พลเมืองอเมริกัน วิศวกรซอฟต์แวร์"_\n\nเพียงเขียนสิ่งที่คุณคิดว่าสำคัญ 👇'
  },

  profile_analyzing: {
    en: '🔍 Analyzing your profile...',
    de: '🔍 Analysiere dein Profil...',
    pl: '🔍 Analizuję twój profil...',
    ru: '🔍 Анализирую твой профиль...',
    uk: '🔍 Аналізую ваш профіль...',
    fr: '🔍 Analyse de votre profil...',
    es: '🔍 Analizando tu perfil...',
    he: '🔍 מנתח את הפרופיל שלך...',
    ja: '🔍 プロフィールを分析中...',
    zh: '🔍 正在分析您的资料...',
    ko: '🔍 프로필 분석 중...',
    hi: '🔍 आपकी प्रोफ़ाइल का विश्लेषण कर रहा हूं...',
    ar: '🔍 تحليل ملفك الشخصي...',
    bn: '🔍 আপনার প্রোফাইল বিশ্লেষণ করা হচ্ছে...',
    pt: '🔍 Analisando seu perfil...',
    id: '🔍 Menganalisis profil Anda...',
    sw: '🔍 Inachanganua wasifu wako...',
    tr: '🔍 Profiliniz analiz ediliyor...',
    th: '🔍 กำลังวิเคราะห์โปรไฟล์ของคุณ...'
  },

  profile_updated: {
    en: '✅ *Profile updated!*',
    de: '✅ *Profil aktualisiert!*',
    pl: '✅ *Profil zaktualizowany!*',
    ru: '✅ *Профиль обновлён!*',
    uk: '✅ *Профіль оновлено!*',
    fr: '✅ *Profil mis à jour!*',
    es: '✅ *¡Perfil actualizado!*',
    he: '✅ *הפרופיל עודכן!*',
    ja: '✅ *プロフィールが更新されました！*',
    zh: '✅ *资料已更新！*',
    ko: '✅ *프로필이 업데이트되었습니다!*',
    hi: '✅ *प्रोफ़ाइल अपडेट हो गई!*',
    ar: '✅ *تم تحديث الملف الشخصي!*',
    bn: '✅ *প্রোফাইল আপডেট হয়েছে!*',
    pt: '✅ *Perfil atualizado!*',
    id: '✅ *Profil diperbarui!*',
    sw: '✅ *Wasifu umesasishwa!*',
    tr: '✅ *Profil güncellendi!*',
    th: '✅ *อัปเดตโปรไฟล์แล้ว!*'
  },

  check_started: {
    en: '🔄 Safety check started...',
    de: '🔄 Sicherheitsprüfung gestartet...',
    pl: '🔄 Rozpoczęto sprawdzanie bezpieczeństwa...',
    ru: '🔄 Проверка безопасности запущена...',
    uk: '🔄 Перевірку безпеки розпочато...',
    fr: '🔄 Vérification de sécurité commencée...',
    es: '🔄 Verificación de seguridad iniciada...',
    he: '🔄 בדיקת ביטחון החלה...',
    ja: '🔄 安全チェックを開始しました...',
    zh: '🔄 安全检查已开始...',
    ko: '🔄 안전 점검이 시작되었습니다...',
    hi: '🔄 सुरक्षा जांच शुरू हुई...',
    ar: '🔄 بدأ فحص الأمان...',
    bn: '🔄 নিরাপত্তা পরীক্ষা শুরু হয়েছে...',
    pt: '🔄 Verificação de segurança iniciada...',
    id: '🔄 Pemeriksaan keamanan dimulai...',
    sw: '🔄 Ukaguzi wa usalama umeanza...',
    tr: '🔄 Güvenlik kontrolü başlatıldı...',
    th: '🔄 เริ่มการตรวจสอบความปลอดภัย...'
  },

  check_completed: {
    en: '✅ Safety check completed!',
    de: '✅ Sicherheitsprüfung abgeschlossen!',
    pl: '✅ Sprawdzanie bezpieczeństwa zakończone!',
    ru: '✅ Проверка безопасности завершена!',
    uk: '✅ Перевірку безпеки завершено!',
    fr: '✅ Vérification de sécurité terminée!',
    es: '✅ ¡Verificación de seguridad completada!',
    he: '✅ בדיקת ביטחון הושלמה!',
    ja: '✅ 安全チェックが完了しました！',
    zh: '✅ 安全检查已完成！',
    ko: '✅ 안전 점검이 완료되었습니다!',
    hi: '✅ सुरक्षा जांच पूर्ण हुई!',
    ar: '✅ اكتمل فحص الأمان!',
    bn: '✅ নিরাপত্তা পরীক্ষা সম্পন্ন হয়েছে!',
    pt: '✅ Verificação de segurança concluída!',
    id: '✅ Pemeriksaan keamanan selesai!',
    sw: '✅ Ukaguzi wa usalama umekamilika!',
    tr: '✅ Güvenlik kontrolü tamamlandı!',
    th: '✅ การตรวจสอบความปลอดภัยเสร็จสิ้น!'
  },

  check_already_running: {
    en: '⏳ Check is already in progress. Please wait...',
    de: '⏳ Prüfung läuft bereits. Bitte warten...',
    pl: '⏳ Sprawdzanie jest już w toku. Proszę czekać...',
    ru: '⏳ Проверка уже выполняется. Подождите...',
    uk: '⏳ Перевірка вже виконується. Зачекайте...',
    fr: '⏳ Vérification déjà en cours. Veuillez patienter...',
    es: '⏳ La verificación ya está en curso. Por favor espera...',
    he: '⏳ הבדיקה כבר בתהליך. אנא המתן...',
    ja: '⏳ チェックは既に進行中です。お待ちください...',
    zh: '⏳ 检查已在进行中。请稍候...',
    ko: '⏳ 점검이 이미 진행 중입니다. 기다려 주세요...',
    hi: '⏳ जांच पहले से चल रही है। कृपया प्रतीक्षा करें...',
    ar: '⏳ الفحص قيد التقدم بالفعل. يرجى الانتظار...',
    bn: '⏳ পরীক্ষা ইতিমধ্যে চলছে। অনুগ্রহ করে অপেক্ষা করুন...',
    pt: '⏳ Verificação já em andamento. Aguarde...',
    id: '⏳ Pemeriksaan sudah berjalan. Harap tunggu...',
    sw: '⏳ Ukaguzi tayari unaendelea. Tafadhali subiri...',
    tr: '⏳ Kontrol zaten devam ediyor. Lütfen bekleyin...',
    th: '⏳ การตรวจสอบกำลังดำเนินการอยู่ กรุณารอ...'
  },

  no_alerts: {
    en: '✅ No active alerts. You are safe!',
    de: '✅ Keine aktiven Warnungen. Du bist sicher!',
    pl: '✅ Brak aktywnych alertów. Jesteś bezpieczny!',
    ru: '✅ Активных алертов нет. Вы в безопасности!',
    uk: '✅ Немає активних сповіщень. Ви в безпеці!',
    fr: '✅ Aucune alerte active. Vous êtes en sécurité!',
    es: '✅ No hay alertas activas. ¡Estás seguro!',
    he: '✅ אין התראות פעילות. אתה בטוח!',
    ja: '✅ アクティブな警告はありません。安全です！',
    zh: '✅ 没有活动警报。您是安全的！',
    ko: '✅ 활성 경고가 없습니다. 안전합니다!',
    hi: '✅ कोई सक्रिय अलर्ट नहीं। आप सुरक्षित हैं!',
    ar: '✅ لا توجد تنبيهات نشطة. أنت آمن!',
    bn: '✅ কোনো সক্রিয় সতর্কতা নেই। আপনি নিরাপদ!',
    pt: '✅ Sem alertas ativos. Você está seguro!',
    id: '✅ Tidak ada peringatan aktif. Anda aman!',
    sw: '✅ Hakuna tahadhari zinazoendelea. Uko salama!',
    tr: '✅ Aktif uyarı yok. Güvendesiniz!',
    th: '✅ ไม่มีการแจ้งเตือนที่ใช้งานอยู่ คุณปลอดภัย!'
  },

  source_added: {
    en: '✅ News source added: *{name}* (trust score: {trust}/10)',
    de: '✅ Nachrichtenquelle hinzugefügt: *{name}* (Vertrauenswert: {trust}/10)',
    pl: '✅ Źródło wiadomości dodano: *{name}* (wskaźnik zaufania: {trust}/10)',
    ru: '✅ Источник новостей добавлен: *{name}* (уровень доверия: {trust}/10)',
    uk: '✅ Джерело новин додано: *{name}* (рівень довіри: {trust}/10)',
    fr: '✅ Source d\'actualités ajoutée: *{name}* (score de confiance: {trust}/10)',
    es: '✅ Fuente de noticias agregada: *{name}* (puntuación de confianza: {trust}/10)',
    he: '✅ מקור חדשות נוסף: *{name}* (ציון אמון: {trust}/10)',
    ja: '✅ ニュースソースが追加されました: *{name}* (信頼スコア: {trust}/10)',
    zh: '✅ 已添加新闻来源: *{name}* (信任评分: {trust}/10)',
    ko: '✅ 뉴스 소스가 추가되었습니다: *{name}* (신뢰도: {trust}/10)',
    hi: '✅ समाचार स्रोत जोड़ा गया: *{name}* (विश्वास स्कोर: {trust}/10)',
    ar: '✅ تمت إضافة مصدر الأخبار: *{name}* (درجة الثقة: {trust}/10)',
    bn: '✅ সংবাদ উৎস যোগ করা হয়েছে: *{name}* (বিশ্বাস স্কোর: {trust}/10)',
    pt: '✅ Fonte de notícias adicionada: *{name}* (pontuação de confiança: {trust}/10)',
    id: '✅ Sumber berita ditambahkan: *{name}* (skor kepercayaan: {trust}/10)',
    sw: '✅ Chanzo cha habari kimeongezwa: *{name}* (alama ya kuaminika: {trust}/10)',
    tr: '✅ Haber kaynağı eklendi: *{name}* (güven skoru: {trust}/10)',
    th: '✅ เพิ่มแหล่งข่าวแล้ว: *{name}* (คะแนนความน่าเชื่อถือ: {trust}/10)'
  },

  source_invalid: {
    en: '❌ Invalid news source: {reason}',
    de: '❌ Ungültige Nachrichtenquelle: {reason}',
    pl: '❌ Nieprawidłowe źródło wiadomości: {reason}',
    ru: '❌ Неверный источник новостей: {reason}',
    uk: '❌ Невірне джерело новин: {reason}',
    fr: '❌ Source d\'actualités invalide: {reason}',
    es: '❌ Fuente de noticias inválida: {reason}',
    he: '❌ מקור חדשות לא חוקי: {reason}',
    ja: '❌ 無効なニュースソース: {reason}',
    zh: '❌ 无效的新闻来源: {reason}',
    ko: '❌ 유효하지 않은 뉴스 소스: {reason}',
    hi: '❌ अमान्य समाचार स्रोत: {reason}',
    ar: '❌ مصدر أخبار غير صالح: {reason}',
    bn: '❌ অবৈধ সংবাদ উৎস: {reason}',
    pt: '❌ Fonte de notícias inválida: {reason}',
    id: '❌ Sumber berita tidak valid: {reason}',
    sw: '❌ Chanzo cha habari si sahihi: {reason}',
    tr: '❌ Geçersiz haber kaynağı: {reason}',
    th: '❌ แหล่งข่าวไม่ถูกต้อง: {reason}'
  },

  unclear_intent: {
    en: '🤔 I\'m not sure what you want. Please try to be more specific or type "help" for assistance.',
    de: '🤔 Ich bin mir nicht sicher, was du möchtest. Bitte sei spezifischer oder tippe "Hilfe" für Unterstützung.',
    pl: '🤔 Nie jestem pewien, czego chcesz. Spróbuj być bardziej konkretny lub wpisz "pomoc".',
    ru: '🤔 Не понял, что ты хочешь. Попробуй сформулировать точнее или напиши "помощь".',
    uk: '🤔 Не зрозумів, що ви хочете. Спробуйте сформулювати точніше або напишіть "допомога".',
    fr: '🤔 Je ne suis pas sûr de ce que vous voulez. Soyez plus précis ou tapez "aide".',
    es: '🤔 No estoy seguro de lo que quieres. Intenta ser más específico o escribe "ayuda".',
    he: '🤔 אני לא בטוח מה אתה רוצה. נסה להיות יותר ספציפי או הקלד "עזרה".',
    ja: '🤔 何をご希望かわかりません。より具体的に、または「ヘルプ」と入力してください。',
    zh: '🤔 我不确定您想要什么。请更具体一些或输入"帮助"。',
    ko: '🤔 무엇을 원하시는지 잘 모르겠습니다. 더 구체적으로 말씀하시거나 "도움말"을 입력하세요.',
    hi: '🤔 मुझे यकीन नहीं है कि आप क्या चाहते हैं। कृपया अधिक स्पष्ट रहें या "मदद" टाइप करें।',
    ar: '🤔 لست متأكداً مما تريد. يرجى أن تكون أكثر تحديداً أو اكتب "مساعدة".',
    bn: '🤔 আপনি কী চান তা নিশ্চিত নই। আরও নির্দিষ্ট হোন বা "সাহায্য" টাইপ করুন।',
    pt: '🤔 Não tenho certeza do que você quer. Seja mais específico ou digite "ajuda".',
    id: '🤔 Saya tidak yakin apa yang Anda inginkan. Coba lebih spesifik atau ketik "bantuan".',
    sw: '🤔 Sina uhakika unataka nini. Tafadhali kuwa mahususi zaidi au andika "msaada".',
    tr: '🤔 Ne istediğinizden emin değilim. Daha spesifik olun veya "yardım" yazın.',
    th: '🤔 ฉันไม่แน่ใจว่าคุณต้องการอะไร กรุณาระบุให้ชัดเจนหรือพิมพ์ "ช่วยเหลือ"'
  },

  help: {
    en: `📚 Archangel Help

I understand natural language. Just tell me what you need:

📝 Update profile: "I moved to [City]" or "I'm now a [Profession]"
🌍 Change language: "Switch to Russian" or "Говори по-русски"
📰 Add news source: "Track [Source1]" or "Add [Source2]"
❌ Remove source: "Stop tracking [Source3]" or "Remove [Source4]"
🔍 Check now: "Check safety now" or "Any alerts?"
📊 Show alerts: "What's happening?" or "Show my alerts"
📚 Show sources: "What sources do you monitor?"
❌ Delete profile: "Reset my profile" or "Delete my profile"

Just write naturally - I'll understand! 🤖`,

    de: `📚 Archangel Hilfe

Ich verstehe natürliche Sprache. Sag mir einfach, was du brauchst:

📝 Profil aktualisieren: "Ich bin nach [City] gezogen" oder "Ich bin jetzt [Profession]"
🌍 Sprache ändern: "Wechsel zu Russisch" oder "Switch to English"
📰 Nachrichtenquelle hinzufügen: "[Source1] verfolgen" oder "[Source2] hinzufügen"
❌ Quelle entfernen: "[Source3] nicht mehr verfolgen" oder "[Source4] entfernen"
🔍 Jetzt prüfen: "Sicherheit jetzt prüfen" oder "Gibt es Warnungen?"
📊 Warnungen anzeigen: "Was passiert?" oder "Zeig meine Warnungen"
📚 Quellen anzeigen: "Welche Quellen überwachst du?"
❌ Profil löschen: "Setze mein Profil zurück" oder "Lösche mein Profil"

Schreib einfach natürlich - ich verstehe dich! 🤖`,

    pl: `📚 Pomoc Archangel

Rozumiem naturalny język. Po prostu powiedz mi, czego potrzebujesz:

📝 Zaktualizuj profil: "Przeniosłem się do [City]" lub "Jestem teraz [Profession]"
🌍 Zmień język: "Przełącz na rosyjski" lub "Switch to English"
📰 Dodaj źródło: "Śledź [Source1]" lub "Dodaj [Source2]"
❌ Usuń źródło: "Przestań śledzić [Source3]" lub "Usuń [Source4]"
🔍 Sprawdź teraz: "Sprawdź bezpieczeństwo" lub "Jakieś alerty?"
📊 Pokaż alerty: "Co się dzieje?" lub "Pokaż moje alerty"
📚 Pokaż źródła: "Jakie źródła monitorujesz?"
❌ Usuń profil: "Zresetuj mój profil" lub "Usuń mój profil"

Po prostu pisz naturalnie - zrozumiem! 🤖`,

    ru: `📚 Помощь Archangel

Я понимаю естественный язык. Просто скажи мне, что нужно:

📝 Обновить профиль: "Я переехал в [City]" или "Теперь работаю [Profession]"
🌍 Сменить язык: "Переключись на английский" или "Switch to English"
📰 Добавить источник: "Отслеживай [Source1]" или "Добавь [Source2]"
❌ Убрать источник: "Перестань следить за [Source3]" или "Удали [Source4]"
🔍 Проверить сейчас: "Проверь безопасность" или "Есть алерты?"
📊 Показать алерты: "Что происходит?" или "Покажи мои алерты"
📚 Показать источники: "Какие источники отслеживаешь?"
❌ Удалить профиль: "Сбросить мой профиль" или "Удалить мой профиль"

Просто пиши естественно - я пойму! 🤖`,

    uk: `📚 Допомога Archangel

Я розумію природну мову. Просто скажіть мені, що потрібно:

📝 Оновити профіль: "Я переїхав до [City]" або "Тепер працюю [Profession]"
🌍 Змінити мову: "Переключися на англійську" або "Switch to English"
📰 Додати джерело: "Відстежуй [Source1]" або "Додай [Source2]"
❌ Прибрати джерело: "Перестань стежити за [Source3]" або "Видали [Source4]"
🔍 Перевірити зараз: "Перевір безпеку" або "Є сповіщення?"
📊 Показати сповіщення: "Що відбувається?" або "Покажи мої сповіщення"
📚 Показати джерела: "Які джерела відстежуєш?"
❌ Видалити профіль: "Скинути мій профіль" або "Видалити мій профіль"

Просто пишіть природно - я зрозумію! 🤖`,

    fr: `📚 Aide Archangel

Je comprends le langage naturel. Dis-moi simplement ce dont tu as besoin :

📝 Mettre à jour le profil : "J'ai déménagé à [City]" ou "Je suis maintenant [Profession]"
🌍 Changer de langue : "Passe au russe" ou "Switch to English"
📰 Ajouter une source : "Surveille [Source1]" ou "Ajoute [Source2]"
❌ Supprimer une source : "Arrête de suivre [Source3]" ou "Supprime [Source4]"
🔍 Vérifier maintenant : "Vérifie la sécurité" ou "Des alertes ?"
📊 Afficher les alertes : "Que se passe-t-il ?" ou "Montre mes alertes"
📚 Afficher les sources : "Quelles sources surveilles-tu ?"
❌ Supprimer le profil : "Réinitialiser mon profil" ou "Supprimer mon profil"

Écris naturellement - je comprendrai ! 🤖`,

    es: `📚 Ayuda de Archangel

Entiendo el lenguaje natural. Solo dime lo que necesitas:

📝 Actualizar perfil: "Me mudé a [City]" o "Ahora soy [Profession]"
🌍 Cambiar idioma: "Cambia a ruso" o "Switch to English"
📰 Añadir fuente: "Rastrea [Source1]" o "Añade [Source2]"
❌ Eliminar fuente: "Deja de rastrear [Source3]" o "Elimina [Source4]"
🔍 Verificar ahora: "Verifica la seguridad" o "¿Alguna alerta?"
📊 Mostrar alertas: "¿Qué está pasando?" o "Muestra mis alertas"
📚 Mostrar fuentes: "¿Qué fuentes monitorizas?"
❌ Eliminar perfil: "Restablecer mi perfil" o "Eliminar mi perfil"

¡Escribe naturalmente - te entenderé! 🤖`,

    he: `📚 עזרה של Archangel

אני מבין שפה טבעית. פשוט תגיד לי מה אתה צריך:

📝 עדכון פרופיל: "עברתי ל[City]" או "אני עכשיו [Profession]"
🌍 שינוי שפה: "עבור לרוסית" או "Switch to English"
📰 הוספת מקור חדשות: "עקוב אחרי [Source1]" או "הוסף [Source2]"
❌ הסרת מקור: "הפסק לעקוב אחרי [Source3]" או "הסר [Source4]"
🔍 בדיקה עכשיו: "בדוק בטיחות עכשיו" או "יש התראות?"
📊 הצגת התראות: "מה קורה?" או "הצג את ההתראות שלי"
📚 הצגת מקורות: "אילו מקורות אתה עוקב?"
❌ מחק פרופיל: "אתחל את הפרופיל שלי" או "מחק את הפרופיל שלי"

פשוט כתוב באופן טבעי - אני אבין! 🤖`,

    ja: `📚 Archangelヘルプ

自然言語を理解します。必要なことを教えてください：

📝 プロフィール更新：「[City]に引っ越した」または「今は[Profession]です」
🌍 言語変更：「ロシア語に切り替えて」または「Switch to English」
📰 ニュースソース追加：「[Source1]を追跡」または「[Source2]を追加」
❌ ソース削除：「[Source3]の追跡を停止」または「[Source4]を削除」
🔍 今すぐチェック：「今すぐ安全確認」または「アラートある？」
📊 アラート表示：「何が起きてる？」または「アラートを見せて」
📚 ソース表示：「どのソースを監視してる？」
❌ プロフィールを削除:「プロフィールをリセット」または「プロフィールを削除」

自然に書いてください - 理解します！🤖`,

    zh: `📚 Archangel帮助

我能理解自然语言。告诉我你需要什么：

📝 更新个人资料："我搬到了[City]"或"我现在是[Profession]"
🌍 更改语言："切换到俄语"或"Switch to English"
📰 添加新闻源："追踪[Source1]"或"添加[Source2]"
❌ 删除来源："停止追踪[Source3]"或"删除[Source4]"
🔍 立即检查："现在检查安全性"或"有警报吗？"
📊 显示警报："发生了什么？"或"显示我的警报"
📚 显示来源："你监控哪些来源？"
❌ 删除个人资料: "重置我的个人资料" 或 "删除我的个人资料"

自然地写 - 我会理解！🤖`,

    ko: `📚 Archangel 도움말

자연어를 이해합니다. 필요한 것을 말해주세요:

📝 프로필 업데이트: "[City]로 이사했어요" 또는 "이제 [Profession]입니다"
🌍 언어 변경: "러시아어로 전환" 또는 "Switch to English"
📰 뉴스 소스 추가: "[Source1] 추적" 또는 "[Source2] 추가"
❌ 소스 제거: "[Source3] 추적 중지" 또는 "[Source4] 제거"
🔍 지금 확인: "지금 안전 확인" 또는 "알림 있어?"
📊 알림 표시: "무슨 일이야?" 또는 "내 알림 보여줘"
📚 소스 표시: "어떤 소스를 모니터링해?"
❌ 프로필 삭제: "내 프로필 재설정" 또는 "내 프로필 삭제"

자연스럽게 쓰세요 - 이해할게요! 🤖`,

    hi: `📚 Archangel सहायता

मैं स्वाभाविक भाषा समझता हूं। बस मुझे बताएं कि आपको क्या चाहिए:

📝 प्रोफाइल अपडेट करें: "मैं [City] चला गया" या "अब मैं [Profession] हूं"
🌍 भाषा बदलें: "रूसी में बदलें" या "Switch to English"
📰 समाचार स्रोत जोड़ें: "[Source1] ट्रैक करें" या "[Source2] जोड़ें"
❌ स्रोत हटाएं: "[Source3] ट्रैकिंग बंद करें" या "[Source4] हटाएं"
🔍 अभी जांचें: "अभी सुरक्षा जांचें" या "कोई अलर्ट?"
📊 अलर्ट दिखाएं: "क्या हो रहा है?" या "मेरे अलर्ट दिखाएं"
📚 स्रोत दिखाएं: "आप कौन से स्रोत मॉनिटर करते हैं?"
❌ प्रोफ़ाइल हटाएं: "मेरी प्रोफ़ाइल रीसेट करें" या "मेरी प्रोफ़ाइल हटाएं"

बस स्वाभाविक रूप से लिखें - मैं समझ जाऊंगा! 🤖`,

    ar: `📚 مساعدة Archangel

أفهم اللغة الطبيعية. فقط أخبرني بما تحتاج:

📝 تحديث الملف الشخصي: "انتقلت إلى [City]" أو "أنا الآن [Profession]"
🌍 تغيير اللغة: "التبديل إلى الروسية" أو "Switch to English"
📰 إضافة مصدر أخبار: "تتبع [Source1]" أو "أضف [Source2]"
❌ إزالة المصدر: "توقف عن تتبع [Source3]" أو "احذف [Source4]"
🔍 التحقق الآن: "تحقق من الأمان الآن" أو "أي تنبيهات؟"
📊 عرض التنبيهات: "ماذا يحدث؟" أو "أظهر تنبيهاتي"
📚 عرض المصادر: "ما المصادر التي تراقبها؟"
❌ حذف الملف الشخصي: "إعادة تعيين ملفي الشخصي" أو "حذف ملفي الشخصي"

فقط اكتب بشكل طبيعي - سأفهم! 🤖`,

    bn: `📚 Archangel সাহায্য

আমি স্বাভাবিক ভাষা বুঝি। শুধু আমাকে বলুন আপনার কী প্রয়োজন:

📝 প্রোফাইল আপডেট করুন: "আমি [City] চলে গেছি" বা "আমি এখন [Profession]"
🌍 ভাষা পরিবর্তন করুন: "রাশিয়ান এ পরিবর্তন করুন" বা "Switch to English"
📰 সংবাদ উৎস যোগ করুন: "[Source1] ট্র্যাক করুন" বা "[Source2] যোগ করুন"
❌ উৎস সরান: "[Source3] ট্র্যাকিং বন্ধ করুন" বা "[Source4] মুছুন"
🔍 এখনই চেক করুন: "এখনই নিরাপত্তা চেক করুন" বা "কোন সতর্কতা?"
📊 সতর্কতা দেখান: "কী হচ্ছে?" বা "আমার সতর্কতা দেখান"
📚 উৎস দেখান: "আপনি কোন উৎস মনিটর করেন?"
❌ প্রোফাইল মুছে ফেলুন: "আমার প্রোফাইল পুনরায় সেট করুন" অথবা "আমার প্রোফাইল মুছে ফেলুন"

শুধু স্বাভাবিকভাবে লিখুন - আমি বুঝব! 🤖`,

    pt: `📚 Ajuda do Archangel

Eu entendo linguagem natural. Apenas me diga o que você precisa:

📝 Atualizar perfil: "Mudei para [City]" ou "Agora sou [Profession]"
🌍 Mudar idioma: "Mude para russo" ou "Switch to English"
📰 Adicionar fonte de notícias: "Rastreie [Source1]" ou "Adicione [Source2]"
❌ Remover fonte: "Pare de rastrear [Source3]" ou "Remova [Source4]"
🔍 Verificar agora: "Verifique a segurança agora" ou "Algum alerta?"
📊 Mostrar alertas: "O que está acontecendo?" ou "Mostre meus alertas"
📚 Mostrar fontes: "Quais fontes você monitora?"
❌ Excluir perfil: "Redefinir meu perfil" ou "Excluir meu perfil"

Apenas escreva naturalmente - eu vou entender! 🤖`,

    id: `📚 Bantuan Archangel

Saya memahami bahasa alami. Cukup beri tahu saya apa yang Anda butuhkan:

📝 Perbarui profil: "Saya pindah ke [City]" atau "Sekarang saya [Profession]"
🌍 Ubah bahasa: "Ganti ke Rusia" atau "Switch to English"
📰 Tambah sumber berita: "Lacak [Source1]" atau "Tambah [Source2]"
❌ Hapus sumber: "Berhenti melacak [Source3]" atau "Hapus [Source4]"
🔍 Periksa sekarang: "Periksa keamanan sekarang" atau "Ada peringatan?"
📊 Tampilkan peringatan: "Apa yang terjadi?" atau "Tampilkan peringatan saya"
📚 Tampilkan sumber: "Sumber apa yang Anda pantau?"
❌ Hapus profil: "Reset profil saya" atau "Hapus profil saya"

Tulis saja secara alami - saya akan mengerti! 🤖`,

    sw: `📚 Msaada wa Archangel

Naelewa lugha ya asili. Niambie tu unachohitaji:

📝 Sasisha wasifu: "Nimehamia [City]" au "Sasa niko [Profession]"
🌍 Badilisha lugha: "Badilisha kwenda Kirusi" au "Switch to English"
📰 Ongeza chanzo cha habari: "Fuatilia [Source1]" au "Ongeza [Source2]"
❌ Ondoa chanzo: "Acha kufuatilia [Source3]" au "Ondoa [Source4]"
🔍 Angalia sasa: "Angalia usalama sasa" au "Kuna tahadhari?"
📊 Onyesha tahadhari: "Nini kinachotokea?" au "Onyesha tahadhari zangu"
📚 Onyesha vyanzo: "Unafuatilia vyanzo gani?"
❌ Futa wasifu: "Rejesha wasifu wangu" au "Futa wasifu wangu"

Andika tu kwa kawaida - nitaelewa! 🤖`,

    tr: `📚 Archangel Yardım

Doğal dili anlıyorum. Sadece neye ihtiyacın olduğunu söyle:

📝 Profili güncelle: "[City]'ye taşındım" veya "Artık [Profession]'im"
🌍 Dil değiştir: "Rusça'ya geç" veya "Switch to English"
📰 Haber kaynağı ekle: "[Source1]'i takip et" veya "[Source2]'yi ekle"
❌ Kaynağı kaldır: "[Source3]'ü takip etmeyi bırak" veya "[Source4]'ü sil"
🔍 Şimdi kontrol et: "Güvenliği şimdi kontrol et" veya "Uyarı var mı?"
📊 Uyarıları göster: "Neler oluyor?" veya "Uyarılarımı göster"
📚 Kaynakları göster: "Hangi kaynakları izliyorsun?"
❌ Profili sil: "Profilimi sıfırla" veya "Profilimi sil"

Sadece doğal yaz - anlayacağım! 🤖`,

    th: `📚 ความช่วยเหลือ Archangel

ฉันเข้าใจภาษาธรรมชาติ บอกฉันว่าคุณต้องการอะไร:

📝 อัปเดตโปรไฟล์: "ฉันย้ายไป[City]" หรือ "ตอนนี้ฉันเป็น[Profession]"
🌍 เปลี่ยนภาษา: "เปลี่ยนเป็นรัสเซีย" หรือ "Switch to English"
📰 เพิ่มแหล่งข่าว: "ติดตาม[Source1]" หรือ "เพิ่ม[Source2]"
❌ ลบแหล่ง: "หยุดติดตาม[Source3]" หรือ "ลบ[Source4]"
🔍 ตรวจสอบตอนนี้: "ตรวจสอบความปลอดภัยตอนนี้" หรือ "มีการแจ้งเตือนไหม?"
📊 แสดงการแจ้งเตือน: "เกิดอะไรขึ้น?" หรือ "แสดงการแจ้งเตือนของฉัน"
📚 แสดงแหล่ง: "คุณติดตามแหล่งไหนบ้าง?"
❌ ลบโปรไฟล์: "รีเซ็ตโปรไฟล์ของฉัน" หรือ "ลบโปรไฟล์ของฉัน"

เขียนแบบธรรมชาติ - ฉันจะเข้าใจ! 🤖`
  }
};

/**
 * Get translated message
 * @param {string} key - Translation key
 * @param {string} lang - Language code (en,..., etc.)
 * @param {object} params - Template parameters
 * @returns {string} - Translated message
 */
export function translate(key, lang = 'en', params = {}) {
  var text = translations[key]?.[lang] || translations[key]?.['en'] || key;

  // Replace template variables: {name}, {trust}, etc.
  Object.entries(params).forEach(([paramKey, value]) => {
    text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), value);
  });

  return text;
}

export default translations;

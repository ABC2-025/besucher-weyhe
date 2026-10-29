/* Standard-Formular der Besucheranmeldung.
   Wird verwendet, solange in der Verwaltung („Formular & Texte“) noch nichts gespeichert wurde,
   und als Rückfall, falls die Datenbank nicht erreichbar ist.
   Textformat: Leerzeile = neuer Absatz, Zeile mit „- “ = Aufzählungspunkt, **fett**. */
window.FORMULAR_STANDARD = {
  version: 0,
  stammdaten: {
    firma: 'ABC Kochwerk GmbH',
    standort: 'Zentrale Weyhe',
    adresse: 'Gutenbergstraße 7a, 28844 Weyhe',
    datenschutzKontakt: 'ABC Kochwerk GmbH, Datenschutz, Gutenbergstraße 7a, 28844 Weyhe',
  },
  texte: {
    site:        { de: 'Zentrale Weyhe · Verwaltung & Großküche', en: 'Head office Weyhe · Administration & central kitchen' },
    welcome:     { de: 'Herzlich willkommen!', en: 'Welcome!' },
    welcome_sub: { de: 'Bitte melden Sie sich an, bevor Sie das Gebäude betreten – und wieder ab, wenn Sie gehen.', en: 'Please sign in before entering the building – and sign out when you leave.' },
    start_hint:  { de: 'Die Anmeldung dauert ca. 3 Minuten und enthält eine kurze Hygienebelehrung.', en: 'Signing in takes about 3 minutes and includes a short hygiene briefing.' },
    s2_sub:      { de: 'Kurzbelehrung für Besucher und externe Personen gemäß §§ 42, 43 IfSG und HACCP-Konzept. Bitte vollständig lesen.', en: 'Short briefing for visitors and external persons according to §§ 42, 43 German Infection Protection Act (IfSG) and our HACCP concept. Please read it completely.' },
    ck_bel:      { de: 'Ich habe die Hygienebelehrung gelesen und verstanden und halte mich während meines Aufenthalts an diese Regeln.', en: 'I have read and understood the hygiene briefing and will follow these rules during my visit.' },
    done_text:   { de: 'Bitte melden Sie sich hier wieder ab, wenn Sie das Gebäude verlassen.', en: 'Please sign out here when you leave the building.' },
    out_done_text:{ de: 'Vielen Dank für Ihren Besuch und gute Fahrt.', en: 'Thank you for your visit and have a safe trip.' },
  },
  felder: [
    { key: 'vorname',  typ: 'text',  fest: true, pflicht: true,  aktiv: true, label: { de: 'Vorname', en: 'First name' } },
    { key: 'nachname', typ: 'text',  fest: true, pflicht: true,  aktiv: true, label: { de: 'Nachname', en: 'Last name' } },
    { key: 'firma',    typ: 'text',  pflicht: false, aktiv: true, label: { de: 'Firma', en: 'Company' } },
    { key: 'email',    typ: 'email', pflicht: true,  aktiv: true, label: { de: 'E-Mail-Adresse', en: 'Email address' } },
    { key: 'telefon',  typ: 'tel',   pflicht: false, aktiv: true, label: { de: 'Telefon', en: 'Phone' } },
    { key: 'ansprechpartner', typ: 'person', pflicht: true, aktiv: true, label: { de: 'Ansprechpartner bei uns', en: 'Contact person here' },
      /* Mitarbeiterliste: Name + Abteilung. Pflege in der Verwaltung unter „Formular & Texte“. Freitext bleibt möglich. */
      optionen: [] },
    { key: 'besuchergruppe', typ: 'auswahl', pflicht: true, aktiv: true, label: { de: 'Ich bin hier als …', en: 'I am here as …' },
      optionen: [
        { de: 'Besprechung / Gast', en: 'Meeting / guest' }, { de: 'Außendienst Lieferant', en: 'Supplier sales rep' },
        { de: 'Handwerker / Techniker', en: 'Tradesperson / technician' }, { de: 'Lieferant / Fahrer', en: 'Supplier / driver' },
        { de: 'Bewerber/in', en: 'Job applicant' }, { de: 'Sonstiges', en: 'Other' } ] },
    { key: 'bereich', typ: 'mehrfach', pflicht: true, aktiv: true, label: { de: 'Welche Bereiche betreten Sie?', en: 'Which areas will you enter?' },
      optionen: [
        { de: 'Verwaltung / Büro', en: 'Administration / office' }, { de: 'Küche / Produktion', en: 'Kitchen / production' },
        { de: 'Lager / Wareneingang', en: 'Storage / goods receipt' } ] },
  ],
  belehrung: {
    version: 'BEL-2026-10-v1',
    abschnitte: [
      { titel: { de: 'Warum diese Belehrung?', en: 'Why this briefing?' },
        text: {
          de: 'Sie betreten einen Betrieb, in dem täglich Speisen für Kitas, Schulen und Einrichtungen der Gemeinschaftsverpflegung hergestellt werden. Wir sind an strenge Hygieneregeln gebunden, die für jede Person gelten, die sich in unseren Räumen aufhält – auch in der Verwaltung.\n\nJeder Mensch trägt Keime auf sich. Darunter können Krankheitserreger sein, die über Hände, Husten, Niesen, Kleidung, Werkzeug oder Gegenstände auf Lebensmittel und Arbeitsflächen gelangen und die Gesundheit unserer Gäste gefährden.\n\nGrundlagen: Verordnung (EG) Nr. 852/2004 über Lebensmittelhygiene, §§ 42 und 43 Infektionsschutzgesetz (IfSG) sowie das HACCP-Konzept der ABC Kochwerk GmbH (Arbeitsanweisung 021 „Schriftliche Kurzbelehrung“).',
          en: 'You are entering a company that prepares meals every day for nurseries, schools and other institutions. We are bound by strict hygiene rules that apply to everyone on our premises – including the administration area.\n\nEverybody carries germs. These can include pathogens that are transferred to food and work surfaces via hands, coughing, sneezing, clothing, tools or objects and endanger the health of our guests.\n\nLegal basis: Regulation (EC) No 852/2004 on the hygiene of foodstuffs, §§ 42 and 43 German Infection Protection Act (IfSG) and the HACCP concept of ABC Kochwerk GmbH (work instruction 021 “Written short briefing”).' } },
      { titel: { de: 'Anmeldung und Zutritt', en: 'Registration and access' },
        text: {
          de: '- Melden Sie sich bei Ihrem Ansprechpartner bzw. bei Produktionsleitung, Betriebsleitung oder Qualitätsmanagement an.\n- Küche, Produktion und Lager betreten Sie nur nach Aufforderung, in Begleitung und mit der bereitgestellten Schutzkleidung (Kittel, Haarschutz, ggf. Überschuhe). Ohne Schutzkleidung ist der Zutritt zum Hygienebereich untersagt.\n- Die Küche ist der Kompetenzbereich des Küchenpersonals – bitte folgen Sie dessen Anweisungen.\n- Lieferanten, Fahrer und Paketdienste: Die Annahme erfolgt ausschließlich über den Wareneingang – nicht über die Auslieferung/den Warenausgang oder den Personaleingang. Der Wareneingang darf nicht weiter als bis zum ersten Schnelllauftor betreten werden.\n- Halten Sie die vorgegebenen Personal- und Warenwege ein.',
          en: '- Report to your contact person or to production management, operations management or quality management.\n- Enter kitchen, production and storage areas only when asked, accompanied and wearing the protective clothing provided (coat, hair cover, overshoes if required). Access to hygiene areas without protective clothing is prohibited.\n- The kitchen is the domain of the kitchen staff – please follow their instructions.\n- Suppliers, drivers and parcel services: deliveries are accepted only at goods receipt – not at dispatch/goods issue or the staff entrance. Do not go further into goods receipt than the first high-speed door.\n- Keep to the designated routes for staff and goods.' } },
      { titel: { de: 'Verhalten im Betrieb', en: 'Conduct on the premises' },
        text: {
          de: '- Berühren Sie keine Lebensmittel, Arbeitsflächen, Geräte oder Geschirr, wenn Sie nicht ausdrücklich dazu aufgefordert sind.\n- Waschen und desinfizieren Sie Ihre Hände vor dem Betreten der Küche und nach jedem Toilettenbesuch. Fragen Sie unsere Mitarbeitenden nach dem nächsten Handwaschbecken.\n- In Küche und Produktion ist Rauchen, Essen, Trinken und Kaugummikauen verboten. Rauchen nur in den ausgewiesenen Bereichen.\n- Legen Sie Hand- und Armschmuck sowie Armbanduhren vor dem Betreten der Produktion ab.\n- Husten oder niesen Sie nicht in Richtung von Lebensmitteln – nutzen Sie die Armbeuge.\n- Legen Sie keine privaten Gegenstände (Taschen, Handy, Getränke, Medikamente) in Küche oder Produktion ab. Keine Gegenstände aus Glas oder Holz mitbringen.',
          en: '- Do not touch food, work surfaces, equipment or dishes unless explicitly asked to.\n- Wash and disinfect your hands before entering the kitchen and after every visit to the toilet. Ask our staff for the nearest hand-wash basin.\n- Smoking, eating, drinking and chewing gum are prohibited in kitchen and production areas. Smoking only in designated areas.\n- Remove hand and arm jewellery and wristwatches before entering production.\n- Do not cough or sneeze towards food – use the crook of your arm.\n- Do not put down private items (bags, phone, drinks, medicines) in kitchen or production. Do not bring items made of glass or wood.' } },
      { titel: { de: 'Zusätzlich für Handwerker, Techniker und Aushilfen', en: 'Additionally for tradespeople, technicians and temporary staff' },
        text: {
          de: '- Tragen Sie nur die vereinbarte, saubere Schutz- bzw. Arbeitskleidung.\n- Waschen Sie Ihre Hände vor Arbeitsbeginn, nach jeder Pause (Essen, Rauchen, Toilette) und nach Reinigungs- oder Schmutzarbeiten.\n- Decken Sie Schnittwunden mit einem wasserdichten Pflaster ab. Arbeiten Sie nicht mit entzündeten Wunden.\n- Werkzeug und Material nie auf Lebensmitteln oder Arbeitsflächen für Lebensmittel ablegen. Lebensmittel vor Staub, Spänen und Fremdkörpern schützen.\n- Übergeben Sie den Arbeitsbereich sauber und frei von Fremdkörpern (Schrauben, Späne, Splitter) und melden Sie das Ende der Arbeiten dem Küchenpersonal.',
          en: '- Wear only the agreed, clean protective or work clothing.\n- Wash your hands before starting work, after every break (eating, smoking, toilet) and after cleaning or dirty work.\n- Cover cuts with a waterproof plaster. Do not work with inflamed wounds.\n- Never put tools or material on food or food-contact surfaces. Protect food from dust, shavings and foreign bodies.\n- Hand over the work area clean and free of foreign bodies (screws, shavings, splinters) and inform the kitchen staff when work is finished.' } },
      { titel: { de: 'Gesundheit (§ 42 IfSG)', en: 'Health (§ 42 IfSG)' },
        text: {
          de: 'Kranke oder erkältete Personen und Personen mit Magen-Darm-Beschwerden dürfen Küchen- und Produktionsräume nicht betreten. Dazu gehören insbesondere: Durchfall, Erbrechen, Fieber, Hautausschläge, infizierte Wunden oder eine Lebensmittelinfektion.\n\nBitte melden Sie es Ihrem Ansprechpartner, wenn Sie in den letzten Wochen an einer Magen-Darm-Infektion (z. B. Salmonellen), starkem wässrigem oder blutigem Durchfall, einer Leberentzündung (mit oder ohne Gelbsucht) oder einer schweren Lebensmittelinfektion (z. B. Typhus, Paratyphus, Cholera) erkrankt waren – auch wenn Sie inzwischen beschwerdefrei sind.',
          en: 'Sick persons, persons with a cold and persons with gastrointestinal complaints must not enter kitchen and production rooms. This includes in particular: diarrhoea, vomiting, fever, skin rashes, infected wounds or food poisoning.\n\nPlease inform your contact person if in recent weeks you have had a gastrointestinal infection (e.g. salmonella), severe watery or bloody diarrhoea, hepatitis (with or without jaundice) or a severe food infection (e.g. typhoid, paratyphoid, cholera) – even if you no longer have symptoms.' } },
      { titel: { de: 'Bei Verstößen', en: 'Violations' },
        text: {
          de: 'Wer gegen diese Regeln verstößt, wird des Betriebes verwiesen. Produktionsleitung, Betriebsleitung oder Qualitätsmanagement entscheiden über das weitere Vorgehen.\n\nDas Einhalten der Hygieneregeln ist aktiver Verbraucherschutz. Vielen Dank für Ihr Verständnis!',
          en: 'Anyone violating these rules will be asked to leave the premises. Production management, operations management or quality management decide on further action.\n\nFollowing hygiene rules is active consumer protection. Thank you for your understanding!' } },
    ],
  },
  gesundheit: {
    aktiv: true,
    text: {
      de: 'Personen dürfen Küchen- und Produktionsbereiche **nicht** betreten, wenn sie\n- an Typhus, Paratyphus, Cholera, Shigellenruhr, Salmonellose, einer anderen infektiösen Gastroenteritis (Magen-Darm-Infektion, z. B. Noro- oder Rotaviren) oder an Virushepatitis A oder E erkrankt sind oder ein Verdacht darauf besteht,\n- an infizierten Wunden oder Hautkrankheiten leiden, bei denen Krankheitserreger über Lebensmittel übertragen werden können,\n- Shigellen, Salmonellen, enterohämorrhagische E. coli (EHEC) oder Choleravibrionen ausscheiden.\n\nTypische Anzeichen sind: **Durchfall, Erbrechen, Übelkeit, Fieber, Bauchkrämpfe, Gelbfärbung von Haut oder Augen, eitrige oder nässende Wunden.**\n\nIhre Angaben zu Krankheiten werden **nicht** gespeichert – gespeichert wird nur, ob Sie die Erklärung abgegeben haben.',
      en: 'Persons must **not** enter kitchen and production areas if they\n- suffer from, or are suspected of having, typhoid, paratyphoid, cholera, shigellosis, salmonellosis, another infectious gastroenteritis (e.g. noro- or rotavirus) or viral hepatitis A or E,\n- have infected wounds or skin diseases through which pathogens can be transmitted via food,\n- excrete shigella, salmonella, enterohaemorrhagic E. coli (EHEC) or cholera vibrios.\n\nTypical symptoms: **diarrhoea, vomiting, nausea, fever, abdominal cramps, yellowing of skin or eyes, festering or weeping wounds.**\n\nInformation about illnesses is **not** stored – we only record whether you made the declaration.' },
    warnung: {
      de: 'Kein Problem – Sie können sich trotzdem anmelden. **Bitte betreten Sie keine Küchen-, Produktions- oder Lagerbereiche** und informieren Sie Ihren Ansprechpartner.',
      en: 'No problem – you can still sign in. **Please do not enter any kitchen, production or storage areas** and inform your contact person.' },
  },
  datenschutz: {
    de: '**Verantwortlich:** {firma}, {adresse}.\n\n**Kontakt Datenschutz:** {kontakt}.\n\n**Zweck:** Nachweis der Hygienebelehrung betriebsfremder Personen (VO (EG) Nr. 852/2004, HACCP-Konzept, § 42/43 IfSG), Übersicht über anwesende Personen für Sicherheit und Evakuierung sowie Wahrnehmung des Hausrechts.\n\n**Rechtsgrundlage:** Art. 6 Abs. 1 lit. c DSGVO (rechtliche Pflicht zur Lebensmittelhygiene) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Betriebssicherheit und Nachweisführung).\n\n**Daten:** Ihre Angaben im Anmeldeformular, Uhrzeit von An- und Abmeldung, Unterschrift, Bestätigung der Belehrung und der Gesundheitserklärung (nur ja/nein, keine Angaben zu Krankheiten).\n\n**Speicherdauer:** E-Mail-Adresse und Telefonnummer werden nach 42 Tagen gelöscht, alle übrigen Angaben einschließlich Unterschrift nach 2 Jahren.\n\n**Empfänger:** Nur berechtigte Mitarbeitende (Empfang, Qualitätsmanagement, Betriebs- und Produktionsleitung). Technischer Dienstleister ist Supabase (Server in der EU, Frankfurt am Main) als Auftragsverarbeiter. Eine Weitergabe an Dritte erfolgt nur, wenn Behörden (z. B. Lebensmittelüberwachung, Gesundheitsamt) dies verlangen.\n\n**Ihre Rechte:** Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch (Art. 15–21 DSGVO) sowie Beschwerde bei einer Datenschutz-Aufsichtsbehörde, z. B. der Landesbeauftragten für den Datenschutz Niedersachsen.\n\nOhne die Pflichtangaben ist ein Aufenthalt im Betrieb nicht möglich.',
    en: '**Controller:** {firma}, {adresse}, Germany.\n\n**Data protection contact:** {kontakt}.\n\n**Purpose:** proof of the hygiene briefing of external persons (Regulation (EC) No 852/2004, HACCP concept, § 42/43 IfSG), overview of persons present for safety and evacuation, and exercise of domiciliary rights.\n\n**Legal basis:** Art. 6(1)(c) GDPR (legal obligation regarding food hygiene) and Art. 6(1)(f) GDPR (legitimate interest in operational safety and documentation).\n\n**Data:** the information you enter in the sign-in form, sign-in and sign-out time, signature, confirmation of briefing and health declaration (yes/no only, no details about illnesses).\n\n**Retention:** email address and phone number are deleted after 42 days, all other data including the signature after 2 years.\n\n**Recipients:** authorised staff only (reception, quality management, operations and production management). Technical service provider is Supabase (servers in the EU, Frankfurt) as processor. Data is passed on to third parties only if required by authorities (e.g. food control, public health office).\n\n**Your rights:** access, rectification, erasure, restriction and objection (Art. 15–21 GDPR) and the right to lodge a complaint with a supervisory authority, e.g. the Data Protection Commissioner of Lower Saxony.\n\nA stay on the premises is not possible without the required information.',
  },
};

/* Einfache Textformatierung: Absätze, „- “-Aufzählungen, **fett** */
window.formText = function (txt, vars) {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let t = String(txt || '');
  if (vars) for (const [k, v] of Object.entries(vars)) t = t.split('{' + k + '}').join(v);
  const inl = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  const out = []; let list = null, para = [];
  const flushP = () => { if (para.length) { out.push('<p>' + para.map(inl).join('<br>') + '</p>'); para = []; } };
  const flushL = () => { if (list) { out.push('<ul>' + list.map(x => '<li>' + inl(x) + '</li>').join('') + '</ul>'); list = null; } };
  for (const line of t.split('\n')) {
    if (/^\s*-\s+/.test(line)) { flushP(); (list = list || []).push(line.replace(/^\s*-\s+/, '')); }
    else if (!line.trim()) { flushP(); flushL(); }
    else { flushL(); para.push(line); }
  }
  flushP(); flushL();
  return out.join('');
};
window.formPlain = function (txt, vars) {
  let t = String(txt || '');
  if (vars) for (const [k, v] of Object.entries(vars)) t = t.split('{' + k + '}').join(v);
  return t.replace(/\*\*(.+?)\*\*/g, '$1').replace(/^\s*-\s+/gm, '• ');
};

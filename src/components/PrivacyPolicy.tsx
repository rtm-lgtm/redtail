/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { ArrowLeft, Printer, Share2, Search, Check, ShieldCheck, Mail, MapPin, ExternalLink, ChevronUp } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome?: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.origin + '/privacy-policy-precious-metals');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = useMemo(() => [
    { id: 'section-1', num: '1', title: 'WHAT INFORMATION DO WE COLLECT?' },
    { id: 'section-2', num: '2', title: 'HOW DO WE PROCESS YOUR INFORMATION?' },
    { id: 'section-3', num: '3', title: 'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?' },
    { id: 'section-4', num: '4', title: 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' },
    { id: 'section-5', num: '5', title: 'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?' },
    { id: 'section-6', num: '6', title: 'HOW LONG DO WE KEEP YOUR INFORMATION?' },
    { id: 'section-7', num: '7', title: 'HOW DO WE KEEP YOUR INFORMATION SAFE?' },
    { id: 'section-8', num: '8', title: 'DO WE COLLECT INFORMATION FROM MINORS?' },
    { id: 'section-9', num: '9', title: 'WHAT ARE YOUR PRIVACY RIGHTS?' },
    { id: 'section-10', num: '10', title: 'CONTROLS FOR DO-NOT-TRACK FEATURES' },
    { id: 'section-11', num: '11', title: 'DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?' },
    { id: 'section-12', num: '12', title: 'DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?' },
    { id: 'section-13', num: '13', title: 'DO WE MAKE UPDATES TO THIS NOTICE?' },
    { id: 'section-14', num: '14', title: 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' },
    { id: 'section-15', num: '15', title: 'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?' },
  ], []);

  const usCategories = [
    { cat: 'A. Identifiers', examples: 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name', collected: 'NO' },
    { cat: 'B. Personal information as defined in the California Customer Records statute', examples: 'Name, contact information, education, employment, employment history, and financial information', collected: 'NO' },
    { cat: 'C. Protected classification characteristics under state or federal law', examples: 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data', collected: 'NO' },
    { cat: 'D. Commercial information', examples: 'Transaction information, purchase history, financial details, and payment information', collected: 'NO' },
    { cat: 'E. Biometric information', examples: 'Fingerprints and voiceprints', collected: 'NO' },
    { cat: 'F. Internet or other similar network activity', examples: 'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements', collected: 'NO' },
    { cat: 'G. Geolocation data', examples: 'Device location', collected: 'NO' },
    { cat: 'H. Audio, electronic, sensory, or similar information', examples: 'Images and audio, video or call recordings created in connection with our business activities', collected: 'NO' },
    { cat: 'I. Professional or employment-related information', examples: 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us', collected: 'NO' },
    { cat: 'J. Education Information', examples: 'Student records and directory information', collected: 'NO' },
    { cat: 'K. Inferences drawn from collected personal information', examples: 'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual\'s preferences and characteristics', collected: 'NO' },
    { cat: 'L. Sensitive personal Information', examples: 'Account log-in credentials, precise geolocation, racial or ethnic origin, etc.', collected: 'NO' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-redtail selection:text-white pb-24">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                if (onBackToHome) {
                  onBackToHome();
                } else {
                  window.location.href = '/';
                }
              }}
              className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-neutral-600 hover:text-redtail transition-colors px-3 py-2 rounded-lg hover:bg-neutral-100"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <div className="h-4 w-px bg-neutral-300 hidden sm:block" />
            <div className="hidden sm:flex items-center space-x-2">
              <span className="font-black text-sm tracking-tighter text-redtail">REDTAIL.</span>
              <span className="text-xs text-neutral-400 font-medium">/ Legal</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              title="Copy link to Privacy Policy"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              title="Print Policy"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Badge */}
      <div className="bg-neutral-900 text-white border-b border-neutral-800 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-neutral-800/80 border border-neutral-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-redtail" />
            <span>Official Policy Document</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">PRIVACY POLICY</h1>
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
            <p><span className="font-semibold text-neutral-300">Last updated:</span> October 09, 2026</p>
            <p><span className="font-semibold text-neutral-300">Entity:</span> Redtail Marketing LLC</p>
            <p><span className="font-semibold text-neutral-300">App:</span> Precious Metals Price Tracker (Android)</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pt-10">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 md:p-12 space-y-10">
          
          {/* Introductory Notice */}
          <div className="space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base border-b border-neutral-100 pb-8">
            <p>
              This Privacy Notice for <strong>Redtail Marketing LLC</strong> (<span className="italic">"we," "us," or "our"</span>), describes how and why we might access, collect, store, use, and/or share (<span className="italic">"process"</span>) your personal information when you use our services (<span className="italic">"Services"</span>), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-800">
              <li>
                Download and use our mobile application (<strong>Precious Metals Price Tracker</strong>), or any other application of ours that links to this Privacy Notice
              </li>
              <li>
                Engage with us in other related ways, including any marketing or events
              </li>
            </ul>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-neutral-800 text-sm">
              <strong className="block text-neutral-900 mb-1">Questions or concerns?</strong>
              Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{' '}
              <a href="mailto:info@redtailmarketing.org" className="text-redtail font-bold hover:underline">
                info@redtailmarketing.org
              </a>.
            </div>
          </div>

          {/* Search within document */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search privacy topics (e.g., location, cookies, rights, data)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-redtail focus:bg-white transition-colors"
            />
          </div>

          {/* SUMMARY OF KEY POINTS */}
          <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h2 className="text-lg font-black tracking-tight uppercase text-neutral-900 mb-4 flex items-center justify-between">
              <span>SUMMARY OF KEY POINTS</span>
              <span className="text-[10px] uppercase font-bold text-redtail bg-red-50 border border-red-200 px-2 py-0.5 rounded">Quick Overview</span>
            </h2>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by reviewing the corresponding sections below.
            </p>
            <div className="space-y-3 text-xs text-neutral-700 leading-relaxed">
              <p>
                <strong className="text-neutral-900">What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
              </p>
              <p>
                <strong className="text-neutral-900">Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions. We do <strong>not</strong> process sensitive personal information.
              </p>
              <p>
                <strong className="text-neutral-900">Do we collect any information from third parties?</strong> We do <strong>not</strong> collect any information from third parties.
              </p>
              <p>
                <strong className="text-neutral-900">How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.
              </p>
              <p>
                <strong className="text-neutral-900">In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties described in this notice.
              </p>
              <p>
                <strong className="text-neutral-900">How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information.
              </p>
              <p>
                <strong className="text-neutral-900">What are your rights?</strong> Depending on where you are located geographically, applicable privacy laws afford you specific rights regarding your personal information.
              </p>
              <p>
                <strong className="text-neutral-900">How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data request to{' '}
                <a href="mailto:info@redtailmarketing.org" className="text-redtail font-bold hover:underline">
                  info@redtailmarketing.org
                </a>.
              </p>
            </div>
          </section>

          {/* TABLE OF CONTENTS */}
          <section className="border-y border-neutral-100 py-8">
            <h2 className="text-base font-black tracking-wider uppercase text-neutral-900 mb-6">
              TABLE OF CONTENTS
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="text-left py-2 px-3 rounded-lg hover:bg-neutral-100 hover:text-redtail transition-colors flex items-start space-x-2.5 text-neutral-700"
                >
                  <span className="font-mono font-bold text-redtail text-[11px] shrink-0 mt-0.5">{sec.num}.</span>
                  <span className="font-medium leading-snug">{sec.title}</span>
                </button>
              ))}
            </div>
          </section>

          {/* SECTION 1 */}
          <section id="section-1" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              1. WHAT INFORMATION DO WE COLLECT?
            </h3>
            
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: We collect personal information that you provide to us voluntarily.
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-800 pt-2">Personal information you disclose to us</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>Sensitive Information.</strong> We do not process sensitive information.
            </p>

            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-800 pt-2">Application Data</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              If you use our application (Precious Metals Price Tracker), we may also collect the following information if you choose to provide us with access or permission:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-600">
              <li>
                <strong>Mobile Device Data:</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information, system configuration information, device and application identification numbers, browser type and version, hardware model, Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, and information about the features of our application(s) you accessed.
              </li>
              <li>
                <strong>Push Notifications:</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
              </li>
            </ul>
            <p className="text-xs text-neutral-500 italic">
              This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
            </p>

            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-800 pt-2">Information automatically collected</h4>
            <div className="bg-neutral-100/70 border-l-4 border-neutral-400 p-3 rounded-r-lg text-xs text-neutral-800">
              In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-600">
              <li>
                <strong>Log and Usage Data:</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services, recorded in log files (e.g., date/time stamps, viewed screens, crash dumps).
              </li>
              <li>
                <strong>Device Data:</strong> Details regarding your phone, tablet, or device accessing the service.
              </li>
              <li>
                <strong>Location Data:</strong> Imprecise or precise location data based on IP address or device settings. You can opt out by disabling location access in your device settings.
              </li>
            </ul>

            <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              <h5 className="text-xs font-black uppercase tracking-wider text-neutral-900 mb-1">Google API</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our use of information received from Google APIs will adhere to the{' '}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-redtail font-semibold inline-flex items-center space-x-1 hover:underline"
                >
                  <span>Google API Services User Data Policy</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                </a>
                , including the Limited Use requirements.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-600">
              <li>To deliver and facilitate delivery of services to the user.</li>
              <li>To respond to user inquiries/offer support.</li>
              <li>To protect an individual's vital interest when necessary to prevent harm.</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section id="section-3" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason under applicable law.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              If you are located in the EU, UK, or Canada, applicable data protection frameworks require us to identify specific legal bases: Consent, Performance of a Contract, Legal Obligations, and Vital Interests. You may withdraw your consent at any time by contacting us.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="section-4" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: We may share information in specific situations described in this section with third parties.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We may need to share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-600">
              <li>
                <strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </li>
              <li>
                <strong>Affiliates:</strong> With our affiliates, who will be required to honor this Privacy Notice.
              </li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: We may use cookies and other tracking technologies to collect and store your information.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services.
            </p>
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 space-y-2">
              <strong className="block text-neutral-900">Google Analytics</strong>
              <p>
                We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-redtail underline">
                  tools.google.com/dlpage/gaoptout
                </a>.
              </p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or securely store and isolate it from any further processing until deletion is possible.
            </p>
          </section>

          {/* SECTION 7 */}
          <section id="section-7" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: We aim to protect your personal information through a system of organizational and technical security measures.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure. Transmission of personal information to and from our Services is at your own risk.
            </p>
          </section>

          {/* SECTION 8 */}
          <section id="section-8" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              8. DO WE COLLECT INFORMATION FROM MINORS?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: We do not knowingly collect data from or market to children under 18 years of age.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We do not knowingly solicit data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 has been collected, we will deactivate the account and promptly delete such data.
            </p>
          </section>

          {/* SECTION 9 */}
          <section id="section-9" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              9. WHAT ARE YOUR PRIVACY RIGHTS?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: Depending on your location (EEA, UK, Switzerland, Canada, US states), you have rights regarding access, deletion, correction, and portability.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              In some regions, you have rights to: (i) request access and obtain a copy of your personal information, (ii) request rectification or erasure, (iii) restrict the processing, (iv) data portability, and (v) not be subject to automated decision-making.
            </p>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-700 space-y-2">
              <strong className="block text-neutral-900">Supervisory Authorities & Inquiries</strong>
              <p>Email: <a href="mailto:info@redtailmarketing.org" className="text-redtail font-bold">info@redtailmarketing.org</a></p>
              <p>UK Information Commissioner's Office (ICO): <a href="https://ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline">ico.org.uk/make-a-complaint</a> | Helpline: 0303 123 1113</p>
            </div>
          </section>

          {/* SECTION 10 */}
          <section id="section-10" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              10. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
            </p>
          </section>

          {/* SECTION 11 */}
          <section id="section-11" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have specific state privacy rights.
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-800 pt-3">
              Categories of Personal Information We Collect
            </h4>
            <p className="text-xs text-neutral-500">
              The table below shows the categories of personal information we have collected in the preceding twelve (12) months:
            </p>

            <div className="overflow-x-auto rounded-xl border border-neutral-200 mt-2">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="p-3 border-b border-neutral-800 w-1/4">Category</th>
                    <th className="p-3 border-b border-neutral-800 w-2/3">Examples</th>
                    <th className="p-3 border-b border-neutral-800 text-center w-1/12">Collected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {usCategories.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/60'}>
                      <td className="p-3 font-semibold text-neutral-900 align-top">{row.cat}</td>
                      <td className="p-3 text-neutral-600 align-top leading-relaxed">{row.examples}</td>
                      <td className="p-3 font-bold text-center align-top">
                        <span className="inline-block bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded text-[10px] border border-neutral-300">
                          {row.collected}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 pt-3 text-xs text-neutral-600 leading-relaxed">
              <p>
                <strong>Sale or Sharing of Personal Information:</strong> We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information belonging to website visitors, app users, or other consumers.
              </p>
              <p>
                <strong>California "Shine The Light" Law:</strong> California Civil Code Section 1798.83 permits California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes.
              </p>
            </div>
          </section>

          {/* SECTION 12 */}
          <section id="section-12" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>Australia and New Zealand:</strong> We collect and process personal information under obligations set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>Republic of South Africa:</strong> You have rights under the Protection of Personal Information Act (POPIA). You may contact the Information Regulator (South Africa) at POPIAComplaints@inforegulator.org.za.
            </p>
          </section>

          {/* SECTION 13 */}
          <section id="section-13" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              13. DO WE MAKE UPDATES TO THIS NOTICE?
            </h3>
            <div className="bg-red-50/50 border-l-4 border-redtail p-3 rounded-r-lg text-xs font-semibold text-neutral-800">
              In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
            </p>
          </section>

          {/* SECTION 14 */}
          <section id="section-14" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              If you have questions or comments about this notice, you may email us or contact us by post:
            </p>
            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 text-xs space-y-2 text-neutral-800">
              <p className="font-bold text-sm text-neutral-900">Redtail Marketing LLC</p>
              <p className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-redtail shrink-0" />
                <span>220 Calle Manuel Domenech #519, San Juan, Puerto Rico 00918</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-redtail shrink-0" />
                <a href="mailto:info@redtailmarketing.org" className="text-redtail font-bold hover:underline">
                  info@redtailmarketing.org
                </a>
              </p>
            </div>
          </section>

          {/* SECTION 15 */}
          <section id="section-15" className="space-y-4 pt-4 scroll-mt-24 border-t border-neutral-100">
            <h3 className="text-xl font-black tracking-tight text-neutral-900">
              15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              To request to review, update, or delete your personal information, please submit a request by contacting us at{' '}
              <a href="mailto:info@redtailmarketing.org" className="text-redtail font-bold hover:underline">
                info@redtailmarketing.org
              </a>.
            </p>
            <div className="pt-6 border-t border-neutral-100 text-[11px] text-neutral-400 text-center">
              This Privacy Policy was generated in accordance with Termly's Privacy Policy Generator standards for Redtail Marketing LLC and the Precious Metals Price Tracker application.
            </div>
          </section>

        </div>

        {/* Back to top button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-redtail transition-colors px-4 py-2 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 shadow-sm"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </main>
    </div>
  );
}

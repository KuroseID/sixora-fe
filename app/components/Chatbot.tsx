"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Selamat datang di Sixora AI Assistant. Saya siap membantu memberikan informasi seputar SMK Negeri 6 Jember, jurusan unggulan, dan info PPDB. Ada yang ingin kamu tanyakan?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when messages list changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now(),
      text: textToSend,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI reply delay
    setTimeout(() => {
      let replyText = "";
      const query = textToSend.toLowerCase();

      if (query.includes("jurusan") || query.includes("program keahlian")) {
        replyText = "SMK Negeri 6 Jember memiliki 6 jurusan / kompetensi keahlian unggulan:\n\n1. 💻 Rekayasa Perangkat Lunak (RPL)\n2. 🎨 Desain Komunikasi Visual (DKV)\n3. 📊 Akuntansi (AK)\n4. 💼 Manajemen Perkantoran (MP)\n5. 📈 Bisnis Digital (BD)\n6. 🎨 Kriya Kreatif Batik & Tekstil (KKBT)\n\nMasing-masing dilengkapi dengan fasilitas kelas industri modern. Ada jurusan tertentu yang ingin kamu pelajari lebih lanjut?";
      } else if (query.includes("ppdb") || query.includes("daftar") || query.includes("pendaftaran")) {
        replyText = "Penerimaan Peserta Didik Baru (PPDB) SMKN 6 Jember tahun 2026/2027 sedang berlangsung. Kamu dapat mengecek info lengkap mengenai alur pendaftaran, kuota daya tampung, syarat berkas, dan jadwal di menu PPDB pada halaman utama website ini.";
      } else if (query.includes("virtual") || query.includes("tour") || query.includes("keliling")) {
        replyText = "Kamu bisa berkeliling lingkungan sekolah secara visual melalui fitur Virtual Tour 360° yang ada di halaman utama website kami. Fitur ini memungkinkan kamu melihat ruang praktek, kelas, perpustakaan, dan fasilitas sekolah lainnya secara interaktif.";
      } else if (query.includes("alamat") || query.includes("lokasi") || query.includes("jember")) {
        replyText = "SMK Negeri 6 Jember berlokasi di Jl. pb. Sudirman No. 123, Jember, Jawa Timur. Silakan kunjungi sekolah kami secara langsung pada hari kerja jika ada dokumen atau informasi administrasi yang perlu diurus.";
      } else {
        replyText = "Terima kasih atas pertanyaannya! Saya adalah asisten AI Sixora. Untuk informasi lebih mendalam mengenai detail kegiatan belajar mengajar atau kerja sama industri, kamu bisa menanyakan ke bagian informasi sekolah atau kunjungi langsung SMKN 6 Jember.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: replyText,
          sender: "ai",
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend(input);
    }
  };

  const suggestions = [
    "Daftar Jurusan",
    "PPDB 2026",
    "Fasilitas Sekolah",
  ];

  return (
    <>
      {/* Floating AI Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-white border-5 border-primary rounded-full p-2.5 hover:scale-110 active:scale-95 transition-all duration-300 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center group shadow-lg cursor-pointer"
      >
        <Image
          src="/logo-chatbot.webp"
          alt="AI Chatbot Logo"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border-white border-5 shadow-lg">
            Tanya AI Sixora
          </span>
        )}
      </button>

      {/* Chat Box Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] h-[520px] max-h-[80vh] bg-white dark:bg-zinc-950 border-[3px] border-primary rounded-xl shadow-2xl flex flex-col overflow-visible transition-all duration-300 ease-out origin-bottom-right ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-10 pointer-events-none"
          }`}
      >
        {/* Overlapping circular avatar */}
        <div className="absolute -top-10 left-6 w-20 h-20 bg-white rounded-full border-[3px] border-primary z-20 flex items-center justify-center overflow-hidden">
          <Image
            src="/logo-chatbot.webp"
            alt="AI Assistant Avatar"
            width={64}
            height={64}
            className="object-contain p-1"
          />
        </div>

        {/* Header */}
        <div className="bg-primary px-5 py-4 pl-28 flex items-center justify-between text-white rounded-t-xl relative z-10 min-h-xl">
          <div>
            <h3 className="font-bold text-sm sm:text-base leading-none">Sixora AI Assistant</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white absolute right-4 top-1/2 -translate-y-1/2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-zinc-900/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${msg.sender === "user"
                  ? "bg-[#02033A] text-white rounded-tr-none"
                  : "bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-100 border border-slate-100 dark:border-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.03)] rounded-tl-none"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.03)] rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        {messages.length === 1 && !isTyping && (
          <div className="px-4 py-2 bg-slate-50/30 dark:bg-zinc-900/30 flex flex-wrap gap-2 border-t border-slate-100/50 dark:border-zinc-900/50">
            {suggestions.map((text, i) => (
              <button
                key={i}
                onClick={() => handleSend(text)}
                className="text-[11px] sm:text-xs font-semibold text-primary hover:text-primary-hover bg-primary/10 hover:bg-primary/15 border border-primary/20 hover:border-primary/30 px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-3 h-3" />
                {text}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-3 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-900 flex items-center gap-2 rounded-b-[28px]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ketik pertanyaanmu di sini..."
            className="flex-1 bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 text-slate-800 dark:text-zinc-100 px-4 py-2.5 rounded-2xl focus:outline-none focus:border-primary/50 text-xs sm:text-sm transition-all duration-200"
          />
          <button
            onClick={() => handleSend(input)}
            className="bg-primary hover:bg-primary-hover text-white p-2.5 rounded-2xl transition-all duration-200 active:scale-95 flex items-center justify-center shrink-0 cursor-pointer shadow-md shadow-primary/20"
          >
            <Send className="w-4 h-4 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </>
  );
}

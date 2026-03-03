"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { Eye, EyeOff, User, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"] });

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={`min-h-screen flex flex-col relative overflow-hidden text-[#0F172A] ${manrope.className}`}>
            <style jsx global>{`
        .glass-panel {
          background: rgba(27, 94, 32, 0.85); /* Greenish background */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4); /* Glass highlights */
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
        }

        .dark .glass-panel {
          background: rgba(20, 67, 23, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .bg-animated-light {
          background: linear-gradient(-45deg, #f8fafc, #f1f5f9, #e2e8f0, #ffffff);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }

        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

            {/* Background with animation */}
            <div className="absolute inset-0 bg-animated-light -z-20"></div>

            {/* Existing HTML elements converted to JSX */}
            <div
                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 pointer-events-none mix-blend-multiply -z-10"
            ></div>
            <div
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1B5E20]/10 blur-[100px] pointer-events-none animate-pulse -z-10"
            ></div>
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBC02D]/10 blur-[100px] pointer-events-none animate-pulse -z-10"
                style={{ animationDelay: "2s" }}
            ></div>

            {/* Return Home Link */}
            <div className="absolute top-4 left-4 z-20">
                <Link href="/" className="text-[#1B5E20] font-bold text-sm hover:underline flex items-center gap-1">
                    &larr; Kembali ke Beranda
                </Link>
            </div>

            <div className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="w-full max-w-md">
                    <div className="flex flex-col items-center justify-center mb-8">
                        <div className="size-24 rounded-full bg-[#1B5E20]/20 backdrop-blur-sm border border-[#1B5E20]/30 flex items-center justify-center shadow-xl mb-4 overflow-hidden p-3 relative">
                            <Image
                                alt="Logo PPTQ Al-Imam Ashim Makassar"
                                className="w-full h-full object-contain"
                                src="https://lh3.googleusercontent.com/d/1SuqPGEJjOicWXH2n9pJ-tt8tj_yCs83x"
                                fill
                                unoptimized
                            />
                        </div>
                        <p className="text-[#1B5E20]/70 text-center text-sm font-medium tracking-wide">
                            Pondok Pesantren Tahfizhul Qur&apos;an
                        </p>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center text-[#1B5E20] drop-shadow-sm mb-2">
                            Al-Imam Ashim Makassar
                        </h1>
                    </div>

                    <div className="glass-panel rounded-xl p-8 sm:p-10 w-full">
                        <h2 className="text-2xl font-bold text-center text-white mb-1">
                            Assalamu&apos;alaikum
                        </h2>
                        <p className="text-center text-white/70 text-sm mb-8">
                            Silakan masuk ke sistem manajemen.
                        </p>

                        <form className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white ml-1" htmlFor="username">
                                    Username
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/60 group-focus-within:text-white transition-colors">
                                        <User size={20} />
                                    </div>
                                    <input
                                        className="block w-full rounded-lg border-0 bg-white/10 py-3.5 pl-11 pr-4 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-white placeholder:text-white/40 sm:text-sm sm:leading-6 transition-all duration-200 outline-none"
                                        id="username"
                                        placeholder="Masukkan username"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white ml-1" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/60 group-focus-within:text-white transition-colors">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        className="block w-full rounded-lg border-0 bg-white/10 py-3.5 pl-11 pr-12 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-white placeholder:text-white/40 sm:text-sm sm:leading-6 transition-all duration-200 outline-none"
                                        id="password"
                                        placeholder="Masukkan password"
                                        type={showPassword ? "text" : "password"}
                                    />
                                    <div
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-white/60 hover:text-white transition-colors"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        className="h-4 w-4 rounded border-white/30 bg-white/10 text-primary focus:ring-white cursor-pointer"
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                    />
                                    <label className="ml-2 block text-sm text-white/80 cursor-pointer select-none" htmlFor="remember-me">
                                        Ingat saya
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a className="font-bold text-[#FBC02D] hover:text-yellow-400 transition-colors" href="#">
                                        Lupa password?
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2 flex flex-col gap-3">
                                <button
                                    className="flex w-full justify-center items-center rounded-full bg-white px-3 py-3.5 text-sm font-bold leading-6 text-[#1B5E20] shadow-md shadow-black/10 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-[1.02]"
                                    type="button"
                                >
                                    Masuk
                                </button>
                                <div className="relative flex items-center py-2">
                                    <div className="flex-grow border-t border-white/20"></div>
                                    <span className="flex-shrink-0 mx-4 text-white/60 text-xs uppercase tracking-wider font-semibold">
                                        Atau
                                    </span>
                                    <div className="flex-grow border-t border-white/20"></div>
                                </div>
                                <button
                                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#FBC02D] bg-transparent px-3 py-3 text-sm font-bold leading-6 text-[#FBC02D] hover:bg-[#FBC02D] hover:text-[#1B5E20] transition-all duration-200 group"
                                    type="button"
                                >
                                    <span>Daftar Akun Baru</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="mt-8 text-center text-xs text-slate-500 font-medium leading-relaxed">
                        Hak Cipta &copy; 2026 PPTQ Al-Imam Ashim Makassar. <br /> Seluruh hak cipta dilindungi undang-undang.
                    </p>
                </div>
            </div>
        </div>
    );
}

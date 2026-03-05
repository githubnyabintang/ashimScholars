# Al-Imam Ashim Scholars

A modern, full-featured web application for **PPTQ. Tahfizhul Qur'an Al-Imam Ashim Makassar** — a premier Islamic boarding school (pesantren) dedicated to Qur'anic memorization, academic rigor, and spiritual growth.

Built with **Next.js 15**, **ShadCN UI**, **Tailwind CSS**, and **Firebase**, the app serves as both a public-facing institutional website and an internal management dashboard.

---

## 🌐 Public Website

The landing page showcases the institution to prospective students, parents, and the general public. It features a mobile-first, app-like design with the following sections:

- **Hero** — A visually striking introduction to the institution.
- **Stats** — Key statistics about students, programs, and achievements.
- **Video Profile** — An embedded institutional profile video.
- **Programs** — Overview of available academic and tahfidz programs.
- **Gallery** — Photo gallery highlighting campus life and activities.
- **News** — Latest announcements and updates from the institution.
- **Organizational Structure** — Leadership and staff hierarchy.
- **Contact** — Contact information and inquiry form.

---

## 📊 Admin Dashboard

A comprehensive dashboard for internal management, accessible to administrators. It includes data visualization and management tools for:

| Module       | Description                                               |
| ------------ | --------------------------------------------------------- |
| **Dashboard**  | Overview with charts for students, staff, and attendance  |
| **Santri**     | Student (santri) data management                          |
| **Pegawai**    | Staff and employee records                                |
| **Akademik**   | Academic information and grading                          |
| **Keuangan**   | Financial management and reporting                        |
| **Lembaga**    | Institutional data and settings                           |
| **Program**    | Program and curriculum management                         |
| **Market**     | Marketplace or procurement module                         |
| **SPSB**       | New student enrollment (Seleksi Penerimaan Santri Baru)   |

The dashboard features interactive charts powered by **Highcharts**, including breakdowns of students by campus, program distribution, staff allocation, and attendance tracking.

---

## 🛠️ Tech Stack

| Technology                  | Purpose                                    |
| --------------------------- | ------------------------------------------ |
| **Next.js 15** (Turbopack)  | React framework with App Router            |
| **TypeScript**              | Type-safe development                      |
| **Tailwind CSS**            | Utility-first styling                      |
| **ShadCN UI / Radix UI**    | Accessible, customizable UI components     |
| **Highcharts**              | Interactive data visualization             |
| **Recharts**                | Additional charting library                |
| **Firebase**                | Backend services and authentication        |
| **Genkit AI**               | AI-powered student inquiry assistant       |
| **Lucide React**            | Icon library                               |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/githubnyabintang/ashimScholars.git
cd ashimScholars

# Install dependencies
npm install
```

### Development

```bash
# Start the development server (runs on port 9002)
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Public landing page
│   ├── layout.tsx            # Root layout with mobile navigation
│   ├── login/                # Authentication page
│   ├── dashboard/
│   │   ├── layout.tsx        # Dashboard sidebar and header
│   │   ├── page.tsx          # Dashboard home with charts
│   │   ├── santri/           # Student management
│   │   ├── pegawai/          # Staff management
│   │   ├── akademik/         # Academic module
│   │   ├── keuangan/         # Financial module
│   │   ├── lembaga/          # Institutional module
│   │   ├── program/          # Program management
│   │   ├── market/           # Marketplace module
│   │   └── spsb/             # Enrollment module
│   └── lib/                  # Utility functions
├── components/
│   ├── dashboard/            # Dashboard-specific components
│   ├── layout/               # Navbar, Footer, MobileNav
│   ├── sections/             # Landing page sections
│   └── ui/                   # ShadCN UI components
└── ai/                       # Genkit AI integration
```

---

## ✨ Key Features

- **Mobile-First Design** — Floating bottom navigation for a native app-like experience on mobile devices.
- **Responsive Layout** — Fully responsive across all screen sizes with collapsible sidebar on desktop.
- **Institutional Branding** — Color palette matched to the Al-Imam Ashim identity (Deep Green, Lime, Yellow).
- **Interactive Charts** — Real-time data visualization for student demographics, staff distribution, and attendance.
- **AI Inquiry Assistant** — Integrated Genkit AI flow to help prospective students draft effective inquiries.
- **High Readability** — Clean, professional design with crisp white content cards and optimized typography.

---

## 📄 License

This project is privately maintained for PPTQ. Al-Imam Ashim Makassar.

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Database, PencilRuler, RefreshCcw } from "lucide-react"
import { FormEvent } from 'react'
import EmailForm from "@/components/EmailForm"

export default function Home() {

  return (
    <div className="min-h-screen bg-white"> {/* Changed this line */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Deep Mode Init</div>
          {/* <Button variant="ghost" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button> */}
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Tired of work sessions going haywire?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
              This simple yet effective Chrome extension helps you focus and be productive.
It will guide you in setting a consistent environment that works for you, not against you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <EmailForm />
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/deepmode.png"
                width={456}
                height={441}
                alt="Deep Mode Init Chrome Extension"
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Use Deep Mode Init?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<RefreshCcw className="h-10 w-10 text-blue-500" />}
              title="Consistent Environment"
              description="Help you kickstart your work session that works for you. Everyday."
            />
            <FeatureCard
              icon={<PencilRuler className="h-10 w-10 text-green-500" />}
              title="Customizable"
              description="Edit your checklist to fit your needs. Anytime."
            />
            <FeatureCard
              icon={<Database className="h-10 w-10 text-yellow-500" />}
              title="Saved automatically"
              description="Your checklist is saved automatically within your browsers."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How Deep Mode Init Works
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-6">
              <li className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <p className="text-lg text-gray-700">Install the Deep Mode Init Chrome extension</p>
              </li>
              <li className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <p className="text-lg text-gray-700">Edit the checklist to match your needs </p>
              </li>
              <li className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <p className="text-lg text-gray-700">Go through the checklist when starting a new work session</p>
              </li>
              <li className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <p className="text-lg text-gray-700">Enjoy a productive and satisfying work session</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Testimonial Section */}
        {/* <section className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Users Say
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <p className="text-lg text-gray-600 mb-4">
                "FocusFlow has completely transformed my work habits. I'm more productive than ever, and I love how it keeps my workspace consistent across all my devices!"
              </p>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <p className="text-gray-800 font-semibold mt-2">Sarah L., Product Manager</p>
            </CardContent>
          </Card>
        </section> */}

        {/* Final CTA Section */}
        <section className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready for a productivity boost?
          </h2>

          <div className="flex justify-center">
            <EmailForm />
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <a href="https://x.com/vberthou" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {icon}
          <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
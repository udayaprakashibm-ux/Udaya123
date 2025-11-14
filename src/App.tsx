import { Leaf, Mail, Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>

      <div className="absolute top-10 right-20 opacity-10">
        <Leaf className="w-64 h-64 text-green-600 transform rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Leaf className="w-48 h-48 text-emerald-600 transform -rotate-45" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <header className="text-center mb-20 pt-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mb-6 shadow-lg">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-light text-gray-800 mb-4 tracking-tight">
            Welcome
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Finding harmony between technology and nature, one line of code at a time
          </p>
        </header>

        <main className="space-y-16">
          <section className="backdrop-blur-sm bg-white/60 rounded-3xl p-12 shadow-xl border border-white/40">
            <h2 className="text-3xl font-light text-gray-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              About
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I'm a creator who believes in building with intention and purpose. My work bridges the digital and natural worlds,
              seeking balance in every project.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a focus on clean design, thoughtful user experiences, and sustainable practices,
              I craft solutions that feel both modern and timeless.
            </p>
          </section>

          <section className="backdrop-blur-sm bg-white/60 rounded-3xl p-12 shadow-xl border border-white/40">
            <h2 className="text-3xl font-light text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: 'Design', skills: ['UI/UX Design', 'Visual Design', 'Interaction Design'] },
                { category: 'Development', skills: ['React & TypeScript', 'Modern CSS', 'Web Performance'] },
                { category: 'Philosophy', skills: ['Sustainable Tech', 'Minimalism', 'User-Centered Design'] },
                { category: 'Tools', skills: ['Figma', 'Git', 'Modern Frameworks'] }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600 group-hover:rotate-12 transition-transform" />
                    {item.category}
                  </h3>
                  <ul className="space-y-2">
                    {item.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="text-gray-600 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-green-400 before:rounded-full">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="backdrop-blur-sm bg-white/60 rounded-3xl p-12 shadow-xl border border-white/40">
            <h2 className="text-3xl font-light text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Connect
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let's collaborate on something beautiful and meaningful. I'm always open to new conversations and opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
                { icon: Github, label: 'GitHub', href: 'https://github.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center mt-20 pb-8">
          <p className="text-gray-500 font-light">
            Designed with care and intention · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="min-h-screen bg-cosmic-void text-stardust">
      {/* Header */}
      <header className="p-8 bg-gradient-to-r from-cosmic-void to-nebula-dark border-b border-stellar-blue/30">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-aurora-gradient">
          Zahid Sadman
        </h1>
        <p className="text-moonbeam mt-2">Portfolio & Space Explorer</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-16">
        {/* Color Palette Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-aurora mb-8">Space-Themed Color Palette</h2>
          
          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-lg text-moonbeam mb-4">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-cosmic-void p-4 rounded-lg border border-stellar-blue/30">
                <div className="w-full h-16 bg-cosmic-void rounded mb-2"></div>
                <p className="text-sm text-cosmic-dust">Cosmic Void</p>
                <code className="text-xs text-satellite">#0B0E1A</code>
              </div>
              <div className="bg-nebula-dark p-4 rounded-lg border border-stellar-blue/30">
                <div className="w-full h-16 bg-nebula-dark rounded mb-2"></div>
                <p className="text-sm text-cosmic-dust">Nebula Dark</p>
                <code className="text-xs text-satellite">#1A1F3A</code>
              </div>
              <div className="bg-stellar-blue p-4 rounded-lg border border-stellar-blue/30">
                <div className="w-full h-16 bg-stellar-blue rounded mb-2"></div>
                <p className="text-sm text-cosmic-dust">Stellar Blue</p>
                <code className="text-xs text-satellite">#2D4A7A</code>
              </div>
              <div className="bg-cosmic-blue p-4 rounded-lg border border-stellar-blue/30">
                <div className="w-full h-16 bg-cosmic-blue rounded mb-2"></div>
                <p className="text-sm text-cosmic-dust">Cosmic Blue</p>
                <code className="text-xs text-satellite">#4A7BA7</code>
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-8">
            <h3 className="text-lg text-moonbeam mb-4">Accent Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-nebula-dark p-4 rounded-lg border border-stellar-blue/30">
                <div className="w-full h-16 bg-stardust rounded mb-2"></div>
                <p className="text-sm text-cosmic-dust">Stardust</p>
                <code className="text-xs text-satellite">#E8F4FD</code>
              </div>
              <div className="bg-nebula-dark p-4 rounded-lg border border-stellar-blue/30">
                <div className="w-full h-16 bg-moonbeam rounded mb-2"></div>
                <p className="text-sm text-cosmic-dust">Moonbeam</p>
                <code className="text-xs text-satellite">#B8D4F0</code>
              </div>
              <div className="bg-nebula-dark p-4 rounded-lg border border-stellar-blue/30">
                <div className="w-full h-16 bg-aurora rounded mb-2"></div>
                <p className="text-sm text-cosmic-dust">Aurora</p>
                <code className="text-xs text-satellite">#7DD3FC</code>
              </div>
              <div className="bg-nebula-dark p-4 rounded-lg border border-stellar-blue/30">
                <div className="w-full h-16 bg-plasma rounded mb-2"></div>
                <p className="text-sm text-cosmic-dust">Plasma</p>
                <code className="text-xs text-satellite">#A78BFA</code>
              </div>
            </div>
          </div>

          {/* Gradient Examples */}
          <div>
            <h3 className="text-lg text-moonbeam mb-4">Gradient Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-24 bg-cosmic-gradient rounded-lg flex items-center justify-center">
                <span className="text-stardust font-medium">Cosmic Gradient</span>
              </div>
              <div className="h-24 bg-aurora-gradient rounded-lg flex items-center justify-center">
                <span className="text-cosmic-void font-medium">Aurora Gradient</span>
              </div>
              <div className="h-24 bg-stardust-gradient rounded-lg flex items-center justify-center">
                <span className="text-cosmic-void font-medium">Stardust Gradient</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Elements Demo */}
        <section>
          <h2 className="text-2xl font-bold text-aurora mb-8">Interactive Elements</h2>
          <div className="space-y-4">
            <button className="px-6 py-3 bg-stellar-blue hover:bg-cosmic-blue transition-colors rounded-lg border border-aurora/30 hover:border-aurora">
              Primary Button
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-aurora text-aurora hover:bg-aurora hover:text-cosmic-void transition-all rounded-lg ml-4">
              Secondary Button
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

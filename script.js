export default function Widget() {
    return (
        <div className="bg-background text-foreground p-8">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">Robotik - Instant Analytics 📊 & Process Automation 🤖</h1>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">Get Started</button>
            </header>
            <p className="text-lg mb-6">We empower entrepreneurs and industry leaders by automating their analytical needs and workflows so they can focus on business strategies.</p>
            
            <section className="my-12">
                <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold">Instant Analytics</h3>
                        <p className="text-muted-foreground">Get real-time insights on how your business is performing.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold">Process Automation (BETA)</h3>
                        <p className="text-muted-foreground">Enhance your business workflows with automation.</p>
                    </div>
                </div>
            </section>
            <section className="my-12">
                <h2 className="text-2xl font-semibold mb-4">Empowering Indonesia’s entrepreneurs and industry leaders</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <img src="https://raw.githubusercontent.com/robotikapp/home/main/robotik-asset/Copy%20of%20Logo%20Toko.png" alt="Katalog Sepatu Nasional" className="w-32 h-32 object-contain" />
                    <img src="https://raw.githubusercontent.com/robotikapp/home/main/robotik-asset/Copy%20of%20Logo%20Pavilion.png" alt="The Pavilion" className="w-32 h-32 object-contain" />
                    <img src="https://raw.githubusercontent.com/robotikapp/home/main/robotik-asset/Logo%20PT%20CIPTA%20ADI%20SURYA%20FIX.png" alt="PT Cipta Adi Surya" className="w-32 h-32 object-contain" />
                </div>
            </section>
            <footer className="bg-accent text-accent-foreground py-6 text-center">
                <h3 className="text-xl font-bold">Ready to supercharge your business process?</h3>
                <p className="my-2">Let us help you to gain insights and automate.</p>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">Schedule a Demo</button>
            </footer>
        </div>
        
        
    )
}

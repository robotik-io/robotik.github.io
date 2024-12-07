export default function Widget() {
    return (
        <div className="bg-background text-foreground p-6">
            <header className="text-center py-12">
                <h1 className="text-4xl font-bold">The Edge of Human Knowledge is Here</h1>
                <button className="bg-primary text-primary-foreground hover:bg-primary/80 mt-4 p-2 rounded-lg">Get Started</button>
            </header>
            <section className="text-center py-12">
                <h2 className="text-3xl font-semibold">We're on a mission to bring ideas to life.</h2>
                <p className="mt-4">High Performance AI Services</p>
                <p>Open Source and Customized Solutions</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-4 p-2 rounded-lg">Complete Projects Quality and Time</button>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Global Outreach</h3>
                    <p className="text-muted-foreground">Connecting with clients worldwide.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Natural Language Processing</h3>
                    <p className="text-muted-foreground">Understanding and generating human language.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Data Analytics</h3>
                    <p className="text-muted-foreground">Transforming undefined into actionable insights.</p>
                </div>
            </section>
            <footer className="text-center py-12">
                <p className="text-muted-foreground">We still have many other services that we will introduce to you.</p>
                <button className="bg-accent text-accent-foreground hover:bg-accent/80 mt-4 p-2 rounded-lg" style="background: #22affe; border: 2px solid black; color: white;">Contact Us</button>
            </footer>
        </div>
        
    )
}
